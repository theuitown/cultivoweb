import React, { Component } from "react";
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <nav className="navBar">
              <nav className="wrapper">
                <NavLink to='/'>
                  <div className="logo">
                      <a
                        className="navbar-brand"
                        style={{ fontWeight:'bold' }}>
                        CULTIVO.IO
                      </a>
                    </div>
                </NavLink>
                  <input type="checkbox" id="menu-toggle" />
                    <label for="menu-toggle" className="label-toggle"></label>
                  <ul>
                    <li className="onload-fadeup"><NavLink to="">Products</NavLink></li>
                    <li className="onload-fadeup"><NavLink to="/contact">Contact us</NavLink></li>
                    <li className="onload-fadeup"><NavLink to="/ourteam">Our Team</NavLink></li>
                    <li className="onload-fadeup"><NavLink to="/aboutus">About us</NavLink></li>
                    <li className="onload-fadeup"><NavLink to="">Demo</NavLink></li>
                    <li className="onload-fadeup"><NavLink to=""><button className="main-btn">Login</button></NavLink></li>
                  </ul>
              </nav>
            </nav>
          )
      }
  };

  export default Navbar;
