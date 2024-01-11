//The table with id="age-table".
let tabla = document.getElementById('age-table');
console.log(tabla);

//All label elements inside that table (there should be 3 of them).
console.log(tabla.querySelectorAll('tbody > tr > td > label'));


//The first td in that table (with the word “Age”).
console.log(document.querySelector("td [name=age]"));


//The form with name="search-person".
let formulario = document.querySelector('form[name=search-person]');
console.log(formulario);

//The first input in that form.
console.log(formulario.querySelector('input'));


//The last input in that form.
let todosInputs = formulario.querySelectorAll('input');
console.log(todosInputs[todosInputs.length - 1]);

