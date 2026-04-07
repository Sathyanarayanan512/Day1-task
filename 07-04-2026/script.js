// 1. Use push, pop, shift, unshift on an array.
// pop
let numbersArray = [1,2,1,3,4,5];
console.log(numbersArray, "\n");
let popped = numbersArray.pop();
console.log("Popped item: ", popped);
console.log(numbersArray, "\n");
// push
let poppedLen = numbersArray.push(7);
console.log("Length after pushing: ", poppedLen);
console.log(numbersArray, "\n");
// shift
let shifted = numbersArray.shift();
console.log("Shifted element: ", shifted);
console.log(numbersArray, "\n");
// unshift
let unshiftedLen = numbersArray.unshift(0);
console.log("Length after unshifitng: ", unshiftedLen);
console.log(numbersArray, "\n");



// 2. Print all elements of an array using for loop.
console.log("Traversing all the elements in the array:")
for (let i = 0; i<numbersArray.length; i++){
    console.log("Index : ", i, " - Value: ", numbersArray[i]);
}