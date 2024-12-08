// Declaration of Array 
const myArr = [0,1,2,3,5];

const myHeros = ["shaktiman", "naagraaj"]

// Declaring array as object 
const myArr2 = new Array(2,3,6,7);

// In above case we don't provide values in square brackets.

//console.log(myArr[2]);

// Array Methods

//1 Push
// It adds value at the end of the array.
myArr.push(6);
//console.log(myArr);
// 2 Pop
// It removes the last element from the array.
myArr.pop();
//console.log(myArr);

// 3 Unshift
// It adds an element at the starting of the array. 
myArr.unshift(9);
//console.log(myArr);
//This method is not practical, as it shifts all the array values towards right, if the array's size
// is larger(10,000) then it will slow down the process.

// 4 Shift 
// It removes the element from the starting of the array
myArr.shift();
//console.log(myArr);

// Here, we don't provide any value inside the shift as in case of pop.

// 5 Includes 
//console.log(myArr.includes(9));

// It gives the value as true or false, if array contains 9 then it will return true, either it will
// return false.

// 6 Index Of
// This method is used to check the index of any element of the array.
//console.log(myArr.indexOf(5));

// If the array contains the value for which we are checking the index, then console will return the 
// value, but if the array do not contain the value, then console will return -1.
//console.log(myArr.indexOf(18));

// Join
const newArr = myArr.join();

// This method will add the new array in the previous array, but the new array will be added as 
// a string.

console.log(myArr);
// O/P -> [0,1,2,3,4,5]
console.log(newArr);
// O/P -> 0,1,2,3,4,5

// Slice and Splice

console.log("A", myArr);

// Slice is used to get a part of the array as output. 
const myn1 = myArr.slice(1,3);
// In above case slice will print the elements of the array from 1 to 2, outer range is not considered
// in case of slice so O/P will be [1,2];
console.log(myn1);

console.log("B", myArr);
// Splice is also used to get a part of the array as output, but in this case the original array is
//also changed, as in case of splice, if we provided the range as [1,3] the it will also include index
// 3 element in output, means it will also include the outer range, but will also remove those elements
// from the original array.
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C", myArr);