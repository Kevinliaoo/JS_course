const number = 7;

for (let i = 0; i <= 100; i++) {
	// Calculate the residual
	if (i % number === 0) {
		// We just have to print the number if the residual is 0
		// i is multiple of the number
		console.log(i);
	}
}
