/*
P
  - write a function that takes a word string as an argument, and returns true
    if the word can be spelled using the set of blocks specified - false otherwise.

  - input: a string
    - that may contain non-alphabetical chars
    - that may contain upper and lower cased chars
    - that may or may not be a string
  - output: a boolean
    - that represents whether the string can be made using only the specified blocks,
      with each block being used only once

E
  isBlockWord('BATCH');      // true
  isBlockWord('BUTCH');      // false
  isBlockWord('jest');       // true
  isBlockWord('12354batch')  // false
  isBlockWord('')            // false
  isBlockWord('batch ')      // false
  isBlockWord(123)           // false
  isBlockWord('bAtCh')       // true
  isBlockWord(undefined)     // false

D
  - string pairs within a larger array

A
  > evaluating a string
  
  > guard against other data types
    - if the input isn't a string, return false
  
  > setup a key for evaluation
    - set the block pairs as strings, stored within an array, declared + initialized
      constant 'key' to array
    - reassign string variable to return value of downcasing input string
  
  > evaluate each character in the input string to check for double-usage of a single block
    - for each string 'pair' in the key array
      - set each character in the pair to a local variable in the loop
      - check for the index for each character in the input string and save result
        to a local variable
      - if both indexes are NOT -1, return false
      
      
  > evaluate each character in the input string to check for non-block characters
    - copy the key array joined into a single string to a new variable, 'key2'
    - for each letter in the input string
      - if it is not present in key2, return false

  > return true

*/
const key = ['bo', 'gt', 'vi', 'xk', 're', 'ly', 'dq', 'fs', 'zm', 'cp', 'jw',
                'na', 'hu'];

function isBlockWord(string) {
  if (typeof string !== 'string' || string.length === 0) return false;
  
  string = string.toLowerCase();
                
  for (let index = 0; index < key.length; index += 1) {
    let firstChar = key[index][0];
    let secondChar = key[index][1];
    
    let firstCharResult = string.indexOf(firstChar);
    let secondCharResult = string.indexOf(secondChar);
    
    if (firstCharResult !== -1 && secondCharResult !== -1) return false;
  }
  
  const key2 = [...key].join('');
  
  for (let index = 0; index < string.length; index += 1) {
    if (!key2.includes(string[index])) return false;
  }
  
  return true;
}


  console.log(isBlockWord('BATCH'));      // true
  console.log(isBlockWord('BUTCH'));      // false
  console.log(isBlockWord('jest'));       // true
  console.log(isBlockWord('12354batch'))  // false
  console.log(isBlockWord(''))           // false
  console.log(isBlockWord('batch '))      // false
  console.log(isBlockWord(123))           // false
  console.log(isBlockWord('bAtCh'))       // true
  console.log(isBlockWord(undefined))     // false