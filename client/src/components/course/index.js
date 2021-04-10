import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCourse } from '../../actions/courseActions';
import './index.scss';


const Courses = () => {

    const dispatch = useDispatch();
    const courseState = useSelector(state => state.course)

    useEffect(() => {
        getAllCourse(dispatch);
    }, []);


    return (
        <div className="main">

        </div>
    )
}

export default Courses
