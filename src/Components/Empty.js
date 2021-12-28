import React from 'react';
import smile from '../assets/img/smile.svg';

export const Empty=()=> {
	return (
		<div>
	  <div class="empty">
      <div class="empty__img">
					<img src={smile} alt="smile" />
      </div>
      <div class="empty__title">
        <h1>Список студентов пуст</h1>
        <p>Добавьте хотя бы одного студента в список...</p>
      </div>
    </div>
		</div>
	)
}
