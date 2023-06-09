/** @format */

let data = 0;

//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
  data = data + 1;
  document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
  data = data - 1;
  document.getElementById("counting").innerText = data;
}

// function define
function sum() {
  var a = 20;
  b = 50;
  c = 100;
  var sumof = a + b + c;
  console.log(sumof);
}
// calling
sum();

// function parameter and function argument
function sum(a, b, c) {
  var sumof = a + b + c;
  console.log(sumof);
}
sum(40, 50, 60);

// function exp
function xyz() {
  console.log("a is called");
}
xyz();

function sum(a, b, c) {
  var sumof = a + b + c;
  console.log(sumof);
}
var funexp = sum(2, 3, 5);
funexp;

// return statement
function sum(a, b, c) {
  return (sumof = a + b + c);
}
var funexp = sum(2, 50, 5);
console.log(funexp);

// anoymous function
var funexp = function (a, b, c) {
  return (sumof = a + b + c);
};
console.log(sum(2, 5, 5));
var sum = funexp(1, 8, 0);
var sum1 = funexp(78, 2, 6);

console.log((sum = sum1));

// flat arrow function:-

// Arrow function used to write function witha short syntax.It is does not requriea function keyword for decartion and
// Arrow functions allow us to use the fat arrow => operator to quickly define JavaScript functions, with or without parameters.

// multiply each element by 2 and return olny those elements which are >10 ?

let arr = [2, 3, 4, 6, 8, 10];
// let arr2=arr.map((element)=>{
//     return element*2;
// }).filter((element)=>{
//     return element>10
// });
// console.log(arr);
// console.log(arr2);

let arr2 = arr
  .map((element) => element * 2)
  .filter((element) => element > 10)
  .reduce((accumulator, element) => (accumulator += element));

console.log(arr);
console.log(arr2);

// callback and higherorder function:-

// Function which get and passed as an argument to another function is called
// callback function.

// Function which takes another function as an argument is called HOF

// exmple:-
const add=(a,b)=>{
  return a+b;

}
console.log(add(5,2));

const sub=(a,b)=>{
  return Math.abs(a-b);

}
const multiply=(a,b)=>{
  return a*b
}

const calculator=(num1,num2, operator)=>{
  return operator(num1,num2);

}
console.log(calculator(5,2,multiply));


// promise exmple:-
function item() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const name = ["shikha","deepika","deepshikha"];
        resolve("success");
        reject('Failure');
    }, 2000); 
  });
}
console.log("getname");

const resultElement = document.getElementById('result');
resultElement.innerText = 'Loading...';

item()
  .then((result) => {
    resultElement.innerText = result;
    console.log("getname fetched successfully",result  );
  })
  .catch((error) => {
    resultElement.innerText = error;
    console.log("getname fetched getname",error  );
  });