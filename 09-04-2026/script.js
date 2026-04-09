// 1. Create an object with name, age, and method sayHello().
let obj = {
    name: "Sathya",
    age: 23,
    sayHello: function(){
        return "Hello "+this.name;
    }
}
console.log("Creating an object: ",obj);
console.log("\n");


// 2. Access and modify object properties.
console.log("Accessing the properties:");
for (let key in obj){
    if (typeof(obj[key])!=="function"){
        console.log(key, ":", obj[key]);
    }
    
}
console.log(obj.sayHello());

console.log("Modifying the properties:");
obj.name="Sathyanarayanan";
console.log("name: ",obj.name);
console.log("age: ",obj.age);
console.log(obj.sayHello());
console.log("\n");


// 3. Call an object method.
let obj1 = {
    name: "Sathya",
    truthSpeaker: function(advice){
        return this.name + ", You're Jobless. " + advice;
    }
}
console.log(obj1.truthSpeaker("Get a job."));