import React from "react";
import { useNavigate } from "react-router-dom";

const ReportButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/Report")}
            className="bg-[#8B8C89] h-[25px] text-sm flex items-center justify-center text-white font-bold rounded-md px-4 py-2 cursor-pointer transition-all duration-500 hover:bg-[#c0392b] hover:border-transparent"
        >
            Report
        </button>
    );
};

export default ReportButton;