import React,{useState} from 'react';
import remove from '../assets/img/icons/remove.svg';

export const Popup = ({ id,toogleModal,addStudent, fullName=" ",age=" ",gender=" ",payment=" " }) => {

  const [student, setStudent] = useState({
    fullName,
    age,
    gender,
    payment
  });
  //Добавление студента
  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]:value 
    })
  }


  return (
    <div className="popup">
      <div className="popup__container">
        <img className="student__edit popup-close" onClick={toogleModal} src={remove} alt="popup" />
        <div className="popup__title">
          <input onChange={handleChangeValue} name="fullName" value={student.fullName} type="text" placeholder="Введите имя и фамилию" />
        </div>
        <div className="popup__input">
          <input onChange={handleChangeValue} value={student.age} name="age" type="text" placeholder="Возраст" />
          <select onChange={handleChangeValue} defaultValue={student.gender} name="gender" title="fg">
            <option value="Пол">Пол</option>
            <option value="Мужчина">Мужчина</option>
            <option value="Женщина">Женщина</option>
          </select>
          <input onChange={handleChangeValue} name="payment" value={student.payment} type="text" placeholder="Оплачено" />
        </div>
        <div className="popup__button">
          <button onClick={()=>addStudent(student,id)} className="popup__button-send button-pushed">Добавить</button>
        </div>
      </div>
    </div>
  );
}
