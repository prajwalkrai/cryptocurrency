// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Coin from './Pages/Coin/Coin';
import CryptoConverter from './Pages/CryptoConverter/CryptoConverter'; // Import the new component
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/convert' element={<CryptoConverter />} /> {/* Add route */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
