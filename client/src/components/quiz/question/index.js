import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateResponse } from '../../../actions/quizActions';
import './index.scss';

const Question = ({ question }) => {

    const dispatch = useDispatch();

    const quizState = useSelector(state => state.quiz);

    const handleChange = (e) => {
        updateResponse(question._id, e.target.value, quizState.response, dispatch);
    }

    return (
        <div>
            <div>{question.description}</div>
            <div>
                {
                    question.options.map(option => (
                        <div key={option._id}>
                            <div>
                                <input
                                    type="radio"
                                    name={question._id}
                                    value={option._id}
                                    checked={quizState.response.get(question._id) === option._id}
                                    onChange={handleChange}
                                />
                                <label>{option.text}</label>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default Question
