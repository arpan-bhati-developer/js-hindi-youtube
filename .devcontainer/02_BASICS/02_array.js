// If we have two arrays as 
const marvel_heros = ["thor", "Ironman", "spiderman",];
const dc_heros = ["superman","flash","batman"];

// If we megrge both the above arays using the push mathod then output will a single array, having
// other array as a single element 
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//Output : [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// #Concatination 
// The above problem of merging two arrays using push can be corrected by using concatination method

// const all_heros = marvel_heros.concat(dc_heros);

// console.log(all_heros);
// output : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// #Spread 
// If we wnat to merge two or more arrays without having the problem occured during the case of push
// then we use spread method.

const all_new_heros = [...marvel_heros,...dc_heros];

//console.log(all_new_heros);
// O/P : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// #Flat Concept
// If we have an array which contains array inside another array such that :
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

// If we want to print each and every element of an array to print a normal array then we use flat,
// have to rpvide the depth inside flat method to normalise the array, it can be numerical value(1,2) 
// means upto which depth we want to normalise the array, but if we want each and every element to
// be seperated irrespective of the depth then we use Infinity.

const real_another_array = another_array.flat(Infinity);
//console.log(real_another_array);

// # Data Scrapping
// If we have data in different format like nodelist, string, etc. If we want to check whether it is 
// an array or we want to convert it to an array then we use following mwthods

// to check whether it is an array or not
console.log(Array.isArray("Hitesh"));

// to change a string, object into an array then we use from 
console.log(Array.from("Hitesh"));

// if we want to convert an object into an array but have not provided that either 'Key' or 'Value'
// is considered to be the part of array, then we would have an empty array as output.
console.log(Array.from({name:"Arpan"}));

// If we have more than two variables and want to convert them into a array then :
let var1 = 100;
let var2 = 200;
let var3 = 300;

console.log(Array.of(var1,var2,var3));
