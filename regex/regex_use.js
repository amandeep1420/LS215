// using match
let string; let do_something;

if (string.match(/pattern/)) do_something

// return value is truthy; return value is an array with various components
// depending on evaluation

// splitting strings

// use a simple string
// or use a regex

'cat in the hat'.split(/\s+/)

// using capture groups and backreferences - this will require lots of practice
// backreferences in JS use the format $1, $2, etc

// transformation via replacement

let text = 'Four score and seven';
let vowelless = text.replace(/[aeiou]/g, '*');
// -> 'F**r sc*r* *nd s*v*n'

let text2 = 'We read "War of the Worlds".';
console.log(text2.replace(/(['"]).+\1/, '$1The Time Machine$1'));
// outputs: We read "The Time Machine".