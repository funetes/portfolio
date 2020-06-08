const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const words = require("./randomWords");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const fs = require("fs");

const app = express();
const port = 3001;

const createRandomWord = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public/build"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  const {
    body: { email },
  } = req;
  const word = createRandomWord(words);
  try {
    // TODO: db 저장  email, words
    const msg = {
      to: email,
      from: "icebear0629@gmail.com",
      subject: "[인증]Rezume_김환",
      text: "email 인증을 위한 단어를 입력해주세요.",
      html: `email 인증을 위한 단어를 입력해주세요. <strong>${word}</strong>`,
    };
    await sgMail.send(msg);
    res.send("OK");
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
});

app.post("/comfirm", async (req, res) => {
  console.log(req.body.words); // random words
  console.log(req.body.email);
  const {
    body: { words, email },
  } = req;
  // 만약 db email에 저장된 email과 words가 맞으면,

  // 그 이메일로 pdf file을 쏜다.
  try {
    const pathToAttachment = `${__dirname}/rezume/FrontEnd_kimHwan.pdf`;
    const attachment = fs.readFileSync(pathToAttachment).toString("base64");
    const msg = {
      to: email,
      from: "icebear0629@gmail.com",
      subject: "[Rezume]김환",
      html:
        "<p>이력서를 첨부합니다. 이력서는 30일 이후 다시 요청 할 수 있습니다. 감사합니다.</p>",
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
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
