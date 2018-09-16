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
//   } else {
//       (animal !== 'cow')
// //     console.log('this is not a cow');
// }


//E. Driver's Ed
// let age = 20;
//
// if (age >= 16) {
//   console.log('Here are the keys');
// } else {
//   (age < 16)
//   console.log("Sorry you're too young")
// }

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

// let sum = 0;
//
// for (let i = 1; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 ===0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

//III. Arrays & Control flow

//A. Talk about it
//1. What are the things in an array called?
//objects
//2. Do Arrays guarantee those things will be in order?
//yes it keeps it in order frmo 0 - array.length -1
//3. What real-life thing could you model with an array?
//listing all the properties of a clothing item in an
//online shopping website. list the sizes, colors, etc.

//B. Easy Does it

// let quotes = ['Luke I am your father',
//               'Say hello to my little friend',
//               'Take the cannoli and leave'];

//c. Accessing elements

// const randomThings = [1, 10, "Hello", true];
//
// let first =randomThings[0];
// console.log(first);
//
// randomThings[2] = "World";
// console.log(randomThings);

//D. Change values

// const ourClass = ["Salty", "Zoom", "Sardine",
//                   "Slack", "Github"];
//
// let third = ourClass[3];
// let last = ourClass.pop()
// let add = ourClass.push("Octocat");
// let pool = ourClass.push("Cloud City");
// console.log(ourClass);

//E. Mix it up

// const myArray = [5, 10, 500, 20];
//
// let egon = myArray.push("Egon", "Christine");
// let remove = myArray.shift();
// let addon = myArray.unshift('Bob Marley');
// let remove2 = myArray.pop();
// let reverse = myArray.reverse();
// console.log(myArray);
//mutate means to change the array without making a new Array
//the reverse() method returned the reverse order of the Array

//F. Biggie Smalls

// let n = 100;
//
// if (n < 100) {
//   console.log('little number');
// } else {
//   (n >= 100)
//   console.log('big number');
// }


//G. Monkey in the Middle
// let n = 7;
//
// if (n < 5) {
//   console.log('little number');
// } else if (n > 10)
//   console.log('big number');
//  else
//   console.log('monkey');


//H. What's in Your Closet

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
//
// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

//console.log('Krystyn is rocking that ' + kristynsCloset[3] + ' today!');
//
// let raybans = kristynsCloset.splice(6, 0, 'raybans');
// console.log(kristynsCloset)
//
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);

//console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' +
            // thomsCloset[1][1] + ', ' + 'and ' +
            // thomsCloset[2][1]);
// thomsCloset[1][2] = 'Footie pajamas';
// console.log(thomsCloset[1]);


//IV. Functions

//A. printGreeting

// const printGreeting = (name) => {
//   return ('Hello, there ' + name);
// }
//
// console.log(printGreeting('Slimer'));

//B. printCool

// const printCool = (name) => {
//   return (name + ' is cool');
// }
//
// console.log(printCool('Captain Reynolds'));

// //C. calculateCube
// let n = (5);
//
// const calculateCube = () => {
//   return (n * n * n);
// }
//
// console.log(calculateCube(5));

//D. isVowel
//Write a function isVowel that takes a character
//(i.e. a string of length 1) and returns true if it is a
//vowel, false otherwise. The vowel could be upper or
//lower case.

// const isVowel = (x) => {
//   if (x === 'a'|| x === 'e' || x === 'i'|| x === '0' || x === 'u') {
//     return true
//   } else {
//     return false;
//   }
// }
//
// console.log(isVowel('u'));

//E. getTwoLengths

// const getTwoLengths = (var1, var2) => {
//   return [var1.length, var2.length];
// }
//
// console.log(getTwoLengths('hank', 'hippopatamus'));

//F. getMultipleLengths

// const getMultipleLengths = ([x, b, c, d, e]) => {
//   return [x.length, b.length, c.length, d.length, e.length];
// }
//
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
//
// const maxOfThree = (num1, num2, num3) => {
//   return Math.max(num1, num2, num3)
// }
// console.log(maxOfThree(6, 8, 9));

//H. printLongestWord

// const printLongestWord = (longest) => {
//   let max = longest[0].length;
//   longest.map(v => max = Math.max(max, v.length));
//   result = longest.filter(v => v.length == max);
//   return result;
// }
//
// console.log(printLongestWord(["BoJack", "Princess",
//                               "Diane", "a", "Max",
//                               "Peanutbutter", "big", "Todd"]));

//I. transmogrify

// const transmogrify = (a, b, c) => {
//   let result = Math.pow((a * b), 2);
//   return result
// }
//
// console.log(transmogrify(5, 3, 2));

//J. reverseWordOrder

const reverseWordOrder = (word) => {
  let array = word.split(' ').reverse('').join(' ');
  console.log(array);
}

console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));
