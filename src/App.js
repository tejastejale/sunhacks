import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import { Component } from './Components/Nav';
import { Componentt } from './Components/Carosal';
import Jobs from './Screens/Jobs';

function App() {
  return (
    <div className='font-poppins bg-gray-600' >
      <Component />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />

      </Routes>
    </div>
  );
}

export default App;
