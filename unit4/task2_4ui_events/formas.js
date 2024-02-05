let formulario = document.getElementById("formas");
let seleccion = document.getElementById("seleccionFormas");
let contenido = document.getElementById("contenido");
let resultado = document.getElementById('resultado');

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  switch (seleccion.value) {
    case "rectangulo":
      console.log("Rectangulo");
      let formularioRectangulo = crearFormularioForma(['Longitud', 'Ancho']);
        formularioRectangulo.addEventListener('submit', (e) => {
            e.preventDefault();
            calcularRectangulo();
        });

        contenido.appendChild(formularioRectangulo);
      break;

    case "cuadrado":
      console.log("Cuadrado");
      let formularioCuadrado = crearFormularioForma(['Lado']);
      formularioCuadrado.addEventListener('submit', (e) => {
          e.preventDefault();
          calcularCuadrado();
      });

      contenido.appendChild(formularioCuadrado);
      break;

    case "triangulo":
      console.log("triangulo");

      let formularioTriangulo = crearFormularioForma(['Base', 'Altura']);
      formularioTriangulo.addEventListener('submit', (e) => {
          e.preventDefault();
          calcularTriangulo();
      });

      contenido.appendChild(formularioTriangulo);
      break;


    case "circulo":
      console.log("circulo");

      let formularioCirculo = crearFormularioForma(['Radio']);
      formularioCirculo.addEventListener('submit', (e) => {
          e.preventDefault();
          calcularCirculo();
      });

      contenido.appendChild(formularioCirculo);



      break;
      
    default:
      alert("No ha seleccionado una forma");
      console.log(seleccion.value);
      break;
  }
});

function calcularCirculo(){
    let radio = document.getElementById('Radio').value;

    resultado.innerHTML = (Math.PI * (radio * radio)).toFixed(2);
}


function calcularTriangulo(){
    let base = document.getElementById('Base').value;
    let altura = document.getElementById('Altura').value;

    resultado.innerHTML = (base * altura) / 2;
}


function calcularCuadrado(){
    let lado = document.getElementById('Lado').value;
    resultado.innerHTML = lado * lado;
}

function calcularRectangulo(){
    let Longitud = document.getElementById('Longitud').value;
    let Ancho = document.getElementById('Ancho').value;

    resultado.innerHTML = Longitud * Ancho;    

}


function crearFormularioForma([...campos]) {
  contenido.innerHTML = "";
  
  let formularioDatos = document.createElement("form");
  campos.forEach((campo) => {
    let label = document.createElement("label");
    label.innerHTML = `${campo}:`;


    let input = document.createElement("input");
    input.type = "number";
    input.required = true;
    input.id = campo;

    formularioDatos.appendChild(label);
    formularioDatos.appendChild(input);

  });
  
  let submit = document.createElement("input");
  submit.type = "submit";

  formularioDatos.appendChild(submit);
  return formularioDatos;
}
