//push()-Mutating

//push() method is used to add one or more elements to the end of an array and returns the new length of the array.
//The method modifies the original array by appending new elements.
//It returns the new length of the array after the elements are added.

const num = [1,2,3,4,5,6]

const result = num.push(7,8,9,10)

console.log(result); // returns new lenght of the array after the elements are added / lenth will be 10 now

console.log(num); //[1,2,3,4,5,6,7,8,9,10]

