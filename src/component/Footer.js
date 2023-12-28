import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer fixed-bottom  bg-dark pt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <p className="text-left text-white "> &copy; All Right Reserved. Develop By Himanshu </p>
            </div>
            <div className="col-md-6 ">
              <ul className="header-ul text-right">
                <li> <NavLink exact to="/"> India</NavLink></li>
                <li><NavLink  to="/up"> Uttar Pradesh</NavLink></li>
                <li><NavLink to="/states"> All States</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
