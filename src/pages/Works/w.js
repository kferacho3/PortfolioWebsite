import React, {useState} from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

import Footer from '../../components/Footer';
import Works from './Works';
const Www = () => {
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
            <Works/>
            
           </>
          </>
        
      </>
    );
  }
  
  export default Www;
  