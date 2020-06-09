const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const rezume = require("./routes/resume");
const sequelize = require("./models/index").sequelize;
// const { Project } = require("./models");
const cors = require("cors");
const app = express();
sequelize.sync();
const port = 3001;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public/build"));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "public", "build", "index.html"))
);

// Project.create({
//   src:
//     "https://images.unsplash.com/photo-1591000113910-81b25a4a2df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   title: "test",
//   gitHub: "https://github.com/funetes/QuestRunner-client-mirrored",
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

app.use("/rezume", rezume);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
