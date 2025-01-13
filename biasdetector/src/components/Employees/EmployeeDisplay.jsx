import React, { useEffect, useState } from 'react';
import { ref, onValue, push } from 'firebase/database';
import { db } from '../../firebase-config';
import EmployeeCard from './EmployeeCard';
import './EmployeeStyles.css';

function EmployeeDisplay() {

  const [employees, setEmployees] = useState([]);
  const [age, setAge] = useState();
  const [employeeid, setEmployeeid] = useState('');
  const [fullname, setFullName] = useState('');
  const [height, setHeight] = useState();
  const [sex, setSex] = useState('');
  const [weight, setWeight] = useState();
  const [searchquery, setSearchQuery] = useState('');
  const bgcolors = ['#274C77', '#6096BA', '#A3CEF1' ]
 

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const EmployeeHandler = async (e) => {
    e.preventDefault();

    const nameRef = ref(db, 'users/names');
    const newEmployee = {
      Age: age,
      EmployeeID: employeeid,
      FullName: fullname,
      Height: height,
      Sex: sex,
      Weight: weight,
    };

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
      .catch((error) => {
        console.error('Error adding employee:', error);
      });
  };

  // Fixed filteredItems: corrected to use toLowerCase() and used FullName for the filter
  const filteredItems = employees.filter(item =>
    item.FullName.toLowerCase().includes(searchquery.toLowerCase())
  );

  // Wrapping everything in a useEffect ensures this listener component only runs when mounted
  useEffect(() => {
    const employeesRef = ref(db, 'users/names'); //define a location you want to access in your db

    // A "Listener" function that will immediately capture a snapshot of data should it be updated
    const unsubscribe = onValue(employeesRef, (snapshot) => {
      if (snapshot.exists()) {
        setEmployees(Object.values(snapshot.val()));
      } else {
        console.log("No employee data available.");
      }
    });

    // Cleanup function to remove the listener when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className='bg-[#F2F0EF] flex flex-row w-screen h-screen pt-[3vh]'>
      <div className='bg-[#8B8C89] flex flex-col h-full  mt-10 p-2.5'>
        <div className='text-xl text-center m-2.5'>Add Employee</div>
        <form onSubmit={EmployeeHandler} className='flex flex-col gap-y-5'>
          <input
            className="bg-[white] box-border rounded-[10px]"
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            className="bg-[white] box-border rounded-[10px]"
            type="text"
            placeholder="Enter EmployeeID"
            value={employeeid}
            onChange={(e) => setEmployeeid(e.target.value)}
          />
          <input
            className="bg-[white] box-border rounded-[10px]"
            type="text"
            placeholder="Enter Full Name"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="bg-[white] box-border rounded-[10px]"
            type="text"
            placeholder="Enter Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            className="bg-[white] box-border rounded-[10px]"
            type="number"
            placeholder="Enter Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            className="bg-[white] box-border rounded-[10px]"
            type="text"
            placeholder="Enter Sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className='flex flex-col items-center'>
        <div className='mt-[50px]'> 
          <input className='bg-[white] box-border rounded-[10px]'
            type="text"
            value={searchquery}
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
        <div className='grid sm:grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] grid-rows-[auto] gap-[15px] m-[50px]'>
          {filteredItems.map((employee, index) => (
            <EmployeeCard key={index} 
                          color={bgcolors[index % bgcolors.length]}
                          employee={employee}/>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default EmployeeDisplay;
