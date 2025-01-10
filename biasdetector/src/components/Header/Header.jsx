import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <header className="fixed top-0 w-full bg-[#8B8C89] shadow-md z-50 font-lato">
            <nav className="flex flex-row justify-end items-center h-[45px] p-2.5">  
                <img 
                    src="src/assets/ehtslogo_login.png" 
                    alt="Logo" 
                    className="h-[45px] w-auto mr-auto ml-1.5 border-2 border-[#A3CEF1] bg-[#A3CEF1] rounded-lg shadow-md p-1.5"
                />
                {location.pathname === "/Login" && (
                    <>
                        <Link 
                            to="/Report" 
                            className="text-black text-lg no-underline rounded-lg px-2.5 py-1.5 transition-all duration-500 hover:text-[#E7ECEF] hover:bg-[#A3CEF1]"
                        >
                            Report
                        </Link>
                        <button 
                            onClick={handleLogout} 
                            className="bg-[#A3CEF1] text-black rounded-lg px-2.5 py-1.5 cursor-pointer transition-all duration-500 hover:bg-[#c0392b]"
                        >
                            Logout
                        </button>
                    </>
                )}
                {location.pathname === "/Report" && (
                    <>
                        <Link 
                            to="/EmployeeDisplay"
                            className="text-black text-lg no-underline rounded-lg px-2.5 py-1.5 transition-all duration-500 hover:text-[#E7ECEF] hover:bg-[#A3CEF1]"
                        >
                            Employee Display
                        </Link>
                        <button 
                            onClick={handleLogout} 
                            className="bg-[#A3CEF1] text-black rounded-lg px-2.5 py-1.5 cursor-pointer transition-all duration-500 hover:bg-[#c0392b]"
                        >
                            Logout
                        </button>
                    </>
                )}
                {location.pathname === "/EmployeeDisplay" && (
                    <>
                        <Link 
                            to="/Report"
                            className="text-black text-lg no-underline rounded-lg px-2.5 py-1.5 transition-all duration-500 hover:text-[#E7ECEF] hover:bg-[#A3CEF1]"
                        >
                            Report
                        </Link>
                        <button 
                            onClick={handleLogout} 
                            className="bg-[#A3CEF1] text-black rounded-lg px-2.5 py-1.5 cursor-pointer transition-all duration-500 hover:bg-[#c0392b]"
                        >
                            Logout
                        </button>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;