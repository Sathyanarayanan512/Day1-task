// 1. Use map to double all numbers in an array.
let numbers = [1,22,1,3,43,5];
console.log("Original array:");
console.log(numbers, "\n");
console.log("Doubling using map:");
let doubled = numbers.map((item) => item*2);
console.log(doubled, "\n");


// 2. Use filter to get even numbers from an array.
console.log("Getting even numbers out using filter:");
let evenNumbers = numbers.filter((item) => item % 2 === 0);
console.log(evenNumbers, "\n");


// 3. Use reduce to find the sum of an array.
console.log("Sum of the array using reduce:");
let sum = numbers.reduce((accumulator, item) => accumulator+item, 0);
console.log(sum, "\n");


// 4. Find the first number greater than 10.
console.log("Finding the first number greater than 10:");
let greaterThan10 = numbers.find((item) => item>10);
console.log(greaterThan10, "\n");


// 5. Check if array includes a specific value.
console.log("Checking whether an element(5) exists:");
let ifExists = numbers.includes(5);
console.log(ifExists, "\n");