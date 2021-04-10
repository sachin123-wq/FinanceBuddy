import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../actions/userActions';
import Plot from 'react-plotly.js';
import PercentCircle from '../../common/percent-circle';
import './index.scss';

const UserProfile = () => {

    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    const [pointerToThis, setpointerToThis] = useState({
        XValues: [],
        YValues: []
    });

    let XValuesFunction = [];
    let YValuesFunction = [];

    useEffect(() => {
        getUserProfile(dispatch);
    }, []);

    useEffect(() => {
        function fetchcurve() {
            let YValuesFunction = userState.userProfile.finance_rating, quiz_count = userState.userProfile.quiz_attempted;

            for (var count = 1; count <= quiz_count; count++) {
                XValuesFunction.push(count);
            }

            console.log("hello");
            setpointerToThis({
                XValues: XValuesFunction,
                YValues: YValuesFunction
            });
        }
        fetchcurve();
    }, [userState]);

    const correctPercentage = userState.userProfile.question_attempted > 0 ?
        Math.round(userState.userProfile.question_correct * 100 / userState.userProfile.question_attempted) : 0;

    return (
        <div className="user-profile-container">
            {
                userState.profileLoading
                    ? <div className="loading">Loading</div>
                    : (
                        <div className="user-profile">
                            <div className="section-1">
                                <p className="name">{userState.userProfile.name}</p>
                                <p className="email">
                                    {userState.userProfile.email} <span>{userState.userProfile.role === 1 ? "(Educator)" : ""}</span>
                                </p>
                            </div>

                            <div className="section-2">
                                <div className="rating-chart">
                                    <Plot
                                        data={[
                                            {
                                                x: pointerToThis.XValues,
                                                y: pointerToThis.YValues,
                                                type: 'scatter',
                                                mode: 'lines+markers',
                                                marker: { color: '#5d62b5' },
                                            },
                                        ]}
                                        layout={{ width: 720, height: 440, title: 'Finance Rating' }}
                                    />
                                </div>
                                <div className="percentage-chart">
                                    <PercentCircle percentage={correctPercentage} />
                                    <div className="percent">Percentage of <br />questions correct</div>

                                    <div className="quiz-stats">
                                        Quiz Attended:
                                        <span> {userState.userProfile.quiz_attempted}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bookmarks-container">
                                <div className="title">Bookmarks</div>
                                <div>
                                    {
                                        userState.userProfile.bookmarks.length === 0
                                            ? <div className="msg"> You have none </div>
                                            : (
                                                <div className="posts">
                                                    {
                                                        userState.userProfile.posts.map(post => (
                                                            <div className="post" key={post.post._id}>
                                                                <div>{post.post.title}</div>
                                                                <div><i className="fa fa-thumbs-up"></i> {post.post.likes}</div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default UserProfile
