// loops will allow you to repeat a block of code multiple times until a certain condition is met.

// Automate task (PerformancePaintTiming, searching, calculating)

// Here are some common types of loops in JavaScript:
// For Loop:
// While loop:
// Do...while loop:
// For...in loop:
// For...of loop:
// Foreach Loop:




// 1.For Loop:
// we use for loop when we know the number of iterations in advance.

// syntax:
// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }


for (let i = 1; i <= 10; i++) {
    console.log("number is :", i);
}




// 2. while loop : we use while loop when we don't know the number of iterations in advance.
// syntax:
// while (condition) {
//   // code block to be executed
// }
let j = 1;
while (j <= 10) {
    console.log("number is : " , j);
    j++;
}



// 3. do{
//     // code block
// } while(condition); Atleast once the code block will be executed before checking the condition.

let k = 1;
do {
    console.log("number is : ", k);
    k++;
} while (k <= 0);



// 4. for..in loop : used to iterate over the properties of an object.
// for (key in object) {
//   // code block to be executed
// }
let people = {
    name: "Vikram",
    name2: "Bonny",
    name3: "India"
};

for (let key in people) {
    console.log(key + ": " + people[key]);
}


function greet(){
    console.log("Hello, Welcome to the world of Javascript");
    
}


greet();