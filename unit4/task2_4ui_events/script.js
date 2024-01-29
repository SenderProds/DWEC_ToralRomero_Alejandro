//Make a paragraph that change its appeareance if the mouse passes over it
document.body.style.height = "7000px";

let parrafo = document.getElementById("cambiarApariencia");
parrafo.addEventListener("mouseover", (e) => {
    e.target.style.color = "red";
});

parrafo.addEventListener("mouseout", (e) => {
    e.target.style.color = "";
});

//Make a input that replicates what user inputs in another input
let input = document.getElementById("input");
let replica = document.getElementById("replica");

input.addEventListener("input", (e) =>{
    replica.placeholder += e.data;
});

//Make a infinity scroll webpage. Clues:


let html = document.querySelector("html");

window.addEventListener("scroll", (e) => {

    if(document.body.scrollHeight - window.scrollY < 1000){
        document.body.style.height += "100px";
    }
    console.log(window.scrollY);
    console.log(document.body.scrollHeight);
    
});


