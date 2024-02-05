//1-Create a unordered shopping list with three levels that collapse when pressing the parent 
//node. Use only one event handler. Clue: use hidden attribute
let lista = document.getElementById("lista");

lista.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    let ul = e.target.querySelector("ul");
    if (ul) {
      ul.toggleAttribute("hidden");
    }
  }
});



//2 - Create three boxes with a header, a text and a close button. Make the button work by 
//using just one event listener on the container. Clue: use closest() method


let botones = document.getElementById("paso2");

botones.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    e.target.closest("article").toggleAttribute("hidden");
  }
});




//3 - Create a code that shows a tooltip text over a button when mouse is over and dissapears 
//when mouse is not over. It must appear on top y there is space enough or above it if not. 
//Clues:

let botonToolTip = document.getElementById("paso3");
let toolTip = document.getElementById("tooltip");



botonToolTip.addEventListener("mouseover", (e) => {
  let contenedorAnterior = botonToolTip.previousElementSibling;

  //Calculo cuanto ocupa el elemento anterior
  let espacioOcupado = contenedorAnterior.getBoundingClientRect().top + contenedorAnterior.getBoundingClientRect().height;
  
  //Distancia del boton a la parte de arriba
  let BotonRect = botonToolTip.getBoundingClientRect();
  
 
  //Si entre el espacio ocupado y el top del boton por lo menos 20px se pone arriba
  if((BotonRect.top - espacioOcupado) > 20){
    toolTip.style.top = espacioOcupado +  "px";
    toolTip.innerHTML = botonToolTip.dataset.tooltip;
    toolTip.toggleAttribute('hidden');
  }else{
    toolTip.style.top = BotonRect.top + BotonRect.height + "px";
    toolTip.innerHTML = botonToolTip.dataset.tooltip;
    toolTip.toggleAttribute('hidden');
  }


});


botonToolTip.addEventListener('mouseout', (e) => {
  toolTip.toggleAttribute('hidden');
});





//4 - Create a table with two columns: one for numbers and the other for text, and as many 
//rows as you want. When clicking on the header of each column, table must be ordered. Your
// code must be able to work with huge tables. Clues:

let tabla = document.getElementById('paso4');


tabla.addEventListener('click', function (e) {
    // Verificar si el clic fue en un encabezado (TH)
    if (e.target.tagName === 'TH') {

        ordenarTabla(e.target.cellIndex, e.target.dataset.type);
    }
});


/**
 * Ordena La tabla
 * @param {*} indice Indice de la celda
 * @param {*} tipo El tipo de dato
 */
function ordenarTabla(indice, tipo) {
    let cuerpoTabla = tabla.querySelector('tbody');
    let filas = Array.from(cuerpoTabla.querySelectorAll('tr'));



    filas.sort(function (a, b) {
        
        let aValor = obtenerValor(a.cells[indice], tipo);
        let bValor = obtenerValor(b.cells[indice], tipo);

        //Se compara el tipo para poder ordenarlo
        if (tipo === 'number') {
            return aValor - bValor;
        } else {
            return aValor.localeCompare(bValor);
        }
    });


    cuerpoTabla.innerHTML = '';

    //Agergar Filas
    filas.forEach(function (fila) {
        cuerpoTabla.appendChild(fila);
    });
}

/**
 * Obtiene el valor de la celda
 * @param {*} celda Indice de la celda
 * @param {*} tipo Tipo de dato
 * @returns Devuelve la comparacion
 */
function obtenerValor(celda, tipo) {
    // Obtener el contenido de la celda y quitar espacios en blanco al inicio y al final
    let valor = celda.textContent;

  
  if(tipo === 'number'){
    return parseFloat(valor) || 0;
  }else{
    return valor.toLowerCase();
  }

}


//5- Make the unordered shopping list created at point 1 selectable as you can do at file 
//managers. Users should notice which elements are selected by their background color
lista.addEventListener('click', (e) => {

  e.target.style.backgroundColor = "lightblue";
});



//6- Using the event 'scroll', create a webpage that goes beyond the limits of the viewport 
//This page must have a button, in a fixed position, that moves alongside the page when scrolling
// and hides when top is reached. This button must get user to the top of the page. Clues:
let botonScroll = document.getElementById('scroll');

botonScroll.addEventListener('click', (e) =>{
  window.scrollTo({top: 0})
});


window.addEventListener('scroll', (e) => {
  if(document.documentElement.scrollTop > 0){
      if(botonScroll.hasAttribute('hidden')){
        botonScroll.toggleAttribute('hidden');
      }
      
  }else{
    botonScroll.toggleAttribute('hidden');
  }
});