import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
  const course = useLoaderData();
  const { title, details, image_url, category_id } = course;


  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}>
          <Button className='btn w-100' variant="secondary">
        Block level button
      </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;