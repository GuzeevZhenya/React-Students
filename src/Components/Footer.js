import React from 'react';

export default function Footer({toogleModal,deleteAllStudents,countStudents,totalPayment}) {
  return (
    <>
      <div className="stick"></div>
      <div className="total">
        <div className="total__count">
          <p className="total__title">Общий доход:</p>
          <h1 className="total__gain">{totalPayment}</h1>
        </div>
        <div className="total__people">
          <p className="total__written">Всего записано:</p>
          <h1 className="total__student">{countStudents}</h1>
        </div>
        <div className="button">
          <button onClick={toogleModal} className="add__student button-pushed">Добавить студента</button>
          <button onClick={deleteAllStudents} className="clear__student button-pushed">Очистить список</button>
        </div>
      </div>
    </>
  );
}
