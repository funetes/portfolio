module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Email",
    {
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      word: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      confirm: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
