function myOwnEvery(array, func) {
  array.forEach(e => {
    if (!func(e)) {
      return false;
    }
  });
  
  return true;
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true