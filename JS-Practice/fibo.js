"use strict";

// Write a function that computes
// the list of the first 100 Fibonacci numbers

function fibo(n) {
    if( n < 2 ) {
        return 1;
    } else {
    return fibo(n-2) + fibo(n-1);
    }
}

console.log(fibo(7));