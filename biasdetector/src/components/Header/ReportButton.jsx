import React from "react";
import { useNavigate } from "react-router-dom";

const ReportButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/Report")}
            className="bg-[#A3CEF1] h-[20px] text-sm flex items-center justify-center text-black rounded-lg px-4 py-2 cursor-pointer transition-all duration-500 hover:bg-[#c0392b]"
        >
            Report
        </button>
    );
};

export default ReportButton;