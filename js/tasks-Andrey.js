// №1
// Написати ф-ю яка приймає рік
// Повертає століття.

const yearToCentury = year => year % 100 === 0 ? Math.trunc(year / 100) : Math.trunc(year / 100) + 1;

console.log('1900 :>> ', yearToCentury(1900));
console.log('1870 :>> ', yearToCentury(1870));
console.log('2020 :>> ', yearToCentury(2020));

// №2 yearToCentury(1920)запитуємо в користувача роки до тих пір поки він не натисне Cancel
// Всі роки які вводить користувач записується в масив years
// Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття


const years = [];
let userYear;
do {
  userYear = prompt('Enter year, please');
  if (!userYear) break;

  years.push(userYear);
} while (userYear); 

console.log(years);
if (years.length !== 0) {
  for (const item of years) {
    console.log(`${item} рік - ${yearToCentury(item)} століття`);
  }
}
else { 
  console.log("No data entered");
}
// №3
// Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// Функція повертає true якщо рік високосний і false якщо ні

const leapYear = year => year % 4 === 0;

console.log('високосний - 1900', leapYear(1900));
console.log('високосний - 1901', leapYear(1901));
console.log('високосний - 1920', leapYear(1920));

// #4
// Напишите функцию f, которая будет обёрткой вокруг другой функции g. Функция f обрабатывает первый аргумент сама, а остальные аргументы передаёт в функцию g, сколько бы их ни было.
// Например:
// function f() { /* ваш код */ }
// function g(a, b, c) {
//   alert( a + b + (c || 0) );
// }
// f("тест", 1, 2); // f выведет "тест", дальше g посчитает сумму "3"
// f("тест2", 1, 2, 3); // f выведет "тест2", дальше g посчитает сумму "6"
// Код функции f не должен зависеть от количества аргументов.

function f(string, ...args) { 
  console.log(string);
  return sum(...args);
}

function sum(...args) { 
    let total = 0;
    for (const arg of args) total += arg;
    console.log('total :>> ', total); 
    return total;
}
  
f("sum ", 1, 2, 3);


// №6
let money = 85;
// Если стоимость машины меньше money вывести массив машин которые вы можете приобрести
let cars = [
{name:'ferrari', cost: 100},
{name:'lambo', cost: 90},
{name:'bmw', cost: 80},
{name:'subaru', cost: 60}
]
const arr = [];
for (const car of cars) { 
  if (money >= car.cost) arr.push(car);
}
console.table(arr);