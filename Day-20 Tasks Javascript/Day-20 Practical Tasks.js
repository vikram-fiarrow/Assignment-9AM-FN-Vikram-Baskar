// 1. Student Info Object
let student = {
    name: "Vikram",
    age: 21,
    grade: "A"
};
console.log("Student Info:", student);

// 2. Cart Total
let price1 = 150;
let price2 = 200;
let price3 = "300";
let total = price1 + price2 + Number(price3);
console.log("Cart Total:", total);

// 3. Login Status (Boolean)
let isLoggedIn = false;
if (isLoggedIn) {
    console.log("Welcome User!");
} else {
    console.log("Please Login");
}

// 4. BigInt Operations
let big1 = 90071992547409919999n;
let big2 = 20n;
let result = big1 + big2;
console.log("BigInt Result:", result);

// 5. Unique User IDs (Symbols)
const user1 = Symbol("User");
const user2 = Symbol("User");
const user3 = Symbol("User");
console.log("Unique IDs:", user1, user2, user3);
