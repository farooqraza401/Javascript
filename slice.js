//slice() Non Mutating 

//The slice() method in JavaScript is used to extract a portion of an array and return it as a new array 
//without modifying the original array.

//Syntax
//array.slice(start, end);

//start: (Optional) The beginning index of the portion of the array to extract. If omitted, it defaults to 0.
//end: (Optional) The index at which to end extraction. The extraction ends just before this index (not including it). I
//f omitted, it extracts to the end of the array.

//Key Points
//slice() does not modify the original array. It returns a new array with the selected elements.
//Negative indices can be used for both start and end, counting from the end of the array.

//1. Basic Usage
const fruits = ['apple', 'banana', 'cherry', 'date'];
const slicedFruits = fruits.slice(1, 3); // 3 excluded

//console.log(slicedFruits);    // Output: ['banana', 'cherry']
//console.log(fruits);          // Output: ['apple', 'banana', 'cherry', 'date']

//2. Using Only the Start Parameter
const fruitss = ['apple', 'banana', 'cherry', 'date'];
const slicedFruitss = fruits.slice(2);

//console.log(slicedFruitss);    // Output: ['cherry', 'date']

//3. Using Negative Indices
const fruitsss = ['apple', 'banana', 'cherry', 'date'];
const slicedFruitsss = fruits.slice(-3, -1);

console.log(slicedFruitsss);    // Output: ['banana', 'cherry']


//4. Copying an Entire Array
const arr = ['reading','writing','singing','dancing','swimming','exercising']

const copiedArr = arr.slice() 

//console.log(copiedArr); // ['reading','writing','singing','dancing','swimming','exercising']
