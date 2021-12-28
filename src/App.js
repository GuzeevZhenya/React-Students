import React, { useState } from 'react';
import { Popup } from './Components/Popup';
import { Empty } from './Components/Empty';
import Footer from './Components/Footer';
import  StudentsList from './Components/StudentsList';
import './App.css';

const App = () => {
  const [studentsList, setStudentsList] = useState([
    {
      id: 1,
      fullName: 'Пётр',
      avatarURL: 'https://source.unsplash.com/50x50/?people',
      age: 25,
      gender: 'Мужчина',
      payment: 5000,
    },
  ]);

  const [editStudent, setEditStudent] = useState({}); 
  const [isModal, setIsModal] = useState(false);

  const toogleModal = (id) => {
    if (id) {
      const currentStudent = studentsList.find((obj) => obj.id == id);
      setEditStudent(currentStudent);
    }
    setIsModal(!isModal);
  }

 
  const addStudent = (student, id) => {
    //если пришел id, то изменяет значения , работает при редактировании
    if (id) {
      setStudentsList(
        studentsList.map(obj=>obj.id === id ? {...student,id,  avatarURL: "https://source.unsplash.com/50x50/?people"}: obj)
      )
    }
    //Добавление нового студента
    else {
      setStudentsList([
        ...studentsList,
        {
          ...student,
          id: studentsList[studentsList.length - 1] ? studentsList[studentsList.length - 1].id+1 : 1,
          avatarURL: "https://source.unsplash.com/50x50/?people"
        }
      ]);
    }
    setIsModal(!isModal)
  }


  //Очистка всех данных при клике
  const deleteAllStudents = () => {
    setStudentsList([]);
  }
  //Подсчет значений
  const totalPayment = studentsList.reduce((sum, obj) => sum + +obj.payment, 0);

  const deleteStudent = (id) => {
    setStudentsList(prev=>prev.filter(obj=>obj.id !== id))
  }

  return (
    <div className="App">
      <div className="container">
        {
          studentsList.length ? (
            <StudentsList deleteStudent={deleteStudent} toogleModal={toogleModal} studentsList={studentsList}/>
          ) : <Empty/>
        }
        <Footer countStudents={studentsList.length}deleteAllStudents={deleteAllStudents} toogleModal={toogleModal} totalPayment={totalPayment} />
      </div>
      {isModal && <Popup {...editStudent} addStudent={addStudent} toogleModal={toogleModal} />}
    </div>
  );
};

export default App;
