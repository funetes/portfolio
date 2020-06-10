const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const rezume = require("./routes/resume");
const sequelize = require("./models/index").sequelize;
const cors = require("cors");
const app = express();
require("dotenv").config();
sequelize.sync();
const PORT = process.env.NODE_ENV === "production" ? 8080 : 3001;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public/build"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "public", "build", "index.html"))
);

app.use("/rezume", rezume);

// var API_KEY = "1f904ea60ff0277e3c02d23be419c15b-8b34de1b-bf6fc051";
// var DOMAIN = "sandbox29d313bacec0459bb1b89d0bf466cfd3.mailgun.org";
// var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

// const data = {
//   from: "kimlove1020@hanmail.net",
//   to: "icebear0629@gmail.com",
//   subject: "Hello",
//   text: "Testing some Mailgun awesomeness!",
// };

// mailgun.messages().send(data, (error, body) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(body);
// });

app.listen(PORT, () => console.log(`server start at this port : ${PORT}`));
