// Fucntions
/**
 * Fucntions excecutes one piece of code
 *
 * 3 types of fucntions:
 *  Just excecute something
 *  Takes parameters (inputs)
 *  Returns a value (can either take parameters or not)
 */

// Create two variables

let a = 10;
let b = 20;

// Type one of funtion
function sum_one() {
	// Body of the function
	let result = a + b;

	console.log('The result is: ', result);
}

// Type two: customizable functions (you can insert different values in the input)
function sum_two(num_1, num_2) {
	// Local variables (Only exists inside the body of the function)
	let result = num_1 + num_2;

	console.log(
		'The result of summing ',
		num_1,
		' and ',
		num_2,
		' is: ',
		result
	);
}

// Type three
function sum_three(num_1, number2) {
	let result = num_1 + number2;

	return result;
}
