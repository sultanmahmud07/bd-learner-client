import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { Col, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const {user, logOut} =useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then( () => {})
    .catch(error => console.error(error))
  }


  // console.log(user);
  return (
    <div>
      <Navbar className='m-0 p-0' collapseOnSelect expand="lg" bg="success" variant="dark">
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
          <Button className='fs-6' style={{height: '30px'}} variant="outline-warning">Dark</Button>
            <Nav.Link>
              {
                user?.displayName ?
                <p>{user?.displayName}</p>
                :
                <p>User Name</p>
              }
            </Nav.Link>

            <Nav.Link>
             {
              user?.photoURL ?
             
              <Image style={{height: '30px', width: '30px'}} roundedCircle src={user?.photoURL}></Image>
              :
              <FaUserCircle className='fs-2'></FaUserCircle>
              
             }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
   
    <Nav className="text-end shadow pe-5 bg-dark pb-2 pt-0 mt-0 d-none d-lg-block">
            <NavLink className='mx-3' to="/home">Home</NavLink>
            <NavLink className='mx-3' to="/course">Course</NavLink>
            <NavLink className='mx-3' to="/blog">Blogs</NavLink>
            <NavLink className='mx-3' to="/premium">Premium</NavLink>
            
            {
              user?.uid ?
              <Button onClick={handleLogOut}>Log Out</Button>
              :
              <>
              <NavLink className='mx-3' to="/login">Login</NavLink>
              <NavLink className='mx-3' to="/register">Register</NavLink>
              </>

            }
            
           
           
          </Nav>
    
    </div>
  );
};

export default Header;