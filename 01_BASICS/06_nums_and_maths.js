const score  = 400;
// console.log(score);
// console.log(typeof(score));

const balance = new Number(100);
// console.log(balance);

//In above case we will get the value of the variable 'score' and its type differnt, but if we print the explicitly defined as Number variable 'balance' then it will not only give the value but also it's type.
// O/P :- [Number: 100]
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
//It limits the no of digits after decimal for the provided valriable, in above case the value is 100, so it will provide the output as 100.00

const otherNumber = 123.8996;
 
// console.log(otherNumber.toPrecision(2));
// It will focus only on the two digits before 
// console.log(otherNumber.toPrecision(3));
// output will be 124 as it will round off first three digits from left to right.
let star = otherNumber.toPrecision(4);
// output will be 123.9
// Important note is that toPrecision returns a string, we can check in the below example :-
// console.log(star);
// output wil be 123.9
// console.log(typeof(star));
// It's type will be a string as toPrecesion changes it to a string.

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// It defines the standard of writing a number, the above method will print the no inside the variable hundreds in US standard.

//console.log(hundreds.toLocaleString('en-IN'));
// It will print the value of the variable hundreds according to the Indian standard.

//+++++++++++++++++++++  MATHS   ++++++++++++++++++++++++++++++++++++++++

// Maths is a seperate topic in JS a numbers, it also has lots of properties as of the Numbers
// console.log(Math);
// output will be an object as Math is an object in itself.

//1 abs 
/* It provides the absolute value of the negative number, changes negative number to positive number.
  But if we provide the positive no then it remains as it is.
*/

//console.log(Math.abs(-4));
// Output : 4

// console.log(Math.abs(4));
// Output : 4

//2 Round 
/* It basically round offs the provided no. inside it, it uses the basic method of rounding off that 
if the last digit is greater than 5 then add 1 to the next digit and provide the result.
*/

// console.log(Math.round(4.3));
// Output : 4
// console.log(Math.round(4.7));
// Output : 5

//3 ceil and floor
/* (a)ceil :- If we want that our output sholud be increased by 1 if it is slightly increased by .1 
or more then we use ceil. eg - if we provide 4.2 in input then it will provide 5 as output.
*/
// console.log(Math.ceil(4.2));
// Output : 5

/* (b) floor :- If we want that our no is increased by some decimal point, then output 
will be the no before the decimal.
*/
// console.log(Math.floor(4.9) );
// Output : 4

//4 min and max in an array 
//If we want to have the maximum and minimum value from an array of integers then we can do it as follows

// console.log(Math.min(2,4,6,8,9));
// Output : 2

// console.log(Math.max(3,5,6,7,8,10));
// Outpit : 10

// 5 Random 
// Random is a predefined method in Math that is used to print the values between 0 and 1.
// console.log(Math.random());

// Now if we want to print between a range suppose betwwn 1 to 10 
// console.log(Math.random()*10)
/* Now in above case every no between 0 and 1 will be multiplied by 10, if we get 0.1445, 0.4568 
  or 0.5679 from the above function then it will be multiplied by 10 and we will get the output as 
  1.445, 4.568  or 5.679, but there may be a case where the output of the function may be 0.00065 
  then we will have the output as 0.0065, but if we want to print betwwn 1 and 10 then we must add 
  1 to the output of Math.random*10  
*/
// console.log((Math.random()*10) + 1);
// Now output will always be greater than one but it will always be in decimals, to avoid this we use floor.

//console.log(Math.floor((Math.random()*10) + 1));

// There is special query in JS where we have to print output for a provided range, a minimum no and a maximum number.

// Below is an example to print the digit from 1 to 6.
// console.log((Math.random()*6) + 1); 
console.log(Math.floor((Math.random()*6) + 1));

const min = 10;
const max = 20;

// now we have to write the code which print no between 10 to 20.

// We have to remember this formulae to print the no's in JS for provided range 

console.log(Math.floor(Math.random()*(max - min + 1) + min));