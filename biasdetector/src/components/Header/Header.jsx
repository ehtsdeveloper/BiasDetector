import React from "react";
import { Link } from "react-router-dom";
import './HeaderStyles.css'; 

const Header = () => {
    return (
        <header className="headermain">
            <nav className = "Navigation">
                <Link to="/"> Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Report">Report</Link>
            </nav>
        </header>
    );
};

export default Header;