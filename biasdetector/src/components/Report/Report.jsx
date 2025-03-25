import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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

  // Process the tests from Firebase 
  const rawTests = employee.tests || {};
  const formattedTests = Object.entries(rawTests).map(([key, test], index) => {
    // Convert the heartRate object from Firebase into an array for recharts
    // Each key represents the time in seconds
    const graphData = Object.entries(test.heartRate || {}).map(
      ([timeStr, value]) => ({
        time: parseInt(timeStr, 10), // Convert string key to a number
        heartRate: value,            // CHANGED: Use 'value' (the actual heart rate) instead of undefined variable 'heartRate'
      })
    );

  // Parse the key for the test time: "Test_08:09:54" => ["Test", "08:09:54"]
  const parts = key.split("_");
  const testTime = parts[1] || "Unknown";
  const testNumber = index + 1;                ``

    return {
      id: index + 1,
      name: key,
      heartRate: averageHeartRate(graphData),
      oxygenation: test.sp02 || "N/A",
      status: test.sp02 ? (test.sp02 >= 90 ? "PASS" : "FAIL") : "N/A", // pass fail based on sp02
      testLabel: `Test ${testNumber} at ${testTime}`,
      graphData,
    };
  });
  
  // Helper function to calculate average heart rate
  function averageHeartRate(data) {
    const values = data.map(d => d.heartRate).filter(n => n > 0);
    if (values.length === 0) return 0;
    // CHANGED: Use 'values.reduce' instead of 'value.reduce'
    return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  }

  // If no test data is available, show a message
  if (formattedTests.length === 0) {
    return <div>No test data available.</div>;
  }

  // CHANGED: Use formattedTests[0] instead of tests[0]
  const [selectedTest, setSelectedTest] = useState(formattedTests[0]);

  return (
    <div className="bg-[#E7ECEF] w-screen min-h-screen flex flex-col items-center justify-center p-6">
      {/* Test Selection Dropdown */}
      <div className="mt-4 p-4">
        <label className="block text-center font-bold">Select Test:</label>
        <select
          className="mt-2 p-2 rounded-md border border-gray-400"
          value={selectedTest.id}
          onChange={(e) =>
            setSelectedTest(
              formattedTests.find(
                (test) => test.id === Number(e.target.value)
              )
            )
          }
        >
          {formattedTests.map((test) => (
            <option key={test.id} value={test.id}>
              {test.testLabel} - {test.status}
            </option>
          ))}
        </select>
      </div>

      {/* Employee Info Section */}
      <div className="flex flex-col gap-3 bg-[#274C77] text-white p-4 rounded-md w-full max-w-3xl text-center shadow-lg">
        <h2 className="text-3xl font-bold">
          {employee.fullName}
        </h2>
        <p className="font-bold">
          ID#: {employee.employeeID}
        </p>
        <p className="font-bold">
          Company: EHTS
        </p>
        <p>
          <b>{selectedTest.testLabel}</b>
        </p>
        <p 
          className={`mt-4 px-6 py-2 text-2xl font-bold rounded-md shadow-lg ${
            selectedTest.status === "PASS" 
            ? "bg-green-500" 
            : "bg-red-500"
          } text-white`}
        >
            {selectedTest.status}
        </p>
      </div>

      {/* Chart Section */}
      <div className="mt-4 bg-white p-6 rounded-md shadow-lg w-full max-w-6xl">
        <h3 className="text-center text-lg font-bold mb-2">Heart Rate Data</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={selectedTest.graphData}>
            <CartesianGrid strokeDasharray={"3 3"} />
            <XAxis 
              dataKey="time" 
              label={{
                value: "Time (s)", 
                position: "insideBottomRight", 
                offset: -5,
              }}
            />
            <YAxis 
              label={{
                value: "Heart Rate (BPM)", 
                angle: -90, 
                position: "insideLeft"
              }}
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="heartRate" 
              stroke="#274C77" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Section */}
      <div className="mt-4 flex flex-col items-center bg-[#6096BA] text-white p-4 rounded-md shadow-lg w-3/4 max-w-3xl">
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