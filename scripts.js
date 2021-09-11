// Boolean: true or false

let name = 'Tamur'; // string
let age = 14; // number
let hobby = 'Basketball';

let username = 'Tamur123';
let pass = 'pass224';

// AND
// Checking if:
// Your name is Tamur AND your age is 14
if (name === 'Tamur' && age === 14 && hobby === 'Basketball') {
	console.log('You are Tamur');
}

// OR
// Checks if:
// One part of the "sentence" is true, just only one part is enougth
if (name === 'Tamur' || age === 14 || hobby === 'Basketball') {
	console.log('This statement is true');
}

// Makes the user to insert a message
let message = prompt('Please insert the first message');
let message2 = prompt('Please insert the second message');

console.log(message);
console.log(message2);
