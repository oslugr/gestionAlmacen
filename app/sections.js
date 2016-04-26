// Pagina de inicio
exports.index = function(req, res) {
	res.render("index", {
		titulo: "Gestión de almacén: Inicio"
	});
};

// Pagina de creación de etiquetas
exports.etiquetas = function(req, res) {
	res.render("etiquetas", {
		titulo: "Gestión de almacén: Crear etiquetas"
	});
};

// Pagina de inserción de artículos
exports.articulos = function(req, res) {
	res.render("articulos", {
		titulo: "Gestión de almacén: Insertar artículos"
	});
};
