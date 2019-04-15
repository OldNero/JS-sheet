"use strict";

// Write a function that concatenates two lists.
// [a,b,c], [1,2,3] → [a,b,c,1,2,3]
const myList = [1,2,3],
      myList_2 = [4,5,6];

let sum_arr = [];
function concat( arr, arr2 ) {
    sum_arr = arr;
    for (let i = 0; i < arr2.length; i++) {
        sum_arr.push(arr2[i]);
    }
    return sum_arr;
};

console.log(concat(['a', 'b', 'c'], myList_2));
