//Open a new window with a random URL. Change its URL once opened

let url = "http://localhost";
let ventana = window.open(url);


setTimeout(() => {
    ventana.location.href = 'http://localhost';
    
}, 1000);

//Reload this URL using cache content
setTimeout(() => {
    ventana.location.reload(true);
});


//Print informatino about the URL: protocol, hostname, host and port

setTimeout(() => {
  console.log(`Protocolo --> ${location.protocol}`);
  console.log(`Hostname --> ${location.hostname}`);
  console.log(`Host --> ${location.host}`);
  console.log(`Puerto --> ${location.port}`);
}, 3000);
