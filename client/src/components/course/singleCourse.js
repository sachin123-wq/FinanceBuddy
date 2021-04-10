import React from 'react'

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

function SingleCourse(props) {
    const { course } = props;
    console.log(course);
    return (
        <>
            <div className="container">
                <div className="col-md-12 col-lg-12">
                    <article className="post vt-post">
                        <div className="row">
                            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
                                <div className="post-type post-img">
                                    <a href="#">
                                        <img
                                            src={
                                                course.image ||
                                                'https://bootdey.com/img/Content/avatar/avatar1.png'
                                            }
                                            className="img-responsive"
                                            alt="image post"
                                        />
                                    </a>
                                </div>
                                <div className="author-info author-info-2">
                                    <ul className="list-inline">
                                        <li>
                                            <div className="info">
                                                <p>Posted on:</p>
                                                <strong>{formatDate(course.createdAt)}</strong>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info">
                                                <p>Comments:</p>
                                                <strong>{course.comments?.length}</strong>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
                                <div className="caption">
                                    <h3 className="md-heading">
                                        <a href="#">{course?.title}</a>
                                    </h3>
                                    <p>{course.content}</p>
                                    <a className="btn btn-default" href="#" role="button">
                                        Read More
                  </a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default SingleCourse
