//Create a button that hides himself when pressed. After testing it, remove its eventlistener

let boton = document.getElementById("boton");

function borrarBoton() {
    boton.remove();
}

boton.addEventListener("click", borrarBoton);
boton.removeEventListener("click", borrarBoton);



//Create three buttons as a group and assign them an event listener by using an object: 
class manejador {
    constructor(elemento) {
        elemento.onclick = this.onclick.bind(this);
    }


    //The first one must hide/show a text below itself
    boton1() {
        let texto = document.getElementById("txt");
        texto.classList.toggle("hidden");

    }

    //The second one must show a window with any text
    boton2() {
        alert('Esto es una alerta accionada con el boton 2');


    }

    //The third one must console out a random text
    boton3() {
        console.log("Texto Aleatorio");
    }

    
    onclick(event) {
        this[event.target.dataset.accion]();
    }
}

new manejador(document.getElementById('botones'));



//Create a box with a header, some text and a button that closes the box.
let caja = document.getElementById("box");
let btn = document.getElementById("btn_caja");

btn.addEventListener("click", (e) => {
    caja.classList.add("hidden");
});



