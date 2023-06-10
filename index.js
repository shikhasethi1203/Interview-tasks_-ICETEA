/** @format */

let data = 0;

//printing default value of data  0 in h2 tag
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
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 2));

const sub = (a, b) => {
  return Math.abs(a - b);
};
const multiply = (a, b) => {
  return a * b;
};

const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};
console.log(calculator(5, 2, multiply));

// promise exmple:-
function item() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const name = ["shikha", "deepika", "deepshikha"];
      resolve("success");
      reject("Failure");
    }, 2000);
  });
}
console.log("getname");

const resultElement = document.getElementById("result");
resultElement.innerText = "Loading...";

item()
  .then((result) => {
    resultElement.innerText = result;
    console.log("getname fetched successfully", result);
  })
  .catch((error) => {
    resultElement.innerText = error;
    console.log("getname fetched getname", error);
  });



// bubblesort expmple:-
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Example use:
const array = [2, 4, 6, 30, 10, 15, 20];
console.log("Original array:", array);

const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);


// section-4:-
// Consider an array of size 15 or more, where the array consists of random numbers.Then find -
// Sum of array:-

function sumofArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const number = [2, 4, 5, 6, 8, 9, 10, 12, 14, 15];
const output = sumofArray(number);

console.log("The sum of the array is:", output);

// or
const numbers = [1, 2, 3, 4, 5, 7, 9, 10, 12, 14];
const adds = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("The sum of the array is", adds);

// Largest numbers in array:-

const num = [2, 4, 6, 8, 10, 12, 14];
let largestNumber = numbers[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > largestNumber) {
    largestNumber = num[i];
  }
}

console.log("The largest number is ", largestNumber);

// Find unique numbers in array:-

const uniqueArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 10, 10, 12, 12];
const uniqueNumbers = [];

for (let i = 0; i < uniqueArray.length; i++) {
  if (!uniqueNumbers.includes(uniqueArray[i])) {
    uniqueNumbers.push(uniqueArray[i]);
  }
}

console.log("Unique numbers is ", uniqueNumbers);

// or
const uniqueArr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const uniqueNumber = [...new Set(uniqueArr)];

console.log("Unique numbers in the array:", uniqueNumber);

// Repeated numbers in array:-
const nums = [1, 2, 2, 3, 4, 4, 5, 6, 6,7,9,9,10,11,12,14,14];
const repeatedNumbers = nums.filter((number, index) => nums.indexOf(number) !== index);

console.log("Repeated numbers is", repeatedNumbers);



