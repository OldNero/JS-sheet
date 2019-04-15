"use strict";

let num = 32;
const {performance} = require('perf_hooks');

// First Implementation
/*
function fact(num) {
    if ( num >= 1 ) {
        return num * fact( num - 1 );
    } else {
        return 1;
    }
};

let t1 = performance.now();
console.log(fact(num));
let t2 = performance.now();

console.log( "fact() Time is: " , t2 - t1  );
*/



// Second Implementation
/*
function fact_2(num) {
    let arr = [];
    let result = 0;

        for (let i = 1; i <= num; i++) {
            arr.push(i);
        }

    return arr.reduce( (a, b) => a * b);
};

let t1 = performance.now();
console.log(fact_2(num));
let t2 = performance.now();


console.log( "fact_2() Time is: " , t2 - t1  );
*/


// Third Implementation
/*
let f = [];
function fact_3(n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = fact_3(n-1) * n;
};

let t1 = performance.now();
console.log(fact_3(num));
let t2 = performance.now();


console.log( "fact() Time is: " , t2 - t1  );
*/