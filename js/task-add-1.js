/*Напишите ф-цию конструктор, которая будет создавать избирателя 
(name);
У избирателя будет метод vote(presidentName) 
который будет менят глобальный объект
 статистики голосов и добавлять туда ключ (имя избирателя) 
 и значение (имя президента).
Один избиратель голосует только один раз(!)
В конце подсчитайте голоса и определите кто выиграл выборы */

const result = {};

const Voter = function (name) { 
  this._name = name;

  this.vote = function (presidentName) { 
    for (const item in result) { 
      if (item.name === this._name) return;
    }
    result[this._name]= presidentName;
  }
}

const vasia = new Voter('vasia1');
const vasia1 = new Voter('vasia2');
const vasia2 = new Voter('vasia3');
const vasia3 = new Voter('vasia4');
const vasia4 = new Voter('vasia5');
const vasia5 = new Voter('vasia6');
vasia.vote('president1');
vasia1.vote('president2');
vasia2.vote('president1');
vasia3.vote('president4');
vasia4.vote('president1');
vasia5.vote('president5');

console.log(result);

const winner = function (result) {
  const presidents = {};
  for (const item in result) {
    const president = result[item];
    // console.log(president);
    if (president in presidents) {
      presidents[president] += 1;
    }
    else {
      presidents[president] = 1;
    }
  }
  console.log(presidents);
  const votesArr = Object.values(presidents);
  const maxVotes = Math.max(...votesArr);
  // const presidentWinner = votesArr.indexOf(maxVotes);
  for (const key in presidents) {
    if (presidents[key] === maxVotes) { 
        return console.log(`Winner ${key} - votes ${maxVotes}`);
    }
  }

}

winner(result);
