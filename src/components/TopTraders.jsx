import React,{Link} from 'react-router-dom';
import './TopTrader.css'; 

const TopTraders = () => {
  const traders = [
    { name: 'Trader Name', vaultSize: '500K$', apy: '100%', varFactor: '0.5' },
    { name: 'Trader Name', vaultSize: '500K$', apy: '100%', varFactor: '0.5' },
    { name: 'Trader Name', vaultSize: '500K$', apy: '100%', varFactor: '0.5' },
  ];

  return (
    <div className="top-traders-container">
      <div className="top-traders-header">
        <div>Name</div>
        <div>Vault Size</div>
        <div>APY</div>
        <div>Var Factor</div>
      </div>
      {traders.map((trader, index) => (
        <div key={index} className="trader-row">
          <div className="trader-name">{trader.name}</div>
          <div className="trader-vault-size">{trader.vaultSize}</div>
          <div className="trader-apy">{trader.apy}</div>
          <div className="trader-var-factor">{trader.varFactor}</div>
          <Link to="/tradercard">
          <button className="trader-enter">Check Trade</button>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default TopTraders;

