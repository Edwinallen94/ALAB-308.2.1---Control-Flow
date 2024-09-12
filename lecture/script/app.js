// let x = 10;
// let y = 5;

// {
//   let z = x + y;
//   // console.log(z);
// }

// Will give a refference error: because z does NOT exist in this scope
// let z;
// console.log(z);

// if else statemnts
// let x = 10;

// if (x < 10) {
//   //Truthy code block
//   console.log(`X is less than 10`);
// } else {
//   //Falsey code block
//   console.log(`X is greater than 10`);
// }

// if (x) {
//   console.log(` X esists with a value:`, x);
// } else {
//   console.log(`X does not have value or exist`);
// }

// let num = 4;

// if () {

// } else {

// }

// let age = 12;

// if (age >= 18) {
//   console.log(`Access Granted!`);
// } else {
//   console.log(`Access Denied`);
// }

// let num = 40;
// if (num > 0 && num < 100) {
//   console.log("The number is positive and less than 100&");
// } else if (num >= 100) {
//   console.log("The number is positive and greater than or equal to 100");
// } else if (num < 0) {
//   console.log("The number is negative");
// } else {
//   console.log("The number is zero");
// }

// let grade = 100;

// if (grade >= 90) {
//   console.log(`A`);
// } else if (grade >= 80) {
//   console.log(`B`);
// } else if (grade >= 70) {
//   console.log(`C`);
// } else if (grade >= 55) {
//   console.log(`D  `);
// } else {
//   console.log(`F`);
// }

//Switch statement
let x = 5;
let y = 4;

let operand = "**";

switch (operand) {
  case "+":
    console.log(x + y);
    break;
  case "-":
    console.log(x - y);
    break;
  case "*":
    console.log(x * y);
    break;
  case "/":
    console.log(x / y);
    break;
  default:
    console.log(`Invalid Operand`);
    break;
}

if (quizClicked) {
  console.log("It works!");
} else {
  console.log("Loading forever...");
}
