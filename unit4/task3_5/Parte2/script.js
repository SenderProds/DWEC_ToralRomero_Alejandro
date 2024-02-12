let btnAgregar = document.getElementById("agregar");
let btnRecuperar = document.getElementById("recuperar");
let btnSubmit = document.getElementById("btnSubmit");

let seccionPrincipal = document.getElementById("contenido");

let formulario = document.getElementById("form");

btnAgregar.addEventListener("click", (e) => {
  formulario.removeAttribute("hidden");
});

btnSubmit.addEventListener("click", (e) => {
  let nombre = document.getElementById("nombre").value;
  let text = document.getElementById("text").value;

  if (nombre == "" && text == "") {
    alert("Tiene que completar los campos");
  } else {
    
    if (localStorage.getItem("entradas") != null) {
      let arrayEntradas = JSON.parse(localStorage.getItem("entradas"));
      let objeto = {
        nombre: nombre,
        text: text,
      };

      arrayEntradas.push(objeto);
      localStorage.setItem("entradas", JSON.stringify(arrayEntradas));
    } else {
      let array = [];
      let objeto = {
        nombre: nombre,
        text: text,
      };

      array.push(objeto);
      localStorage.setItem("entradas", JSON.stringify(array));
    }
  }
});


btnRecuperar.addEventListener('click', (e) => {
    seccionPrincipal.innerHTML = "";
    if(localStorage.getItem("entradas") != null){
        let arrayEntradas = JSON.parse(localStorage.getItem("entradas"));
        arrayEntradas.forEach((objeto) => {
            let articulo = document.createElement('article');
            for (const key in objeto) {
                let p = document.createElement('p');
                p.innerHTML = objeto[key];
                articulo.appendChild(p);
            }

            seccionPrincipal.appendChild(articulo);
        });
    }else{
        seccionPrincipal.innerHTML = "No hay entradas";
    }
});