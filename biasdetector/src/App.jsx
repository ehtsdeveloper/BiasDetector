import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Login from '../src/components/Login/Login';
import Header from './components/Header/Header';
import CreateAccount from './components/Login/create-account';
import EmployeeDisplay from './components/Employees/EmployeeDisplay';
import Report from './components/Report/Report';
import ForgotPassword from "./components/Login/forgot-password";


const App = () => {
  return (
      <Router basename = "/BiasDetector">
          <Header />
          <main>
              <Routes>
                  <Route path="/" element={<Navigate to ="/Login" replace/>} />
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/Report" element={<Report/>} />
                  <Route path="/create-account" element={<CreateAccount />} />
                  <Route path="/EmployeeDisplay" element={<EmployeeDisplay />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
          </main>
      </Router>
  );
};

export default App;