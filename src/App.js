import React from 'react'
import TradingView from './components/TradingView'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TraderCard from './components/TraderCard';
import Modal from './components/Modal';
const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <TraderCard/>
      {/* <Modal/> */}
      <Routes>
        <Route path='/tradingview' element={<TradingView/>} />
      </Routes>

    </div>
  )
}

export default App
