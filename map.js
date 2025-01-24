// map() Non Mutating
//The map() method in JavaScript is used to iterate over an array and transform its elements, 
//returning a new array of the same length. 
//It is commonly used when you want to apply a function to each element of an array.



const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);

console.log(squared); // Output: [1, 4, 9, 16, 25]

//---------------

const numberss = [1, 2, 3, 4, 5];
const squaredd = numberss.map(num => num + 1);

console.log(squaredd); // Output: [ 2, 3, 4, 5, 6 ]