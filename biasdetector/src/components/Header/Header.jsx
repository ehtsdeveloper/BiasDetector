import React from "react";
import { Link,useLocation } from "react-router-dom";
import './HeaderStyles.css'; 

const Header = () => {
    const location = useLocation();

    return (
        <header className="headermain">
            <nav className = "Navigation">  
            <img src="src/assets/ehtslogo_login.png" alt="Logo" className="nav-logo" />
                {/* Hide Nav Bar Items certain pages */}
                {location.pathname === "/Home" && (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/Login">Login</Link>
                        <Link to="/Report">Report</Link>
                        <Link to="/EmployeeDisplay">Employee Display</Link>
                    </>
                )}
                {location.pathname === "/Login" && (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/Report">Report</Link>
                    </>
                )}
                {location.pathname === "/Report" && (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/EmployeeDisplay">Employee Display</Link>
                    </>
                )}
                {location.pathname !== "/Home" && location.pathname !== "/Login" && location.pathname !== "/Report" && location.pathname !== "/EmployeeDisplay" && (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/Login">Login</Link>
                        <Link to="/Report">Report</Link>
                        <Link to="/EmployeeDisplay">Employee Display</Link>
                    </>
                )}
                {location.pathname === "/EmployeeDisplay" && (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/Report">Report</Link>
                        <Link to="/EmployeeDisplay">Employee Display</Link>
                    </>
                )}
                
            </nav>
        </header>
    );
};

export default Header;