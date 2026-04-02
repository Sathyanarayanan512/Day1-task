// 1. Print numbers 1 to 10 using for loop.
console.log('for loop 1-10');
for(let i=1; i<11; i++){
    console.log(i);
}

// 2. Print numbers 1 to 5 using while loop.
console.log('while loop 1-5');
let j=1;
while(j<6){
    console.log(j);
    j++;
}

// 3. Print numbers 1 to 3 using do-while loop.
console.log('do-while loop 1-3');
let k=1;
do{
    console.log(k);
    k++;
}while(k<4);


// 4. Print numbers 1–10, skip 5 using continue, stop at 8 using break.
console.log('Printing 1-10 skipping 5 and stopping at 8');
for(let i=1; i<11; i++){
    if (i==5){
        continue;
    }
    console.log(i);
    if(i==8){
        break;
    }
}