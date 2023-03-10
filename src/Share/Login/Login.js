import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
import {Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
  const navigate =useNavigate();
  const [error, setError] =useState('')
  const { googleSignIn,githubSignIn, signIn } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();
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
   Swal.fire(
    'Login Success!',
    'Welcome to out course!',
    'success'
  )
    
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
        Swal.fire(
          'Login Success!',
          'Welcome to out course!',
          'success'
        )
      })
      .catch(error => console.error(error))
  };

  //sign in with facebook handler....
  const handleFacebookSignIn = () => {
    githubSignIn(githubProvider)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      console.error(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })
  }

  return (
    <div>
      <Header></Header>

      <div className='login shadow pt-5 m-auto border rounded mt-3 p-3 mb-5'>
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
            <Button onClick={handleFacebookSignIn} variant="outline-primary"> Facefook</Button>
          </ButtonGroup>
          <span>Go to <Link to='/register'>Register</Link></span>
          <Button className='bg-success my-3 w-100 fs-5' variant="primary" type="submit">
            Login Now
          </Button>
        </Form>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Login;