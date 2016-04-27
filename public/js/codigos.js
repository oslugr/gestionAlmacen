$(document).ready(function() {
	window.getCodCentro = function(nombre) {
		var response = $.Deferred();

		$.ajax({
			url: "/data/centros.json",
			success: function(result) {
				var i;
				var centro = "";

				for (i = 0; i < result.length; i++) {
					if (nombre == result[i].nombre) {
						centro = result[i].codigo;
					}
				}

				if (centro === "") {
					centro = "999999";
				}

				response.resolve(centro);
			},
			error: function(xhr) {
				response.reject();
			}
		});

		return response.promise();
	};

	window.getCodArticulo = function(nombre) {
		var response = $.Deferred();

		$.ajax({
			url: "/data/articulos.json",
			success: function(result) {
				var i;
				var articulo = "";

				for (i = 0; i < result.length; i++) {
					if (nombre == result[i].tipo) {
						articulo = result[i].codigo;
					}
				}

				if (articulo === "") {
					articulo = "99";
				}

				response.resolve(articulo);
			},
			error: function(xhr) {
				response.reject();
			}
		});

		return response.promise();
	};

	window.getCentro = function(id) {
		var response = $.Deferred();

		$.ajax({
			url: "/data/centros.json",
			success: function(result) {
				var i;
				var centro = "";

				for (i = 0; i < result.length; i++) {
					if (id == result[i].codigo) {
						centro = result[i].nombre;
					}
				}

				if (centro === "") {
					centro = "Centro de origen desconocido";
				}

				response.resolve(centro);
			},
			error: function(xhr) {
				response.reject();
			}
		});

		return response.promise();
	};

	window.getArticulo = function(id) {
		var response = $.Deferred();

		$.ajax({
			url: "/data/articulos.json",
			success: function(result) {
				var i;
				var articulo = "";

				for (i = 0; i < result.length; i++) {
					if (id == result[i].codigo) {
						articulo = result[i].tipo;
					}
				}

				if (articulo === "") {
					articulo = "Otro dispositivo";
				}

				response.resolve(articulo);
			},
			error: function(xhr) {
				response.reject();
			}
		});

		return response.promise();
	};
});