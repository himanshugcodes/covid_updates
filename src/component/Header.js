import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo"> 
          <h3> Covid 19 Updates</h3>
        </div>
        <div className="header-nav"> 
          <ul className="header-ul">
            <li> <NavLink exact to="/"> India</NavLink></li>
            <li><NavLink  to="/up"> Uttar Pradesh</NavLink></li>
            <li><NavLink to="/states"> All States</NavLink></li>
          </ul>
        </div>
      </div>
      
    </>
  )
}

export default Header
