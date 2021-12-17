let firstName = 'Amandeep';
let lastName = 'Bal';
let fullName = firstName + ' ' + lastName;

console.log(fullName);

console.log(firstName.concat(lastName));

console.log(fullName.split(' '));

let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx);

let charCode = language.charCodeAt(idx);
console.log(charCode);
console.log(String.fromCharCode(charCode));

let idx2 = language.lastIndexOf('a');
console.log(idx2);

let a = 'a';
let b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4)); // second argument specifies a character count
console.log(language.substr(vIndex, 4));
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4)); // greater argument value is an upper index bound

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1); // no need to slice, everything aside from the first character was lowercase already - could've just called toLowerCase on the whole string
console.log(compoundSentence);

console.log(fact1[0]);
console.log(fact2[0]);

let pi = 22 / 7;
console.log(pi.toString().lastIndexOf('14'));

let boxNumber = 356..toString(); // interpreted as decimal point, not method separator
console.log(boxNumber); // using two periods works!!
console.log((356).toString()); // using parentheses also works

boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);

let rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');
let yell = false
if (name.endsWith('!')) {
 name = name.slice(0, -1).toUpperCase(); 
 yell = true;
}

let greeting = yell ? `HELLO ${name}! YOS YOS!` : `Hello ${name}.`
console.log(greeting);

