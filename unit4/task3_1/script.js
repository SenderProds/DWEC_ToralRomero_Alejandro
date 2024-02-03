//Open a new window having previously asked the user for the URL. It must take 4 seconds to open it.
let url = prompt("Ingrese la url");
let windowsId;

//Resize the previously opened window, having previously asked the user for the new size

let anchura = prompt("Introduzca la anchura");
let altura = prompt("Introduzca la altura");



if (url && anchura && altura) {
  setTimeout(() => {
    let parametros = "height=" + altura + ", width="+ anchura +", resizable";
    windowsId = window.open(url, "_blank", parametros);
  }, 4000);
}

//Close the recently opened window with a button

//Open a new window again and create a function that asks the user for a time in seconds. Show the descendant count and when it gets to 0, close the last opened window.
