//1-Create a temporary structure to store the structure created in the following step
let tmp = document.createDocumentFragment();

//2-Create a section with three children: a comment and two articles. Each one must have a paragraph and a link to www.duckduckgo.com
let seccion = document.createElement("section");

let comentario = document.createComment("Esto es un comentario de prueba");
let articulo1 = document.createElement("article");
let articulo2 = document.createElement("article");

let parrafo = document.createElement("p");
let texto = document.createTextNode("Esto es un texto de ejemplo");
let enlace = document.createElement("a");

enlace.href = "https://www.duckduckgo.com";

enlace.appendChild(texto);
parrafo.appendChild(enlace);

articulo1.appendChild(parrafo);
articulo2.appendChild(parrafo.cloneNode(true));

seccion.appendChild(comentario);
seccion.appendChild(articulo1);
seccion.appendChild(articulo2);

tmp.appendChild(seccion);

//3-Attach the temporary structure to the real DOM
document.body.appendChild(tmp);


//4-Clone the previous section to a new one
let seccionClonada = seccion.cloneNode(true);

//5-Remove the content inserted at step 3
let borrar = document.body.querySelector("section:last-of-type");
let padre = document.body;
let referencia = padre.removeChild(borrar);

//6-Check if the temporary structure exists and is connected to the DOM
console.log(borrar.isConnected);

//7-Connect the temporary structure to the DOM
document.body.appendChild(referencia);

//8-Remove all the elements on the list marked as vegetables
let vegatables = document.querySelectorAll("#lista_compra .verdura");

vegatables.forEach((elemento) => {
    elemento.remove();
});

//9-Replace the paragraph of the first article inserted on step 7 with the last paragraph of the document
/*let primerParrafo = document.querySelector("section:last-of-type p");

let parrafos = document.querySelectorAll("section:last-of-type p:last-of-type");
let ultimoParrafo = parrafos[parrafos.length - 1];
padre = document.body;


console.log(ultimoParrafo);
console.log(primerParrafo);

padre.replaceChild(ultimoParrafo, primerParrafo);*/

//10-Insert a paragraph after any image with the name of the file

let imagen = document.querySelector("img");
let parrafoNuevo = document.createElement("p");
let textoNuevo = document.createTextNode("task1_3");

parrafoNuevo.appendChild(textoNuevo);

imagen.after(parrafoNuevo);

//11-Insert a comment before any image
let comentarioNuevo = document.createComment("Cometario Antes de Imagen");
imagen.before(comentarioNuevo);

//12-Insert a paragraph before the first and after the last child
let primerHijo = document.body.firstElementChild;
let ultimoHijo = document.body.lastElementChild;


let parrafoAntes = document.createElement("p").createTextNode ="Este es el parrafo antes de el primer hijo";
let parrafoDespues = document.createElement("p").createTextNode ="Este es el parrafo despues del ultimo hijo";


primerHijo.before(parrafoAntes);
ultimoHijo.after(parrafoDespues);

//13-Replace all content of the first article inserted at step 7

let primerArticuloInsertado = referencia.querySelector("article");

primerArticuloInsertado.innerHTML = "Este contenido ha sido reemplazado en el paso 13";



//14-Replace, from the content of any article inserted at step 7, only paragraphs

let ultimoArticuloInsertado = referencia.querySelector("article:last-of-type p");
ultimoArticuloInsertado.innerHTML = "Este parrafo ha sido reemplazado en el paso 14";
console.log(ultimoArticuloInsertado);


//15-Insert a descriptive text before the article of the cat
let articuloGato = document.querySelector("#gato");
let textoGato = document.createElement("p").createTextNode = "Este es un texto descriptivo";

articuloGato.before(textoGato);

//16-Insert a nice message about cats after its section
let seccionAnimales = document.querySelector("#animales");
let mensajeGatos = document.createElement("p").createTextNode = "Este es un mensaje bonito sobre gatos";

seccionAnimales.after(mensajeGatos);

//17-Replace the mixed shopping list with two lists: one for vegetables and one for fruits

console.log(vegatables);

let fruits = document.querySelectorAll(".fruta");
console.log(fruits);

let listaVerduras = document.createElement("ul");
let listaFrutas = document.createElement("ul");

vegatables.forEach((verdura) =>{
    listaVerduras.appendChild(verdura);
});

fruits.forEach((fruta) =>{
    listaFrutas.appendChild(fruta);
})

console.log(listaVerduras);
console.log(listaFrutas);

let lista = document.getElementById("lista");
lista.innerHTML ="";
lista.appendChild(listaVerduras);
lista.appendChild(listaFrutas);