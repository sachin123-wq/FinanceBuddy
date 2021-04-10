import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../actions/userActions';
import Plot from 'react-plotly.js';
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


    return (
        <div className="main">

            <div className="user">
                <div className="user_name">
                    {
                        userState.profileLoading
                            ? <div className="loading">Loading</div>
                            : <div>{userState.userProfile.name}</div>
                    }
                </div>

                <div className="quiz_attempted">
                    {
                        userState.profileLoading
                            ? <div className="loading">Loading</div>
                            : <div>{userState.userProfile.quiz_attempted}</div>
                    }
                </div>

            </div>



            <div className="plot">
                <Plot
                    data={[
                        {
                            x: pointerToThis.XValues,
                            y: pointerToThis.YValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'blue' },
                        },
                    ]}
                    layout={{ width: 720, height: 440, title: 'Finance_Plot' }}
                />
            </div>





            <div className="user__scores">
                <div className="question_correct">
                    {
                        userState.profileLoading
                            ? <div className="loading">Loading</div>
                            : <div>{userState.userProfile.question_correct}</div>
                    }
                </div>
                <div className="question_attempted">
                    {
                        userState.profileLoading
                            ? <div className="loading">Loading</div>
                            : <div>{userState.userProfile.question_attempted}</div>
                    }
                </div>
                <div className="user_accuracy">
                    {
                        userState.profileLoading
                            ? <div className="loading">Loading</div>
                            : <div>{userState.userProfile.question_correct * 100 / userState.userProfile.question_attempted}</div>
                    }
                </div>
            </div>


        </div>
    )
}

export default UserProfile
