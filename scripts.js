// Distance in miles
let distance = 5;

// Constants: Like a variable BUT it does not change
const NUMBER = 1.6;
// consts CAN NOT be modified

// 1.6 x distance
let distanceInKm = distance * NUMBER;

console.log(distance + ' miles is equal to ' + distanceInKm + ' km');

// Change the value of the variable
// Reassingning the value of variables
distance = 10;
distanceInKm = distance * NUMBER;
// We can not re assign values of Constants
// NUMBER = 1.7; //ERRORR
console.log(distance + ' miles is equal to ' + distanceInKm + ' km');
