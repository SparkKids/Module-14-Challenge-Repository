const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// CREATE TABLE `blog_post` (
//   `post_id` int NOT NULL AUTO_INCREMENT,
//   `title` varchar(40) NOT NULL,
//   `contents` varchar(2000) DEFAULT NULL,
//   `creator_username` varchar(40) NOT NULL,
//   `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (`post_id`)
  
class BlogPostComment extends Model {};

BlogPostComment.init(
  {
    blog_post_comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      blog_post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'BlogPost',
          key: 'blog_post_id',
        },
          comment: {
      type: DataTypes.STRING(1235),
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    userid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'userid',
      },
    },
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'BlogPostComment', // This is the model name in CamelCase
    tableName: 'blog_post_comment' // This is the custom table name in snake_case  }
  });

module.exports = BlogPostComment;
