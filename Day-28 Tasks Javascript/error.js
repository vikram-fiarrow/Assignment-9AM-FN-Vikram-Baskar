// let x = 90;
// if (x == 10) {
//     console.log("hello");
    
// }else{
//     console.log("not equal to 10");
// }
//  syntax error


// console.log(a);

let num = "Vikram";

let up = num.toUpperCase(); // TypeError: toUpperCase is not a function
console.log(up);


let arr = new Array(4); // RangeError: Invalid array length starts with 0
console.log(arr);


// why error handling is important?
// prevent application from crashing
// provide meaningful error messages
// debugging and troubleshooting
// maintain application stability
// enhance user experience
// required in real world applications (forms, api, payments etc)


try{
    // code that may throw an error
}catch(error){
    // code to handle the error
}finally{
    // code that will run regardless of error occurrence
}


let useName = "Vikram";

try{ 
    log(useName); // ReferenceError: log is not defined
}catch(error){
    console.log("An error occurred: " + error.message);
}finally{
    console.log("Execution completed.");
}

