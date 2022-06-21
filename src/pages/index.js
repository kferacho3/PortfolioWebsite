import React, {useState} from 'react';
import "./Preloader.scss";
//import Footer from '../components/Footer1/Footer';
import Intro from '../components/Intro/Intro';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Mid from '../components/Intro/MidSection';
import Bot from '../components/Intro/BotSection';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
 
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  
  return (
    <>
        <>
          <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle}/>
        
          
          <Mid />
          
          <Bot/>
          <Footer/>
          
         </>
        </>
      
    </>
  );
}

export default Home;
