

function greet(name, callback){
    console.log("Hello " + name);
    callback();
    
}


function sayBye() {
    console.log("GoodBye !");
    
    
}

greet("Vikram", sayBye)


// setTimeout
// event handlers
// old API call

function fetchData(callback){
    setTimeout(() =>{
        callback("Data loaded");
    }, 1000);
}


fetchData(function(result){
    console.log(result);
    
})


// PROMISE:
let promise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("Task completed");
    }else{
        reject("Task failed");
    }
});

promise.then(result => console.log(result));
promise.catch(error => console.log(error));


function getData() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ("Data received")
        })
    })
    
}
getData().then(data => console.log(data));


async function showData(){
    return "Hello Async";
}

showData().then(data => console.log(data));


function fetchData(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Fetched scuccessfully");
    })
    })
}

async function getResult() {
    let result = await fetchData();
    console.log(result);
}
getResult();

