//1-Create a unordered shopping list with three levels that collapse when pressing the parent node. Use only one event handler. Clue: use hidden attribute
let elementos = document.querySelectorAll('#lista *');

for (const elemento of elementos) {
    elemento.addEventListener("click",(e) =>{
        e.currentTarget.toggleAttribute("hidden");
        console.log(elemento.parentElement);
    });
}


//2 - Create three boxes with a header, a text and a close button. Make the button work by using just one event listener on the container. Clue: use closest() method

let botones = document.querySelectorAll("button");
botones.forEach((boton) =>{
    boton.addEventListener("click", (e) =>{
        boton.parentElement.toggleAttribute("hidden");
    });
});

//3 - Create a code that shows a tooltip text over a button when mouse is over and dissapears when mouse is not over. It must appear on top y there is space enough or above it if not. Clues:
let boton3 = document.getElementById('paso3');

boton3.addEventListener("mouseover", (e)=>{
    console.log(e.target.getBoundingClientRect());
});
    //Use data attributes to store tooltip text


    //Use getBoundingClientRect() method to calculate coordinates


//4 - Create a table with two columns: one for numbers and the other for text, and as many rows as you want. When clicking on the header of each column, table must be ordered. Your code must be able to work with huge tables. Clues:
let tabla = document.getElementById('paso4');
let headerElements = tabla.querySelectorAll('th');
/*
headerElements.forEach((elemento) => {
    elemento.addEventListener("click", (e) =>{
        console.log(e.target);
    });
});*/

tabla.addEventListener("click", (e) =>{
    console.log(e);
    console.log(e.target.cellIndex);
    console.log(e.target.dataset.prueba);
});


tabla.querySelectorAll("");


    //Use cellIndex to know where you have clicked