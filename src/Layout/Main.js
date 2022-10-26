import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header';
import LeftSiteNav from '../Share/LeftSiteNav/LeftSiteNav';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="4" className='border border-danger'>
            <LeftSiteNav></LeftSiteNav>
          </Col>
          <Col lg="8" className='border border-warning'>
           <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;