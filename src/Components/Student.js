import React from 'react';
import edit from '../assets/img/icons/edit.svg';
import remove from '../assets/img/icons/remove.svg';

export const Student = ({id,fullName,avatarURL,age,payment,gender,editStudent,deleteStudent})=> {
  return (
    <div>
      <div className="student__column">
        <div className="student__img">
           <img src={avatarURL} alt="logo" />
        </div>
        <div className="student__info">
          <div className="student__name">
            <p className="student__top">Имя</p>
            <h1 className="student__bottom">{fullName}</h1>
          </div>
          <div className="student__age">
            <p className="student__top">Возраст</p>
            <h1 className="student__bottom age">{age}</h1>
          </div>
          <div className="student__gender">
            <p className="student__top">пол</p>
            <h1 className="student__bottom gender">{gender}</h1>
          </div>
          <div className="student__money">
            <p className="student__top">оплата</p>
            <h1 className="student__bottom pay">{payment}</h1>
          </div>
        </div>
        <div className="student__action">
          <div className="student__edit" onClick={()=>editStudent(id)}>
            <img src={edit} alt="" />
          </div>
          <div className="student__remove" onClick={()=>deleteStudent(id)}>
            <img src={remove} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
