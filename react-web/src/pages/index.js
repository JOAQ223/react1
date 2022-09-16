import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
       <div>
      <Sidebar/>
      <Navbar/>
      </div>
  )
}

export default Home;
