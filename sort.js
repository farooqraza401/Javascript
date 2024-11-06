// sort()- Mutating 
// The sort() method in JavaScript is used to sort the elements of an array. 
//By default, it sorts elements as strings in ascending order. 
//This means numbers may not sort as expected unless a custom comparison function is provided.

//compareFunction (optional): A function that defines the sort order. 
//If omitted, the array is sorted in ascending order as strings.

//1. Default Sorting Behavior (as Strings)
//Without a compareFunction, sort() converts elements to strings and sorts them in lexicographical (dictionary) order.


//Ex Without a compareFunction
let arr = [20, 5, 100, 40];
//console.log(arr);

//let rr = arr.sort();
//console.log(rr); // [100, 20, 40, 5] (sorted as strings)


// 2. Sorting Numbers Correctly with compareFunction
//To sort numbers in numeric order, use a compareFunction that takes two arguments and returns:

//A negative value if the first argument should come before the second.
//Zero if they are equal.
//A positive value if the first argument should come after the second.

//Example (Ascending Order):
let ascendingResult = arr.sort((a,b) => a-b )
console.log(ascendingResult);  // [ 5, 20, 40, 100 ]

//Example (Descending Order):
let DescendingResult = arr.sort((a, b) => b - a);
console.log(DescendingResult); // [100, 40, 20, 5]