const user ={
    name : "Vikram",
    age : 25,
}

// {
//     "name": "Vikram",
//     "age": 25
// }


const jsonData = JSON.stringify (user);
console.log(jsonData);


const userObj = JSON.parse(jsonData);
console.log(userObj);


const productJSON = `[{"name": "Laptop", "price": 50000}, {"name": "Mouse", "price": 500}]`;
const products = JSON.parse(productJSON);

products.forEach(p => {
    console.log(p.name);
});


