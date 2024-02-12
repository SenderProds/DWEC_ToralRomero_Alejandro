let btnRegistro = document.getElementById("btnRegistro");
let btnLogin = document.getElementById("btnLogin");
let btnCerrarSesion = document.getElementById("cerrarSesion");
let btnPreferencias = document.getElementById("preferencias");
let btnEliminarSesion = document.getElementById("eliminarSesion");

let seccionPrincipal = document.getElementById("main");
let seccionRegistro = document.getElementById("register");
let seccionLogin = document.getElementById("login");

let btnRegistroForm = seccionRegistro.querySelector("form input[type=button]");
let btnLoginForm = seccionLogin.querySelector("form input[type=button]");

//Boton Registro
btnRegistro.addEventListener("click", (e) => {
  if (!seccionLogin.classList.contains("dp-none")) {
    seccionLogin.classList.add("dp-none");
  }
  seccionRegistro.classList.remove("dp-none");
});

btnRegistroForm.addEventListener("click", (e) => {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let sex = document.getElementById("sex").value;
  let color = document.getElementById("color").value;
  let language = document.getElementById("language").value;

  if (name != "" && age != "" && sex != "" && color != "" && language != "") {
    guardarEnAlmacenamiento(name, age, sex, color, language);
    seccionPrincipal.classList.remove("dp-none");
    seccionRegistro.classList.add("dp-none");
    iniciarSesion();
  } else {
    alert("Tienes que rellenar todos los campos");
  }
});

//Boton login
btnLogin.addEventListener("click", (e) => {
  if (!seccionRegistro.classList.contains("dp-none")) {
    seccionRegistro.classList.add("dp-none");
  }
  seccionLogin.classList.remove("dp-none");
});

//Formulario Login
btnLoginForm.addEventListener("click", (e) => {
  let name = document.getElementById("nameLogin").value;
  if (name != "") {
    if (comprobarNombre(name)) {
      seccionLogin.classList.add("dp-none");
      iniciarSesion();
    }
  } else {
    alert("Tienes que rellenar todos los campos");
  }
});

//Cerrar Sesion
btnCerrarSesion.addEventListener("click", (e) => {
  localStorage.setItem("iniciada", false);
  seccionPrincipal.innerHTML = "";
  document.body.style.removeProperty("background-color");

  btnCerrarSesion.classList.add("dp-none");
  btnPreferencias.classList.add("dp-none");
  btnEliminarSesion.classList.add("dp-none");

  btnLogin.classList.remove("dp-none");
  btnRegistro.classList.remove("dp-none");

  seccionRegistro.classList.add("dp-none");
  
});

//Preferencias
btnPreferencias.addEventListener("click", (e) => {
  seccionPrincipal.innerHTML = "";
  formularioPreferencias();
});


btnEliminarSesion.addEventListener('click', (e) => {
    localStorage.removeItem('sesion');
    localStorage.setItem('iniciada', false);
    location.reload();

});
/**
 * Inicia sesion
 */
function iniciarSesion() {
  btnCerrarSesion.classList.remove("dp-none");
  btnEliminarSesion.classList.remove("dp-none");
  btnPreferencias.classList.remove("dp-none");
  btnLogin.classList.add("dp-none");
  btnRegistro.classList.add("dp-none");
  localStorage.setItem("iniciada", true);
  saludar();
}

/**
 * Guarda los datos en el almacenamiento
 * @param {*} name Nombre
 * @param {*} age Edad
 * @param {*} sex Sexo
 * @param {*} color Color de preferencia
 * @param {*} language Idioma
 */
function guardarEnAlmacenamiento(name, age, sex, color, language) {
  let informacion = {
    name: name,
    age: age,
    sex: sex,
    color: color,
    language: language,
  };

  localStorage.setItem("sesion", JSON.stringify(informacion));
}

/**
 * Muestra un saludo en la seccion principal
 */
function saludar() {
  let objetoAlmacenado = JSON.parse(localStorage.getItem("sesion"));
  console.log(objetoAlmacenado);
  console.log(objetoAlmacenado["color"]);
  seccionPrincipal.classList.remove("dp-none");
  document.body.style.backgroundColor = objetoAlmacenado.color;

  if (objetoAlmacenado.language == "es") {
    seccionPrincipal.innerHTML = `<p>Bienvenid@ ${objetoAlmacenado.name} </p>`;
  } else {
    seccionPrincipal.innerHTML = `<p>Welcome ${objetoAlmacenado.name} </p>`;
  }
}

/**
 * Comprueba si el nombre esta en el almacenamiento
 * @param {string} nombre Nombre de usuario
 * @returns Booleano
 */
function comprobarNombre(nombre) {
  let objeto = JSON.parse(localStorage.getItem("sesion"));

  if (nombre == objeto.name) {
    return true;
  } else {
    return false;
  }
}

function formularioPreferencias() {
  seccionRegistro.classList.remove("dp-none");
}


function comprobarSesion(){
    if(localStorage.getItem('iniciada') == 'true'){
        iniciarSesion();
    }
}

comprobarSesion();