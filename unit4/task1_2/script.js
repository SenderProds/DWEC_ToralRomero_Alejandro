//Downgrade the h1 tag to an h2 one
let h1 = document.getElementsByTagName('h1')[0];
let h2 = document.createElement('h2');
h2.innerHTML = h1.innerHTML;
h1.parentNode.replaceChild(h2, h1);


//Replace only h2 content with a new text
h2 = document.getElementsByTagName("h2")[0];

h2.innerHTML = "Hola";

//Modify the first image source and alt properties
let imagen = document.querySelector("img");
imagen.src = "https://picsum.photos/200/300";
imagen.alt = "Imagen de ejemplo";

//Replace the text of any p tag with "Hello, I'm a paragraph"
let parrafo = document.querySelector("p");

parrafo.innerHTML = "Hello, I'm a paragraph";


//Modify the second image text

let textoImagen = document.querySelector("#perro p");

textoImagen.innerHTML = "Texto cambiado";



//Assign a non-standard property to body called info-fecha and assign today's date
document.body.setAttribute("info-fecha", "15/01/2024");


//Modify first image alt text
imagen.alt = "Imagen de ejemplo";


//Console out all first image attributes
console.log(imagen.getAttributeNames());


//Change last image property "size" (after checking that exists)
let imagenes = document.querySelectorAll("img");
let ultimaImagen = imagenes[imagenes.length - 1];

if (ultimaImagen) {
    ultimaImagen.setAttribute("size", "1000px");
}


//Add an id="ultima_imagen" to the last image
ultimaImagen.setAttribute("id", "ultima_imagen");


//Add an attribute tipo="parrafo" to all p
let parrafos = document.querySelectorAll("p");

parrafos.forEach((parrafo) => {
    parrafo.setAttribute("tipo", "parrafo");
})


//Add a text to each element in the list (must be scalable)
let elementos = document.querySelectorAll("ul li");

elementos.forEach((elemento, indice) => {
    elemento.innerHTML = `Elemento ${indice}`;
});


//Add a paragraph after the last element with a text counting the number of items in the list
let lista = document.querySelector("ul");
let parrafoNuevo = document.createElement("p");
parrafoNuevo.innerHTML = `Total de elementos de la lista: ${elementos.length}`;
lista.after(parrafoNuevo);


//Add a paragraph, at the end of the document, containing how many classes has the last paragraph of the first article and their names
let primerArticulo = document.querySelector("article");
let elementosArticulo = primerArticulo.querySelectorAll("*");
let totalClases = 0;
let nuevoParrafo = document.createElement("p");
let listaNueva = document.createElement("ul");
let nombreClase = [];


elementosArticulo.forEach((elemento) => {
    let elementoLista = document.createElement('li');

    totalClases += elemento.classList.length;


    if (elemento.className) {
        elementoLista.innerHTML = elemento.className;
        listaNueva.appendChild(elementoLista);
    }



});

nuevoParrafo.textContent += `Numero de clases ${totalClases}`;
document.body.appendChild(nuevoParrafo);
document.body.appendChild(listaNueva);


//Add two classes to the previous paragraph: "clase1" and "clase2"
parrafos = document.querySelectorAll("p");
let ultimoParrafo = parrafos[parrafos.length - 1];
ultimoParrafo.classList.add('clase1', 'clase2');


//Remove the last created class
ultimoParrafo.classList.remove('clase2');


//Add a boolean attribute to the first image
imagen.toggleAttribute("boolean");