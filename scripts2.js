// Conditionals
let age = 20;

// if statemet
if (age > 18) {
	// Actions that will be performed if the condition is TRUE
	console.log('You are over 18');
} else if (age > 14) {
	console.log('You are over 14');
} else {
	// The else statement is excecuted if NONE OF the previous conditions were satisfied
	console.log('You are too small');
}

// ------------

// This two if statements are NOT joined

if (age > 18) {
	console.log('You are over 18');
}

// ------------
if (age > 14) {
	console.log('You are over 14');
}

// 0 - 100
let grade = 60;

// > 90 "You got an A"
// > 70 "You got a B"
// > 60 "You got a C"
// < 60 "You failded"
