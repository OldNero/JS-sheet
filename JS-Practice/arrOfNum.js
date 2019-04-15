"use strict";

// Write a function that takes a number
// and returns a list of its digits. 
// So for 2342 it should return [2,3,4,2].

function arrOfNum(num) {
    return num.toString().split('').map(Number);

}

console.log(arrOfNum(2342));