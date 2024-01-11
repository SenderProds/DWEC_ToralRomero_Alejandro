
//The second paragraph
let parrafo2 = document.getElementById('parrafo2');
console.log(parrafo2);


//The title
let titulo = document.getElementsByTagName('title');
console.log(titulo[0]);


//The fist section
let primeraSeccion = document.querySelector('section');
console.log(primeraSeccion);


//All the paragraphs with class=parrafo_cuerpo
let todosLosParrafosCuerpo = document.querySelectorAll('p.parrafo_cuerpo');
console.log(todosLosParrafosCuerpo);


//The "apellidos" input field
let inputApellidos = document.querySelectorAll('input#apellidos');
console.log(inputApellidos);

//The fisrt section
console.log(document.querySelector('section'));

//The last section
let secciones = document.querySelectorAll('section');
console.log(secciones[secciones.length - 1]);

//All the paragraphs
let todosLosParrafos = document.querySelectorAll('p');
console.log(todosLosParrafos);