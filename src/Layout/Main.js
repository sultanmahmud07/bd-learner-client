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
          <Col lg="3" className='border '>
            <LeftSiteNav></LeftSiteNav>
          </Col>
          <Col lg="9" className=''>
           <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;