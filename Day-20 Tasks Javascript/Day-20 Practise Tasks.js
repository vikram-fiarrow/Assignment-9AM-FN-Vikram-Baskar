// 1. Primitive Types
let myString = "Hello";
let myNumber = 25;
let myBoolean = true;
let myUndefined;
let myNull = null;
let mySymbol = Symbol("id");
let myBigInt = 9007199254740991n;

// 2. typeof checks
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 3. Object with 3 properties
let person = {
    name: "Vikram",
    age: 22,
    country: "India"
};
console.log(person);

// 4. Convert "100" to Number
let num = Number("100");
console.log(num);
console.log(typeof num);

// 5. Convert false to String
let str = String(false);
console.log(str);
console.log(typeof str);
