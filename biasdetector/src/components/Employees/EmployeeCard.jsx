import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { PiSignatureThin } from "react-icons/pi";
import {useNavigate} from 'react-router-dom';


import './CardStyles.css';

const Navigate = useNavigate();

const handleCardClick = (employee) => {
    Navigate('/Report')
}

function EmployeeCard ({employee}) {
    return (
        <div className="CardBackground">
           <div className="EmployeeProfileContainer">
                <div>
                <FaUserCircle size = {"3em"}></FaUserCircle>
                </div>
                <div className="WeightHeight">
                <div className="Height">
                    {employee.Height}
                </div>
                <div className="Weight">
                    {employee.Weight}
                </div>
                </div>
               
           </div>
           <div className="EmployeeCredentials">
                <div>
                {employee.FullName}
                </div>
                
                <div className="EmployeeID">
                Employee ID: {employee.EmployeeID}
                </div>

                <div>
                <PiSignatureThin size = {"3em"}></PiSignatureThin>
                </div>
           </div>
        </div>
    )
}

export default EmployeeCard;