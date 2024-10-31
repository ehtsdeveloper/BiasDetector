import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ben from '../benspage/benswork'
import Musa from '../musaspage/musashoeb'
import './navbar.css';

export default function HeaderMain() { 
  return (
    
      <div className='HeaderMain'>
        <nav>
          <ul>
            <li><Link to={'/benswork'}>Ben</Link></li>
            <li><Link to={'/musashoeb'}>Musa</Link></li>
       
          </ul>
        </nav>
        
        
      </div>
   
  );
}
