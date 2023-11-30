import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './TraderCard.css'; 
import TransactionsList from './TransactionList';


const data = [
    { name: 'Day 1', value: 189 },
    { name: 'Day 2', value: 278 },
    { name: 'Day 3', value: 200 },
    { name: 'Day 4', value: 320 },
    { name: 'Day 5', value: 380 },
    { name: 'Day 6', value: 400 },
  ];
  

const TraderCard = () => {
  return (
    <>
    <div className='trader-container'>
        <h4 className="trader-name">Trader Name</h4>
      <div className="trader-header">
        <div className="trader-stats">
          <span className="trader-info">Days Trading - 12</span>
          <span className="trader-info">Investors - 4</span>
          <span className="trader-info">Vault Size - 500k</span>
          <button className="invest-button">Invest</button>
        </div>
      </div>
      <div className="graph-card">
        <div className="apy-text">+50% APY</div>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={data}>
            <XAxis dataKey="name" hide />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#15B296" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <div className="timeframe-buttons">
          <button>D | </button>
          <button>W | </button>
          <button>M | </button>
          <button>Y | </button>
        </div>
      </div>

    </div>
    <br />
    <br />

      <TransactionsList/>
    </>
  );
};

export default TraderCard;
