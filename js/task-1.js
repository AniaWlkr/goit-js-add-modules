/*написать секундомер с кнопками старт стоп и отображением времени:
1. На старт нельзя нажать больше одного раза
2. Нажав на стоп - пауза (+текст кнопки меняется на reset), 
нажав повторно кнопку (reset) - обнуление.
3. При паузе можно нажать старт и продолжить с момента остановки
4. Добавить к секундам десятые = 0.6s
5. Когда таймер доходит до 60-ти секунд - у нас добавляется показатель минут
6. Добавляем 3-ую кнопку Lap (круг), при нажатии на которую фиксируется текущее значение 
секундомера (не останавливая его) и добавляется это значение в список на экране */

const ref = {
  body: document.querySelector('body'),
}

const divRef = document.createElement('div');
ref.body.append(divRef);

const startBtnRef = document.createElement('button');
startBtnRef.textContent = 'Старт';

const stopBtnRef = document.createElement('button');
stopBtnRef.textContent = 'Стоп - пауза';

const lapBtnRef = document.createElement('button');
lapBtnRef.textContent = 'Фиксируем )';

const timeRef = document.createElement('span');
timeRef.classList.add('time');

const listRef = document.createElement('ul');

divRef.append(timeRef, startBtnRef, stopBtnRef, lapBtnRef, listRef);

let timeCheck = 0;
timeRef.textContent = timeCheck;
let setIntRef = '';

// const timeCalc = function (time) { 
  // let str = '';
  // if (time < 600) {
  //   str = `${time / 10} s`;
  // }
  // else if (time >= 600) { 
  //   str = `${Math.round(time/600)} min ${time % 600} s`;
  // }
  // timeRef.textContent = str;
// }

const timeCalc = time => timeRef.textContent = (time < 600)
  ? `${time / 10} s`
  : `${Math.round(time / 600)} min ${time % 600} s`;

const start = function () { 
  setIntRef = setInterval(() => {
    timeCheck += 1;
    timeCalc(timeCheck);
  }, 100);

  if (stopBtnRef.textContent === 'Reset') {
    stopBtnRef.textContent = 'Стоп - пауза'
  };
  startBtnRef.removeEventListener('click', start);
}

const stop = function () { 
  clearInterval(setIntRef);
  if (stopBtnRef.textContent === 'Reset') { 
    timeCheck = 0;
    timeRef.textContent = `${timeCheck}`;
    stopBtnRef.textContent = 'Стоп - пауза'
  }
  else {
    stopBtnRef.textContent = 'Reset';
}
startBtnRef.addEventListener('click', start);
}

const fix = function () { 
  const carrTime = timeRef.textContent;
  listRef.insertAdjacentHTML('beforeend', `<li> ${carrTime} </li>`);  
}

startBtnRef.addEventListener('click', start);
stopBtnRef.addEventListener('click', stop);
lapBtnRef.addEventListener('click', fix);