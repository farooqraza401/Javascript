//splice() Mutating Method
//he splice() method in JavaScript is used to add, remove, or replace elements in an array. 
//It modifies the original array and returns an array of the removed elements (if any).

//Syntax
//array.splice(start, deleteCount, item1, item2, ...);
//start: The index at which to start changing the array. If negative, it counts from the end of the array.
//deleteCount: The number of elements to remove starting from the start index. If 0, no elements are removed.
//item1, item2, ...: (Optional) The elements to add at the start position.


// Operation	            Code Example	                             Result
// Remove elements	        arr.splice(1, 2);	                         Removes 2 items from index 1
// Add elements	            arr.splice(1, 0, "X");	                     Inserts "X" at index 1
// Replace elements	        arr.splice(1, 1, "Y");	                     Replaces element at index 1
// Remove all from index	arr.splice(2);	                             Removes everything from index 2
// Clear array	            arr.splice(0, arr.length);	                 Removes all elements


const hobArr = ['reading','writing','singing','cooking','swimming']

//console.log(hobArr.splice(10,0,'ff')); // []

// console.log(hobArr);

// console.log(hobArr.at(5)); // ff


// In this above code i added 'ff' on index 10th but index 10th doesnot exist in the above array,in this case new elemnet
//'ff' will be add at the end of the array at 5th index

//Examples

//1. Removing Elements
//const fruits = ['apple', 'banana', 'cherry', 'date'];
//const res=fruits.splice(1, 2);  // Start at index 1, remove 2 elements'return removed elements [ 'banana', 'cherry' ]'

//console.log(res);  // Output: ['apple', 'date']

//2. Adding Elements
//const fruitss = ['apple', 'date'];
//console.log(fruitss)
//fruitss.splice(1, 0, 'banana', 'cherry');  // Start at index 1, remove 0 elements, add 'banana' and 'cherry'

//console.log(fruitss);  // Output: ['apple', 'banana', 'cherry', 'date']

//3. Replacing Elements
const fruitsss = ['apple', 'banana', 'cherry', 'date',"mm"];
//console.log("fruitsss",fruitsss)
//fruitsss.splice(1, 3, 'blueberry', 'kiwi','orange');  // Start at index 1, remove 2 elements, add 'blueberry' and 'kiwi'

//console.log(fruitsss);        // Output: ['apple', 'blueberry', 'kiwi', 'date']

//-------------------------------------
//4. Replacing Elements
const arr = [1,2,3,4,5]

//console.log(arr.splice(2,1,10)); // replace 3 by 10 and return [3]

//console.log(arr); // [1,2,10,4,5]


const memArr = ["shamshad","x","y","z"]

const resu = memArr.splice(1,3,"Asmat","Khalida","Shahida")
console.log(resu) // return an array of the replaced [ 'x', 'y', 'z' ] 

console.log(memArr) // [ 'shamshad', 'Asmat', 'Khalida', 'Shahida' ]






