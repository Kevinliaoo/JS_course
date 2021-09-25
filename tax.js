const state = prompt('In which state are you?');

const texas_tax = 0.0625;
const california_tax = 0.0725;
const florida_tax = 0.047;

const pre_tax_price = prompt(
	'What is the price of the product you want to buy?'
);

let product_price = parseInt(pre_tax_price);

if (state === 'texas') {
	product_price = product_price * (1 + texas_tax);
} else if (state === 'california') {
	product_price = product_price * (1 + california_tax);
} else if (state === 'florida') {
	product_price = product_price * (1 + florida_tax);
}

console.log('Your product is: ', pre_tax_price);
console.log('Your product plus taxes is: ', product_price);
