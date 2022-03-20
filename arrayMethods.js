//array.shift() - extracts an item from the beginning 
//arr. unshift(...items) - adds items to the beginning 

//splice can insert, remove, and replace elements 

//translate border-left-width to borderLeftWidth
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

//   Write a function filterRange(arr, a, b) that gets an array arr, 
//   looks for elements with values higher or equal to a and lower or equal to b 
//   and return a result as an array.
function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  alert( filtered ); // 3,1 (matching values)
  
  alert( arr ); // 5,3,8,1 (not modified)

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:


function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  
  alert( arr ); // [3, 1]

  //sort in decreasing order 
  let arr = [5, 2, 1, -10, 8];

    arr.sort((a, b) => b - a);

    alert( arr );

    //copy and sort array 
    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (no changes)

    //create an extendable calculator 
    function Calculator() {

        this.methods = {
          "-": (a, b) => a - b,
          "+": (a, b) => a + b
        };
      
        this.calculate = function(str) {
      
          let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
      
          if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
          }
      
          return this.methods[op](a, b);
        };
      
        this.addMethod = function(name, func) {
          this.methods[name] = func;
        };
      }
      //map to objects 
      let john = { name: "John", surname: "Smith", id: 1 };
      let pete = { name: "Pete", surname: "Hunt", id: 2 };
      let mary = { name: "Mary", surname: "Key", id: 3 };
      
      let users = [ john, pete, mary ];
      
      let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
      }));
      
      /*
      usersMapped = [
        { fullName: "John Smith", id: 1 },
        { fullName: "Pete Hunt", id: 2 },
        { fullName: "Mary Key", id: 3 }
      ]
      */
      
      alert( usersMapped[0].id ); // 1
      alert( usersMapped[0].fullName ); // John Smith

      
      //Please note that in the arrow functions we need to use additional brackets.

//We can’t write like this:

let usersMapped = users.map(user => {
  fullName: `${user.name} ${user.surname}`,
  id: user.id
});
//As we remember, there are two arrow functions: without body value => expr and with body value => {...}.

//Here JavaScript would treat { as the start of function body, not the start of the object. The workaround is to wrap them in the “normal” brackets:

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
//Now fine.


// sort users by age

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr = [ pete, john, mary ];
  
  sortByAge(arr);
  
  // now sorted is: [john, mary, pete]
  alert(arr[0].name); // John
  alert(arr[1].name); // Mary
  alert(arr[2].name); // Pete

  //shuffle an array 
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr = [1, 2, 3];
  shuffle(arr);
  alert(arr);
//   That somewhat works, because Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly.

//   But because the sorting function is not meant to be used this way, not all permutations have the same probability.
  
//   For instance, consider the code below. It runs shuffle 1000000 times and counts appearances of all possible results:
  
   function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  // counts of appearances for all possible permutations
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // show counts of all possible permutations
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }
  An example result (depends on JS engine):
  
  123: 250706
  132: 124425
  213: 249618
  231: 124880
  312: 125148
  321: 125223
//   We can see the bias clearly: 123 and 213 appear much more often than others.
  
//   The result of the code may vary between JavaScript engines, but we can already see that the approach is unreliable.
  
//   Why it doesn’t work? Generally speaking, sort is a “black box”: we throw an array and a comparison function into it and expect the array to be sorted. But due to the utter randomness of the comparison the black box goes mad, and how exactly it goes mad depends on the concrete implementation that differs between engines.
  
//   There are other good ways to do the task. For instance, there’s a great algorithm called Fisher-Yates shuffle. The idea is to walk the array in the reverse order and swap each element with a random one before it:
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
//   Let’s test it the same way:
  
   function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // counts of appearances for all possible permutations
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // show counts of all possible permutations
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }
//   The example output:
  
  123: 166693
  132: 166647
  213: 166628
  231: 167517
  312: 166199
  321: 166316
//   Looks good now: all permutations appear with the same probability.
  
//   Also, performance-wise the Fisher-Yates algorithm is much better, there’s no “sorting” overhead.

//get average age 
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  
  let arr = [ john, pete, mary ];
  
  alert( getAverageAge(arr) ); // 28

  // Filter unqiue array members 

  function unique(arr) {
    /* your code */
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O

  //create keyed object from array 
  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }