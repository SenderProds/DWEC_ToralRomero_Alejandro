//Open a new window having previously asked the user for the URL. It must take 4 seconds to open it.
let url = prompt("Ingrese la url", "https://setusender.com");
let windowsId;

//Resize the previously opened window, having previously asked the user for the new size

let anchura = prompt("Introduzca la anchura", 500);
let altura = prompt("Introduzca la altura", 600);

if (url && anchura && altura) {
  setTimeout(() => {
    let parametros = "height=" + altura + ", width=" + anchura + ", resizable";
    windowsId = window.open(url, "_blank", parametros);
  }, 4000);
}

//Close the recently opened window with a button
let botonCerrar = document.getElementById("cerrar");

botonCerrar.addEventListener("click", (e) => {
  windowsId.close();
});

//Open a new window again and create a function that asks the user for a time in seconds. Show the descendant count and when it gets to 0, close the last opened window.

let contenedorSegundos = document.getElementById("segundos");
let segundos = prompt("Segundos para que se cierre la ventana");
let nuevaVentana;

if (segundos) {
  nuevaVentana = window.open(
    "http://localhost",
    "_blank",
    "height=500, width=600"
  );

  let interval = setInterval(mostrarSegundos, 1000, contenedorSegundos);
}

function mostrarSegundos(contenedor) {
  contenedor.innerHTML = `${segundos} segundos;`;
  if (segundos > 0) {
    segundos--;
  } else {
    nuevaVentana.close();
    clearInterval(interval);
    
  }
}
