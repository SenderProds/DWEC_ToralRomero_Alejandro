//1-Create a unordered shopping list with three levels that collapse when pressing the parent node. Use only one event handler. Clue: use hidden attribute
let lista = document.getElementById('lista');

lista.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {

      let ul = e.target.querySelector('ul');
      if (ul) {
          ul.toggleAttribute('hidden');
          
      }
  }
});

//2 - Create three boxes with a header, a text and a close button. Make the button work by using just one event listener on the container. Clue: use closest() method
let botones = document.getElementById('paso2');

botones.addEventListener('click', (e) => {
    if(e.target.tagName == 'BUTTON'){
      e.target.closest('article').toggleAttribute('hidden');
    }
});




//3 - Create a code that shows a tooltip text over a button when mouse is over and dissapears when mouse is not over. It must appear on top y there is space enough or above it if not. Clues:
let boton3 = document.getElementById("paso3");
let contenedor_tooltip = document.getElementById('tooltip');

boton3.addEventListener('mouseover', (e) => {
  let rect = boton3.getBoundingClientRect();
  console.log(rect.top);
  console.log(contenedor_tooltip.offsetHeight);
});



/*
let paso2 = document.getElementById("paso2");

let alturaContenedor = paso2.getBoundingClientRect().height;
let topContenedor = paso2.getBoundingClientRect().top;

let contenedor = alturaContenedor + topContenedor;
console.log(contenedor);

boton3.addEventListener("mouseover", (e) => {
  if ((boton3.getBoundingClientRect().top - contenedor) > 50) {
    let p = document.createElement("p");
    p.innerHTML = "Esto es una prueba";
    p.id = "tooltip";
    p.style.top = boton3.getBoundingClientRect().top - 50 + "px";

    boton3.parentNode.insertBefore(p, boton3);

    console.log(boton3.getBoundingClientRect().top);
    console.log(alturaContenedor + topContenedor);
  } else {
    let p = document.createElement("p");
    p.innerHTML = "Esto es una prueba";
    p.id = "tooltip";
    p.style.top = boton3.getBoundingClientRect().top + 10 + "px";
    boton3.insertAdjacentElement("afterend", p);
  }
});

boton3.addEventListener("mouseout", (e) => {
  let tooltip = document.getElementById("tooltip");

  document.body.removeChild(tooltip);
});
*/
/*
boton3.addEventListener("mouseover", (e) => {
    console.log(e.target.getBoundingClientRect());

    boton.toggleAttribute("hidden");
});


boton3.addEventListener("mouseout", (e) => {
    boton.toggleAttribute("hidden");
});*/
//Use data attributes to store tooltip text

//Use getBoundingClientRect() method to calculate coordinates

//4 - Create a table with two columns: one for numbers and the other for text, and as many rows as you want. When clicking on the header of each column, table must be ordered. Your code must be able to work with huge tables. Clues:
/*let tabla = document.getElementById("paso4");
let headerElements = tabla.querySelectorAll("th");

tabla.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target.cellIndex);
  console.log(e.target.dataset.prueba);
});

let elementosTabla = tabla.querySelectorAll("td");
elementosTabla.forEach((elemento) => {
  console.log(elemento);
});

let prueba = document.querySelectorAll("#paso4 td");

let primerosElementos = [];

prueba.forEach((elemento) => {
  if (elemento.cellIndex == 0) {
    primerosElementos.push(elemento);
    console.log(elemento);
  }
});

console.log(primerosElementos);

//tabla.querySelectorAll("");

//Use cellIndex to know where you have clicked*/
