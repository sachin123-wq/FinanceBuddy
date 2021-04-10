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
        <div className="question-container">
            <div className="description">{question.description}</div>
            <div className="options-container">
                {
                    question.options.map(option => (
                        <div className="option" 
                            key={option._id}>
                            <input
                                type="radio"
                                name={question._id}
                                value={option._id}
                                checked={quizState.response.get(question._id) === option._id}
                                onChange={handleChange}
                            />
                            <label>{option.text}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default Question
