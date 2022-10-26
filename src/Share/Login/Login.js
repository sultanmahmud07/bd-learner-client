import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
const {googleSignIn} =useContext(AuthContext)
const googleProvider =new GoogleAuthProvider()


const handleGoogleSignIn = () =>{
  googleSignIn(googleProvider)
  .then(result => {
    const user = result.user;
    console.log(user);
  })
  .catch(error => console.error(error))
};

  return (
    <div>
      <Header></Header>
    <div className='w-25 pt-5 m-auto border rounded mt-3 p-3'>
    <h1 className='text-center text-success'>Login Now</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* error warning  */}
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
          <ButtonGroup className='d-block my-2 w-100 d-flex justify-content-between'>
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