//A Promise in JavaScript is an asynchronous operation that may complete in the future.
// It is used to handle asynchronous code such as API calls, file reading, or database queries.

//A Promise can have three states:

//Pending – The initial state (waiting for the operation to complete).
//Fulfilled – The operation was successful.
//Rejected – The operation failed.

//new Promise()	Creates a new Promise

//Methods                                      purpose
//new Promise()                                Creates a new Promise
//.then()	                                   Handles resolved data
//.catch()	                                   Handles errors
//.finally()	                               Runs always (success/fail)
//Promise.all([p1, p2])	                       Runs multiple Promises together & waits for all
//Promise.race([p1, p2])	                   Returns the first completed Promise




// Ex1.check number is even or not
// let checkEven = new Promise((resolve, reject) => {
//   let number = 4;
//   if (number % 2 === 0) resolve("The number is even!");
//   else reject("The number is odd!");
// });
// checkEven
//   .then((message) => console.log(message)) // On success
//   .catch((error) => console.error(error)); // On failure




//Ex2.
// const myPromise = new Promise((resolve, reject) => {
//   let success = true; // Change this to false to test rejection

//   setTimeout(() => {
//     if (success) {
//       resolve("Promise Resolved Successfully!"); // Success case
//     } else {
//       reject("Promise Rejected!"); // Failure case
//     }
//   }, 2000); // Simulate a delay of 2 seconds
// });

// // Handling the Promise
// myPromise
//   .then((result) => console.log(result)) // Runs when resolved
//   .catch((error) => console.error(error)) // Runs when rejected
//   .finally(() => console.log("Promise Completed!")); // Always runs

//----------------------------------------------------------------

//pratice : working code
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("promise resolved!");
//     } else {
//       reject("promise rejected!");
//     }
//   }, 5000);
// });

// myPromise
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("promise is conpleted!"));



//Q check number is odd or not
// const checkOdd = new Promise((resolve, reject) => {
//   let num = 4;
//   let num = 5;

//   if (num % 2 !== 0) {
//     resolve("promise Resolve!!");
//   } else {
//     reject("promise reject!!");
//   }
// });

// checkOdd
// .then((msg)=> console.log(msg))
// .catch((err)=> console.log(err))
// .finally(()=> console.log('promise completed!!'))




//Ex Chaining Multiple Promises
new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
})
  .then((num) => {
    console.log(num); // Output: 10
    return num * 2;
  })
  .then((num) => {
    console.log(num); // Output: 20
    return num * 3;
  })
  .then((num) => {
    console.log(num); // Output: 60
  })
  .catch((error) => console.error("Error:", error));
// Note -  Each .then() receives the return value of the previous .then().
