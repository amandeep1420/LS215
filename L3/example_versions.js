function compareVersions(v1, v2) {
  if ([v1, v2].some (input => typeof input !== 'string')) return 'not strings!';
  if (v1.match(/[^\.\d]/) || v2.match(/[^\.\d]/)) return null;
  if (!/[\d]/.test(v1[0]) || !/[\d]/.test(v2[0])) return null;
  if (!/[\d]/.test(v1[v1.length - 1]) || !/[\d]/.test(v2[v2.length - 1])) return null;
  
  let v1Nums = v1.split('.').map(numString => parseInt(numString, 10));
  let v2Nums = v2.split('.').map(numString => parseInt(numString, 10));
  
  let maxLength = v1Nums.length > v2Nums.length ? v1Nums.length : v2Nums.length;
  
  for (let index = 0; index < maxLength; index += 1) {
    let v1Num = v1Nums[index] || 0;
    let v2Num = v2Nums[index] || 0;
    
    let result = compareNums(v1Num, v2Num);
    if (result) return result;
  }
  
  return 0;
}


function compareNums(n1, n2) { // unnecessary helper; move first two branches into main function
  if (n1 > n2) {
    return -1;
  } else if (n1 < n2) {
    return 1;
  } else {
    return 0;
  }
}

// compareVersions('1', '0.1');  // 1
// compareVersions('1', '1.000');  // 0
// compareVersions('1.1', '1.1.1')   // -1
// compareVersions('1.0.0.0.0', '1');   // 0
// compareVersions('4.2', '4.2.27');    // -1

// compareVersions(null, undefined);

console.log(compareVersions('1.0', '1.0.5')); 


// did not do ANY PEDAC WHATSOEVER for this
// don't move forward until you're ready to do PEDAC with every problem
// stop being lazy, you coward!

/*
(important notes regarding PEDAC:)

Understanding the Problem
  - create a section for inputs
  - create a section for outputs
  - don't move forward until you've listed ALL the implicit and explicit reqs
  - don't move forward until you've listed all relevant definitions and rules
  - I can't stress this enough

Examples/Test Cases
  - two types of cases: generic (expected) and edge
  - good test case guidelines:
    Input types:
      - can you handle unexpected input types?
      
    Special values:
      - numbers: can you handle zero, negatives, fractions, NaN, Infinity, etc.?
      - strings/arrays/objects: can you work with empty values?
      - arrays: can you handle sparse arrays or arrays with object properties?
    
    Valid/Invalid Inputs:
      - what should be considered a valid input?
        - ex. if we're dealing with words, what is a "word"? be explicit
      - what should we return when invalid input is used?
        - ex. null, undefined, an error message
      - what should we do when an input is omitted?
        - ex. issue an error message, set a default value, return a value
        
    Cover the requirements you outlined initially as completely as possible:
      - cover all of your test cases, one by one if need be.
      - look for the word "if" in the requirement breakdown. conditional 
        requirements need test cases that cover ~both sides~ of the condition
        to have full coverage.
        - ex:
          - If one argument is a string and the other is a number,
            convert the second argument to the type of the first argument,
            then return both as a two-element array.
            foo('42', 43);                               // ["42", "43"]
            foo(42, '43');                               // [42, 43]
            
    Avoid testing more than one requirement per test case.
      - isolating each specific requirement will make it easier to validate
        and debug your solution later on.
      - on the other hand, it's okay to test a single requirement using more
        than one test case - especially when texting more complex reqs,
        such as conditional reqs.
    
    





















*/