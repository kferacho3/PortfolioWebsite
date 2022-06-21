import React, {useState} from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Contact from './Contact';
import Footer from '../../components/Footer';
import {  navTwo } from '../../components/Footer/Data';
//import Connect from './Connect';

const Ccc = () => {
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
            <Contact/>
            
           </>
          </>
        
      </>
    );
  }
  
  export default Ccc;
  