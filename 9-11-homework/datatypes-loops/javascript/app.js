//console.log("hi");

//Datatypes

// 1. Numbers
// 2. Strings
// 3. Booleans


//Strings

//Print Hello World
// console.log("Hello World");
// console.log('Hello Nerds');

//Whichever way you choose to write strings
//whether it is single or double
//stay consistent throughout your application

//Variables
//const vs let vs var

// var - is the old way of declaring variables
// we will not use var

//all variables are camelCase
//defining a variable
const myDog = 'Ollie';
// const variables cannot be redifined;
//myDog = 'Bubba'; //cant do this

//Chancing an internal value of a const declation
//defining the array
const someArray = [];

someArray.push('taco');

//to see if it worked console.log the thing
console.log(someArray);

//ALWAYS USE CONST UNTIL YOU GET AN ERROR MESSAGE

//let variables can be redifined

//most commonly used in loops
let number = 9;

number = 6;

//console.log(number, 'this is a number');


//Concatenation and Interpolation
//concatentation
//console.log('Run' + ' Run ' + ' Runnnn');

//older way interpolation
const adjective = 'beautiful';

console.log('What a ' + adjective + ' day!');

//newer way es6 //very similar to ruby
console.log(`What a ${adjective} day`);

console.log('Please' + ' squeeze' + ' the' + ' cheese');

const word = 'believe';
console.log(`Please ${word} the cheese`);

const x = 5;
const y = 10;
console.log(x + y);

console.log(`The sum of ${x} and ${y} is 15`);

//Numbers
//Operatinos
9 + 9
9 * 9
9 / 9
9 - 9
//modulus is really helpful for finding odd and even numbers
9 % 9 //--> 0, modulus gives us the remainder

//console.log(9 % 9);

// //Comparative Operators
// >//greating than
// <//less than
// ==//equal to
// ===//strictly equal, this also compares types
// >=//greater than or equal
// <=//less than or equal
// !=//not equal

// LOOPS

//What is a loop?
//A loop is a process that repeats itself

//Main Principles in Programming
//is to keep your code DRY
//DRY - Don't repeat yourself

//intial condition - some variable

// while(BOOLEAN EXPRESSION) {
// 	//run code in the block
//

// let num = 1;

// while(num <= 1000) {
// 	console.log('The number is: ' + num);
// 	//num = num + 1;
// 	num++
// 	//num+= 1
// }

// let num = 1;
// while(num < 100) {
// 	console.log(num)
// 	num++
// }

//Write another loop, make the loop count from 0 to 5000
//and print the square of each number
// let num = 0;
// while(num <= 5000) {
// 	console.log('The square is: ' + num * num);
// 	num++
// }

// let num = 1000;

// while(num >= 1) {
// 	console.log(num);
// 	num--;
// }


//for Loops
//more concise loop

//count from 1 to 1000
// for(let i =1; i <= 1000; i++) {
// 	console.log(i);
// }

for(let i = 800; i <= 900; i++) {
	console.log(i);
}




















