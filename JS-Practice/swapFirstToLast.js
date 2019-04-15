"use strict";

// Write a function that rotates a list
// by k elements. For example [1,2,3,4,5,6]
// rotated by two becomes [3,4,5,6,1,2].
// Try solving this without creating
// a copy of the list. How many swap
// or move operations do you need?


let myList = [1,2,3,4,5,6];

function swapFirstToLast(arr, k) {
    let del;
    for (let i = 0; i < k; i++) {

        del = myList.shift()
        myList.push(del)
    
    }

    return arr;

};

console.log( swapFirstToLast(myList, 2));