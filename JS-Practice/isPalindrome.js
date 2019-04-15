"use strict";

// Write a function that tests 
// whether a string is a palindrome.

function isPalindrome(str) {
    let rts = str.split("").reverse().join("");

        if (str === rts) {
            console.log("Bingo!");
        } else {
            console.log( "Nope!");
        }
};

isPalindrome("123456789987654321")


// Needs better implementation