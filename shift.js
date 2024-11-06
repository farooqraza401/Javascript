//shift()-Mutating 

//shift() method is used to remove the first element from an array and return that element. 
//It also modifies the original array by shifting the remaining elements to the left.


//It takes no parameters.
//It returns the removed element from the array.
//If the array is empty, shift() returns undefined.

const arr1 = []

const result = arr1.shift()

console.log(result); // undefined


const arr = ['A','B','C','D','E','F']

const element = arr.shift()

console.log(element); // A

console.log(arr); // [ 'B', 'C', 'D', 'E', 'F' ]

