import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSiteNav = () => {
  const [categories, setCategories] = useState([]);
//  console.log(category.id);
  useEffect( () =>{
    fetch('http://localhost:5000/course-categories')
    .then(res => res.json())
    .then(data => setCategories(data));
  }, [])
  return (
    <div>
      <h3>All Courses {categories.length}</h3>
     
      <ul>
      {
        categories.map(category => <li key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></li>)
      }
        {/* <li><Link to='/html'>HTML</Link></li>
        <li><Link to='/css'>CSS</Link></li>
        <li><Link to='/java'>JAVA</Link></li> */}
      </ul>
    </div>
  );
};

export default LeftSiteNav;