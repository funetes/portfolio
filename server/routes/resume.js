require("dotenv").config();
const express = require("express");
const words = require("../utils/randomWords");
const fs = require("fs");
const sgMail = require("@sendgrid/mail");
const { Email } = require("../models");

const router = express.Router();
const { createRandomWord } = require("../utils/util");

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
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: "kimlove1020@hanmail.net",
      subject: "[인증]Rezume_김환",
      text: "email 인증을 위한 단어를 입력해주세요.",
      html: `<p>email 인증을 위한 단어를 입력해주세요.<p><strong>${word}</strong>`,
    };
    try {
      await sgMail.send(msg);
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
      res.status(403).send("already exist");
    }
    res.send("ok");
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
      const pathToAttachment = `${__dirname}/../rezume/FrontEnd_kimHwan.pdf`;
      const attachment = fs.readFileSync(pathToAttachment).toString("base64");
      const msg = {
        to: email,
        from: "kimlove1020@hanmail.net",
        subject: "[Rezume]김환",
        html: "<p>이력서는 한번만 제공해드립니다. 감사합니다.</p>",
        attachments: [
          {
            content: attachment,
            filename: "FrontEnd_김환.pdf",
            type: "application/pdf",
            disposition: "attachment",
          },
        ],
      };
      await sgMail.send(msg);
      res.send("ok");
    }
  } catch (error) {
    res.status(500).send("error, please try again.");
  }
});

module.exports = router;
