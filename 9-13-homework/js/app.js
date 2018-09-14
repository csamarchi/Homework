//1. Verbal questions

//1. What is the difference between parameter and argument
//    A parameter is a variable in a method definition
//when a method is called, the arguments are the data you
//pass into the method's parameters

//2. Within a function, what is the difference
//between return and console.log?
//    console.log will display the parameter in the console
//window. when we use return, the function will stop
//executing, and return the specified value

//3. What are the implications of the ability of a
//function to return a value?
//    we invoke the replace() funciton on a string and pass
//it through parameters- the substring to find, and the
//substring to replace it with. when this function completes,
//it returns a value, which is a new string with the
//replacement made.


//////2. Palindrome again

// const checkPalindrom = (word) => {
//   console.log(word.split('').reverse().join(''));
//   const reverseWord = word.split('').reverse().join('');
//   if (word === reverseWord) {
//     return true
//   } else {
//     return false
//   }
// }
//
// console.log(checkPalindrom('Radar'));
// console.log(checkPalindrom('Borscht'));


/////3. Digit Sum

// const sumDigits = (num1, num2) => {
//   return (num1 + num2);
// }
//
// console.log(sumDigits(22));
// console.log("test")


////4.Pythagoras

const calculateSide = (sideA, sideB) => {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

console.log(calculateSide(3, 4));


///5. Sum Array

const sumArray = ([num1, num2]) => {
  return (num1 + num2);
}

console.log(sumArray([1, 2]));

//6. Prime Numbers

const checkPrime = (num) => {
  for (let i = 2; i < num; i++)
  if (num % i === 0)
  return false;
  return num !== 1 && num !== 0;
}

console.log(checkPrime(6));
