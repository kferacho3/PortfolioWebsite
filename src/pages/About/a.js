import React, {useState} from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import About from './About';
import Footer from '../../components/Footer';
import {  navTwo } from '../../components/Footer/Data';
const Aaa = () => {
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
            <About/>
            
           </>
          </>
        
      </>
    );
  }
  
  export default Aaa;
  