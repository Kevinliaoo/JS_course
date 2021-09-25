// Get a value from the user
let a = prompt('Please insert the number a');
// Convert string to an integer
a = parseInt(a);

let b = parseInt(prompt('Please insert the number b'));

let counter = 0;

for (let i = 0; i <= a; i++) {
	if (i % b === 0) {
		console.log(i);
		counter++;
	}
}

console.log('We displayed ', counter, ' numbers');
