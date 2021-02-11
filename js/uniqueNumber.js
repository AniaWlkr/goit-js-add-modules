// #5
// Напишите ф-цию которая принимает массив чисел  и возвращает массив в котором останутся только уникальные числа
function ifUniqueNumber(num) { 
    let str = String(num).split('');
    let n = 0;

  for (let i = 0; i <= 9; i += 1) { 
      let n = 0;
      for (let j = 0; j < str.length; j+=1) {
        if (str[j] === String(i)) n += 1;
      }      
      if (n > 1) return false;
    }
  return true;
  }
 
function uniqueArr(args) { 
  const arr = [];
  for (const arg of args) { 
    if (ifUniqueNumber(arg)) arr.push(arg);
  }
  return arr;
}

const arr = [5, 67, 44, 78, 333, 44];
// console.log(uniqueArr(arr));

const foo = arr => {
	const a = [];
	for (let i = 0; i <= arr.length; i += 1) {
		if (arr.indexOf(arr[i]) === i) { //indexOf returns 1st entity
			a.push(arr[i]);
		}
	}
	return a;
};

console.log(foo(arr));

//const foo = arr => arr.filter((el, idx) => arr.indexOf(el) === idx);