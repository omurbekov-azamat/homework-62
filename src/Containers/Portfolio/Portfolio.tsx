import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Portfolio = () => {
  return (
    <div style={{height: '1000px'}} className='bg-white'>
      <div className='d-flex justify-content-around pt-5'>
          <Link to='chat'>
            <img style={{width: '100px'}} src="https://myefe.ru/wp-content/uploads/sites/1/2015/08/chat.jpg" alt="chat"/>
          </Link>
          <Link to='burger'>
            <img style={{width: '100px'}} src="https://www.merchantsmarket.com/wp-content/uploads/2018/01/menu.png" alt="menu"/>
          </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default Portfolio;