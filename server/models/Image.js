module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Image",
    {
      url: {
        type: DataTypes.STRING(500),
        allowNull: false,
        uniqe: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
