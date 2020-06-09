const Sequelize = require("sequelize");

const sequelize = new Sequelize("portfolio", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

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
