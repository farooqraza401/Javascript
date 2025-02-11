//indexOf()

//The indexOf() method in JavaScript is used to find the first occurrence of a specified element in an array. 
//It returns the index of the element if it’s found, or -1 if the element is not present in the array.
//And it searches from left to right

//Syntax
//array.indexOf(searchElement, fromIndex);

//searchElement: The element to locate in the array.
//fromIndex (Optional): The index to start the search from. The default is 0. 
//If fromIndex is negative, it’s counted from the end of the array.

//Summary
//indexOf() returns the first index of an element or -1 if it isn’t found.
//Use fromIndex to specify where to start the search.
//indexOf() is case-sensitive and performs a strict equality check.
//Negative start values counts from the last element(but still searches from left to right)

//Examples
//1. Basic Usage
const colors = ['red', 'blue', 'green', 'blue'];
//console.log(colors.indexOf('blue'));       // Output: 1
//console.log(colors.indexOf('yellow'));     // Output: -1 (not found)


//2. Using fromIndex Parameter
const colorss = ['red', 'blue', 'green', 'blue'];
//console.log(colorss.indexOf('green',2));    // Output: 2



let element = ['laptop','headset','mobile','router']

//console.log(element.indexOf('mobile',3));  // -1  ----> return -1 if the value is not found



let arr = [1,2,3,4,3,4]

console.log(arr.indexOf(4,4)); // -1



