import React from 'react';
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
              <h2 className="q-title">1. what is the purpose of react router?</h2>
            </div>
          </div>
          <p className='q-p'><span className='ans'>Ans:</span> ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
        </div>
        <div className="single-question">
          <div className="title-wrapper">
            <div>
              <h2 className="q-title">2. how does context api work?</h2>
            </div>
          </div>
          <p className='q-p'><span className='ans'>Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        </div>
        <div className="single-question">
          <div className="title-wrapper">
            <div>
              <h2 className="q-title">3. what is useRef and how does work useref?</h2>
            </div>
          </div>
          <p className='q-p'><span className='ans'>Ans:</span> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
          <p className='q-p'> UseRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
        </div>
      </div>

    </div>
  );
};

export default Blog;