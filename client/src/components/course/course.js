import React from 'react'
import SingleCourse from './singleCourse'

function Course(props) {
    const { data } = props;
    const { courses } = data;
    return courses.map(course => {
        return <SingleCourse course={course} />;
    })
}

export default Course
