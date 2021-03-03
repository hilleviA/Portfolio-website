'use strict';

//Gör så att mobilmenyn fälls ut
const burger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const listItem = document.querySelectorAll(".links li");

burger.addEventListener("click", () => {
    links.classList.toggle("open");
});

links.addEventListener("click", () => {
    links.classList.toggle("open");
});

//Variabler för html element
const employmentList = document.getElementById("employment");
const educationList = document.getElementById("education");
const projectList = document.getElementById("projectList");

//Event hanterare
window.addEventListener("load", getEmployments);
window.addEventListener("load",  getEducations);
window.addEventListener("load",  getProjects);


//Läser in anställningar
function getEmployments() {

    fetch("http://portfolio.hilleviannfalt.se/employment.php")
    .then(res => res.json())
    .then(data => {
        data.forEach( employment  =>{
            employmentList.innerHTML +=`<article> <h3>${employment.EmploymentName}</h3> <h4>${employment.EmploymentTitle}</h4> <h5>${employment.StartDate} - ${employment.EndDate}</h5> <p>${employment.EmploymentDescription}</p> </article>`;
        })   
    })
}
//Läser in utbildningar
function getEducations() {

    fetch("http://portfolio.hilleviannfalt.se/education.php")
    .then(res => res.json())
    .then(data => {
        data.forEach( education  =>{
            educationList.innerHTML +=`<article> <h3>${education.SchoolName}</h3> <h4>${education.ProgramName}</h4> <h5>${education.StartDate} - ${education.EndDate}</h5>  <p>${education.ProgramDescription}</p></article>`;
        })   
    })
}

//Läser in projekt
function getProjects() {

    fetch("http://portfolio.hilleviannfalt.se/project.php")
    .then(res => res.json())
    .then(data => {
        data.forEach( project =>{
            projectList.innerHTML +=`<article> <h4>${project.ProjectTitle}</h4> <p>${project.ProjectDescription}</p> <p><a href="${project.ProjectUrl}">Länk till webbplats</a></p></article>`;
        })   
    })
}