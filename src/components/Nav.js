import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (

// this will create a navigation menu
<nav class='main-nav'>
  <ul>
    <li><NavLink to='/mountains'>Mountains</NavLink></li>
    <li><NavLink to='/lakes'>Lakes</NavLink></li>
    <li><NavLink to='/forests'>Forests</NavLink></li>
  </ul>
</nav>
);

export default Nav;
