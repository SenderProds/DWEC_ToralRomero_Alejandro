let btnRegistro = document.getElementById("btnRegistro");
let btnLogin = document.getElementById("btnLogin");

let seccionPrincipal = document.getElementById("main");
let seccionRegistro = document.getElementById("register");
let seccionLogin = document.getElementById('login');

let btnRegistroForm = seccionRegistro.querySelector("form input[type=button]");
let btnLoginForm = seccionLogin.querySelector('form input[type=button]');


btnRegistro.addEventListener("click", (e) => {
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
    seccionRegistro.classList.add('dp-none');
  } else {
    alert("Tienes que rellenar todos los campos");
  }
});


btnLogin.addEventListener('click', (e) => {
    seccionLogin.classList.remove('dp-none');

});




btnLoginForm.addEventListener('click', (e) => {
    let name = document.getElementById("nameLogin").value;
    if(name != ""){
        if(comprobarNombre(name)){
            seccionLogin.classList.add('dp-none');
            saludar(name);
        }
    }else{
        alert("Tienes que rellenar todos los campos");
    }
});


//giardar
function guardarEnAlmacenamiento(name, age, sex, color, language) {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("sex", sex);
    localStorage.setItem("color", color);
    localStorage.setItem("language", language);
}


function saludar(name){
    let language = localStorage.getItem('language');

    seccionPrincipal.classList.remove('dp-none');
    document.body.style.backgroundColor = localStorage.getItem('color');
    
    if(language == 'es'){
        seccionPrincipal.innerHTML = `<p>Bienvenid@ ${name} </p>`;
    }else{
        seccionPrincipal.innerHTML = `<p>Welcome ${name} </p>`;
    }
    
}

function comprobarNombre(name){
    let nombreAlmacenado = localStorage.getItem('name');
    if(name == nombreAlmacenado){
        return true;
    }else{
        return false;
    }
}