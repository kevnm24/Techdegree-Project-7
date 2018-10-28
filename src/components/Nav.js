import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';

export default class Nav extends Component {

  render(){
    return (
      <nav class='main-nav'>
        <ul>
          <li><NavLink to='/mountains'>Mountains</NavLink></li>
          <li><NavLink to='/lakes'>Lakes</NavLink></li>
          <li><NavLink to='/forests'>Forests</NavLink></li>
        </ul>
      </nav>
      );
    }
  }
