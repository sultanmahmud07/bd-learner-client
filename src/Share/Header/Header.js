import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >BD Learner</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto d-lg-none">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/course">Course</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
           
           
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
   
    <Nav className="m-auto bg-dark py-3 d-none d-lg-block">
            <NavLink className='mx-3' to="/home">Home</NavLink>
            <NavLink className='mx-3' to="/course">Course</NavLink>
            <NavLink className='mx-3' to="/login">Login</NavLink>
            <NavLink className='mx-3' to="/register">Register</NavLink>
           
           
          </Nav>
    
    </div>
  );
};

export default Header;