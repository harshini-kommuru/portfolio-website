function showSection(sectionId){

let sections = document.querySelectorAll(".section");

sections.forEach(function(section){
section.classList.remove("active");
});

document.getElementById(sectionId).classList.add("active");

}


/* typing animation */

const text = ["Python Developer","ML Enthusiast","Web Developer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
setTimeout(type,1000);
}
else{
setTimeout(type,100);
}

}

type();