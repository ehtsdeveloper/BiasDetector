import React, { useEffect, useState } from 'react';
import { ref, onValue, remove, set, getDatabase } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function EmployeeDisplay() {
  const [employees, setEmployees] = useState([]);
  const [age, setAge] = useState('');
  const [employeeid, setEmployeeid] = useState('');
  const [fullname, setFullName] = useState('');
  const [height, setHeight] = useState('');
  const [sex, setSex] = useState('');
  const [weight, setWeight] = useState('');
  const [searchquery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu state
  const [companyKey, setCompanyKey] = useState(''); // Added companyKey state
  const [user, setUser] = useState(null);

  const navigate = useNavigate(); // Initialize navigation for dynamic reports
  const auth = getAuth();
  const db = getDatabase();

  const bgcolors = ['bg-[#274C77]', 'bg-[#6096BA]', 'bg-[#A3CEF1]'];

  // Fetch User and Company Key
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("Authenticated User:", currentUser.uid);
  
        // First, find the company key
        const userRef = ref(db, `EHTS`);
        onValue(userRef, (snapshot) => {
          if (snapshot.exists()) {
            let foundCompanyKey = null;
            Object.keys(snapshot.val()).forEach(company => {
              if (snapshot.val()[company].accounts?.[currentUser.uid]) {
                foundCompanyKey = company;
              }
            });
  
            if (foundCompanyKey) {
              console.log("✅ Retrieved Company Key:", foundCompanyKey);
              setCompanyKey(foundCompanyKey);
            } else {
              console.log("❌ No company key found for user.");
            }
          }
        }, { onlyOnce: true });
      }
    });
  
    return () => unsubscribe();
  }, []);

  // Fetch Employees Once `companyKey` is Available
  useEffect(() => {
    if (companyKey) {
      const employeesRef = ref(db, `EHTS/${companyKey}/employees`);
      onValue(employeesRef, (snapshot) => {
        if (snapshot.exists()) {
          const employeesData = Object.values(snapshot.val());
          setEmployees(employeesData); // Ensure we are setting an array
          console.log("✅ Employees Fetched:", employeesData);
        } else {
          console.log("❌ No employees found for this company.");
          setEmployees([]); // Reset employees if none exist
        }
      });
    }
  }, [companyKey]); // Runs only when companyKey is set

  // Employee Handler
  const EmployeeHandler = async (e) => {
    e.preventDefault();

    if (!companyKey) {
      console.error("Company Key is missing, cannot add employee");
      return;
    }

    if (!fullname || !employeeid || !age || !sex || !height || !weight) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Define employeeData properly
    const employeeData = {
      fullName: fullname,
      employeeID: employeeid,
      age: age,
      sex: sex,
      height: height,
      weight: weight,
      createdBy: user.uid,
    };

    const employeeRef = ref(db, `EHTS/${companyKey}/employees/${employeeid}`);

    // Attempt to set the employee in Firebase
    try {
      await set(employeeRef, employeeData);
      console.log("✅ Employee added successfully!", employeeData);

      // Manually trigger Firebase re-fetch after adding an employee
      const employeesRef = ref(db, `EHTS/${companyKey}/employees`);
      onValue(employeesRef, (snapshot) => {
        if (snapshot.exists()) {
          setEmployees(Object.values(snapshot.val()));
        }
      });

      // Clear input fields after successful submission
      setFullName('');
      setAge('');
      setEmployeeid('');
      setSex('');
      setHeight('');
      setWeight('');
    } catch (error) {
      console.error("❌ Error adding employee:", error);
    }
  };

  //  Navigate to Report Page
  const handleCardClick = (employee) => {
    navigate(`/Report/${employee.employeeId}`, { state: { employee }});
  };

  // Handle Delete function
  const handleDelete = (employee) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${employee.FullName}?`);

    if (confirmDelete) {
      const nameRef = ref(db, `EHTS/${companyKey}/employees/${employee.employeeID}`);

      remove(nameRef)
        .then(() => {
          console.log(`${employee.FullName} deleted successfully!`);
        })
        .catch((error) => console.error("Error deleting employee:", error));
    }
  };

  const filteredItems = employees.filter(item => 
    item?.fullName?.toLowerCase().includes(searchquery.toLowerCase())
  );

  // Handle Long Press on Mobile
  let touchTimer = null; // stores timer ID

  const handleLongPress = (e, employee) => {
    if (window.innerWidth >= 768) return; // only activate on mobile

    touchTimer = setTimeout(() => {
      const confirmDelete = window.confirm (`Are you sure you want to delete ${employee.FullName}?`);
      if (confirmDelete) {
        handleDelete(employee);
      }
    }, 800); // 800 ms = long press threshold
  };

  const handleTouchEnd = () => {
    clearTimeout(touchTimer); // Cancel if released early
  }

  return (
    <div className="bg-[#E7ECEF] w-screen min-h-screen flex flex-col md:flex-row pt-[50px]">
      
      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden left-4 z-50 font-bold bg-[#8B8C89] text-white rounded-none border-transparent" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Add Employee
      </button>

      {/* Left Sidebar - Full Width on Mobile, 1/4 Width on Desktop */}
      <div className={`bg-[#274C77] w-full md:w-1/4 h-[calc(100vh-50px)] flex flex-col justify-center p-6 shadow-lg 
                      transition-transform duration-300 transform ${menuOpen ? "translate-y-0" : "-translate-y-full"} 
                      md:translate-y-0 fixed md:relative top-[50px] md:top-0 left-0 z-40`}
      >
        <h2 className="text-white text-xl font-bold mb-8 text-center">Add Employee</h2>
        <form onSubmit={EmployeeHandler} className="space-y-3">

        {/* Name */}
          <input className="w-full p-2 rounded-md bg-[#6096BA] text-white text-center placeholder-white" type="text" placeholder="Enter Name" value={fullname} onChange={(e) => setFullName(e.target.value)} />

        {/* Age */}
          <input className="w-full p-2 rounded-md bg-[#6096BA] text-white text-center placeholder-white" type="number" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />

        {/* Sex */}
          <select className="w-full p-2 rounded-md bg-[#6096BA] text-white text-center" value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

        {/* Employee ID */}
          <input className="w-full p-2 rounded-md bg-[#6096BA] text-white text-center placeholder-white" type="text" placeholder="Enter Employee ID" value={employeeid} onChange={(e) => setEmployeeid(e.target.value)} />

        {/* Height */}
          <input className="w-full p-2 rounded-md bg-[#6096BA] text-white text-center placeholder-white" type="text" placeholder="Enter Height" value={height} onChange={(e) => setHeight(e.target.value)} />

        {/* Weight */}
          <input className="w-full p-2 rounded-md bg-[#6096BA] text-white text-center placeholder-white" type="text" placeholder="Enter Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />

        {/* Submit Button Conditionally Rendered When ALL parameters are Filled out */}
          {fullname && age && sex && employeeid && height && weight &&(
            <button type="submit" className="w-full p-3 mt-2 bg-[#A3CEF1] text-white text-center rounded-md hover:border-transparent hover:bg-[#8B8C89] duration-500 transition-all">Submit</button>
          )}
        </form>
      </div>
  
      {/* Right Content (Employee List) */}
      <div className="bg-[#E7ECEF] w-full md:w-3/4 flex flex-col p-6 min-h-screen">
      
        {/* Search Bar */}
        <div className="mb-4">
          <input className="w-full p-3 border border-gray-300 rounded-xl" type="text" placeholder="Search employees..." value={searchquery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
  
        {/* Employee Cards (Grid Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((employee, index) => (
            <div 
              key={employee.employeeID}
              onClick={() => handleCardClick(employee)} // Navigate to report on click
              onTouchStart={(e) => handleLongPress(e, employee)} // Detect Long Press on Mobile
              onTouchEnd={handleTouchEnd} // Reset Timer when user lifts finger
              className={`relative p-6 rounded-xl text-white shadow-md ${bgcolors[index % bgcolors.length]} group transition-all duration-300 cursor-pointer`} 
            >
              {/* Delete Button (appears when hovering over the whole card) */}
              <button 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation when clicking delete
                  handleDelete(employee);
                }} 
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:scale-110 hover:border-transparent"
              >
                ✖
              </button>
                   
              <div className="flex items-center justify-center text-3xl mb-4">👤</div>
              <ul className="text-sm space-y-1">
                <li><b>Name:</b> {employee.fullName || "N/A"}</li>
                <li><b>Age:</b> {employee.age || "N/A"}</li>
                <li><b>Employee ID:</b> {employee.employeeID || "N/A"}</li>
                <li><b>Height:</b> {employee.height || "N/A"}</li>
                <li><b>Weight:</b> {employee.weight || "N/A"}</li>
                <li><b>Sex:</b> {employee.sex || "N/A"}</li>
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default EmployeeDisplay;