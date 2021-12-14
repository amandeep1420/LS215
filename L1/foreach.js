let max = 0;

function myForEach(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    func(array[i], i, array);
  }
}

let findMax = num => max = max > num ? max : num;

let myArr = [1, 2, 3, 4, 4, 3, 2, 10];

myForEach(myArr, findMax);

console.log(max);