import React, { useEffect } from 'react';
import { formatDate } from '../../helpers';
import { Button } from '../../common/button';
import './post.css';


const SinglePost = (props) => {
  console.log('🚀 ~ file: singlePost.js ~ line 4 ~ SinglePost ~ props', props);
  const { post } = props;

  return (
    <>
      <div className="container">
        <div className="col-md-12 col-lg-12">
          <article className="post vt-post">
            <div className="row">
              <div className="image-container col-xs-12 col-sm-5 col-md-5 col-lg-4">
                <div className="post-type post-img">
                  <span href="#">
                    <img
                      style={{maxWidth: "100%", maxHeight: "100%"}}
                      src={
                        post.image ||
                        'https://bootdey.com/img/Content/avatar/avatar1.png'
                      }
                      className="img-responsive"
                      alt="image post"
                    />
                  </span>
                </div>
                <div className="author-info author-info-2">
                  <ul className="list-inline">
                    <li>
                      <div className="info" >
                        <p style={{ color: "#5d62b5", fontWeight: "bold", padding: "8px 0 0 8px" }}
                        >Posted on: <strong style={{ color: "#5d62b5" }}>{formatDate(post.createdAt)}</strong></p>
                      </div>
                    </li>
                    <li>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-container col-xs-12 col-sm-7 col-md-7 col-lg-8">
                <div className="caption" >
                  <h3 className="md-heading">
                    <span style={{ color: '#5d62b5', fontWeight: "bold" }}>{post.title}</span>
                  </h3>
                  <p style={{ color: 'grey' }}>{post.content}</p>
                  <div className="read-more-btn">
                    <Button text="Read More" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
