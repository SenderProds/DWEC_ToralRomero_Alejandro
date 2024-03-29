//1-Include a new class at the parent of the image of the cat

let articuloGato = document.querySelector("#gato > img");
articuloGato.parentElement.classList.add('claseNueva');

//2-Include a new class at any child of the section with ID "animales"
let hijoDeAnimales = document.getElementById("animales");
let primerHijo = hijoDeAnimales.querySelector(":first-child");
primerHijo.classList.add("paso2");

//3-List all children of the form
let formulario = document.getElementById("formulario-contacto");
let listaHijosFormulario = formulario.children;
console.log(listaHijosFormulario);

//4-Change the text of the first and the last element of the shopping list
let listaCompra = document.getElementById("listaCompra");
let hijos = listaCompra.children;
hijos[0].innerHTML = "Texto cambiado en el paso 4";
hijos[hijos.length - 1].innerHTML = "Texto cambiado en el paso 4";



//5-Change the text of the first label of the form
let primeraEtiqueta = formulario.querySelector("label");

primeraEtiqueta.innerHTML = "Texto cambiado paso 5";

//6-Console out the type of the parent node of the image of the dog
let padreImagenPerro = document.querySelector("#perro > img");
console.log(padreImagenPerro.parentElement.nodeType);

//7-Console out the type of the previous sibling of the article where is the cat
console.log(articuloGato.previousSibling);