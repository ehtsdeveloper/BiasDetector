import React, { useEffect, useState } from 'react';
import { ref, onValue, push, remove } from 'firebase/database';
import { db } from '../../firebase-config';

function EmployeeDisplay() {
  const [employees, setEmployees] = useState([]);
  const [age, setAge] = useState('');
  const [employeeid, setEmployeeid] = useState('');
  const [fullname, setFullName] = useState('');
  const [height, setHeight] = useState('');
  const [sex, setSex] = useState('');
  const [weight, setWeight] = useState('');
  const [searchquery, setSearchQuery] = useState('');

  const bgcolors = ['bg-[#274C77]', 'bg-[#6096BA]', 'bg-[#A3CEF1]'];

  useEffect(() => {
    const employeesRef = ref(db, 'users/names');
    const unsubscribe = onValue(employeesRef, (snapshot) => {
      if (snapshot.exists()) {
        setEmployees(Object.entries(snapshot.val()).map(([id, data]) => ({ id, ...data })));
      } else {
        console.log("No employee data available.");
      }
    });

    return () => unsubscribe();
  }, []);

  const EmployeeHandler = async (e) => {
    e.preventDefault();
    const nameRef = ref(db, 'users/names');
    const newEmployee = { Age: age, EmployeeID: employeeid, FullName: fullname, Height: height, Sex: sex, Weight: weight };

    push(nameRef, newEmployee)
      .then(() => {
        console.log('Employee added successfully!');
        setFullName('');
        setAge('');
        setEmployeeid('');
        setHeight('');
        setWeight('');
        setSex('');
      })
      .catch((error) => console.error('Error adding employee:', error));
  };

  // Handle Delete function
  const handleDelete = (employee) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${employee.FullName}?`);
    if (confirmDelete) {
      const nameRef = ref(db, `users/names/${employee.id}`); // Use the correct key from Firebase
      remove(nameRef)
        .then(() => {
          console.log(`${employee.FullName} deleted successfully!`);
        })
        .catch((error) => console.error("Error deleting employee:", error));
    }
  };

  const filteredItems = employees.filter(item => item.FullName.toLowerCase().includes(searchquery.toLowerCase()));

  return (
    <div className="bg-[#E7ECEF] w-screen min-h-screen flex flex-col md:flex-row pt-[50px]"> {/* Ensures the div starts below the header */}
      
      {/* Left Sidebar - Full Width on Mobile, 1/4 Width on Desktop */}
      <div className="bg-[#274C77] w-full md:w-1/4 h-[calc(100vh-50px)] flex flex-col justify-center p-6 shadow-lg">
        <h2 className="text-white text-xl font-bold mb-8 text-center">Add Employee</h2>
        <form onSubmit={EmployeeHandler} className="space-y-3">
          <input className="w-full p-2 rounded-md bg-[#6096BA] text-white text-center placeholder-white" type="text" placeholder="Name" value={fullname} onChange={(e) => setFullName(e.target.value)} />
          <input className="w-full p-2 rounded-md bg-[#6096BA] text-white text-center placeholder-white" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          <input className="w-full p-2 rounded-md bg-[#6096BA] text-white text-center placeholder-white" type="text" placeholder="Gender" value={sex} onChange={(e) => setSex(e.target.value)} />
          <input className="w-full p-2 rounded-md bg-[#6096BA] text-white text-center placeholder-white" type="text" placeholder="Employee ID" value={employeeid} onChange={(e) => setEmployeeid(e.target.value)} />
          <button type="submit" className="w-full p-3 mt-2 bg-[#A3CEF1] text-white text-center rounded-md hover:border-transparent hover:bg-[#8B8C89] duration-500 transition-all">Submit</button>
        </form>
      </div>
  
      {/* Right Content (Employee List) */}
      <div className="w-full md:w-3/4 flex flex-col p-6 h-[calc(100vh-50px)]">
      
        {/* Search Bar */}
        <div className="mb-4">
          <input className="w-full p-3 border border-gray-300 rounded-xl" type="text" placeholder="Search employees..." value={searchquery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
  
        {/* Employee Cards (Grid Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((employee, index) => (
            <div 
              key={employee.id} 
              className={`relative p-6 rounded-xl text-white shadow-md ${bgcolors[index % bgcolors.length]} group transition-all duration-300`} 
            >

              {/* Delete Button (appears when hovering over the whole card) */}
              <button 
                onClick={() => handleDelete(employee)} 
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:scale-110 hover:border-transparent"
              >
                ✖
              </button>
                   
              <div className="flex items-center justify-center text-3xl mb-4">👤</div>
              <ul className="text-sm space-y-1">
                <li><b>Name:</b> {employee.FullName}</li>
                <li><b>Employee ID:</b> {employee.EmployeeID}</li>
                <li><b>Badge Number:</b> XXXX</li>
                <li><b>Rank:</b> XXXXX</li>
                <li><b>Age:</b> {employee.Age}</li>
                <li><b>Gender:</b> {employee.Sex}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDisplay;