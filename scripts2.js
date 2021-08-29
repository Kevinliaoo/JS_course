let name = 'Kevin';
let surname = 'Liao';

console.log(name);

let age = 15;

console.log(age);

age = 19;

console.log(age);

let randomNumber = 80 - 70;
let randomNumber2 = -20;

// Sum operation
let total = randomNumber + randomNumber2;
console.log(total);

// Substraction
let total2 = randomNumber2 - randomNumber2;
console.log(total2);

// Multiplication
let total3 = total * randomNumber;
console.log(total3); // 17 * 8

// Division
let total4 = total / randomNumber;
console.log(total4);

// Concatenate: Sum strings
let total5 = name + surname;
console.log(total5);

let total6 = name + ' ' + surname;
console.log(total6);

age = 20;
let total7 = 'Im ' + age + ' years old';
console.log(total7); // Im 19 years old

// Compare numbers
let a = 90;
let b = 900;

// Is a greater than b????
let result1 = a >= b;
console.log(result1);

let result2 = a < b;
console.log(result2);

// Is a equal to b???
let result3 = a === b;
console.log(result3);

// Is a different to b???
// Is a NOT EQUAL to b???
let result5 = a !== b; // ! means NOT
console.log(result5);

// The = sign is used for assignation
a = 80; // Assignation: used to give a value to a variabel
a === 80; // Comparison: Check for a condition

let c = 80; // number
let d = '80'; // string

let result4 = c === d;
console.log(result4);

let result6 = a === a;
console.log(result6);

// Incrementation
let counter = 0;
counter++;
counter++;
counter++;
counter = counter + 1;

counter += 5;
// counter = counter + 5;

// Decrementing
counter--;
counter = counter - 1;

counter -= 7;
// counter = counter - 7
counter++;

counter *= 5;
// counter = counter * 5;

counter /= 5;
// counter = counter / 5;

console.log(counter);

let counter2 = 'ABC';
counter2++;
console.log(counter2);
