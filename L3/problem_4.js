/*

P
  - input: a string...
    - where a comma represents a separate number or range
    - where possible range characters are -, :, .. 
    - where numbers are built starting from the rightmost digit using
      the number at the end of a given range
    - where ranges are always inclusive
      - questions:
        - do I need to handle invalid input?
        - do I need to handle special numbers?
        - do I need to handle negatives?
        - do I need to handle empty lists?
        - do I need to handle mixed separators?
  - output: 
    - what is a list? assume an array
    - a list of all included numbers, delimited by commas (elements of array)

E
  - generateList("1-3, 1-2")   -> [1, 2, 3, 11, 12]
  - generateList("1:3, 1:2")   -> [1, 2, 3, 11, 12]
  - generateList("1..3, 1..2)  -> [1, 2, 3, 11, 12]
  - generateList("1:5:2")      -> [1, 2, 3, 4, 5, 6, ... 12]
  - generateList("104-2")      -> [104, 105, ... 112]
  - generateList("104-02")     -> [104, 105, ... 202]
  - generateList("545, 64:11") -> [545, 564, 565, .. 611]
  
D
  - using an array for storage
  
A

  > overarching idea: process each individual "component" of the input string
    and store the results in an array to be returned
    
  > get all the "components/ranges" from the input string
    - split up the input string by commas to get each individual range
      - called 'ranges'
      
  > process the individual components and store the results in the returned array
    > check each element in ranges to establish integers vs. ranges
      - match against a non-integer char, checking for one or more characters in a row
        - store this as 'result'
      - if 'result'
        - split range into nested array using 'result'
        - convert each element into number
      - else
        - convert to number
      - reassign ranges to return value of this processing
      
    > process each element, pushing the correct values to the storage array
      - declare and initialize 'storage' to empty array
    
  
*/


function generateList(string) {
  let ranges = string.split(', ');
  
  ranges = formatRanges(ranges);

  return processRanges(ranges);  
}

function formatRanges(ranges) {
  ranges.map(el => {
    let delimiter = el.match(/\D+/g);
    
    if (delimiter) {
      el = el.split(delimiter);
      return el.map(str => Number(str));
    }
    
    else {
      return Number(el);
    }
  });
  
  return ranges;
}

function processRanges(ranges) {
  let storage = [];
  
  ranges.forEach(element => {
    if (Array.isArray(element)) {
      let start = findCurrentNum(element[0], storage);
      let end   = findCurrentNum(String(start), [element[element.length - 1]]);
      for (; start <= end; start += 1) {
        storage.push(start);
      }
    } else {
      storage.push(findCurrentNum(element, storage));
    }
  });
  
  return storage;
}

function findCurrentNum(string, storage) {
  if (String(storage[storage.length - 1]) === 'undefined') {
    return Number(string);
  } else {
    let lastNum = storage[storage.length - 1];
    for (let currentNum = Number(string); ; currentNum += 1) {
      let currentString = String(currentNum);
      let end = currentString.length - string.length;
      if (currentNum > lastNum && currentString.slice(end) === string) return currentNum;
    }
  }
}
console.log(generateList("1-3, 1-2"))    //-> [1, 2, 3, 11, 12]
// generateList("1:3, 1:2")    //-> [1, 2, 3, 11, 12]
// generateList("1..3, 1..2")  //-> [1, 2, 3, 11, 12]
// generateList("1:5:2")       //-> [1, 2, 3, 4, 5, 6, ... 12]
// generateList("104-2")       //-> [104, 105, ... 112]
// generateList("104-02")      //-> [104, 105, ... 202]
// generateList("545, 64:11")  //-> [545, 564, 565, .. 611]
console.log(generateList('1, 2, 1, 3'));



// wow this problem is really hard
// going to do it again later
// not giving up, just taking a break
// shouldn't have used this as the first problem of the day to practice interviewing