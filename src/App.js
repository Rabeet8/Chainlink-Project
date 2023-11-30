import React from 'react'
import TradingView from './components/TradingView'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TraderCard from './components/TraderCard';
import UserCard from './components/UserCard'
import Modal from './components/Modal';
const App = () => {
  return (
    <div>
      <Navbar/>
      
    
      <Routes>
      <Route path='/' element={<><Hero /></>} />
        <Route path='/tradingview' element={<TradingView/>} />
        <Route path='/tradercard' element={<TraderCard/>} />
        <Route path='/modal' element={<Modal/>} />


      

      </Routes>

    </div>
  )
}

export default App
