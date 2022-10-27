import React from 'react';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const Details = () => {
  const course = useLoaderData();
  const { title, details, image_url, category_id } = course;
 const ref =useRef()

  return (
    <div>
      {/* <ReactToPrint trigger={()=><button className='download-btn'>Print</button>} content={() => ref.current} /> */}

     
      <Card ref={ref}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <div className='but-container'>
          <ReactToPrint trigger={()=><button className='download-btn'>Print PDF</button>} content={() => ref.current} />
          <Link to='/premium'>
            <div className='text-end p-5 fw-bold'>
              <Button variant="warning">GET PREMIUM</Button>
            </div>
          </Link>
          </div>
          <Link to={`/category/${category_id}`}>
            <Button className='btn w-100' variant="secondary">
              Back To Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;