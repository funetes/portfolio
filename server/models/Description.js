module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Description",
    {
      description: {
        type: DataTypes.STRING(300),
        allowNull: false,
        uniqe: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
