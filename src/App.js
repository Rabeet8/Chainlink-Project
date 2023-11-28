import React from 'react'
import TradingView from './components/TradingView'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Routes>
        <Route path='/tradingview' element={<TradingView/>} />
      </Routes>

    </div>
  )
}

export default App
