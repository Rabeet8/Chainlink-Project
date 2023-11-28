import React from 'react';
import {Link} from 'react-router-dom';
import './Hero.css'
const Hero = () => {
  return (
    <div>
      <div className="text-container">
        <h1>Empowering Liquidity Provider</h1>

        <p className="tag-line fade-left">
          <span className="blue-text">Secure</span>,{" "}
          <span className="blue-text">Personalized</span>, and{" "}
          <span className="blue-text">AI-Enhanced</span> Medical Solutions.
        </p>
      </div>
      <Link to="/tradingview">
        <button className="fade-left user_btn">Get Started</button>
      </Link>
    </div>
  );
};

export default Hero;
