import React from 'react';
import './TraderBox.css';

const TraderBox = ({ name, amountManaged, apy }) => {
    
  return (
    <>
    <div className="trader-box">
      <div className="trader-name">{name}</div>
      <div className="trader-info">
        <div className="amount-managed">{amountManaged}</div>
        <div className="apy">{apy}</div>
      </div>
      <button className="enter-button">Check Trade</button>
    </div>
    
  </>
  );
};

export default TraderBox;
