
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
console.log(booleanLoggedIn);
// In this case value of booleanLoggedIn will be true.

let isLoggedIn1 = 0;

let booleanLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanLoggedIn1);
// In this case value of booleanLoggedIn1 will be false.

let isLoggedIn2 = "Arpan";

let booleanLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanLoggedIn2);
// In this case value of booleanLoggedIn2 will be true.

let isLoggedIn3 = " ";

let booleanLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanLoggedIn3);
// In this case value of booleanLoggedIn3 will be false.

let number = 33;

let numberToString = String(number);
console.log(numberToString);
console.log(typeof(numberToString));
//In this number will be changed into string and value will be 33 and type will be string.