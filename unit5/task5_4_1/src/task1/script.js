$(() => {
  $("form").on("submit", (e) => {
    e.preventDefault();
    let user = $("#user").val();

    if (user != "") {
      let url = "servidor.php";
      let nombre = $.param(user);

      $.post(url, `user=${nombre}`, function (respuesta, estado, xml) {
        console.log(estado);
        console.log(respuesta);

      });
    } else {
      alert("Tiene que completar los campos");
    }
  });
});
