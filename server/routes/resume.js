require("dotenv").config();
const express = require("express");
const words = require("../utils/randomWords");
const fs = require("fs");
const path = require("path");
const mailgun = require("mailgun-js");
const { Email } = require("../models");
const { createRandomWord } = require("../utils/util");

const filename = "FrontEnd_kimHwan.pdf";
const filepath = path.join(__dirname, "/../rezume", filename);
console.log(filepath);

const router = express.Router();
const DOMAIN = "www.artdev.me";
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });

router.post("/", async (req, res) => {
  // email table에 comfirm column을 넣어서 없으면 다시 보낼수 있게 만들자.
  const {
    body: { email },
  } = req;
  const word = createRandomWord(words);
  const data = await Email.findOne({
    where: {
      email,
    },
  });
  if (data === null) {
    // 인증문자 전송
    const msg = {
      from: "icebear0629@gmail.com",
      to: email,
      subject: "[인증]Rezume_김환",
      text: "email 인증을 위한 단어를 입력해주세요.",
      html: `<p>email 인증을 위한 단어를 입력해주세요.<p><strong>${word}</strong>`,
    };
    mg.messages().send(msg, function (error, body) {
      if (error) {
        console.log(error);
      }
      console.log(body);
    });
    try {
      await Email.create({
        email,
        word,
      });
      res.send("ok");
    } catch (error) {
      res.status(500).send("error, please try again.");
    }
  } else {
    // 이미 존재합니다.
    // 존재하면, confirm이 없으면 다시 confirm보내개 해줘야 한다.
    if (data.dataValues.confirm !== null) {
      return res.status(403).send("already exist");
    }
    res.status(201).send("ok");
  }
});

router.post("/comfirm", async (req, res) => {
  const {
    body: { word, email },
  } = req;
  try {
    const data = await Email.findOne({
      where: {
        email,
        word,
      },
    });
    if (data.dataValues.word !== word) {
      res.status(400).send("worng word");
      return;
    }
    if (data.dataValues.confirm !== null) {
      res.status(403).send("already send rezume");
    } else {
      await Email.update(
        {
          confirm: word,
        },
        {
          where: {
            email,
          },
        }
      );
      const filename = "FrontEnd_kimHwan.pdf";
      const filepath = path.join(__dirname, "/../rezume", filename);
      const msg = {
        to: email,
        from: "icebear0629@gmail.com",
        subject: "[Rezume]김환",
        html: "<p>이력서는 한번만 제공해드립니다. 감사합니다.</p>",
        attachment: filepath,
      };
      mg.messages().send(msg, function (error, body) {
        if (error) {
          console.log(error);
        }
        console.log(body);
      });
      res.send("ok");
    }
  } catch (error) {
    res.status(500).send("error, please try again.");
  }
});

module.exports = router;
