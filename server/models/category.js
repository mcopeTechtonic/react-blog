module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
    },
    {
      timestamps: false,
    }
  );

  Category.associate = ({ Post }) => {
    Category.hasMany(Post);
  };

  return Category;
};
