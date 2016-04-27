$(document).ready(function() {
	var spreadsheetID = "1pYIMcjAyaYYM4Vpph-sBoArvy6WW1q8Z4qnDtB6Nq6s";
	var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

	$.getJSON("/data/articulos.json", function(data) {
		$.each(data, function(clave, valor) {
			var o = new Option(valor.tipo, valor.tipo);
			$(o).html(valor.tipo);
			$("#articulo").append(o);
		});
	});

	$.getJSON("/data/centros.json", function(data) {
		$.each(data, function(clave, valor) {
			var o = new Option(valor.nombre, valor.nombre);
			$(o).html(valor.nombre);
			$("#centro").append(o);
		});
	});

	$("#getId").click(function() {
		$.getJSON(url, function(data) {
			var entry = data.feed.entry;
			var centro = document.getElementById("centro").value;
			var articulo = document.getElementById("articulo").value;
			var codCent = getCodCentro(centro);
			var codArt = getCodArticulo(articulo);
			var aux = 0;

			$(entry).each(function() {
				if (this.gsx$centro.$t == centro) {
					aux++;
				}
			});
			aux++;
			aux = aux.toString();

			var id = "00000".substring(0, 5 - aux.length) + aux;
			codCent = "000000".substring(0, 6 - codCent.length) + codCent;
			var codigo = codArt + codCent + id;

			document.getElementById("codid").value = codigo;
		});
	});

	$("#generar").click(function() {
		$("#barcode").JsBarcode(document.getElementById("codid").value, {
			format: "CODE128",
			displayValue: true,
			fontSize: 20
		});
	});

	function getCodArticulo(nombre) {
		var tipo;

		switch (nombre) {
			case "Torre":
				tipo = "01";
				break;
			case "Portátil":
				tipo = "02";
				break;
			case "Monitor CRT":
				tipo = "03";
				break;
			case "Monitor TFT":
				tipo = "04";
				break;
			case "Impresora":
				tipo = "05";
				break;
			case "Escaner":
				tipo = "06";
				break;
			case "Fax":
				tipo = "07";
				break;
			case "Periféricos":
				tipo = "08";
				break;
			default:
				tipo = "09";
		}

		return tipo;
	}

	function getCodCentro(nombre) {
		var centro;

		switch (nombre) {
			case "Administración de Servicios Centrales":
				centro = "06UG02";
				break;
			case "Albergue Universitario":
				centro = "081DA";
				break;
			case "Apoyo a Vicerrectorados":
				centro = "06UG05";
				break;
			case "Apoyo Dirección Colegios Mayores y Residencias":
				centro = "06UG03";
				break;
			case "Apoyo Equipo Gerencia":
				centro = "06UG01";
				break;
			case "Archivo Universitario":
				centro = "06SA10";
				break;
			case "Área de Documentación y Edición":
				centro = "06UG08";
				break;
			case "Asociacionismo, Cultura y Sociedad":
				centro = "SUS25B";
				break;
			case "Aula Permanente de Formación Abierta":
				centro = "SUS27F";
				break;
			case "Biblioteca Archivo Universitario":
				centro = "051ARC";
				break;
			case "Biblioteca Campus Universitario de Ceuta":
				centro = "05CEU0";
				break;
			case "Biblioteca Campus Universitario de Melilla":
				centro = "05MEL0";
				break;
			case "Biblioteca Centro de Documentación Científica":
				centro = "05CDC";
				break;
			case "Biblioteca Colegio Máximo de Cartuja":
				centro = "05CMC";
				break;
			case "Biblioteca Edificio San Jerónimo":
				centro = "05BESJ";
				break;
			case "Biblioteca E.T.S. de Arquitectura":
				centro = "050B55";
				break;
			case "Biblioteca E.T.S. de Ingeniería de Caminos, Canales y Puertos":
				centro = "050B38";
				break;
			case "Biblioteca E.T.S. de Ingenierías Informática y de Telecomunicación":
				centro = "050B60";
				break;
			case "Biblioteca Facultad de Bellas Artes":
				centro = "050B01";
				break;
			case "Biblioteca Facultad de Ciencias":
				centro = "050B02";
				break;
			case "Biblioteca Facultad de Ciencias de la Educación":
				centro = "050B49";
				break;
			case "Biblioteca Facultad de Ciencias del Deporte":
				centro = "050B72";
				break;
			case "Biblioteca Facultad de Ciencias Económicas y Empresariales":
				centro = "050B11";
				break;
			case "Biblioteca Facultad de Ciencias Políticas y Sociología":
				centro = "050B37";
				break;
			case "Biblioteca Facultad de Derecho":
				centro = "050B03";
				break;
			case "Biblioteca Facultad de Farmacia":
				centro = "050B04";
				break;
			case "Biblioteca Facultad de Filosofía y Letras":
				centro = "050B05";
				break;
			case "Biblioteca Facultad de Psicología":
				centro = "050B50";
				break;
			case "Biblioteca Facultad de Traducción e Interpretación":
				centro = "050B53";
				break;
			case "Biblioteca Medicina y Cc. de la Salud":
				centro = "05EBBI";
				break;
			case "Biblioteca Servicios Centrales":
				centro = "050SC";
				break;
			case "Biblioteca Universitaria":
				centro = "06SA11";
				break;
			case "Biblioteca Universitaria Hospital Real":
				centro = "05BGU";
				break;
			case "Bienes Culturales":
				centro = "SUS23A";
				break;
			case "Campus de Excelencia Internacional Biotic Granada":
				centro = "SUOR19";
				break;
			case "Campus Universitario de Ceuta":
				centro = "01CEU0";
				break;
			case "Campus Universitario de Melilla":
				centro = "01MEL0";
				break;
			case "Centro Cultural Casa de Porras. Casa del Estudiante":
				centro = "SUCDP";
				break;
			case "Centro de Actividades Deportivas":
				centro = "06SA05";
				break;
			case "Centro de Cultura Contemporánea":
				centro = "SUS04A";
				break;
			case "Centro de Documentación Científica":
				centro = "03CDC";
				break;
			case "Centro de Enseñanzas Virtuales":
				centro = "SUS29C";
				break;
			case "Centro de Enseñanzas Virtuales (Área Administrativa)":
				centro = "06CE04";
				break;
			case "Centro de Iniciativas de Cooperación al Desarrollo":
				centro = "SUS28B";
				break;
			case "Centro de Instrumentación Cientifica":
				centro = "SUS26C";
				break;
			case "Centro de Investigacion Mente, Cerebro y Comportamiento":
				centro = "03CIMC";
				break;
			case "Centro de Investigación Tecnologías de Infor. y Comunicaciones":
				centro = "03CITI";
				break;
			case "Centro de Lenguas Modernas":
				centro = "SU0NH";
				break;
			case "Centro de Promoción de Empleo y Prácticas":
				centro = "06SA04";
				break;
			case "Centro de Servicios de Informática y Redes de Comunicaciones (CSIRC)":
				centro = "06SA09";
				break;
			case "Centro Investigación Biomédica":
				centro = "03IIB";
				break;
			case "Centro Mediterráneo":
				centro = "SUS04E";
				break;
			case "Centro Mixto Universidad Universidad Granada-Madoc":
				centro = "SUS04B";
				break;
			case "Colegio Mayor Albayzin":
				centro = "081MC";
				break;
			case "Colegio Mayor Alsajara":
				centro = "082MC";
				break;
			case "Colegio Mayor Cardenal Cisneros":
				centro = "0815MC";
				break;
			case "Colegio Mayor Garnata":
				centro = "0816MC";
				break;
			case "Colegio Mayor Isabel la Católica":
				centro = "086MC";
				break;
			case "Colegio Mayor Jesús-María":
				centro = "0811MC";
				break;
			case "Colegio Mayor Loyola":
				centro = "083MC";
				break;
			case "Colegio Mayor Montaigne":
				centro = "084MC";
				break;
			case "Colegio Mayor San Bartolomé y Santiago":
				centro = "088MC";
				break;
			case "Colegio Mayor Santa Cruz la Real":
				centro = "0813MC";
				break;
			case "Colegio Mayor Santa Fé":
				centro = "0810MC";
				break;
			case "Colegio Mayor Santa María":
				centro = "0812MC";
				break;
			case "Colegio Mayor Santo Domingo":
				centro = "0814MC";
				break;
			case "Comedores Universitarios":
				centro = "06SA07";
				break;
			case "Comité de Empresa del Personal de Administración y Servicios":
				centro = "09S1";
				break;
			case "Comité de Empresa del Personal Docente e Investigador Laboral":
				centro = "09S4";
				break;
			case "Consejo Social":
				centro = "07OR21";
				break;
			case "Consejo Social (Administración)":
				centro = "06EG03";
				break;
			case "Conservación y Restauración":
				centro = "SUS23B";
				break;
			case "Coordinación con Órganos de Representación y Gestión Estudiantil":
				centro = "SUS25C";
				break;
			case "Coordinador General de Acceso":
				centro = "SUS25F";
				break;
			case "Coordinadora General de Emprendimiento":
				centro = "SUS25G";
				break;
			case "CSIRC-Administración":
				centro = "06INF0A";
				break;
			case "CSIRC-Administración Electrónica":
				centro = "06INF16";
				break;
			case "CSIRC-Apoyo a la Docencia":
				centro = "06INF04";
				break;
			case "CSIRC-Asesoría y Apoyo para Desarrollo de Apl.Gestión":
				centro = "06INF13";
				break;
			case "CSIRC-Gestión Centralizada":
				centro = "06INF03";
				break;
			case "CSIRC-Gestión de Alumnos":
				centro = "06INF02";
				break;
			case "CSIRC-Microinformática":
				centro = "06INF05";
				break;
			case "CSIRC-Nodo Aynadamar":
				centro = "06INF08";
				break;
			case "CSIRC-Nodo Cartuja":
				centro = "06INF09";
				break;
			case "CSIRC-Nodo Ciencias de la Salud":
				centro = "06INF10";
				break;
			case "CSIRC-Nodo Ciencias Jurídico-Sociales":
				centro = "06INF11";
				break;
			case "CSIRC-Nodo Fuentenueva":
				centro = "06INF12";
				break;
			case "CSIRC-Redes y Comunicaciones":
				centro = "06INF01";
				break;
			case "CSIRC-Seguridad":
				centro = "06INF14";
				break;
			case "CSIRC-Servicios Telemáticos":
				centro = "06INF15";
				break;
			case "CSIRC-Sistemas de Gestión":
				centro = "06INF07";
				break;
			case "CSIRC-Sistemas de Investigación":
				centro = "06INF06";
				break;
			case "Defensor Universitario":
				centro = "SUOR20";
				break;
			case "Defensor Universitario (Administración)":
				centro = "06EG07";
				break;
			case "Delegación de Calidad Ambiental y Bienestar":
				centro = "07OR16";
				break;
			case "Delegación General de Estudiantes":
				centro = "09DGE";
				break;
			case "Delegación para el Campus Universitario de Melilla":
				centro = "07OR13";
				break;
			case "Delegación para la Transferencia, Innovación y Empresa":
				centro = "07OR15";
				break;
			case "Delegación para la Universidad Digital":
				centro = "07OR29";
				break;
			case "Departamento de Álgebra":
				centro = "02B001";
				break;
			case "Departamento de Análisis Geográfico Regional y Geografía Física":
				centro = "02B002";
				break;
			case "Departamento de Análisis Matemático":
				centro = "02B003";
				break;
			case "Departamento de Anatomía Patológica e Historia de la Ciencia":
				centro = "02B004";
				break;
			case "Departamento de Anatomía y Embriología Humana":
				centro = "02B0A9";
				break;
			case "Departamento de Antropología Social":
				centro = "02B0C1";
				break;
			case "Departamento de Arquitectura y Tecnología de Computadores":
				centro = "02B0A4";
				break;
			case "Departamento de Biología Celular":
				centro = "02B006";
				break;
			case "Departamento de Bioquímica y Biología Molecular I":
				centro = "02B0C6";
				break;
			case "Departamento de Bioquímica y Biología Molecular II":
				centro = "02B0C7";
				break;
			case "Departamento de Bioquímica y Biología Molecular IIi e Inmunología":
				centro = "02B0C8";
				break;
			case "Departamento de Botánica":
				centro = "02B0A0";
				break;
			case "Departamento de Ciencia Política y de la Administración":
				centro = "02B090";
				break;
			case "Departamento de Ciencias de la Computación e Inteligencia Artificial":
				centro = "02B009";
				break;
			case "Departamento de Ciencias Morfológicas":
				centro = "02B010";
				break;
			case "Departamento de Cirugía y Sus Especialidades":
				centro = "02B011";
				break;
			case "Departamento de Comercialización e Investigación de Mercados":
				centro = "02B0B0";
				break;
			case "Departamento de Construcciones Arquitectónicas":
				centro = "02B012";
				break;
			case "Departamento de Derecho Administrativo":
				centro = "02B013";
				break;
			case "Departamento de Derecho Civil":
				centro = "02B014";
				break;
			case "Departamento de Derecho Constitucional":
				centro = "02B015";
				break;
			case "Departamento de Derecho del Trabajo y de la Seguridad Social":
				centro = "02B092";
				break;
			case "Departamento de Derecho Financiero y Tributario":
				centro = "02B017";
				break;
			case "Departamento de Derecho Internacional Privado e Historia del Derecho":
				centro = "02B018";
				break;
			case "Departamento de Derecho Internacional Público y Relaciones Internacionales":
				centro = "02B091";
				break;
			case "Departamento de Derecho Mercantil y Derecho Romano":
				centro = "02B019";
				break;
			case "Departamento de Derecho Penal":
				centro = "02B079";
				break;
			case "Departamento de Derecho Procesal y Derecho Eclesiástico del Estado":
				centro = "02B0D3";
				break;
			case "Departamento de Dibujo":
				centro = "02B020";
				break;
			case "Departamento de Didáctica de la Expresión Musical Plástica y Corporal":
				centro = "02B021";
				break;
			case "Departamento de Didáctica de la Lengua y la Literatura":
				centro = "02B022";
				break;
			case "Departamento de Didáctica de la Matemática":
				centro = "02B023";
				break;
			case "Departamento de Didáctica de las Ciencias Experimentales":
				centro = "02B024";
				break;
			case "Departamento de Didáctica de las Ciencias Sociales":
				centro = "02B025";
				break;
			case "Departamento de Didáctica y Organización Escolar":
				centro = "02B026";
				break;
			case "Departamento de Ecología":
				centro = "02B0C9";
				break;
			case "Departamento de Economía Aplicada":
				centro = "02B027";
				break;
			case "Departamento de Economía Financiera y Contabilidad":
				centro = "02B028";
				break;
			case "Departamento de Economía Internacional y de España":
				centro = "02B0D4";
				break;
			case "Departamento de Edafología y Química Agrícola":
				centro = "02B029";
				break;
			case "Departamento de Educación Física y Deportiva":
				centro = "02B082";
				break;
			case "Departamento de Electromagnetismo y Física de la Materia":
				centro = "02B0A6";
				break;
			case "Departamento de Electrónica y Tecnología de Computadores":
				centro = "02B083";
				break;
			case "Departamento de Enfermería":
				centro = "02B031";
				break;
			case "Departamento de Escultura":
				centro = "02B086";
				break;
			case "Departamento de Estadística e Investigación Operativa":
				centro = "02B032";
				break;
			case "Departamento de Estomatología":
				centro = "02B0A1";
				break;
			case "Departamento de Estratigrafía y Paleontología":
				centro = "02B033";
				break;
			case "Departamento de Estudios Semíticos":
				centro = "02B034";
				break;
			case "Departamento de Expresión Gráfica Arquitectónica y en la Ingeniería":
				centro = "02B035";
				break;
			case "Departamento de Farmacia y Tecnología Farmacéutica":
				centro = "02B036";
				break;
			case "Departamento de Farmacología":
				centro = "02B037";
				break;
			case "Departamento de Filología Francesa":
				centro = "02B039";
				break;
			case "Departamento de Filología Griega y Filología Eslava":
				centro = "02B0D2";
				break;
			case "Departamento de Filología Latina":
				centro = "02B042";
				break;
			case "Departamento de Filologías Inglesa y Alemana":
				centro = "02B0B8";
				break;
			case "Departamento de Filologías:Románica, Italiana, Gallego-Portuguesa y Catalana":
				centro = "02B043";
				break;
			case "Departamento de Filosofía del Derecho":
				centro = "02B0B9";
				break;
			case "Departamento de Filosofía I":
				centro = "02B0D5";
				break;
			case "Departamento de Filosofía II":
				centro = "02B0D6";
				break;
			case "Departamento de Física Aplicada":
				centro = "02B046";
				break;
			case "Departamento de Física Atómica, Molecular y Nuclear":
				centro = "02B0D0";
				break;
			case "Departamento de Física Teórica y del Cosmos":
				centro = "02B080";
				break;
			case "Departamento de Fisicoquímica":
				centro = "02B0E2";
				break;
			case "Departamento de Fisiología":
				centro = "02B048";
				break;
			case "Departamento de Fisiología Vegetal":
				centro = "02B0B1";
				break;
			case "Departamento de Fisioterapia":
				centro = "02B0C2";
				break;
			case "Departamento de Genética":
				centro = "02B089";
				break;
			case "Departamento de Geodinámica":
				centro = "02B049";
				break;
			case "Departamento de Geografía Humana":
				centro = "02B050";
				break;
			case "Departamento de Geometría y Topología":
				centro = "02B051";
				break;
			case "Departamento de Histología":
				centro = "02B0B2";
				break;
			case "Departamento de Historia Antigua":
				centro = "02B093";
				break;
			case "Departamento de Historia Contemporánea":
				centro = "02B052";
				break;
			case "Departamento de Historia del Arte":
				centro = "02B053";
				break;
			case "Departamento de Historia del Arte y Musica":
				centro = "02B0D7";
				break;
			case "Departamento de Historia Medieval y Ciencias y Técnicas Historiográficas":
				centro = "02B054";
				break;
			case "Departamento de Historia Moderna y de América":
				centro = "02B055";
				break;
			case "Departamento de Historia y Ciencias de la Música":
				centro = "02B0F1";
				break;
			case "Departamento de Información y Comunicación":
				centro = "02B0F2";
				break;
			case "Departamento de Ingeniería Civil":
				centro = "02B095";
				break;
			case "Departamento de Ingeniería de la Construcción y Proyectos de Ingeniería":
				centro = "02B0E3";
				break;
			case "Departamento de Ingeniería Química":
				centro = "02B056";
				break;
			case "Departamento de Lengua Española":
				centro = "02B0B3";
				break;
			case "Departamento de Lenguajes y Sistemas Informáticos":
				centro = "02B081";
				break;
			case "Departamento de Lingüística General y Teoría de la Literatura":
				centro = "02B058";
				break;
			case "Departamento de Literatura Española":
				centro = "02B0B4";
				break;
			case "Departamento de Matemática Aplicada":
				centro = "02B059";
				break;
			case "Departamento de Mecánica de Estructuras e Ingeniería Hidráulica":
				centro = "02B0D1";
				break;
			case "Departamento de Medicina":
				centro = "02B060";
				break;
			case "Departamento de Medicina Legal, Toxicología y Antropología Física":
				centro = "02B0E5";
				break;
			case "Departamento de Medicina Preventiva y Salud Pública":
				centro = "02B096";
				break;
			case "Departamento de Metodología de las Ciencias del Comportamiento":
				centro = "02B0E1";
				break;
			case "Departamento de Métodos Cuantitativos para la Economía y la Empresa":
				centro = "02B0B5";
				break;
			case "Departamento de Métodos de Investigación y Diagnóstico en Educación":
				centro = "02B0A8";
				break;
			case "Departamento de Microbiología":
				centro = "02B072";
				break;
			case "Departamento de Mineralogía y Petrología":
				centro = "02B073";
				break;
			case "Departamento de Nutrición y Bromatología":
				centro = "02B074";
				break;
			case "Departamento de Obstetricia y Ginecología":
				centro = "02B075";
				break;
			case "Departamento de Óptica":
				centro = "02B097";
				break;
			case "Departamento de Organización de Empresas":
				centro = "02B0B6";
				break;
			case "Departamento de Parasitología":
				centro = "02B076";
				break;
			case "Departamento de Pedagogía":
				centro = "02B077";
				break;
			case "Departamento de Pediatría":
				centro = "02B094";
				break;
			case "Departamento de Personalidad, Evaluación y Tratamiento Psicológico":
				centro = "02B061";
				break;
			case "Departamento de Pintura":
				centro = "02B085";
				break;
			case "Departamento de Prehistoria y Arqueología":
				centro = "02B062";
				break;
			case "Departamento de Psicobiología":
				centro = "02B0E6";
				break;
			case "Departamento de Psicología Evolutiva y de la Educación":
				centro = "02B063";
				break;
			case "Departamento de Psicología Experimental":
				centro = "02B0E7";
				break;
			case "Departamento de Psicología Social":
				centro = "02B0D9";
				break;
			case "Departamento de Psiquiatría":
				centro = "02B0E8";
				break;
			case "Departamento de Química Analítica":
				centro = "02B078";
				break;
			case "Departamento de Química Farmacéutica y Orgánica":
				centro = "02B0B7";
				break;
			case "Departamento de Química Física":
				centro = "02B066";
				break;
			case "Departamento de Química Inorgánica":
				centro = "02B067";
				break;
			case "Departamento de Química Orgánica":
				centro = "02B068";
				break;
			case "Departamento de Radiología y Medicina Física":
				centro = "02B069";
				break;
			case "Departamento de Sociología":
				centro = "02B070";
				break;
			case "Departamento de Teoría de la Señal, Telemática y Comunicaciones":
				centro = "02B0C3";
				break;
			case "Departamento de Teoría e Historia Económica":
				centro = "02B0C0";
				break;
			case "Departamento de Trabajo Social y Servicios Sociales":
				centro = "02B0C4";
				break;
			case "Departamento de Traducción e Interpretación":
				centro = "02B098";
				break;
			case "Departamento de Urbanística y Ordenación del Territorio":
				centro = "02B0E4";
				break;
			case "Departamento de Zoología":
				centro = "02B0E9";
				break;
			case "Edificio Casa de Porras":
				centro = "06US06";
				break;
			case "Edificio Fray Luis de Granada":
				centro = "03FLG";
				break;
			case "Edificio Hospital Real/Complejo Administrativo Triunfo":
				centro = "06US01";
				break;
			case "Edificio Hospital Real/C.Triunfo.- Turno Tarde":
				centro = "06US010";
				break;
			case "Edificio Santa Lucía":
				centro = "06US02";
				break;
			case "Editorial Universidad de Granada":
				centro = "SUS26B";
				break;
			case "Equipo de Gerencia":
				centro = "06EG08";
				break;
			case "Equipo Mantenimiento Cartuja":
				centro = "06US044";
				break;
			case "Equipo Mantenimiento Centro 1":
				centro = "06US041";
				break;
			case "Equipo Mantenimiento Centro 2":
				centro = "06US042";
				break;
			case "Equipo Mantenimiento Fuentenueva":
				centro = "06US043";
				break;
			case "Equipo Mantenimiento Jardines":
				centro = "06US045";
				break;
			case "Equipos de Mantenimiento":
				centro = "06US04";
				break;
			case "Escuela de Doctorado de Ciencias de la Salud":
				centro = "SUS27B";
				break;
			case "Escuela de Doctorado de Ciencias, Tecnologías e Ingenierías":
				centro = "SUS27D";
				break;
			case "Escuela de Doctorado de Humanidades, Ciencias Sociales y Jurídicas":
				centro = "SUS27C";
				break;
			case "Escuela Internacional de Posgrado":
				centro = "SUS27A";
				break;
			case "E.T.S. de Arquitectura":
				centro = "010B55";
				break;
			case "E.T.S. de Ingeniería de Caminos, Canales y Puertos":
				centro = "010B38";
				break;
			case "E.T.S. de Ingeniería de Edificación":
				centro = "010B68";
				break;
			case "E.T.S. de Ingenierías Informática y de Telecomunicación":
				centro = "010B60";
				break;
			case "Extensión Universitaria":
				centro = "06EG09";
				break;
			case "Facultad de Bellas Artes":
				centro = "010B01";
				break;
			case "Facultad de Ciencias":
				centro = "010B02";
				break;
			case "Facultad de Ciencias de la Educación":
				centro = "010B49";
				break;
			case "Facultad de Ciencias de la Salud":
				centro = "010B69";
				break;
			case "Facultad de Ciencias de la Salud de Ceuta":
				centro = "010B65";
				break;
			case "Facultad de Ciencias del Deporte":
				centro = "010B72";
				break;
			case "Facultad de Ciencias del Trabajo":
				centro = "010B59";
				break;
			case "Facultad de Ciencias Económicas y Empresariales":
				centro = "010B11";
				break;
			case "Facultad de Ciencias Políticas y Sociología":
				centro = "010B37";
				break;
			case "Facultad de Ciencias Sociales de Melilla":
				centro = "010B64";
				break;
			case "Facultad de Comunicación y Documentación":
				centro = "010B61";
				break;
			case "Facultad de Derecho":
				centro = "010B03";
				break;
			case "Facultad de Educación, Economía y Tecnología de Ceuta":
				centro = "010B74";
				break;
			case "Facultad de Educación y Humanidades de Melilla":
				centro = "010B57";
				break;
			case "Facultad de Enfermería de Melilla":
				centro = "010B66";
				break;
			case "Facultad de Farmacia":
				centro = "010B04";
				break;
			case "Facultad de Filosofía y Letras":
				centro = "010B05";
				break;
			case "Facultad de Medicina":
				centro = "010B06";
				break;
			case "Facultad de Odontología":
				centro = "010B07";
				break;
			case "Facultad de Psicología":
				centro = "010B50";
				break;
			case "Facultad de Trabajo Social":
				centro = "010B67";
				break;
			case "Facultad de Traducción e Interpretación":
				centro = "010B53";
				break;
			case "Fundación General Universidad de Granada Empresa":
				centro = "SUFGU";
				break;
			case "Gabinete de Acción Social":
				centro = "06SA02";
				break;
			case "Gabinete de Calidad de Vida y Envejecimiento":
				centro = "SUS22A";
				break;
			case "Gabinete de Comunicación":
				centro = "06UG07";
				break;
			case "Gabinete de la Rectora":
				centro = "06UG06";
				break;
			case "Gabinete de Prevención y Calidad Ambiental":
				centro = "06SA01";
				break;
			case "Gabinete de Protocolo y Relaciones Institucionales":
				centro = "06EG04";
				break;
			case "Gabinete de Recursos Humanos y Organización":
				centro = "06GA02";
				break;
			case "Gabinete Técnico de Construcción, Conservación y Mantenimiento":
				centro = "06GA03";
				break;
			case "Gerencia":
				centro = "07OR12";
				break;
			case "Herbario":
				centro = "SUHBU";
				break;
			case "Herbario Universidad":
				centro = "03HBU";
				break;
			case "Hospital Real":
				centro = "06EDIR";
				break;
			case "Inspección de Servicios":
				centro = "06EG06";
				break;
			case "Inst. Nutrición y Tecnología de Alimentos 'José Mataix Verdu'":
				centro = "031NI";
				break;
			case "Instituto Andaluz de Ciencias de la Tierra":
				centro = "031GI";
				break;
			case "Instituto Andaluz de Geofísica y Prevención Desastres Sísmicos":
				centro = "031SI";
				break;
			case "Instituto Andaluz Interuniversitario de Criminología":
				centro = "031CI";
				break;
			case "Instituto 'Carlos I' de Física Teórica y Computacional":
				centro = "031UI";
				break;
			case "Instituto Confucio":
				centro = "03CONF";
				break;
			case "Instituto de Biopatología y Medicina Regenerativa":
				centro = "03IBIM";
				break;
			case "Instituto de Biotecnología":
				centro = "031BI";
				break;
			case "Instituto de Investigación de Estudios de las Mujeres y de Género":
				centro = "03IEMG";
				break;
			case "Instituto de Migraciones":
				centro = "03IMI";
				break;
			case "Instituto de Neurociencias 'Federico Olóriz'":
				centro = "031FI";
				break;
			case "Instituto del Agua":
				centro = "031AI";
				break;
			case "Instituto Inter de Inv. del Sistema Tierra en Andalucía (Ceama)":
				centro = "03IIST";
				break;
			case "Instituto Universitario de Estudios de la Mujer":
				centro = "03IEM";
				break;
			case "Instituto Universitario de Investigación de Desarrollo Regional":
				centro = "031RI";
				break;
			case "Instituto Universitario de la Paz y los Conflictos":
				centro = "031PC";
				break;
			case "Junta de Personal de Administración y Servicios":
				centro = "09S3";
				break;
			case "Junta de Personal Docente e Investigador Funcionario":
				centro = "09S2";
				break;
			case "Oficina de Control Interno":
				centro = "06EG05";
				break;
			case "Oficina de Datos Análisis y Prospectiva":
				centro = "SUS12A";
				break;
			case "Oficina de Datos, Información y Prospectiva (Odip)":
				centro = "SUS02B";
				break;
			case "Oficina de Energía e Instalaciones":
				centro = "SUS07A";
				break;
			case "Oficina de Gestión de la Comunicación":
				centro = "SUS02C";
				break;
			case "Oficina de Infraestructura y Patrimonio":
				centro = "SUS12C";
				break;
			case "Oficina de Proyectos Internacionales":
				centro = "SUS05A";
				break;
			case "Oficina de Relaciones Internacionales y Cooperación Universitaria al Desarrollo":
				centro = "06SG02";
				break;
			case "Oficina de Software Libre":
				centro = "SUS29B";
				break;
			case "Oficina de Transferencia de Resultados de Investigación":
				centro = "06UG04";
				break;
			case "Oficina Económica":
				centro = "SUS12B";
				break;
			case "Oficina Web":
				centro = "SUS29A";
				break;
			case "Política Científica":
				centro = "SUS26A";
				break;
			case "Rectorado":
				centro = "07OR01";
				break;
			case "Relaciones con Centros de Enseñanza Secundaria":
				centro = "SUS17A";
				break;
			case "Residencia Carlos V":
				centro = "08RCV";
				break;
			case "Residencia Universitaria Carmen de la Victoria":
				centro = "087MC";
				break;
			case "Residencia Universitaria Corrala de Santiago":
				centro = "08RMC";
				break;
			case "Sección Sindical Cc.Oo. Comisiones Obreras":
				centro = "09S10";
				break;
			case "Sección Sindical Csi-F Central Sindical Independiente y de Func":
				centro = "09S9";
				break;
			case "Sección Sindical Cta Granada- Coordinadora de Trabajadores de a":
				centro = "09S5";
				break;
			case "Sección Sindical Fete-Ugt":
				centro = "09S8";
				break;
			case "Sección Sindical Situgr-Sat Sindicato Independiente de la Ugr-S":
				centro = "09S6";
				break;
			case "Sección Sindical Ustea":
				centro = "09S7";
				break;
			case "Secretaría General":
				centro = "07OR02";
				break;
			case "Secretaría General (Administración)":
				centro = "06EG02";
				break;
			case "Secretariado de Campus Saludable":
				centro = "SUS22E";
				break;
			case "Secretariado de Coordinación Académica de la Internacionalización":
				centro = "SUS28C";
				break;
			case "Secretariado de Estrategia Internacional":
				centro = "SUS28D";
				break;
			case "Secretariado de Evaluación, Mejora y Acreditación de Títulos y Servicios":
				centro = "SUS02A";
				break;
			case "Secretariado de Formación, Innovación y Evaluación Docente":
				centro = "SUS02E";
				break;
			case "Secretariado de Igualdad y Conciliación":
				centro = "SUS22D";
				break;
			case "Secretariado de Información y Participación Estudiantil":
				centro = "SUS25A";
				break;
			case "Secretariado de Másteres y Títulos Propios":
				centro = "SUS27E";
				break;
			case "Secretariado de Personal Docente e Investigador":
				centro = "SUS24B";
				break;
			case "Secretariado de Plantilla y Planificación":
				centro = "SUS24A";
				break;
			case "Secretariado de Política Linguistica":
				centro = "SUS28E";
				break;
			case "Secretariado para la Inclusión y la Diversidad":
				centro = "SUS22C";
				break;
			case "Servicio de Alumnos":
				centro = "06SG03";
				break;
			case "Servicio de Asistencia Estudiantil":
				centro = "06SG04";
				break;
			case "Servicio de Asuntos Generales":
				centro = "06SG05";
				break;
			case "Servicio de Becas":
				centro = "06SG06";
				break;
			case "Servicio de Conductores":
				centro = "06US05";
				break;
			case "Servicio de Contabilidad y Presupuesto":
				centro = "06SG09";
				break;
			case "Servicio de Contratación y Gestión Patrimonial":
				centro = "06SG08";
				break;
			case "Servicio de Correo":
				centro = "06US07";
				break;
			case "Servicio de Evaluación ,Calidad y Planes de Estudio":
				centro = "06SA03";
				break;
			case "Servicio de Gestión de Investigación":
				centro = "06SG01";
				break;
			case "Servicio de Gestión Económico-Financiero":
				centro = "06SG10";
				break;
			case "Servicio de Habilitación y Seguridad Social":
				centro = "06SG14";
				break;
			case "Servicio de Ordenación Académica y de Estadística":
				centro = "06SG11";
				break;
			case "Servicio de Personal de Administración y Servicios":
				centro = "06SG13";
				break;
			case "Servicio de Personal Docente e Investigador":
				centro = "06SG12";
				break;
			case "Servicio de Prevención de Riesgos Laborales":
				centro = "SUS16B";
				break;
			case "Servicio de Protección Radiológica":
				centro = "SUS22B";
				break;
			case "Servicios Jurídicos":
				centro = "06GA01";
				break;
			case "Unidad de Becas y Asistencia al Estudiante":
				centro = "SUS25E";
				break;
			case "Unidad de Calidad Ambiental":
				centro = "SUS16D";
				break;
			case "Unidad de Calidad, Innovación y Prospectiva":
				centro = "SUS02D";
				break;
			case "Unidad de Orientación Profesional y Empleabilidad":
				centro = "SUS25D";
				break;
			case "Unidad para la Igualdad entre Mujeres y Hombres de la Ugr":
				centro = "SUS16E";
				break;
			case "Unidad Técnica de Construcción":
				centro = "06UG14";
				break;
			case "Vicerrectorado de Docencia":
				centro = "07OR27";
				break;
			case "Vicerrectorado de Estudiantes y Empleabilidad":
				centro = "07OR25";
				break;
			case "Vicerrectorado de Extensión Universitaria":
				centro = "07OR23";
				break;
			case "Vicerrectorado de Internacionalización":
				centro = "07OR28";
				break;
			case "Vicerrectorado de Investigación y Transferencia":
				centro = "07OR26";
				break;
			case "Vicerrectorado de Personal Docente e Investigador":
				centro = "07OR24";
				break;
			case "Vicerrectorado de Responsabilidad Social, Igualdad e Inclusión":
				centro = "07OR22";
				break;
			case "Centro de origen desconocido":
				centro = "111111";
				break;
		}

		return centro;
	}
});
