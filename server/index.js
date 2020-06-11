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

app.listen(PORT, () => console.log(`server start at this port : ${PORT}`));
