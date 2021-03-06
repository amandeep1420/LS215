function myFilter(array, func) {
  let newArr = [];
  for (let i = 0; i < array.length; i += 1) { // they used forEach here, lol
    if (func(array[i], i, array)) newArr.push(array[i]);
  }
  
  return newArr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let result = myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

console.log(result);