"use strict";

let test = {
    val: 1,
    func: function() {
        return this.val;
    }
};

let testA = Object.create(test);

testA.val = 2;
console.log(test.func());
console.log(testA.func());