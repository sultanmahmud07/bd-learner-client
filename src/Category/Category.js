import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Share/CourseSummaryCard/CourseSummaryCard';

const Category = () => {
  const categoryCourse = useLoaderData();

  return (
    <div>
      <h3>This is category has Course: {categoryCourse.length}!!!</h3>
    <Row className='row-cols-1 row-cols-lg-2 g-3'>
    {
        categoryCourse.map(course => <CourseSummaryCard
        key={course._id}
        course ={course}
        ></CourseSummaryCard>)
      }
    </Row>
    </div>
  );
};

export default Category;