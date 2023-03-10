import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Register.css';
import Swal from 'sweetalert2';
// import './Dark.css';

const Register = () => {
const [error, setError] =useState('')
const {createUser, updateUserProfile} =useContext(AuthContext)
// console.log(updateUserProfile)
const navigate =useNavigate()
 const handleSubmit = (event) =>{
  event.preventDefault();
  const form = event.target;
  const name =form.name.value;
  const email =form.email.value;
  const photoURL =form.photoURL.value;
  const password =form.password.value;
  // console.log(name, email, photoURL, password);

createUser(email, password)
.then(result => {
  const user =result.user;
  form.reset()
  console.log(user)
  setError('')
  navigate('/home')
  Swal.fire(
    'Register Success!',
    'Welcome to out course!',
    'success'
  )
  
  // handleUpdateUserProfile(name, photoURL);
  
  
})
.catch(error => {
  console.error(error)
  setError(error.message)
})

 }

//  const handleUpdateUserProfile = (name, photoURL) => {
//     const profile = {
//       displayName: name,
//       photoURL: photoURL
//     }
//     updateUserProfile(profile)
//     .then(() => {})
//     .catch(error => console.error(error));
//  }

  return (
    <div>
      <Header></Header>
      <div className='ragister shadow pt-5 m-auto border rounded mt-3 p-5'>
        <h1 className='text-center text-success'>Register Now</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter name" required />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Enter photoURL" />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" required />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" required />
          </Form.Group>

          {/* error warning  */}
          <Form.Text className="text-muted text-danger">
           <span className='text-danger fs-6'>
            {
              error
            }
           </span>
          </Form.Text>

        <span className='d-block'>Allredy haven account please <Link to='/login'>login</Link></span>
         
          <div className='mt-5'>
          <Button className='bg-success w-100 fs-5' variant="primary" type="submit">
             Register
          </Button>
          </div>
        </Form>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Register;