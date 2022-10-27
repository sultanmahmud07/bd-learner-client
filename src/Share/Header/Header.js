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
import '../../Common/Common.css';
import { FaPiggyBank } from 'react-icons/fa';
import { useState } from 'react';
import './Dark.css';

const Header = () => {
  const [darkmood, setDarkmood] = useState(false);
  const {user, logOut} =useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then( () => {})
    .catch(error => console.error(error))
  }





  // console.log(user);
  return (
    <div>
      <Navbar className='m-0 p-0 header-color' collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand className='margin-set py-0' ><span className='logo'>BD</span> Learner</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto d-lg-none header-color-2">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/course">Course</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
           
           
          </Nav>
          <Nav className='ms-auto nav-m'>
          <div className='dark-container'> 
            <span className='light-s'>Light</span>
          <label className='switch'>
            <input type='checkbox'></input>
            <span className='slider round'></span>
          </label>
          <span className='dark-s'>Dark</span>
            
          </div>
            <Nav.Link className='py-0'>
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
   
    <Nav className="text-end shadow pe-5 header-color-2 pb-2 pt-0 mt-0 d-none d-lg-block">
            <NavLink className='mx-3' to="/home">Home</NavLink>
            <NavLink className='mx-3' to="/course">Course</NavLink>
            <NavLink className='mx-3' to="/blog">Blogs</NavLink>
            <NavLink className='mx-3' to="/premium">Premium<FaPiggyBank className='text-warning'></FaPiggyBank></NavLink>
            
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