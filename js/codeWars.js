// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// var re = /яблоки/gi; //mi
// var str = 'Яблоки круглые и яблоки сочные.';
// var newstr = str.replace(re, 'апельсины');
// console.log(newstr); // апельсины круглые и апельсины сочные.

// const result = words.filter(word => word.length > 6);

const vowels = [ 'A', 'E', 'I', 'O', 'U'];

const vowelsReplace = str => {
  // let newStr = str;
  // for (const vowel of vowels) {
  //   for (let i = 0; i < str.length; i++){
  //   newStr = newStr.replace(vowel, '');
  //     newStr = newStr.replace(vowel.toLowerCase(), '');
  //   }
  // }
  // return newStr;
  return str.replace(/[aeiou]/gi, '');
 }

//  console.log(vowelsReplace("HelLo WOrld!"));
  ;

// An isogram is a word that has no repeating letters, 
// consecutive or non - consecutive.Implement a function 
// that determines whether a string that contains only letters 
// is an isogram.Assume the empty string is an isogram.
// Ignore letter case.

const isIsogram = str => {
  for (let i = 0; i < str.length; i += 1) {
    if (str.toLowerCase().includes(str[i].toLowerCase(), i + 1)) return false;    
  }
  return true;
  // return new Set(str.toUpperCase()).size == str.length; //new Set returns the set of Unique entries, size returns q-ty of unique elements
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false