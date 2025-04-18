/*    Promises in JavaScript are objects that represent the eventual completion (or failure)
of an asynchronous operation and its resulting value.  
1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
2. Inversion of control is overcome by using promise.
2. i) A promise has 3 states: pending | fulfilled | rejected.
2. ii)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
2. iii) A promise resolves only once and it is immutable. 
2. iv) Using .then() we can control when we call the cb(callback) function.

3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()

 */

 // Creating new Promise and handling it

let usx = new Promise((resolve,reject)=>{   
    let success=false;   

    if(success){
        resolve("Promise is resolved");    // whether it is resolved

        //Whatever value you pass to resolve() will be received by the .then() method when the Promise is fulfilled.
    }else{
        reject("Promise is rejected");       // or rejected
        /*
A Promise is rejected when the asynchronous operation it represents encounters an error 
or fails to complete successfully. Rejection is a way to signal that something went wrong in the process,
and it allows the developer to handle the error gracefully using .catch().
 */
}

});



usx
.then(result=>console.log(result))    // if resolved .then() method
.catch(error=>console.log(error));   // if rejected .catch() method


// Handling a Promise from Network

fetch('https://jsonplaceholder.typicode.com/users')   // make network requests to an API.
  .then((response) => {
    // The first .then() receives the Response object from the fetch call
    // We need to call .json() to parse the response into JSON
    return response.json();   
  })
  .then((data) => {
    // The second .then() receives the parsed JSON data
    console.log('User data:', data); // Output: Array of user objects from the API
  })
  .catch((error) => {
    // If there is an error (e.g., network issue), it will be caught here
    console.log('Error fetching data:', error);
  });


  // Fetching a random joke from the Joke API
fetch('https://official-joke-api.appspot.com/jokes/random')
.then((response) => {
  return response.json(); // Parsing the response to JSON
})
.then((data) => {
  // Logging the joke to the console
  console.log(data);
  console.log('Random Joke:', data.setup);
  console.log('Punchline:', data.punchline);
})
.catch((error) => {
  console.log('Error fetching joke:', error);
});

// two types of creating a promise
let promise = new Promise((resolve, reject) => {
    const success = true; // Suppose success is true
    if (success) {
      resolve("Promise is successful");
    } else {
      reject("Promise failed");
    }
  });
  
  promise
    .then((value) => {
      console.log(value); // "Promise is successful"
    })
    .catch((error) => {
      console.error(error);
    });
    /* Pros: Simple to use when you just need to create and consume a promise once.
Cons:Since you are creating the promise immediately, you do not have flexibility to run this multiple times in a reusable way. */


const randomTask = () => {               // Function that returns a Promise
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Task succeeded!");
      } else {
        reject("Task failed!");
      }
    });
  };
  
  // Usage
  randomTask()
    .then((message) => {
      console.log("Resolved:", message);
    })
    .catch((error) => {
      console.error("Rejected:", error);
    });

    /*Pros:
Reusable: You can call the function multiple times, and each time, you get a new promise.
Flexible: This makes it easier to handle different values or perform the asynchronous task in a reusable way.
Each time randomTask() is called, it returns a new promise.
This is more flexible compared to creating a single promise instance.
By returning promises from functions, you gain more flexibility and reusability in your code. */

  

























/* 

Key Concepts of Promises:
States:
Pending: The initial state when the promise is neither fulfilled nor rejected.
Fulfilled: The state when the asynchronous operation completes successfully.
Rejected: The state when the asynchronous operation fails.
Methods:
then(): Used to define what happens when the promise is fulfilled. It takes two arguments: a callback function to handle success and an optional callback to handle failure.
catch(): Used to handle errors or rejections.
finally(): Optional method that runs regardless of whether the promise is fulfilled or rejected.

*/
