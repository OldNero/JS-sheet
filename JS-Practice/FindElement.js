"use strict" ;

// Write a function that checks
// whether an element occurs in a list.

let myList = [1, 2, 3, "Hi", "What?", "Where?"]

function findElement( exist, arr ) {
    for (let item = 0; item < arr.length; item++) {
        while (exist == arr[item]) {
            console.log( "Yes. Element does exist." )
            console.log( ` At Index ${arr.indexOf(exist)}` )
            break;
        }
        };

        };

findElement( 1 , myList )