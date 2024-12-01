import React from "react";

function EmployeeCard ({employee}) {
    return (
        <div>
            <p1>{employee.age}</p1>
            <p1>{employee.fullname}</p1>
        </div>
    )
}

export default EmployeeCard;