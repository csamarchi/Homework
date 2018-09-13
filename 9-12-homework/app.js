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

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
  } else {
      if (i % 3 === 0) {
        console.log('Fizz'); }
      else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
  }
}
