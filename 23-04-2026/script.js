// 1. Write concise arrow functions.
function createObject(name, age){
    let obj = {
        name: name,
        age: age,
        greet: () => "Hi "+age+" year old "+name         // concise arrow function
    }
    return obj;
}
let obj = createObject("Sathya", 23);
console.log(obj.greet());
console.log("\n");

// 2. Create a simple class with constructor and method.
class simple{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return {
            name : this.name, 
            age: this.age
        };
    }
}
let object = new simple("Sathya", 23);
console.log("Name: ", object.getDetails().name);
console.log("Age: ", object.getDetails().age);

