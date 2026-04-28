// 1. Write a function that accepts a callback.
function callbackAcceptor(callBack){
    let shouldCallback = callBack();
    // 2. Create a promise that resolves or rejects.
    return new Promise((resolve, reject)=>{
        if(shouldCallback){
            resolve("The callback has been accepted and a promise is returned & resolved");
        }
        else{
            reject("An Error might have occurred and the promise is rejected");
        }
    })
}
function randomFunction(){
    return false;
}
// 3. Handle promise using then and catch.
callbackAcceptor(randomFunction)
.then((data)=> console.log(data))
.catch((error)=>console.error(error));