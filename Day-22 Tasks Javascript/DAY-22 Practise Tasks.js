// 1. Function that prints "Good Morning"
function greet() {
    console.log("Good Morning");
}
greet();


// 2. Function that takes two numbers and prints their sum
function addNumbers(a, b) {
    console.log("Sum:", a + b);
}
addNumbers(5, 7);


// 3. Function that returns the square of a number
function square(num) {
    return num * num;
}
console.log("Square:", square(6));


// 4. Arrow function that multiplies two numbers
const multiply = (x, y) => x * y;
console.log("Multiplication:", multiply(4, 3));


// 5. Function with default parameter
function welcome(name = "Student") {
    console.log("Welcome", name);
}
welcome();
welcome("Vikram");
