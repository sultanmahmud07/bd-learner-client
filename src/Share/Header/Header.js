import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user} =useContext(AuthContext);

  // console.log(user);
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
            <Nav.Link>
              {user?.displayName}
            </Nav.Link>

            <Nav.Link>
             {/* {
              user.photoURL ?
              <img src={user?.photoURL}></img>
              :
              <FaUserCircle></FaUserCircle>
             } */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
   
    <Nav className="text-end pe-5 bg-dark py-2 d-none d-lg-block">
            <NavLink className='mx-3' to="/home">Home</NavLink>
            <NavLink className='mx-3' to="/course">Course</NavLink>
            <NavLink className='mx-3' to="/login">Login</NavLink>
            <NavLink className='mx-3' to="/register">Register</NavLink>
           
           
          </Nav>
    
    </div>
  );
};

export default Header;