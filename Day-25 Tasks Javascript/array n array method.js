const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const numbers = [1, 2, 3, 4, 5];

console.log(fruits [0]);

console.log(fruits[2]);

fruits[1] = 'blueberry';

console.log(fruits);

fruits.push('fig');

console.log(fruits);

fruits.pop();

console.log(fruits);

fruits.shift();

console.log(fruits);    

fruits.unshift('avocado');

console.log(fruits);


fruits.forEach(item =>{
    console.log(item);
});



const price = [100, 200, 300]
const gstPrices = price.map(item => item + item * 0.18);

console.log(gstPrices);

const nums = [1,2,3,4,5]

const even = nums.filter(n => n % 2 === 0);
console.log(even);


let ar = 5 % 2;
console.log(ar);

const sum = nums.reduce((total, current) => total + current, 0);
console.log(sum);


// multidimensional array

const matrix = [[1,2,3],[33,44,55]];
console.log(matrix[1][2]);


// const matrix = [
//     [1, 2, 3],
//     [44, 55, 66, [666,[777,888]]],
// ];
