const { uploadSingleFile } = require('../helpers/fileUpload');
const { Post } = require('../models/post/model');

exports.getAllPosts = async (req, res) => {
  let query = {};
  if (req.query && req.query.domain) {
    query.domain = req.query.domain;
  }
  let posts = await Post.find(query);
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
  const { title, content, domain, quiz } = req.body;
  const imageFile = req.files.image;

  const imageUrl = await uploadSingleFile(imageFile, 'jpg');

  let post = new Post({
    title,
    content,
    domain,
    words_count: content.length,
    user: req.profile._id,
    quiz,
    image: imageUrl
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

exports.createPostComment = (req, res) => {
  const { postId } = req.params;
  // console.log(req.profile);
  const userId = req.profile._id;
  const { text } = req.body;

  const comment = {
    text,
    user: userId,
    post_id: postId
  };

  Post.findByIdAndUpdate(
    { _id: postId },
    { $push: { comments: comment } },
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

exports.addQuizToPost = (req, res) => {
  const { postId, quizId } = req.params;

  Post.findByIdAndUpdate(
    { _id: postId },
    { $set: { quiz: quizId } },
    { new: true, useFindAndModify: false },
    (err, post) => {
      if (err) {
        return res.status(400).json({
          error: 'Unable to update'
        });
      }
      res.send(post);
    }
  );
};
