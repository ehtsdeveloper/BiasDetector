import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Ben from './Home/benswork'
import Musa from '../src/musaspage/musashoeb'
import Navigation from './navigationbar/navbar'

function App() {
  return (
    <div className="app">
      <Router>
        < Navigation/>
        <Routes>
          <Route path="/Home" element={<Home />} />
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;