// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => `Hello, ${name}`;

// Write a simple arrow function that takes two parameters and returns their sum.
const add = (numOne, numTwo) => numOne + numTwo;

// Write a simple arrow function that squares a number.
const square = (num) => num * num;

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const arraySquare = (numberArray) => numberArray.map((num) => num * num);
