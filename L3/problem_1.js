/*

P 
  - prompt: write a program that cleans up user-entered phone numbers so that
            they can be sent as SMS messages.

  - input: a user-entered phone number
    - ignore anything that's not a number
    - if the phone number is less than 10 digits, it is a bad number
    - if the phone number is 11 digits and the first number is 1, trim the 
      1 and use the last 10 digits
    - if the phone number is 11 digits and the first number is not 1, it is 
      a bad number
    - if the phone number is more than 11 digits, assume that it is a bad number
    - for bad numbers, return a string of 10 0's
  - output:
    - cleaned-up number as a string
E
  - below
D
  - array...honestly not necessary in the end, we didn't have to do any iteration
  - using a 'fixed' string would've worked
A
  > get the numbers
    - possible strategy: use a regex to match numbers
    - possible implementation: numberString.match(/[\d]/g)
      - returns an array of numbers as strings
  > return the correct string
    - if numbers array length is less than 10, return 10 0s as string
    
    - if numbers array length is 10, return array joined as a string 
    
    - if numbers array length is 11
      - if first number is 1
        - cut the first number off and return rest of array joined as string
      - else
        - return 10 0s as a string
    
    - if numbers array length is greater than 11
      - return 10 0s as a string
*/


function numberCleanup(numberString) {
  let numbers = numberString.match(/[\d]/g); // replace would've been good here tbh
                                             // I should use it more
  if (numbers.length < 10) return '0000000000';
  
  if (numbers.length === 10) return numbers.join('');
  
  if (numbers.length === 11) {
    if (numbers[0] === '1') {
      return numbers.slice(1).join('');
    }
  } else {
    return '0000000000';
  }
  
  return '0000000000';
}

// this problem was fairly straightforward
// just a bunch of if statements in the end
// could refactor to be more concise/elegant but we're just trying to get
// a working solution that fulfills the reqs ASAP


console.log(numberCleanup('1234567890')) // returns 1234567890, is valid
console.log(numberCleanup('11234567890')) // returns 1234567890, is valid
console.log(numberCleanup('112345678900')) // returns 10 0s, invalid
console.log(numberCleanup('11')) // returns 10 0s, invalid
console.log(numberCleanup('01234567890')) // returns 10 0s, invalid
console.log(numberCleanup('123123123123123123123')) // returns 10 0s, invalid
console.log(numberCleanup('12.3.456.78.9.0')) // valid
console.log(numberCleanup('11   -234(5678). 90')) // valid
// console.log(numberCleanup())
// console.log(numberCleanup())
