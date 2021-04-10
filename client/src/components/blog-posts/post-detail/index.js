import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostDetail } from '../../../actions/postActions';
import { formatDate } from '../../../helpers';
import { OutlineButton } from '../../../common/button';
import './index.scss';

const PostDetail = () => {
    const { postId } = useParams()
    const dispatch = useDispatch();
    const postState = useSelector(state => state.post);

    useEffect(() => {
        getPostDetail(postId, dispatch);
    }, [])

    return (
        postState.postDetailLoading
            ? <div className="loading"> Loading </div>
            : (
                <div className="post-detail-container">
                    <div className="post-detail">
                        <div className="title">{postState.postDetail.title}</div>
                        <div className="image-detail-container">
                            <img src={postState.postDetail.image} alt="post-img" />
                        </div>
                        <div className="content">{postState.postDetail.content}</div>
                        <div className="section-1">
                            <div className="stats">
                                <div> {formatDate(postState.postDetail.updatedAt)} </div>
                                <div><i className="fa fa-thumbs-up"></i> <span>{postState.postDetail.likes}</span></div>
                            </div>
                            <div>
                                <Link to={postState.postDetail.quiz ? `/quiz/${postState.postDetail.quiz}` : '#'}>
                                    <OutlineButton text="Take Quiz" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
    )
}

export default PostDetail
