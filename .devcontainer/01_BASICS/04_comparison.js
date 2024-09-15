// Comparison 
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// In above case the equality check (==) workd differently as of the comparisons(<,>,>=,<=,=), these comparisons considers null as 0, but not the euality check.

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// In case of undefined all the outputs will be false.

// console.log("2" > 1);
// console.log("02" > 1);

// Here above comparison operators will convert string "2" and "02"  in number and compare with 1 that's why the output is true.

// Diference between == and === 
console.log("2" == 2);
// Above case will give us true beacuse the equality check == checks for only the values but not their tyupes, if the values are equal then it gives true.

console.log("2" === 2);
//Above case will give us false becuse equality check === cheks for values as well as their their types if thier types are different then it will give false even of the values are equal.
