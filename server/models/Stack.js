module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Stack",
    {
      stack: {
        type: DataTypes.STRING(50),
        allowNull: false,
        uniqe: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
