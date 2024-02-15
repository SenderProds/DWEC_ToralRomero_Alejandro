fetch('https://github.com/frontid/ComunidadesProvinciasPoblaciones/blob/master/provincias.json')
.then((response) => {
    if(!response.ok){
        throw new Error('Error json');
    }

    return response.json();
})
.then((data) => {
    console.log(data);
});