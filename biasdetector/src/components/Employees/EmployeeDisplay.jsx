import React, { useEffect, useState} from 'react';
import { ref, onValue, push } from 'firebase/database';
import { db } from '../../firebase-config';
import EmployeeCard from './EmployeeCard';
import './EmployeeStyles.css'

function EmployeeDisplay() {

  const [employees, setEmployees] = useState([]);
  const [age, setAge] = useState();
  const [employeeid, setEmployeeid] = useState('');
  const [fullname, setFullName] = useState('');
  const [height, setHeight] = useState();
  const [sex, setSex] = useState('');
  const [weight, setWeight] = useState();
  

  const EmployeeHandler = async (e) => {

    e.preventDefault();

    const nameRef = ref(db, 'users/names');
    const newEmployee = {
      Age: age,
      EmployeeID: employeeid,
      FullName: fullname,
      Height: height,
      Sex: sex,
      Weight: weight
    }

    push(nameRef, newEmployee)
    .then(() => {
      console.log('Employee added successfully!');
      setName('');
      setPosition('');
    })
    .catch((error) => {
      console.error('Error adding employee:', error);
    });


  }

  // Wrapping everything in a useEffect ensures this listener component only runs when mounted
  //Not doing this will give you an 'infinite rendor error'
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
    <div className='background'>
      <div className='EmployeeFormContainer'>
        <form onClick={EmployeeHandler} className='EmployeeForm'>
        <input
          className="input"
          type = "age "
          placeholder="Enter age"
          value = {age}
          onChange = {(e) => setAge(e.target.value)}>
        </input>
        <input
          className="input"
          type = "employeeid "
          placeholder="Enter EmployeeID"
          value = {employeeid}
          onChange = {(e) => setEmployeeid(e.target.value)}>
        </input>
        <input
          className="input"
          type = "name "
          placeholder="Enter Full Name"
          value = {fullname}
          onChange = {(e) => setFullName(e.target.value)}>
        </input>
        <input
          className="input"
          type = "height"
          placeholder="Enter Height"
          value = {height}
          onChange = {(e) => setHeight(e.target.value)}>
        </input>
        <input
          className="input"
          type = "weight"
          placeholder="Enter Weight"
          value = {weight}
          onChange = {(e) => setWeight(e.target.value)}>
        </input>
        <input
          className="input"
          type = "sex"
          placeholder="Enter Sex"
          value = {sex}
          onChange = {(e) => setSex(e.target.value)}>
        </input>
        <button type = "submit">Submit</button>
        </form>
      </div>
      <div className='EmployeeCards'>
        {employees.map((employee, index) => (
          <EmployeeCard key={index} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default EmployeeDisplay;
