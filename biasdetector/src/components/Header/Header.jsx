import React, { useState, useEffect } from "react"; // Import useState & useEffect
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import logoImage from '../../assets/ehtslogo_nav.png';
import LogoutButton from "./LogoutButton";
import ReportButton from "./ReportButton";
import EmployeeButton from "./EmployeeButton";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    const [user, setUser] = useState(null); // State to track authentication
    const [isLoading, setIsLoading] = useState(true); // Prevents blank screen before auth loads

    useEffect(() => {
        // Listen for authentication changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false); // Stop loading after auth state is checked
        });

        return () => unsubscribe(); // Cleanup listener when component unmounts
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    // Prevent rendering until Firebase auth state is loaded
    if (isLoading) return null;
    if (!user) return null;

    return (
        <header className="fixed top-0 w-full bg-[#274C77] shadow-md z-50 font-lato">
            <nav className="flex flex-row justify-end items-center h-[50px] p-2 space-x-4">  
                <img 
                    src={logoImage} 
                    alt="Logo" 
                    className="h-[30px] mr-auto ml-1.6 border-2 border-[#8B8C89] bg-[#8B8C89] rounded-lg shadow-md p-0.5"
                />
                {["/Login", "/Report", "/EmployeeDisplay"].includes(location.pathname) && (
                    <>
                        {location.pathname !== "/EmployeeDisplay" && <EmployeeButton />}
                        {/* {location.pathname !== "/Report" && <ReportButton />} */} 
                        <LogoutButton handleLogout={handleLogout} />
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;