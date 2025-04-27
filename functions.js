//function statement
function xyz(){
    console.log("xyz");
}
// functional expression
// right part is anonymous function
// anonymous function are used when a function is used as value.
let abc=function(){
    console.log("abc");
}

// function declaration
abc();
xyz();

// Parameter and argument
function pqr(a,b){ // a,b is parameter.
    console.log(a+b);

}
pqr(5,10); //argument


// Named functional expression
let def=function ghi(){
    console.log("def");
}

// In JavaScript, first-class functions mean that functions are treated like any other value they are first class citizens.
// 1) Assign Functions to Variables
let x=function(){
    console.log("1");
}
// 2) Pass Functions as Arguments
function sayHello() {
    console.log("Hello!");
  }
  
  function jkl(fn) {
    fn();
  } 
  
  jkl(sayHello); // Output: Hello!

// 3)Return Functions from Other Functions
function rrr(){
    return function(){
        console.log("rrr");
    };
}

// 4)Store Functions in Data Structures
const operations = [
    function(a, b) { return a + b; },
    function(a, b) { return a - b; },
    function(a, b) { return a * b; }
  ];
  
  console.log(operations[0](5, 3)); // Output: 8 (Addition)
  
// 5) You can also have functions as properties in objects:
const mathOperations = {
    add: function(a, b) {
      return a + b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide:()=>{   // arrow function
      return a/b;
    }
  };
  
  console.log(mathOperations.add(3, 4)); // Output: 7
  console.log(mathOperations.multiply(3, 4)); // Output: 12
  // Higher order function
  // A function that takes other functions as arguments or returns a function is known as a higher-order function. 
  //In JavaScript, this is enabled due to the first-class nature of functions.
  // setTimeout is a higher order function.
  setTimeout(() => console.log("Executed after delay"), 1000);
  // map, filter, reduce are higher order functions
  const numbers = [1, 2, 3, 4, 5];
  const doubleNumbers = numbers.map(x => x * 2);
  console.log(doubleNumbers); // Output: [2, 4, 6, 8, 10]

  // Arrow functions
  const add = (a, b) => a + b;
  add(2,3);  // output: 5
  // Arrow functions are a concise way to define functions in JavaScript, introduced in ES6.
  const divide = (k, l) => {
    if (l === 0) {
      return "Cannot divide by zero";
    }
    return k / l;
  };
  

