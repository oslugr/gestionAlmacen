$(document).ready(function() {
  var peticion;

  $("#envioDatos").submit(function(event) {

    if (peticion) {
      peticion.abort();
    }

    var $formulario = $(this);

    var $campos = $formulario.find("input, textarea");

    var datos = $formulario.serialize();

    $campos.prop("disabled", true);

    peticion = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbzrI3Ik7FV7GlBvGe9RslYJViV04TgxpPgnGVniQdajhyt7wQA/exec",
      type: "post",
      data: datos
    });

    peticion.done(function(response, textStatus, jqXHR) {
      console.log("Datos introducidos correctamente.");
    });

    peticion.fail(function(jqXHR, textStatus, errorThrown) {
      console.error(
        "Error: " + textStatus, errorThrown
      );
    });

    peticion.always(function() {
      $campos.prop("disabled", false);
    });

    event.preventDefault();
  });
});
