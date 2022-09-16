import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages'
function App() {
  return (
    <Router>
     <Home/>
     
    </Router>
  );
}

export default App;
