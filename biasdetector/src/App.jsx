import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../src/components/Home/Home';
import Login from '../src/components/Login/Login';
import Report from '../src/components/Report/Report';
import Header from './components/Header/Header';


const App = () => {
  return (
      <Router>
          <Header />
          <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Report" element={<Report/>} />
              </Routes>
              
          </main>
      </Router>
  );
};

export default App;