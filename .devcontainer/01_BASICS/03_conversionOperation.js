
  let score = "33";
//  console.log(typeof(score));

 let valueInNumber = Number(score);
//  console.log(typeof(valueInNumber));
//  console.log(valueInNumber);

let score1 = "33abc";
// console.log(typeof(score));

let valueInNumber1 = Number(score1);
// console.log(typeof(valueInNumber1));
// console.log(valueInNumber1);

let score2 = null;
// console.log(typeof(score2));

let valueInNumber2 = Number(score2);
// console.log(typeof(valueInNumber2));
// console.log(valueInNumber2);
// In this case type of valueInNumber will be number its value will be 0.

let score3 = undefined;
// console.log(typeof(score3));

let valueInNumber3 = Number(score3);
// console.log(typeof(valueInNumber3));
// console.log(valueInNumber3);
// In this case type of valueInNumber3 will be number its value will be NaN.


 let score4 = true;
// console.log(typeof(score4));

let valueInNumber4 = Number(score4);
// console.log(typeof(valueInNumber4));
// console.log(valueInNumber4);
// In this case type of valueInNumber4 will be number its value will be 1.

let score5 = false;
// console.log(typeof(score5));

let valueInNumber5 = Number(score5);
// console.log(typeof(valueInNumber5));
// console.log(valueInNumber5);
// In this case type of valueInNumber5 will be number its value will be 0.

let isLoggedIn = 1;

let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);
// In this case value of booleanLoggedIn will be true.

let isLoggedIn1 = 0;

let booleanLoggedIn1 = Boolean(isLoggedIn1);
// console.log(booleanLoggedIn1);
// In this case value of booleanLoggedIn1 will be false.

let isLoggedIn2 = "Arpan";

let booleanLoggedIn2 = Boolean(isLoggedIn2);
// console.log(booleanLoggedIn2);
// In this case value of booleanLoggedIn2 will be true.

let isLoggedIn3 = " ";

let booleanLoggedIn3 = Boolean(isLoggedIn3);
// console.log(booleanLoggedIn3);
// In this case value of booleanLoggedIn3 will be false.

let number = 33;

let numberToString = String(number);
// console.log(numberToString);
// console.log(typeof(numberToString));
//In this number will be changed into string and value will be 33 and type will be string.

// ****************************Operations*********************************************

let num = 3;
let value = -num;
// console.log(value);

let str1 = "hello";
let str2 = " Arpan";
let str3 = str1 + str2;
// console.log(str3);

// console.log ("1" + 2);// output will be 12.
// console.log(1 + "2");// output will be 12.
// console.log("1" + 2 + 2);// output will be 122 as 1 is string so compiler wil consider all other elements as string.
// console.log(1 + 2 + "2");// output will be 32 as first both the elements will be added and then 2 will be added with 3 as string.
// console.log(1 + "2" + 2);//output will be 122 

let test1 = 1;
let test2 = 2;
let test4 = "2";
let test3 = test1 + test2 + test4;
// console.log(test3);
// console.log(typeof(test3));

let num1,num2,num3;
num1 = num2 = num3 = 2 + 2;

//Prefix
let x = 3;
let y = ++x;
// console.log([x],[y]);
// In above line of code y = ++x, the value of x will first increased by 1 then stored in variable y.

// Postfix
let a = 3;
let b = a++;
// console.log([a],[b]);
// In above case b = a++, value of a will be stored in b first then incrased by 1.

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