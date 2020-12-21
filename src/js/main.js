'use strict';

//Showing and hiding the menue options
let button = document.getElementById("navButton");
let menu = document.getElementById("hiddenNav");
        
button.onclick = function() {
    
    if(menu.style.display === "block") {
        menu.style.display ="none";
    } 
    else {
        menu.style.display = "block";
    }
};

class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        showInfo() {
            console.log(`Hej ${this.firstName} ${this.lastName}. Du är ${this.age} år.`);
        } 
    }
    let person = new Person("Hillevi", "Annfält", 31);
    person.showInfo();