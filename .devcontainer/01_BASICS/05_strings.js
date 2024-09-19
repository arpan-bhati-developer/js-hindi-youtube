const name = "arpan";
const repoCount = 50;
//console.log(name + repoCount + " Value");

// The above method is old methd to concatinate the strings
// The modern method is to use backticks ``
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another way of declaring string is to use objects in JS

const gameName = new String('hiteshhc');

// The benefit of using object is we can use a lot of methods in JS and can access any key value as :-
// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// to get output of the certain part of the string.
// console.log(gameName.substring(0,4));

// to get index value of any character of the string
// console.log(gameName.indexOf('t'));

// to get the character at any index value 
// console.log(gameName.charAt(2));

// to get output from right end of our string, we use slice
const anotherString = gameName.slice(-8,5);
// console.log(anotherString)
// Note :- negative index concept works only in case of slice but for the case of subString.

// to get the extra spaces removed from our string we use trim

const newString = "  Arpan   ";
console.log(newString);
console.log(newString.trim());

//Replace :- to remove any unwanted character from our url or string we use replace 
const url = "https://arpan.com/arpan%20bhati";

console.log(url.replace('%20','-'));  

//  to check whether or url or any string contains some special character or substring we use includes.
// console.log(url.includes('arpan'));

// console.log(url.includes('ramesh'));

// To convert a string into an array with a seperating medium we use split method.

const newName = "hitesth-game-name-hc";
console.log(newName.split('-'));