// Getting data from the user from the prompt
let username = prompt('Username: ');
let pass = prompt('Password: ');

// "Correct" username and password
let correctUsername = 'kevin123';
let correctPass = 'kevin321';

// ------ Situation one --------
if (username === correctUsername && pass === correctPass) {
	console.log('Welcome');
} else {
	console.log('Incorrect data');
}

// ------- Situation two --------
// Check if the username is correct
if (username === correctUsername) {
	// Goes inside
	if (pass === correctPass) {
		console.log('Welcome');
	} else {
		console.log('Password incorrect');
	}
} else {
	console.log('Username incorrect');
}
