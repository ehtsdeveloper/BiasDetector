import React from "react";

const LogoutButton = ({ handleLogout }) => {
    return(
        <button
            onClick = {handleLogout}
            className="bg-[#A3CEF1] h-[20px] text-sm flex items-center justify-center text-black rounded-lg px-4 py-2 cursor-pointer transition-all duration-500 hover:bg-[#c0392b]"
        >
            Logout
        </button>
    );
};

export default LogoutButton; 