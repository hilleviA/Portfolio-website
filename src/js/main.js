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