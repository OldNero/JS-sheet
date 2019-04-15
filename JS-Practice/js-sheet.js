"use strict";

class family {
     constructor() {
          this.mother = "";
          this.father = "";
          this.brother = "";
          this.sister = "";
     }
};


let family_Doe = new family('Jane Doe', 'John Doe', 'Jake Doe', 'Julia Doe');

console.log(family_Doe[2])