console.log("=== Day 20 Progressive Project Output ===");

// 1. Form Validation
let form = {
    name: "Vikram",
    age: "20"
};

let ageNumber = Number(form.age);

console.log("Form Name:", form.name);
console.log("Age is number?", !isNaN(ageNumber));


// 2. Login System (Boolean)
let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome User!");
} else {
    console.log("Please Login");
}


// 3. Product Catalog (Objects + Arrays)
let products = [
    { name: "Laptop", price: 20000 },
    { name: "Mouse", price: 500 },
    { name: "Bag", price: 1200 }
];

console.log("Products:", products);


// 4. Finance App (Numbers + BigInt)
let bigAmount = 999999999999999n;
let newAmount = bigAmount + 1n;

console.log("BigInt Amount:", bigAmount);
console.log("After Adding 1:", newAmount);


// 5. UI State (Object)
let ui = {
    darkMode: true,
    menuOpen: false,
};

console.log("Dark mode active?", ui.darkMode);
console.log("Menu open?", ui.menuOpen);
