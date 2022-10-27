import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Blog.css';

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <div className=" text-center d-block">
        <h1 className='blog-title topic-header'>These are Blogs!!!</h1>
      </div>
      <div className="container mt-2">
        <div className="single-question">
          <div className="title-wrapper">
            <div >
              <h2 className="q-title">1. What is CORS in web API?</h2>
            </div>
          </div>
          <p className='q-p'><span className='ans'>Ans:</span> Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>
        </div>
        <div className="single-question">
          <div className="title-wrapper">
            <div>
              <h2 className="q-title">2.1 Why are you using firebase?</h2>
            </div>
          </div>
          <p className='q-p'><span className='ans'>Ans-2.1:</span> The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
        </div>

        <div className="single-question">
          <div className="title-wrapper">
            <div>
              <h2 className="q-title">2.2 What other options do you have to implement authentication without firebass?</h2>
            </div>
          </div>
          <p className='q-p'><span className='ans'>Ans-2.2:</span> <h5 className='hstayle'>Other options.</h5> </p>
          <ul>
            <li>Auth0</li>
            <li>MongoDB</li>
            <li>Passport</li>
            <li>Okta</li>
          </ul>
        </div>

        <div className="single-question">
          <div className="title-wrapper">
            <div>
              <h2 className="q-title">3. How does the private route work?</h2>
            </div>
          </div>
          <p className='q-p'><span className='ans'>Ans:</span> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
          
        </div>
        <div className="single-question">
          <div className="title-wrapper">
            <div>
              <h2 className="q-title">4. What is Node? How does Node work</h2>
            </div>
          </div>
          <ul>
            <li>Node.js is an open source server environment</li>
            <li>Node.js is free</li>
            <li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
            <li>Node.js uses JavaScript on the server</li>
          </ul>
          <p className='q-p'><span className='ans'>Ans:</span> Node. js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Non-blocking I/o: Non-blocking i/o means working with multiple requests without blocking the thread for a single request.</p>
          
        </div>
      </div>
      <Footer></Footer>

    </div>
  );
};

export default Blog;