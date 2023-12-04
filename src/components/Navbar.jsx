import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
   
      
    
  return (
    
        <div className="main-navbar-container">
          <h1 className='logo'>Our Project Name</h1>
          
          <nav className="glass-navbar">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </nav>
    
          <div className="navbar-container">
          <ConnectButton accountStatus="address" chainStatus="none" showBalance={false} />
          </div>
        </div>
  
  )
}

export default Navbar
// import React from 'react';
// import './Navbar.css'; // Make sure to link the CSS file

// const GlassNavbar = () => {
//   return (
//     <nav className="glass-navbar">
//       <ul className="nav-links">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#aboutus">About Us</a></li>
//         <li><a href="#contactus">Contact Us</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default GlassNavbar;
