function isBalanced(string) {
  let chars   = string.replace(/[^()]/g, ''); // unnecessary
  let counter = 0;
  
  for (let index = 0; index < chars.length; index += 1) {
    let char = chars[index];
    char === '(' ? counter += 1 : counter -= 1;
    if (counter < 0) return false;
  }
  
  return counter === 0;
}

// wish I had a more elegant solution
// do this one again; this was done poorly