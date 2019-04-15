"use strict" ;

// Write a function that computes the running total of a list.

let myList = [1, 2, 3, 4, 9, "18"];

function listSum(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}
console.log(sum)
};

listSum(myList);