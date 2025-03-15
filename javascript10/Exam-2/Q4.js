// Task: Write a program to check if a number is between 10 and 20 using logical operators.

let number = prompt("Enter a number:");

// Convert the input to a number
number = Number(number);

// Check if the number is between 10 and 20
if (number >= 10 && number <= 20) {
  console.log("The number is between 10 and 20.");
} else {
  console.log("The number is not between 10 and 20.");
}
