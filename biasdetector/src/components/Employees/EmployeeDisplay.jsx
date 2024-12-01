import {getDatabase, ref, onValue, DataSnapshot} from 'firebase/database';
import {app} from '../../firebase-config';

function EmployeeDisplay() {
  const db = getDatabase();
  const employeeInfo = ref(db, 'users/employees');

  onValue(employeesRef, (DataSnapshot) => {
    if (DataSnapshot.exists) {
      console.log(DataSnapshot.val());
    }

    else {
      console.log(error);
    }

  });


  return (
    <div></div>
  )
}

export default EmployeeDisplay;