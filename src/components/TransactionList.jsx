import React from 'react';
import './TransactionList.css';

const TransactionList = () => {
  const traders = [
    { time: 'Trader Name', swap: '500K$', tpl: '100%', amount: '0.5' },
    { time: 'Trader Name', swap: '500K$', tpl: '100%', amount: '0.5' },
    { time: 'Trader Name', swap: '500K$', tpl: '100%', amount: '0.5' },
  ];

  return (
    <>
        <h4 className='transaction-list'>Transaction List</h4>
    <div className="top-traders-container">
      <div className="top-traders-header">
        <div className="header-time">Time</div>
        <div className="header-swap">Swap</div>
        <div className="header-tpl">TPL</div>
        <div className="header-amount">Amount</div>
      </div>
      {traders.map((trader, index) => (
        <div key={index} className="trader-row">
          <div className="trader-time">{trader.time}</div>
          <div className="trader-swap">{trader.swap}</div>
          <div className="trader-tpl">{trader.tpl}</div>
          <div className="trader-amount">{trader.amount}</div>
        </div>
      ))}
    </div>
    </>
  );
};

export default TransactionList;
