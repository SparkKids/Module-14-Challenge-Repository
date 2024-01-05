const User = require('./User');
const BlogPost = require('./BlogPost');
const BlogPostComment = require('./BlogPostComment');

User.hasMany(BlogPost, {
  foreignKey: 'userid',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'userid'
});

BlogPost.hasMany(BlogPostComment, {
  foreignKey: 'blog_post_id'
});

BlogPostComment.belongsTo(BlogPost, {
  foreignKey: 'blog_post_id'
})

module.exports = { User, BlogPost, BlogPostComment };
