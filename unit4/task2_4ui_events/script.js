//Make a paragraph that change its appeareance if the mouse passes over it
document.body.style.height = "2000px";

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
    replica.value += e.data;
});

//Make a infinity scroll webpage. Clues:


let html = document.querySelector("html");

window.addEventListener("scroll", (e) => {


    
    
        document.body.style.height = document.body.scrollHeight + 5 + "px";
    
    console.log(window.scrollY);
    console.log(document.body.scrollHeight);
    
});




let parrafoClick = document.getElementById('click');

parrafoClick.addEventListener("click", (e) =>{

    console.log("Click");
    parrafoClick.innerHTML = "";
    document.body.addEventListener("keydown", (e)=>{
        
        parrafoClick.innerHTML += e.key;
        console.log(e.key);
    });
});




