// Dynamic Typing:
// - Task: Assign different data types to a single variable (string, number, boolean) and display the type using typeof.
// - Hint: Use typeof to check the data type of a variable.

// Undefined
let a;
console.log(typeof a); // Output: "undefined"

// Boolean
let isActive = true;
console.log(typeof isActive); // Output: "boolean"

// Number
let age = 30;
console.log(typeof age); // Output: "number"

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // Output: "bigint"

// String
let name = "John";
console.log(typeof name); // Output: "string"

// Symbol
let uniqueSymbol = Symbol("id");
console.log(typeof uniqueSymbol); // Output: "symbol"

// Object (including Arrays and null)
let person = { name: "Alice", age: 25 };
console.log(typeof person); // Output: "object"

let arr = [1, 2, 3];
console.log(typeof arr); // Output: "object" (arrays are a special kind of object)

let empty = null;
console.log(typeof empty); // Output: "object" (this is a known quirk in JavaScript)

// Function
function greet() {
  return "Hello!";
}
console.log(typeof greet); // Output: "function"
