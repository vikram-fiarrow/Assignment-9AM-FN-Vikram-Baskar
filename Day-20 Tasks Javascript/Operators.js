// Arithmetiic Operators

// used for mathematical calculations

let a = 10;
let b = 4;

console.log("Addition:", a + b)
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:" , a / b);
console.log("Modulus:" , a % b); 
// remainder
console.log("Exponentiation:" , a ** b); 
// a is to power of b
console.log("Increment : " , ++a);
// a = a + 1
console.log("Decrement : " , b--);
// b = b - 1
console.log("Decrement : " , --b);
// b = b - 1

console.log("Value of b after decrement :" , b);

console.log("Negation:" , -a);
console.log("Negation:" , -b);

console.log("Unary plus:" , +a);
console.log("Unary plus:" , +a);
console.log("Unary plus on string:" , "+123");


// Assignment Operators

let c = 10;
let d = 5;

console.log("Assignment Operators:" , c + d);

let x = 10;

x += 5;

console.log("Value of x after =+ 5:" , x);

let y = 10;
y *= 5;
console.log("Value of y after *=5:" , y);

// Comparison Operators
// used to compare two values and return boolean value

let z = 12;
let m = 12;

console.log("Equal to :" , z==m);
console.log("Strict equal to:" , z===m);
console.log("Not equal to:" , z != m);
console.log("Strict not equal to:" , z !== m);
console.log("Greater than:" , z > m);
console.log("Less than:" , z < m);
console.log("Greater than or equal to:" , z >= m);
console.log("Less than or equal to:" , z <= m);



// Logical Operators

let age = 20;

console.log(age >= 18 && age <=25);
console.log( age < 18 || age > 25 );
console.log( !(age >=18));

// conditional Operator



if (age > 18) {
    console.log("can vote");
}

if (age < 13) {
    console.log("you are a child");
    
} else {
    console.log("Your are a teen");
    
}


// Swtich statement
let day = 2
switch (day) {
    case 1:
        console.log("Monday");
        break;

     case 2:
        console.log("Tuesday");
        break;
    
     case 3:
        console.log("Wednesday");
        break;

     case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;
    
     case 6:
        console.log("Saturday");
        break;

     case 7:
        console.log("Sunday");
        break;

    default: console.log("Invalid day");
    
        break;
}



















