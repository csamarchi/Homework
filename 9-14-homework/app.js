//1. Variables & Datatypes

//A. Q + A

//1. How do we assign a value to a variable?
//let x = 5;
//2. How do we change the value of a variable?
//just reference the variable inside the function
//3.How do we assign an existing variable to a new variable?
//you do this by calling it with a '.' key.oldVariable = 'new';
//4.Remind me, what are declare, assign, and define?
//Declare: declaring something exists, such as class,
//function, or variable- you just say it exists
//Define: define how something is implement, such as class,
//function, or variable- you say what it actually is
//Assign: giving your variable a value
//5. What is pseudocoding and why should you do it?
//pseudocoding is writing down in english sentences
//what exactly you are telling the computer to do
  //6. What percentage of time should be spent thinking
  //about how you're going to solve a problem vs actually
  //typing in code to solve it?
//80% planning and thinking it out. 20% coding it


//B. Strings
//1. Create a variable called firstVariable.
// var firstVariable = 'Hello World';
// var firstVariable = 5;
// var firstVariable, secondVariable = '5';
// var secondVariable = 'anything';
// console.log(secondVariable);
//
//
// //2.
// let yourName = 'Christine';
//
// const greeting = ('Hello, my name is ' + yourName);
// console.log(greeting);
//


// C. Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';
//
// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// // console.log(true != false);
// // console.log(false = false = false = false = false = false != true);
// // console.log(false = false)
// console.log(e < 'Kevin');
// //console.log(a + b = c);
// //console.log(a * a = d);
// console.log(48 == '48');

//
// //D. The farm
// let animal = 'pig';
//
//   if (animal === 'cow') {
//     console.log('moo');
//   } else (animal !== 'cow')
//     console.log('this is not a cow');


//E. Driver's Ed
// let age = 20;
//
// if (age >= 16) {
//   console.log('Here are the keys');
// } else (age < 16)
//   console.log("Sorry you're too young")
//
// //II.Loops
//
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i <=400; i++) {
//   console.log(i);
// }
//
// for (let i = 12; i <4000;i = i+3) {
//   console.log(i);
// }


//B. Get even

// for (let i = 2; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i + ' is an even number');
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log('I found a ' + i + '. High five!');
//   } else if (i % 3 === 0) {
//     console.log('I found a ' + i + '. Three is a crowd.');
//   }
// }

//D. Savings account

//let bank_account = 0;
// let bank_account = 0;
// for (let i = 0; i <= 100; i++) {
//   bank_account = (bank_account + i);
//   bonus = bank_account * 2;
// }
// console.log(bonus);


//E. Multiples of 3 and 5

let sum = 0;

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 ===0) {
    sum = sum + i;
  }
}
console.log(sum);

//III. Arrays & Control flow

//A. Talk about it
//1. What are the things in an array called?
//objects
//2. Do Arrays guarantee those things will be in order?
//yes it keeps it in order frmo 0 - array.length -1
//3. What real-life thing could you model with an array?
//listing all the properties of a clothing item in an
//online shopping website. list the sizes, colors, etc.
