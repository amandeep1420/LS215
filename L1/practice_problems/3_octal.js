/*
> create array of digit strings and reverse it
> transform each digit into a base-10 number (cannot use JS tools to convert)
> transform each digit using 8**index * digit
> reduce the array to find the total
*/

function octalToDecimal(numberString) {
  let digits = numberString.split('').reverse();
  return digits.map(numString => parseInt(numString, 10))
               .map((num, index) => num * (8**index))
               .reduce((total, num) => total + num);
}


function octalToDecimal(numberString) {
  return numberString.split('').reverse().reduce((total, num, index) => total + Number(num) * (8**index), 0);
}