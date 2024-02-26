//Create a website that allows you to select a Marvel character and, once selected, presents information about comics they star in and comics they appear with more characters. It must allow to click on these comics or characters to get more information about them. To achieve it, you must use marvel API

fetch(
  "https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=8581758b7df1d2472ee705bbdfb1a2df&hash=13cc499cbcd2876b97082a14efb0b4dd"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la api");
    }
    return response.json();
  })
  .then((data) => {
    data.data.results.forEach((personaje) => {
      let imgPrueba = document.createElement("img");
      imgPrueba.src =
        personaje.thumbnail.path + "." + personaje.thumbnail.extension;
      imgPrueba.id = personaje.id;
      imgPrueba.addEventListener("click", (e) => {
        listaComics(personaje.comics.items, personaje.name);
      });
      document.body.appendChild(imgPrueba);
    });
  });

function listaComics(comics, name) {
  let listaComics = document.createElement("ul");
  let h1Comics = document.createElement("h1");
  let btnVolver = document.createElement('button');

  document.body.innerHTML = "";
  h1Comics.innerHTML = `Lista Comics - ${name}`;
  btnVolver.innerHTML = "Vover";

  comics.forEach((comic) => {
    let liComic = document.createElement("li");
    liComic.innerHTML = comic.name;
    listaComics.appendChild(liComic);
  });

  btnVolver.addEventListener('click', (e) => {
    location.reload();
  });

  document.body.appendChild(h1Comics);
  document.body.appendChild(listaComics);
  document.body.appendChild(btnVolver);

}
