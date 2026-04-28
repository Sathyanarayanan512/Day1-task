// 1. Write promise code using async/await.
function birth(){
    const deterministicCanonEvent = true;
    return new Promise((resolve, reject) => {
        if(deterministicCanonEvent){
            resolve("Sorry, you are born");
        }
        else{
            reject("If you can read this, you're still born even though this is a rejected promise state");
        }
    });
}
function living(situation){
    return new Promise((resolve, reject) => {
        if(situation == "Positive"){
            resolve("Good for you");
        }
        else if(situation == "Negative"){
            resolve("Keep going and that's all we can do");
        }
        else if(situation == "Neutral"){
            resolve("Maybe you're cooked or maybe not");
        }
        else{
            reject("Should feel free to say your situation");
        }
    });
}
function death(timeHasCome){
    return new Promise((resolve, reject) => {
        if(timeHasCome){
            resolve("I am confused about the furtherance from here, you'll be missed however");
        }
        else{
            reject("Not now");
        }
    });
}
async function theLife(){
    try{
        let birthResult = await birth();
        console.log(birthResult);
        let livingResult = await living("Positive");
        console.log(livingResult);
        let deathResult = await death(false);
        console.log(deathResult);
    }
    catch(error){
        console.log(error);
    }
}
theLife();


// birth()
// .then((data) => {
//     console.log(data);
//     return living("Neutral");
// })
// .then((data) => {
//     console.log(data);
//     return death(false);
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.error(error));

