//  1. Write a function to add two numbers.
function addition(a,b){
    console.log("1. Addition: ", a+b);
}
addition(2,3);


//  2. Write a function expression to multiply two numbers.
let multiplication = function(a,b){
    console.log("3. Multiplication: ", a*b);
}
multiplication(2,3);


//  3. Write an arrow function to subtract two numbers.
let arrowSubtract = (a,b) =>{
    console.log(a-b);
}
arrowSubtract(3,2);


//  4. Write a function with parameters and return a value.
function withParameters(name){
    let greet="! Hello!";
    return name + greet;
}
console.log(withParameters("John"));


//  5. Demonstrate global vs local scope.
let age=23;
let msg="The end"; // global scope
if (age>=18){
    let msg="You can Vote!"; // local scope for this if block
    console.log(msg+" (This is 'msg' with the if block's scope)");
}
else{
    let msg="You can't Vote!"; // local scope for this else block 
    console.log(msg+" (This is 'msg' with the else block's scope)");
}
console.log(msg+" (This is 'msg' with global scope)");
