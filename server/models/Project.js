module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Project",
    {
      src: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      gitHub: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
