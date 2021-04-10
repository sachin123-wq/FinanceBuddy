import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './post.css';
import SinglePost from './singlePost';
const Posts = (props) => {
  console.log('🚀 ~ file: post.js ~ line 5 ~ Posts ~ props', props);
  const { data } = props;
  const { posts } = data;

  return (
    <div className="post_container">
      {posts.map((post) => {
        return <Link to={`/posts/${post._id}`} key={post._id}>
          <SinglePost post={post} />
        </Link>;
      })}
    </div>
  );
};

export default Posts;
