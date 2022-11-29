import React from 'react';
import {NavLink} from "react-router-dom";
import 'bootstrap/js/src/dropdown';

const NavBar: React.FC = () => {
  return (
    <div className='navbar navbar-expand-md navbar-dark bg-black rounded-top'>
      <div className='container-fluid'>
        <span className='navbar-brand'>&#8251;</span>
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
            <li className="nav-item dropdown">
              <NavLink to='/portfolio' className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Portfolio
              </NavLink>
              <ul className='dropdown-menu'>
                <li className='dropdown-item'>
                  <NavLink to='/portfolio/chat' className='nav-link text-black'>
                    Chat
                  </NavLink>
                </li>
                <li className='dropdown-item'>
                  <NavLink to='/portfolio/burger' className='nav-link text-black'>
                    Burger
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;