import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate =useNavigate();
  const [error, setError] =useState('')
  const { googleSignIn,signIn } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

//Login handler..
const handleSubmit = event =>{
  event.preventDefault();
  const form =event.target;
  const email =form.email.value;
  const password =form.password.value;

  // console.log(email, password)
  signIn(email, password)
  .then(result => {
    const user =result.user;
    console.log(user);
    form.reset();
    setError('')
   navigate(from, {replace: true});
    
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    setError(errorMessage)
    // ..
  });
}

//Sign in with google heandler...
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
      })
      .catch(error => console.error(error))
  };

  return (
    <div>
      <Header></Header>

      <div className='w-25 shadow pt-5 m-auto border rounded mt-3 p-3'>
        <h1 className='text-center text-success'>Login Now</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
          </Form.Group>

          {/* error warning  */}
          <Form.Text className="text-danger">
           {
            error
           }
          </Form.Text>

       
          <ButtonGroup className='d-block my-3 my-2 w-100 d-flex justify-content-between'>
            <Button onClick={handleGoogleSignIn} variant="outline-warning"><FaGoogle></FaGoogle> Google</Button>
            <Button variant="outline-primary"><FaFacebookF></FaFacebookF> Facefook</Button>
          </ButtonGroup>
          <Button className='bg-success w-100 fs-5' variant="primary" type="submit">
            Login Now
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;