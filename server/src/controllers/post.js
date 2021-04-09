const { Post } = require('../models/post/model');

exports.getAllPosts = async (req, res) => {
  let posts = await Post.find({});
  res.send({ posts });
};

exports.getPost = async (req, res) => {
  const postId = req.params.postId;
  console.log(postId);
  let post = await Post.findOne({ _id: postId });
  if (!post) {
    return res.status(400).json({
      error: 'Post Not Found'
    });
  }
  res.send({ post });
};

exports.createPost = async (req, res) => {
  const { title, content, domains = [], words_count = 0 } = req.body;

  let post = new Post({
    title,
    content,
    domains,
    words_count,
    user: req.profile._id
  });
  const savedPost = await post.save();

  res.send(savedPost);
};

exports.updatePost = async (req, res) => {
  const updatePostBody = req.body;
  const postId = req.params.postId;

  let post = await Post.findOne({ _id: postId });
  if (post.user._id.toString() != req.profile._id) {
    return res.status(400).json({
      error: 'You are not authorized to update this post'
    });
  }

  Post.findByIdAndUpdate(
    { _id: postId },
    { $set: updatePostBody },
    { new: true, useFindAndModify: false },
    (err, post) => {
      if (err) {
        return res.status(400).json({
          error: 'You are not authorized to update this post'
        });
      }
      console.log(post);
      res.send(post);
    }
  );
};
