import React from "react";
import './CardStyles.css';

function EmployeeCard ({employee}) {
    return (
        <div className="cardbackground">
            <p1>{employee.Age}</p1>
            <p1>{employee.FullName}</p1>
        </div>
    )
}

export default EmployeeCard;