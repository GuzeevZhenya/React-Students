import React from 'react';
import { Student } from './Student';


const StudentsList = ({ studentsList,toogleModal,deleteStudent}) => {
  return (
    <div>
      <div className="students">
        {studentsList.map((student) => <Student deleteStudent={deleteStudent} editStudent={toogleModal} key={student.id} {...student} />)}
      </div>
    </div>
  );
};
export default StudentsList;