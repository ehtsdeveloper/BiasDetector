import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { PiSignatureThin } from "react-icons/pi";
import {useNavigate} from 'react-router-dom';



function EmployeeCard ({employee, color}) {

    const Navigate = useNavigate();

    const heartRate = employee.HeartRate;

    const handleCardClick = () => {
        Navigate('/Report' , { state: {heartRate} });
}
    return (
        <div  style={{ backgroundColor: color }} className={`bg-${color} flex flex-row h-[150px] rounded-[10px]`} onClick = {handleCardClick}>
           <div className="flex-1 m-[5px]">
                <div className="px-6 py-2">
                <FaUserCircle size = {"4em"} color="white"></FaUserCircle>
                </div >
                <div className="flex flex-col">
                    <div className="flex flex-row pl-4">
                        <div className="mt-[5px] mx-[5px] text-[#E7ECEF] text-sm">
                            {employee.Height}
                        </div>
                        <div className="mt-[5px] mx-[5px] text-[#E7ECEF] text-sm">
                            {employee.Weight}
                        </div>
                    </div>

                    <div className="flex flex-row pl-4">
                        <div className="mt-[5px] mx-[5px] text-[#E7ECEF] text-sm">
                            {employee.Age}
                        </div>
                        <div className="mt-[5px] mx-[5px] text-[#E7ECEF] text-sm">
                            {employee.Sex}
                        </div>
                    </div>
                    
                </div>
              
               
           </div>
           <div className="flex-1 flex flex-col font-Montserrat text-[#E7ECEF]">
                <div className="mt-[30px] text-[21px]">
                {employee.FullName}
                </div>
                
                <div className="text-[15px] ">
                Employee ID: {employee.EmployeeID}
                </div>

           </div>
        </div>
    )
}

export default EmployeeCard;