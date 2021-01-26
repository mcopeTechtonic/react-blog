module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      text: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  );

  Post.associate = ({ Category }) => {
    Post.belongsTo(Category);
  };

  return Post;
};
