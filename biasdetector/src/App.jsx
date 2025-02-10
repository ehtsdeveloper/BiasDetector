import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation} from "react-router-dom";
import Login from '../src/components/Login/Login';
import Header from './components/Header/Header';
import CreateAccount from './components/Login/create-account';
import EmployeeDisplay from './components/Employees/EmployeeDisplay';
import Report from './components/Report/Report';
import ForgotPassword from "./components/Login/forgot-password";


const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/Report" element={<Report />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/EmployeeDisplay" element={<EmployeeDisplay />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route path="*" element={<Navigate to="/Login" replace />} />
        </Routes>
      </Router>
    );
  };

// Layout Component: Ensures Header is only on specific pages
const Layout = () => {
    return (
      <>
        <Header /> {/* This ensures the header only appears outside of /Login */}
        <main>
          <Routes>
            <Route path="/Report" element={<Report />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/EmployeeDisplay" element={<EmployeeDisplay />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>
      </>
    );
  };

export default App;