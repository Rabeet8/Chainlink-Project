import React from 'react'
import TraderBox from './components/TraderBox'

const App = () => {
  return (
    <div>
<div className="traders-container">
        <TraderBox name="Trader Name" amountManaged="N/A Amount managed" apy="N/A APY" />
        <TraderBox name="Trader Name" amountManaged="N/A Amount managed" apy="N/A APY" />
        <TraderBox name="Trader Name" amountManaged="N/A Amount managed" apy="N/A APY" />
        <TraderBox name="Trader Name" amountManaged="N/A Amount managed" apy="N/A APY" />
      </div>
  

    </div>
  )
}

export default App