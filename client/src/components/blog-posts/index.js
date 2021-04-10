import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../actions/postActions';
import './index.css';
import Posts from './posts';

function DemoPage() {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);

  useEffect(() => {
    getAllPosts(dispatch);
  }, []);

  return postState.postLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <Posts data={postState.posts} />
  );
}

export default DemoPage;
