import React, { Link } from "react-router-dom";
import "./TraderBox.css";

const TraderBox = ({ name, amountManaged, apy }) => {
  return (
    <>
      <div className="trader-box">
        <div className="trader-name">{name}</div>
        <div className="trader-info">
          <div className="amount-managed">{amountManaged}</div>
          <div className="apy">{apy}</div>
        </div>
        <Link to="/tradercard">
          <button className="trader-enter">Check Trade</button>
        </Link>
      </div>
    </>
  );
};

export default TraderBox;
