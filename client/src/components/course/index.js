import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourse } from '../../actions/courseActions';
import './index.scss';
import Course from './course'


const Courses = () => {

    const dispatch = useDispatch();
    const courseState = useSelector(state => state.course)

    useEffect(() => {
        getAllCourse(dispatch);
    }, []);


    return (
        <div>
            {
                courseState.courseLoading ?
                    <div className="loading">Loading</div>
                    : <Course data={courseState} />
            }
        </div>
    )
}

export default Courses
