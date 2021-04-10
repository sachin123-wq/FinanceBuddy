import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams,useHistory } from 'react-router-dom';
import { getQuizDetails, submitQuizResponse } from '../../actions/quizActions';
import Question from './question';
import { Button } from '../../common/button';
import './index.scss';


const Quiz = () => {

    const { quizId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const quizState = useSelector(state => state.quiz);

    useEffect(() => {
        getQuizDetails(quizId, dispatch);
    }, [])

    const handleSubmit = async() => {
        const { response, quizDetails } = quizState;
        if (response.size < quizDetails.questions.length) {
            const res = window.confirm('You have not attempted all questions. Do you still want to submit?');
            if (!res) {
                return;
            }
        }
        const {score, error} = await submitQuizResponse(quizId, response, dispatch);
        window.alert(error ? error : `You scored ${score} out of ${quizDetails.total_score}`);

        if(!error) {
            console.log('go back');
            history.goBack();
        }
    }

    return (
        <div className="quiz-container">
            {
                quizState.quizLoading
                    ? <div className="loading">Loading</div>
                    : (
                        <div className="quiz">
                            <div className="title">{quizState.quizDetails.title}</div>
                            {
                                quizState.quizDetails.questions.map(question => (
                                    <Question
                                        key={question._id}
                                        question={question}
                                    />
                                ))
                            }
                            <div className="submit-btn-container">
                                <Button
                                    text="Submit"
                                    onClick={handleSubmit}
                                />
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default Quiz
