// Pagina de inicio
exports.index = function(req, res) {
	res.render("index", {
		titulo: "Gestión de almacén: Inicio"
	});
};

// Pagina de creación de etiquetas
exports.crear = function(req, res) {
	res.render("crear", {
		titulo: "Gestión de almacén: Crear etiquetas"
	});
};

// Pagina de inserción de artículos
exports.insertar = function(req, res) {
	res.render("insertar", {
		titulo: "Gestión de almacén: Insertar artículos"
	});
};