import React,{useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {homeObjOne,
  homeObjTwo,
  homeObjThree} 
  from '../components/InfoSection/Data';

  import Services from '../components/Sevices';
const Home = () => {
  const [isOpen,SetIsopen]= useState(false)

  const toggle = ()=>{
    SetIsopen(!isOpen)
  }
  
  //first vlaue state 
  return (
       <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <InfoSection  {...homeObjOne} />
      <InfoSection  {...homeObjTwo} />
      <Services/>
      <InfoSection  {...homeObjThree} />
      </div>
  )
}

export default Home;
