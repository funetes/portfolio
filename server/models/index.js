const Sequelize = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);
const db = {};

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    sequelize.authenticate();
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Email = require("./Email")(sequelize, Sequelize);
db.Project = require("./Project")(sequelize, Sequelize);
db.Image = require("./Image")(sequelize, Sequelize);
db.Stack = require("./Stack")(sequelize, Sequelize);
db.Description = require("./Description")(sequelize, Sequelize);

db.Project.hasMany(db.Image);
db.Project.hasMany(db.Stack);
db.Project.hasMany(db.Description);

module.exports = db;
