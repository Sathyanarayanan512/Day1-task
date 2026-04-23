// 1. Show synchronous vs asynchronous execution.
// synchronous
console.log("First");
function synchronousExecution(value){
  console.log(value);
}
synchronousExecution("Second");
console.log("Third");
console.log("\n");
// asynchronous
console.log("First");
function asynchronousExecution(value){
  setTimeout(() => {
    console.log("Second");
  }, 2000);
}
asynchronousExecution("Second");
console.log("Third");

// 2. Print a message after 2 seconds.
function printMessage(message){
  setTimeout(function(){
    console.log(message);
  }, 2000);
}
console.log("Count 2 and you'll see a message!!");
printMessage("Hello");
console.log("\n");

// 3. Print a counter every 1 second.
function timer(){
  counter = 1;
  let intervalId = setInterval(() => {
    console.log(counter);
    counter++;
  }, 1000);
}console.log("Let the countdown start:");
timer();
