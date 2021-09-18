// A piece of code that does something
// Functions takes ()

// function keyword + name of the function + () + {}
function greetings() {
	// What the function will do
	console.log('Hello ');
	console.log('Im a function');
	console.log('And what I do is to excecute a code');
}
// Define a function

// Excecute the function (Call the function)
// greetings();

// Parameters

/**
 * Three types of functions
 *
 * 1. Does NOT take either inputs or outputs
 *
 * 2. Does take an input and does not return any output
 *
 * 3. Can take an input, but returns something
 *
 */

// Second type

function print(name, surname, age) {
	// Body of the function
	console.log('Hello, Im ' + name + ' ' + surname);
	console.log('And Im ' + age + ' years old');
}

print('Kevin', 'Liao', 19);
print('Darius', 'Chen', 16);
print('Tamur', 'Chen', 14);

// Not to repeat yourself

// Global varialbe
let glob = 1234;

console.log(glob);

function square(base) {
	// Crete a variable inside the function
	// Local variable: Varialbe you can ONLY use it INSIDE of the body
	let result = base * base; // Power of 2
	return result;
}

let a = square(10);
console.log(a);

function sum(a, b) {
	let res = a + b;

	return res;
}

console.log(sum(10, 9));

// variables and data types
// Conditionals
// Loops
// Functions
