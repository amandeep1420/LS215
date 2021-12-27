function doubler(array) {
// ...
}


doubler([2]) // return [4]
doubler(['meow']) // return ['meowmeow']
doubler([['array']]) // return [['array'], ['array']]  --> this also tests nested objects case

let array = [1, 2, 'cat', ['array']] // covers multiple element types case, too
doubler(array)
console.log(array) // should log [1, 2, 'cat', ['array']]

doubler([NaN, 2]) // return [NaN, 4]
doubler(['', 'a', '']) // return ['', 'aa', '']

// non-primitive elements should have their reference duplicated, not their value
// in other words: if element @ index 0 was 4, then the doubling should be array[0] * 2, not 4 * 2
// hmm...see how they test this
// ...
// non-primitive elements should have their reference duplicated, not their value
let doubled = doubler([{ a: 'b' }]);
doubled[0] === doubled[1];             // true

doubler([2, 2, 2]) // return [4, 4, 4]

let array2 = [1, 2]
array2.length = 5
doubler(array) // return [2, 4] -> 'empty' elements should be removed/handle sparse arrays

doubler([[, , ], []]) // return [[, , ], [], [, , ], []] -> do not modify empty inner arrays

let array3 = [1]
array3.prop = 'do not modify me'
doubler(array3) // return [2, prop: 'do not modify me'] -> properties should remain unchanged

let array4 = [1, []]
array4[1].prop = 'me neither'
doubler(array4) // return [2, [prop: 'me neither']] -> properties of inner arrays should remain, too

doubler([]) // return [] -> empty array should remain unchanged

doubler([1], 2, 3, 'cat', [1, 2, 3]) // return [2] -> only first argument is used, ignore the rest

doubler('cat') // return ['cc', 'cc', 'aa', 'aa', 'tt', 'tt'] -> treat string as array of chars

doubler(1234) // return [2, 4, 6, 8] -> treat non-negative int as array of digits

doubler({one: 1, two: 2, three: 3}) // return [2, 4, 6] -> treat objects as array of property values

doubler(undefined) // return 'invalid input' -> all other input types are invalid and should return
                   //                           the string 'invalid input'





// their generic case tests

// elements that are numbers should be multiplied by 2
doubler([1, 2, 3]);                    // [2, 4, 6]

// elements that are strings should be repeated twice via concatenation
doubler(['a', 'b', 'c']);              // ["aa", "bb", "cc"]

// other types of elements should be duplicated in the array
doubler([true, false]);                // [true, true, false, false]
doubler([null]);                       // [null, null]
doubler([undefined]);                  // [undefined, undefined]
doubler([[1], []]);                    // [[1], [1], [], []]
doubler([{ foo: 'bar' }]);             // [{ foo: "bar" }, { foo: "bar" }]
doubler([function foo() {}]);          // [function foo(), function foo()]
doubler([/abc/]);                      // [/abc/, /abc/]

// the input array should not be mutated
let array = [1, 2, 3];
doubler(array);                        // [2, 4, 6]
array;                                 // [1, 2, 3]

// their edge case tests

// elements that are special number values should remain unchanged
doubler([NaN, Infinity, -Infinity]);   // [NaN, Infinity, -Infinity]

// elements that are any other type of number should be treated normally (multiplied by 2)
doubler([0.42, -5, 0, -0]);            // [0.84, -10, 0, -0]

// elements that are empty strings should remain unchanged
doubler(['']);                         // [""]

// elements that are any other type of string should be treated normally (repeated twice)
doubler([' ', 'aB', '@', '\n', '1']);  // ["  ", "aBaB", "@@", "\n\n", "11"]

// the input array can contain a mixture of different types of elements
doubler([1, 'a', true, [], {}]);       // [2, "aa", true, true, [], [], {}, {}]

// non-primitive elements should have their reference duplicated, not their value
let doubled = doubler([{ a: 'b' }]);
doubled[0] === doubled[1];             // true

// elements that appear more than once should be treated normally (as specified above)
doubler([1, 1, true, true, {}, {}]);   // [2, 2, true, true, true, true, {}, {}, {}, {}]

// elements that contain nested arrays or objects should be treated normally (duplicated)
doubler([[1, [2, 3], {}]]);            // [[1, [2, 3], {}], [1, [2, 3], {}]]
doubler([{ a: [1] }]);                 // [{ a: [1] }, { a: [1] }]

// if the input array contains empty slots (a "sparse array"), they should be removed
doubler([1, , 2, , , 3]);              // [2, 4, 6]

// if an inner array (element) contains empty slots, they should remain unchanged
doubler([[1, , , 2]]);                 // [[1, empty × 2, 2], [1, empty × 2, 2]]

// if the input array contains any object properties, they should remain unchanged
let array = [1, 2];
array.foo = 'bar';
doubler(array);                        // [2, 4, foo: "bar"]

// if an inner array (element) contains any object properties, they should remain unchanged
let array = [1, 2];
array.foo = 'bar';
doubler([array]);                      // [[1, 2, foo: "bar"], [1, 2, foo: "bar"]]

// if the input array is empty, return an empty array
doubler([]);                           // []

// if multiple arguments are passed, ignore all but the first
doubler(['a'], ['b']);                 // ['aa']

// if the argument is a string, treat it as an array of characters
doubler('abc');                        // ["aa", "bb", "cc"]
doubler('123');                        // ["11", "22", "33"]
doubler('');                           // []

// if the argument is a non-negative integer, treat it as an array of digits
doubler(123);                          // [2, 4, 6]
doubler(0);                            // [0]

// if the argument is an object, treat it as an array of its property values
doubler({ a: 1, b: 2 });               // [2, 4]
doubler({ a: 'A', b: [] });            // ["AA", [], []]
doubler({});                           // []

// their edge case tests for invalid inputs

// all other kinds of inputs are invalid, and should return the string 'Invalid input'
doubler(-1);                           // "Invalid input"
doubler(0.42);                         // "Invalid input"
doubler(Infinity);                     // "Invalid input"
doubler(NaN);                          // "Invalid input"
doubler(true);                         // "Invalid input"
doubler(false);                        // "Invalid input"
doubler(null);                         // "Invalid input"
doubler(undefined);                    // "Invalid input"
doubler(function () {});               // "Invalid input"
doubler(/abc/);                        // "Invalid input"
doubler();                             // "Invalid input"