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
      url: "https://script.google.com/macros/s/AKfycbx26FrrNQKgKlXZbbVxuEEleQWiYyqsOpE5yZgWHAsAj5y5O0E/exec",
      type: "post",
      data: datos
    });

    peticion.done(function(response, textStatus, jqXHR) {
      console.log(textStatus);
    });

    peticion.fail(function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    });

    peticion.always(function() {
      $campos.prop("disabled", false);
    });

    event.preventDefault();

    alert("Artículo añadido.");

    location.reload();
  });
});
