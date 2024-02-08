//Open a new window with a random URL. Change its URL once opened

let url = "http://localhost";
let ventana = window.open(url, "_blank");


setTimeout(() => {
    ventana.location.href = 'http://localhost';
    
}, 1000);

//Reload this URL using cache content
setTimeout(() => {
    ventana.location.reload(true);
});


//Print informatino about the URL: protocol, hostname, host and port

setTimeout(() => {
  console.log(`Protocolo --> ${ventana.location.protocol}`);
  console.log(`Hostname --> ${ventana.location.hostname}`);
  console.log(`Host --> ${ventana.location.host}`);
  console.log(`Puerto --> ${ventana.location.port}`);
}, 3000);
