// 42:30

function luhnCheck(numString) {
  let setsOfFour = numString.match(/[\d]{4}/g);
  
  let processedNumbers = setsOfFour.map(numStr => createChecksum(numStr));
  
  let total = processedNumbers.map(numArr => numArr.reduce((n1, n2) => n1 + n2))
                               .reduce((n1, n2) => n1 + n2);
  
  return total % 10 === 0;
}

function createChecksum(numStr) {
  let strDigits = numStr.split('');
  
  let digits = strDigits.map(numStr => parseInt(numStr, 10));
  
  let fixedDigits = [];
  
  digits.forEach((digit, index) => {
    fixedDigits.push(luhnDigit(digit, index));
  });
  
  return fixedDigits;
}

function luhnDigit(digit, index) {
  if (index % 2 !== 0) {
    return digit;
  } else {
    digit = digit * 2;
    
    digit = digit > 9 ? digit - 9 : digit;
    
    return digit;
  }
}

console.log(luhnCheck("2323 2005 7766 3554" ))