// Function is a block of code designed to perform a particular task.It is executed when "called" or "invoked".Functions can take inputs, called parameters, and can return an output.

// A function is executed when something invokes it
// A function runs only when you call it
// It receives inputs (parameters) and can return an output

// Key points about functions:
// 1. resusable code
// 2. reduce redundancy (repeating code)
// 3. helps in modular programming
// 4. easier to maintain and debug
// 5. improves code organization
// 6. functions can be passed as arguments to other functions (higher-order functions)
// 7. functions can be assigned to variables
// 8. functions can be nested within other functions
// 9. functions can have default parameters
// 10. functions can be anonymous (without a name)
// 11. functions can be immediately invoked (IIFE - Immediately Invoked Function Expression)
// 12. functions can be recursive (a function that calls itself)
// 13. functions can be used as constructors to create objects
// 14. functions can have variable scope (local and global scope)
// 15. functions can be pure (no side effects) or impure (with side effects)


// function declaration

function greet(name) {
    console.log("Hello, " + name + "!");

}
greet("Vikram"); 

// calling the function with argument "Vikram"
// function syntax

function functionName(parameters) {
    // code to be executed
}


const add = function(a, b) {
    return a + b;
};

console.log(typeof add);
const result = add(5, 3);

console.log(result);


// const mulply = (a, b)  => a*b;

function greet (name){
    console.log("Hi " + name);
    
}

greet("Bonny");
greet("India");

// return statement

function square(num) {
    return num * num;

}

const root = square(4);

console.log(root);


// global scope - accessible from anywhere in the code
// local scope - accessible only within the function
// block scope - accessible only within a specific block (e.g., inside loops or conditionals)*

let x = 10;
function test(params) {
    let y = 5
    console.log(x+y);
    
}

test();


// global scope example

const globalVar = "I am a global variable";
var oldScopeVar = "I am also global (using var)";

function showGlobalScope() {
    console.log(globalVar);
    console.log(oldScopeVar);
}
showGlobalScope();

if (true) {
    console.log(globalVar);   
}

// local scope example

function localScopeExample() {
    const localVar = "I am a local variable";
    var oldLocalVar = "I am also local (using var)";
    
    console.log(oldLocalVar);
    console.log(localVar);
}

localScopeExample();

// console.log(localVar); // Error: localVar is not defined
// console.log(oldLocalVar); // Error: oldLocalVar is not defined


// block scope example

if (true) {
    const blockVar = "I am a block-scoped variable";
    let blockVar2 = "I am block scope variable "
    var oldBlockVar = "I am function-scoped (using var)";
}
// const blockVar = 20; example
// console.log(blockVar);
// console.log(blockVar2);

console.log(oldBlockVar);

// Hoisting in functions

Highlight()

function Highlight() {
    console.log("This is highlight function");
    
}



const sayHello = function() {
    console.log("Hello from sayHello function");
};

sayHello();

// Callback function - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function callme(fn) {
    fn();
}

callme(() =>console.log("callback running"));


function greetwelcome(name, callback){
    console.log("hello ," + name);
    callback();
    
}

function sayGoodbye(){
    console.log("ggoodbye");
    
}

greetwelcome("vikram", sayGoodbye)


