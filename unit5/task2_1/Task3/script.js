const url = "archivo.php";
let array = [];

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en el JSON");
    }

    return response.json();
  })
  .then((data) => {
    array = data;
  });

let inputCiudad = document.getElementById("ciudad");
let seccionSugerencias = document.getElementById("sugerencias");

inputCiudad.addEventListener("input", (e) => {
  let ulSugerencias = document.createElement("ul");
  let valor = e.target.value;

  seccionSugerencias.innerHTML = " ";
  if (valor != "") {
    let ciudadesFiltradas = array.filter((name) =>
      name.toLowerCase().startsWith(valor)
    );

    ciudadesFiltradas.forEach((ciudad) => {
      let li = document.createElement("li");
      li.textContent = ciudad;
      li.addEventListener('click', (e) => {
        inputCiudad.value = ciudad;
      });
      ulSugerencias.appendChild(li);
    });

    
    seccionSugerencias.appendChild(ulSugerencias);
    
  }
});
