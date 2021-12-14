function myReduce(array, func, initial) {
  let startIndex = 0;
  
  if (initial === undefined) {
    initial    = array[0];
    startIndex = 1;
  }
  
  let result = func(initial, array[startIndex]);
  
  for (let i = startIndex + 1; i < array.length; i += 1) {
    result = func(result, array[i]);
  }
  
  return result;
}


let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

//////////////// theirs is much better; not used to using forEach yet

function myReduce(array, func, initial) {
  let value;
  let index;

  if (initial === undefined) {
    value = array[0];
    index = 1;
  } else {
    value = initial;
    index = 0;
  }

  array.slice(index).forEach(element => value = func(value, element));
  return value;
}