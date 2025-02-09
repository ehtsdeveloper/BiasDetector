import React from "react";

const LogoutButton = ({ handleLogout }) => {
    return(
        <button
            onClick = {handleLogout}
            className="bg-[#8B8C89] h-[25px] text-sm flex items-center justify-center text-white font-bold rounded-md px-4 py-2 cursor-pointer transition-all duration-500 hover:bg-[#c0392b] hover:border-transparent"
        >
            Logout
        </button>
    );
};

export default LogoutButton; 