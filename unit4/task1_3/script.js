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
articulo2.appendChild(parrafo);

seccion.appendChild(comentario);
seccion.appendChild(articulo1);
seccion.appendChild(articulo2);

tmp.appendChild(seccion);

//3-Attach the temporary structure to the real DOM
document.body.appendChild(tmp);
console.log(tmp);

//4-Clone the previous section to a new one
let seccionClonada = tmp.cloneNode(true);

//5-Remove the content inserted at step 3
let elemento = 


