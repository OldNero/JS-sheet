"use strict";

// Write a function that return 
// the elements on odd positions in a list.

let myList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function showOdd(arr) {

let newList = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j % 2 == 0; j++) {
        newList.push(arr[j])
    }
};
    return newList;
};

console.log(showOdd(myList));