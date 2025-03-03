import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";
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
          {/* Route for Login without a Header */}
          <Route path="/Login" element={<Login />} />

          {/* Routes that should include the Header */}
          <Route element={<Layout />}>
            <Route path="/Report/:id" element={<Report />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/EmployeeDisplay" element={<EmployeeDisplay />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Redirect any unknown route to login */}
          <Route path="*" element={<Navigate to="/Login" replace />} />
        </Routes>
      </Router>
    );
};

// Layout Component: Wraps routes that require the Header
const Layout = () => {
    return (
      <>
        <Header /> {/* The header will only appear on these routes */}
        <main>
          <Outlet /> {/* Renders the child routes */}
        </main>
      </>
    );
};

export default App;