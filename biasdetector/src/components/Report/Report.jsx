import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const employee = location.state?.employee;

  // Redirect if no employee data is found (e.g., direct URL access)
  console.log("Employee Data:", employee);  // 🔹 Check if employee data exists

  if (!employee) {
    navigate("/EmployeeDisplay");
    return null;
  }

  //  Mock Test Data (Replace this with actual data from Firebase)
  const tests = employee.tests || [
    { id: 1, date: "2/24/2025", time: "4:24 PM", heartRate: 114, oxygenation: 80, status: "PASS" },
    { id: 2, date: "2/25/2025", time: "3:15 PM", heartRate: 120, oxygenation: 85, status: "FAIL" }
  ];

  // State to track selected test
  const [selectedTest, setSelectedTest] = useState(tests[0]);

  return (
    <div className="bg-[#E7ECEF] w-screen min-h-screen flex flex-col items-center justify-center p-6">

      {/* Test Buttons */}
      <div className="flex flex-row gap-2 mt-4 justify-center p-6">
        {tests.map((test) => (
          <button 
            key={test.id} 
            onClick={() => setSelectedTest(test)}
            className={`px-4 py-2 rounded-md shadow-md ${
              selectedTest.id === test.id ? "bg-[#274C77] text-white" : "bg-[#8B8C89] text-gray-200 hover:bg-[#6096BA]"
            } transition-all`}
          >
            {test.date} at {test.time}
          </button>
        ))}
      </div>

      {/* Employee Info Section */}
      <div className="bg-[#274C77] text-white p-4 rounded-md w-full max-w-3xl text-center shadow-lg">
        <h2 className="text-lg font-bold">Employee: {employee.FullName}</h2>
        <p>ID#: {employee.EmployeeID}</p>
        <p>EHTS Bias Detector</p>
        <p>Test on <b>{selectedTest.date}</b> at <b>{selectedTest.time}</b></p>
      </div>

      {/* PASS/FAIL Status */}
      <div className={`mt-4 px-6 py-2 text-2xl font-bold rounded-md shadow-lg ${
        selectedTest.status === "PASS" ? "bg-green-500" : "bg-red-500"
      } text-white`}>
        {selectedTest.status}
      </div>

      {/* Chart Placeholder */}
      <div className="mt-4 bg-white p-6 rounded-md shadow-lg w-full max-w-4xl">
        <h3 className="text-center text-lg font-bold mb-2">Heart Rate Data</h3>
        {/* Chart Component goes here */}
        <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-gray-700">[Graph Placeholder]</span>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-4 flex flex-col items-center bg-[#6096BA] text-white p-4 rounded-md shadow-lg w-full max-w-2xl">
        <p><b>Average HeartRate:</b> {selectedTest.heartRate} bpm</p>
        <p><b>Oxygenation Level:</b> {selectedTest.oxygenation}%</p>
      </div>

      {/* Return to Employee List Button */}
      <button 
        onClick={() => navigate("/EmployeeDisplay")}
        className="mt-4 bg-[#8B8C89] text-white px-6 py-2 rounded-md hover:bg-[#274C77] transition-all"
      >
        Return to Employee Display
      </button>
    </div>
  );
};

export default Report;