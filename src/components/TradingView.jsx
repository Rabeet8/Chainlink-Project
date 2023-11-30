import React from "react";
import TraderBox from "./TraderBox";
import "./TraderBox.css";
import TopTradersTable from "./TopTraders";
const TradingView = () => {
 
  return (
    <div>
      
      <div className="traders-container">
        <TraderBox
          name="Trader Name"
          amountManaged="N/A Amount managed"
          apy="N/A APY"
        />
        <TraderBox
          name="Trader Name"
          amountManaged="N/A Amount managed"
          apy="N/A APY"
        />
        <TraderBox
          name="Trader Name"
          amountManaged="N/A Amount managed"
          apy="N/A APY"
        />
        <TraderBox
          name="Trader Name"
          amountManaged="N/A Amount managed"
          apy="N/A APY"
        />
      </div>
      <br />
      <br />
    
      <TopTradersTable/>
    </div>
  );
};

export default TradingView;
