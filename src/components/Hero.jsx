import React from 'react';
import {Link} from 'react-router-dom';
import './Hero.css'
const Hero = () => {
  return (
    <div>
      <div className="text-container">
        <h1>Empower Your Financial Future </h1>

        <p className="tag-line fade-left">
          <span className="blue-text">Straightforward</span>,{" "}
          <span className="blue-text"> User-Friendly</span> Interface, and {" "}
          <span className="blue-text">High Returns</span>.
        </p>
        
      </div>
      <Link to="/tradingview">
        <button className="user_btn" >Get Started</button>
      </Link>
    </div>
  );
};

export default Hero;
