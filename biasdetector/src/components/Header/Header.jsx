import React from "react";
import { Link } from "react-router-dom";
import './Header.css'; // Import your CSS

const Header = () => {
    return (
        <header className="background">
            <nav className = "navigation">
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Report">Report</Link>
            </nav>
        </header>
    );
};

export default Header;
