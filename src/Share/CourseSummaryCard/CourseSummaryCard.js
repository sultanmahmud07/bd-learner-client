import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({ course }) => {
  const {_id, title, image_url, details, rating} = course;
  // console.log(course)
  return (
    <div className='shadow '>
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
              <Card.Title className='single-card-title text-start'>{title}</Card.Title>
              <Card.Text className='text-start'>
               {
                details.length > 100? <span>{details.slice(0, 100) + '...'} <Link to={`/course/${_id}`}>Read more</Link></span> : <span>{details}</span>
               }
              </Card.Text>
              <div className='d-flex justify-content-between align-items-center py-2 mt-3 border-top'>
                <div><FaStar className='text-warning'></FaStar> {rating.number}</div>
                <div> <Link to={`/course/${_id}`}><Button variant="outline-warning">Details</Button></Link></div>
              </div>
            </Card.Body>
          </Card>
    </div>
  );
};

export default CourseSummaryCard;