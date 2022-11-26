import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className='navbar navbar-expand-md navbar-dark bg-dark bg-opacity-50 '>
      <div className='container-fluid'>
        <span className='navbar-brand'>Test</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to='/' className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about-us' className="nav-link">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contacts' className="nav-link">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;