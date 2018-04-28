import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import Css from './courses/CSS';
import Html from './courses/HTML';
import JavaScript from './courses/JavaScript';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>

    <Route exact path="/courses/html" component={Html}/>
    <Route exact path="/courses/css" component={Css}/>
    <Route exact path="/courses/javascript" component={JavaScript}/>
  </div>
);

export default Courses;
