let formulario = document.getElementById("formulario");
let respuesta = document.getElementById("respuesta");
let dat = document.getElementById('datos');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let input = document.getElementById("url").value;
    if(input == ""){
        alert('Se tiene que rellenar el campo url');
    }else{
        fetch(input)
        .then((response) => {
            if(!response.ok){
                throw new Error("Error en el JSON")
            }
            respuesta.innerHTML = `Request Status -> ${response.status} <br>
            Server Response -> ${response.statusText} <br>`;

            return response.text();
        })
        .then((data) => {
           
            dat.textContent = `Datos -> ${data}`;


        });
    }
});