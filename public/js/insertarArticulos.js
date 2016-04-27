$(document).ready(function() {
	var spreadsheetID = "1pYIMcjAyaYYM4Vpph-sBoArvy6WW1q8Z4qnDtB6Nq6s";
	var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
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

		alert("Artículo añadido/modificado.");

		location.reload();
	});

	$("#leerDatos").click(function(event) {
		var now = moment();
		var fecha = now.format("YYYY-MM-DD");

		var existe = false;

		var codigo = prompt("Leer código de barras", "");

		if (codigo !== null) {
			limpiarCampos();
			var articulo = parseInt(codigo.substring(0, 2));
			var centro = codigo.substring(2, 8);
			var codid = codigo.substring(8, 13);

			var centroAux = getCentro(centro);
			var articuloAux = getArticulo(articulo);

			centroAux.then(function(nombreCentro) {
				articuloAux.then(function(tipoArticulo) {
					$("#codigo").val(codigo);
					$("#fecha").val(fecha);
					$("#articulo").val(tipoArticulo);
					$("#centro").val(nombreCentro);
					$("#codid").val(codid);

					$.getJSON(url, function(data) {
						var entry = data.feed.entry;

						$(entry).each(function() {
							if (this.gsx$codigo.$t == codigo) {
								$("#existencia").val("EXISTE");
								document.getElementById("modelo").value = this.gsx$modelo.$t;
								document.getElementById("peso").value = this.gsx$peso.$t;

								if (this.gsx$funciona.$t == "Sí") {
									document.getElementById("funciona").checked = true;
								} else {
									document.getElementById("funciona").checked = false;
								}

								document.getElementById("comentarios").value = this.gsx$comentarios.$t;

								existe = true;
								return false;
							}
						});

						if (!existe) {
							$("#existencia").val("NUEVO");
						}
					});

				});
			});

		}
	});

	function limpiarCampos() {
		document.getElementById("codigo").value = "";
		document.getElementById("existencia").value = "";
		document.getElementById("fecha").value = "";
		document.getElementById("articulo").value = "";
		document.getElementById("codid").value = "";
		document.getElementById("centro").value = "";
		document.getElementById("modelo").value = "";
		document.getElementById("peso").value = "";
		document.getElementById("funciona").checked = false;
		document.getElementById("comentarios").value = "";
	}
});