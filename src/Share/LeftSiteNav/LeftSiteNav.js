import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSiteNav = () => {
  const [categories, setCategories] = useState([]);
//  console.log(category.id);
  useEffect( () =>{
    fetch('https://bd-learner-server.vercel.app/course-categories')
    .then(res => res.json())
    .then(data => setCategories(data));
  }, [])
  return (
    <div className='left-site'>
      <h3 className='course-title'>All Courses </h3>
     
      <ul className='left-site-ul'>
      {
        categories.map(category => <li key={category.id}><Link className='py-lg-3' to={`/category/${category.id}`}>{category.name}</Link></li>)
      }
        {/* <li><Link to='/html'>HTML</Link></li>
        <li><Link to='/css'>CSS</Link></li>
        <li><Link to='/java'>JAVA</Link></li> */}
      </ul>
    </div>
  );
};

export default LeftSiteNav;