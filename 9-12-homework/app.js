//Easy Going
// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

//Get Even
// for (let i = 0; i <= 200; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
//
// let array = ["...human...why you taking pictures of me?...",
//             "...the catnip made me do it...",
//             "...why does the red dot always get away..."];
// let x = 'Love me, pet me! HSSSSSS!';
//
// for (let i = 0; i <= 20; i++) {
//   //Print this 20 times
//   console.log(x);
//
//   //Print random cat statement
//   if (i % 2 === 0) {
//     console.log(array[Math.floor(Math.random()*array.length)]);
//   }
// }

//Fizz Buzz

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//   } else {
//       if (i % 3 === 0) {
//         console.log('Fizz'); }
//       else if (i % 5 === 0) {
//         console.log('Buzz');
//       } else {
//         console.log(i);
//       }
//   }
// }

//Getting to Know You

const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

//1.
shahzad[0] = "Gameboy";
console.log(shahzad);

//2.
daniel[1] += 1;
console.log(daniel);

//3.
ryan[2] = "Gotham City";
console.log(ryan);

//4.
reuben.pop("Durham");
reuben.push("Chicago");
console.log(reuben);

//5.
jim.pop("All Cities");
jim.push("Austin", "Atlanta", "Los Angeles");
console.log(jim);

//6.
jim.splice(2, 1);
console.log(jim);
