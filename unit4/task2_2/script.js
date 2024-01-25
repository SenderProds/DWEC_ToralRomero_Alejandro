for (const elemento of document.querySelectorAll("*")) {
    elemento.addEventListener("click", (evento) => {
        console.log("Bubbling phase: Estoy en "+evento.currentTarget.tagName+" y el evento lo lanzó "+evento.target.tagName);
    });

    elemento.addEventListener("click", (evento) => {
        console.log("Capturing phase: Estoy en "+evento.currentTarget.tagName+" y el evento lo lanzó "+evento.target.tagName);
    },{capture:true}); //Poner capture para luego no confundirse con otros (once para que se ejecute una vez)
};
