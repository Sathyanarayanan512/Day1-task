// 1. Extract values from an array/object using destructuring.
let arr = [1,2,4,5,1,"Sathya"];
let obj = {
    name: "Sathya",
    age: 23,
}
let [val1, val2, ...rest] = arr;
console.log("Array :");
console.log("First : ", val1, ", Second: ", val2, ", Rest: ", rest);
let {age, name} = obj;
console.log("Object :");
console.log("name: ", name, ", age: ", age, "\n");

// 2. Copy an array using spread operator.
console.log(arr);
let newArr = [0, ...arr, "Hi"];
console.log(newArr);

// 3. Write a function using rest operator.
function reduceUsingRestOperator(...numbers){
    return numbers.reduce((accumulator, item)=> accumulator+item, 0)
}
console.log(reduceUsingRestOperator(1,2,3));
console.log(reduceUsingRestOperator(...[1,2,3]));