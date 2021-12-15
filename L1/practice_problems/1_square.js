/*
> first, transform each pair into the area
> then, reduce the array into a total
*/

function totalArea(array) {
  let areas = array.map(subarr => subarr[0] * subarr[1]);
  return areas.reduce((total, area) => total + area);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);    // 141

/*
> filter for rectangles that are squares
> invoke totalArea with filtered array and return that
*/

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}