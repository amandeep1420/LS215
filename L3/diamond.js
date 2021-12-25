// test test 1 2 3

function substrings(string) {
  let subs = [];
  
  let chars = [...string];
  
  chars.forEach((char, index) => {
    for (let endPoint = index + 1; endPoint <= string.length; endPoint += 1) {
      subs.push(string.slice(index, endPoint));
    }
  })
  
  return subs;
}