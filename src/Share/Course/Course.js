import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../CourseSummaryCard/CourseSummaryCard';

const Course = () => {
  const allCourse = useLoaderData();
  return (
    <div>
     
      <h2>This is course Home: {allCourse.length}</h2>
      <Row className='row-cols-1 row-cols-lg-2 g-3'>
        <>
          {
            allCourse.map(course => <CourseSummaryCard
              key={course._id}
              course={course}
            ></CourseSummaryCard>)
          }
        </>
      </Row>
    </div>
  );
};

export default Course;