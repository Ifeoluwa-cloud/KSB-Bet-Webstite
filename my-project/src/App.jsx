import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Banner } from './components';
import { Home } from './components';
import { Football } from './components';
import { Basketball } from './components';
import { Tennis } from './components';
import { Footer } from './components';

function App() {
  return (
    <div className='bg-[#EEEEEE] w-full h-full'>
      <Router>
      <Navbar />
      <Banner />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/football' element={<Football/>} />
        <Route path='/basketball' element={<Basketball/>} />
        <Route path='/tennis' element={<Tennis/>} />
      </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App
