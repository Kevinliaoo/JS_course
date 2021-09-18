// Step 1: Ask for a number from the prompt
let res = prompt('Insert a number: '); // res: string

// Step 2: Get the answer, and convert it to a number
res = parseInt(res); // res: number
let res_num = parseInt(res);

// Step 3: Determine wether is an odd or even number
if (res_num % 2 === 0) {
	console.log('This is an even number');
} else {
	console.log('This is an odd number');
}
