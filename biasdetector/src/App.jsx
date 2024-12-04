import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../src/components/Home/Home';
import Login from '../src/components/Login/Login';
import Header from './components/Header/Header';
import CreateAccount from './components/Login/create-account';
import EmployeeDisplay from './components/Employees/EmployeeDisplay';
import Report from './components/Report/Report';


const App = () => {
  return (
      <Router>
          <Header />
          <main>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/Report" element={<Report/>} />
                  <Route path="/create-account" element={<CreateAccount />} />
                  <Route path="/EmployeeDisplay" element={<EmployeeDisplay />} />
                  <Route path="/Report" element={<Report />} />
              </Routes>
              
          </main>
      </Router>
  );
};

export default App;