import React, { useEffect } from 'react';
import './post.css';
import SinglePost from './singlePost';
const Posts = (props) => {
  console.log('🚀 ~ file: post.js ~ line 5 ~ Posts ~ props', props);
  const { data } = props;
  const { posts } = data;

  return (
    <>
      {posts.map((post) => {
        return <SinglePost post={post} />;
      })}
    </>
  );
};

export default Posts;
