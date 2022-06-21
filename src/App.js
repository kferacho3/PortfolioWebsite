import React from 'react';
import './App.scss';
import {Outlet, Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Aaa from './pages/About/a';
import "./style.scss"
import Ppp from './pages/Personal/p';
import Www from './pages/Works/w';
import Ccc from './pages/Connect/c';
export function App() {
    return (

      
      <div className='bbg'> 
      
   <Router >
   <div className='s1'>
    <Routes >
      <Route path='/' exact element={<Home />}  />
      <Route path='/about' element={<Aaa />}  />
      <Route path='/' exact element={<Home />}  />
      <Route path='/projects' element={<Ppp />}  />
      <Route path='/' exact element={<Home />}  />
      <Route path='/services' element={<Www />}  />
      <Route path='/' exact element={<Home />}  />
      <Route path='/connect' element={<Ccc />}  />
      <Route path='/' exact element={<Home />}  />
      
    </Routes> 
    </div>
   </Router>
       </div>
     
    );
} export default App;