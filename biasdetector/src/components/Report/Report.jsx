import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const employee = location.state?.employee;

  console.log("Employee Data:", employee); // Debugging

  // Redirect if no employee data is found (e.g., direct URL access)
  if (!employee) {
    navigate("/EmployeeDisplay");
    return null;
  }

  // 🔹 Mock test data (if real tests don't exist)
  const mockTests = [
    { id: 1, heartRate: 114, oxygenation: 80, date: "2/24/2025", time: "4:24 PM", status: "PASS" },
    { id: 2, heartRate: 98, oxygenation: 85, date: "2/22/2025", time: "10:15 AM", status: "PASS" },
    { id: 3, heartRate: 135, oxygenation: 76, date: "2/20/2025", time: "3:00 PM", status: "FAIL" },
  ];

  // Use employee test data if available; otherwise, use mock data
  const tests = employee.tests?.length > 0 ? employee.tests : mockTests;
  const [selectedTest, setSelectedTest] = useState(tests[0]); // Default to first test

  return (
    <div className="bg-[#E7ECEF] w-screen min-h-screen flex flex-col items-center justify-center p-6">
    {/* Test Selection Dropdown */}
    <div className="mt-4 p-4">
        <label className="block text-center font-bold">Select Test:</label>
        <select
          className="mt-2 p-2 rounded-md border border-gray-400"
          value={selectedTest.id}
          onChange={(e) => setSelectedTest(tests.find(test => test.id === Number(e.target.value)))}
        >
          {tests.map((test) => (
            <option key={test.id} value={test.id}>
              {test.date} at {test.time} - {test.status}
            </option>
          ))}
        </select>
      </div>

      {/* Employee Info Section */}
      <div className="bg-[#274C77] text-white p-4 rounded-md w-full max-w-3xl text-center shadow-lg">
        <h2 className="text-lg font-bold">Employee: {employee.FullName}</h2>
        <p>ID#: {employee.EmployeeID}</p>
        <p>Company Name</p>
        <p>Test on <b>{selectedTest.date}</b> at <b>{selectedTest.time}</b></p>
        <p className={`mt-4 px-6 py-2 text-2xl font-bold rounded-md shadow-lg ${
        selectedTest.status === "PASS" ? "bg-green-500" : "bg-red-500"
      } text-white`}>
        {selectedTest.status}</p>
      </div>

      {/* Chart Placeholder */}
      <div className="mt-4 bg-white p-6 rounded-md shadow-lg w-full max-w-5xl">
        <h3 className="text-center text-lg font-bold mb-2">Heart Rate Data</h3>
        <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-gray-700">[Graph Placeholder]</span>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-4 flex flex-col items-center bg-[#6096BA] text-white p-4 rounded-md shadow-lg w-full max-w-3xl">
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