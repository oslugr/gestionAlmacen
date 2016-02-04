function leerDatos() {
  var now = moment();

  var codigo = prompt("Leer código de barras", "");

  if (codigo != null) {
    document.getElementById("codigo").value = codigo;

    var fecha = now.format('YYYY-MM-DD');
    document.getElementById("fecha").value = fecha;

    var codArticulo = codigo.substring(0, 1);
    var articulo = getArticulo(codArticulo);
    document.getElementById("articulo").value = articulo;

    var codCentro = codigo.substring(1, 3);
    var centro = getCentro(codCentro);
    document.getElementById("centro").value = centro;

    var codId = codigo.substring(3, 7);
    document.getElementById("codid").value = codId;
  }
}

function getArticulo(id) {
  switch (id) {
    case "1":
      tipo = "Torre";
      break;
    case "2":
      tipo = "Portátil";
      break;
    case "3":
      tipo = "Monitor CRT";
      break;
    case "4":
      tipo = "Monitor TFT";
      break;
    case "5":
      tipo = "Impresora";
      break;
    case "6":
      tipo = "Escaner";
      break;
    case "7":
      tipo = "Fax";
      break;
    case "8":
      tipo = "Periféricos";
      break;
    default:
      tipo = "Dispositivo desconocido";
  }

  return tipo;
};

function getCentro(id) {
  switch (id) {
    case "06UG02":
      centro = "Administración de  Servicios Centrales";
      break;
    case "081DA":
      centro = "Albergue Universitario";
      break;
    case "06UG05":
      centro = "Apoyo a Vicerrectorados";
      break;
    case "06UG03":
      centro = "Apoyo Dirección Colegios Mayores y Residencias";
      break;
    case "06UG01":
      centro = "Apoyo Equipo Gerencia";
      break;
    case "06SA10":
      centro = "Archivo Universitario";
      break;
    case "06UG08":
      centro = "Área de Documentación y Edición";
      break;
    case "SUS25B":
      centro = "Asociacionismo, Cultura y Sociedad";
      break;
    case "SUS27F":
      centro = "Aula Permanente de Formación Abierta";
      break;
    case "051ARC":
      centro = "Biblioteca Archivo Universitario";
      break;
    case "05CEU0":
      centro = "Biblioteca Campus Universitario de Ceuta";
      break;
    case "05MEL0":
      centro = "Biblioteca Campus Universitario de Melilla";
      break;
    case "05CDC":
      centro = "Biblioteca Centro de Documentación Científica";
      break;
    case "05CMC":
      centro = "Biblioteca Colegio Máximo de Cartuja";
      break;
    case "05BESJ":
      centro = "Biblioteca Edificio San Jerónimo";
      break;
    case "050B55":
      centro = "Biblioteca E.T.S. de Arquitectura";
      break;
    case "050B38":
      centro = "Biblioteca E.T.S. de Ingeniería de Caminos, Canales y Puertos";
      break;
    case "050B60":
      centro = "Biblioteca E.T.S. de Ingenierías Informática y de Telecomunicación";
      break;
    case "050B01":
      centro = "Biblioteca Facultad de Bellas Artes";
      break;
    case "050B02":
      centro = "Biblioteca Facultad de Ciencias";
      break;
    case "050B49":
      centro = "Biblioteca Facultad de Ciencias de la Educación";
      break;
    case "050B72":
      centro = "Biblioteca Facultad de Ciencias del Deporte";
      break;
    case "050B11":
      centro = "Biblioteca Facultad de Ciencias Económicas y Empresariales";
      break;
    case "050B37":
      centro = "Biblioteca Facultad de Ciencias Políticas y Sociología";
      break;
    case "050B03":
      centro = "Biblioteca Facultad de Derecho";
      break;
    case "050B04":
      centro = "Biblioteca Facultad de Farmacia";
      break;
    case "050B05":
      centro = "Biblioteca Facultad de Filosofía y Letras";
      break;
    case "050B50":
      centro = "Biblioteca Facultad de Psicología";
      break;
    case "050B53":
      centro = "Biblioteca Facultad de Traducción e Interpretación";
      break;
    case "05EBBI":
      centro = "Biblioteca Medicina y Cc. de la Salud";
      break;
    case "050SC":
      centro = "Biblioteca Servicios Centrales";
      break;
    case "06SA11":
      centro = "Biblioteca Universitaria";
      break;
    case "05BGU":
      centro = "Biblioteca Universitaria Hospital Real";
      break;
    case "SUS23A":
      centro = "Bienes Culturales";
      break;
    case "SUOR19":
      centro = "Campus de Excelencia Internacional Biotic Granada";
      break;
    case "01CEU0":
      centro = "Campus Universitario de Ceuta";
      break;
    case "01MEL0":
      centro = "Campus Universitario de Melilla";
      break;
    case "SUCDP":
      centro = "Centro Cultural Casa de Porras. Casa del Estudiante";
      break;
    case "06SA05":
      centro = "Centro de Actividades Deportivas";
      break;
    case "SUS04A":
      centro = "Centro de Cultura Contemporánea";
      break;
    case "03CDC":
      centro = "Centro de Documentación Científica";
      break;
    case "SUS29C":
      centro = "Centro de Enseñanzas Virtuales";
      break;
    case "06CE04":
      centro = "Centro de Enseñanzas Virtuales (Área Administrativa)";
      break;
    case "SUS28B":
      centro = "Centro de Iniciativas de Cooperación al Desarrollo";
      break;
    case "SUS26C":
      centro = "Centro de Instrumentación Cientifica";
      break;
    case "06CE01":
      centro = "Centro de Instrumentación Científica";
      break;
    case "03CIMC":
      centro = "Centro de Investigacion Mente, Cerebro y Comportamiento";
      break;
    case "03CITI":
      centro = "Centro de Investigación Tecnologías de Infor. y Comunicaciones";
      break;
    case "SU0NH":
      centro = "Centro de Lenguas Modernas";
      break;
    case "SUS28F":
      centro = "Centro de Lenguas Modernas";
      break;
    case "06SA04":
      centro = "Centro de Promoción de Empleo y Prácticas";
      break;
    case "06DIRIN":
      centro = "Centro de Servicios de Informática y Redes de Comunicación";
      break;
    case "06SA09":
      centro = "Centro de Servicios de Informática y Redes de Comunicaciones (CSIRC)";
      break;
    case "03IIB":
      centro = "Centro Investigación Biomédica";
      break;
    case "SUS04E":
      centro = "Centro Mediterráneo";
      break;
    case "SUS04B":
      centro = "Centro Mixto Universidad Universidad Granada-Madoc";
      break;
    case "081MC":
      centro = "Colegio Mayor Albayzin";
      break;
    case "082MC":
      centro = "Colegio Mayor Alsajara";
      break;
    case "0815MC":
      centro = "Colegio Mayor Cardenal Cisneros";
      break;
    case "0816MC":
      centro = "Colegio Mayor Garnata";
      break;
    case "SUS22G":
      centro = "Colegio Mayor Isabel al Católica";
      break;
    case "086MC":
      centro = "Colegio Mayor Isabel la Católica";
      break;
    case "0811MC":
      centro = "Colegio Mayor Jesús-María";
      break;
    case "083MC":
      centro = "Colegio Mayor Loyola";
      break;
    case "084MC":
      centro = "Colegio Mayor Montaigne";
      break;
    case "088MC":
      centro = "Colegio Mayor San Bartolomé y Santiago";
      break;
    case "0813MC":
      centro = "Colegio Mayor Santa Cruz la Real";
      break;
    case "0810MC":
      centro = "Colegio Mayor Santa Fé";
      break;
    case "0812MC":
      centro = "Colegio Mayor Santa María";
      break;
    case "0814MC":
      centro = "Colegio Mayor Santo Domingo";
      break;
    case "06SA07":
      centro = "Comedores Universitarios";
      break;
    case "09S1":
      centro = "Comité de Empresa del Personal de Administración y Servicios";
      break;
    case "09S4":
      centro = "Comité de Empresa del Personal Docente e Investigador Laboral";
      break;
    case "07OR21":
      centro = "Consejo Social";
      break;
    case "06EG03":
      centro = "Consejo Social (Administración)";
      break;
    case "SUS23B":
      centro = "Conservación y Restauración";
      break;
    case "SUS25C":
      centro = "Coordinación con Órganos de Representación y Gestión Estudiantil";
      break;
    case "SUS25F":
      centro = "Coordinador General de Acceso";
      break;
    case "SUS25G":
      centro = "Coordinadora General de Emprendimiento";
      break;
    case "06INF0A":
      centro = "CSIRC-Administración";
      break;
    case "06INF16":
      centro = "CSIRC-Administración Electrónica";
      break;
    case "06INF04":
      centro = "CSIRC-Apoyo a la Docencia";
      break;
    case "06INF13":
      centro = "CSIRC-Asesoría y Apoyo para Desarrollo de Apl.Gestión";
      break;
    case "06INF03":
      centro = "CSIRC-Gestión Centralizada";
      break;
    case "06INF02":
      centro = "CSIRC-Gestión de Alumnos";
      break;
    case "06INF05":
      centro = "CSIRC-Microinformática";
      break;
    case "06INF08":
      centro = "CSIRC-Nodo Aynadamar";
      break;
    case "06INF09":
      centro = "CSIRC-Nodo Cartuja";
      break;
    case "06INF10":
      centro = "CSIRC-Nodo Ciencias de la Salud";
      break;
    case "06INF11":
      centro = "CSIRC-Nodo Ciencias Jurídico-Sociales";
      break;
    case "06INF12":
      centro = "CSIRC-Nodo Fuentenueva";
      break;
    case "06INF01":
      centro = "CSIRC-Redes y Comunicaciones";
      break;
    case "06INF14":
      centro = "CSIRC-Seguridad";
      break;
    case "06INF15":
      centro = "CSIRC-Servicios Telemáticos";
      break;
    case "06INF07":
      centro = "CSIRC-Sistemas de Gestión";
      break;
    case "06INF06":
      centro = "CSIRC-Sistemas de Investigación";
      break;
    case "SUOR20":
      centro = "Defensor Universitario";
      break;
    case "06EG07":
      centro = "Defensor Universitario (Administración)";
      break;
    case "07OR16":
      centro = "Delegación de Calidad Ambiental y Bienestar";
      break;
    case "09DGE":
      centro = "Delegación General de Estudiantes";
      break;
    case "07OR13":
      centro = "Delegación para el Campus Universitario de Melilla";
      break;
    case "07OR15":
      centro = "Delegación para la Transferencia, Innovación y Empresa";
      break;
    case "07OR29":
      centro = "Delegación para la Universidad Digital";
      break;
    case "02B001":
      centro = "Departamento de Álgebra";
      break;
    case "02B002":
      centro = "Departamento de Análisis Geográfico Regional y Geografía Física";
      break;
    case "02B003":
      centro = "Departamento de Análisis Matemático";
      break;
    case "02B004":
      centro = "Departamento de Anatomía Patológica e Historia de la Ciencia";
      break;
    case "02B0A9":
      centro = "Departamento de Anatomía y Embriología Humana";
      break;
    case "02B0C1":
      centro = "Departamento de Antropología Social";
      break;
    case "02B0A4":
      centro = "Departamento de Arquitectura y Tecnología de Computadores";
      break;
    case "02B006":
      centro = "Departamento de Biología Celular";
      break;
    case "02B0C6":
      centro = "Departamento de Bioquímica y Biología Molecular I";
      break;
    case "02B0C7":
      centro = "Departamento de Bioquímica y Biología Molecular II";
      break;
    case "02B0C8":
      centro = "Departamento de Bioquímica y Biología Molecular IIi e Inmunología";
      break;
    case "02B0A0":
      centro = "Departamento de Botánica";
      break;
    case "02B090":
      centro = "Departamento de Ciencia Política y de la Administración";
      break;
    case "02B009":
      centro = "Departamento de Ciencias de la Computación e Inteligencia Artificial";
      break;
    case "02B010":
      centro = "Departamento de Ciencias Morfológicas";
      break;
    case "02B011":
      centro = "Departamento de Cirugía y Sus Especialidades";
      break;
    case "02B0B0":
      centro = "Departamento de Comercialización e Investigación de Mercados";
      break;
    case "02B012":
      centro = "Departamento de Construcciones Arquitectónicas";
      break;
    case "02B013":
      centro = "Departamento de Derecho Administrativo";
      break;
    case "02B014":
      centro = "Departamento de Derecho Civil";
      break;
    case "02B015":
      centro = "Departamento de Derecho Constitucional";
      break;
    case "02B092":
      centro = "Departamento de Derecho del Trabajo y de la Seguridad Social";
      break;
    case "02B017":
      centro = "Departamento de Derecho Financiero y Tributario";
      break;
    case "02B018":
      centro = "Departamento de Derecho Internacional Privado e Historia del Derecho";
      break;
    case "02B091":
      centro = "Departamento de Derecho Internacional Público y Relaciones Internacionales";
      break;
    case "02B019":
      centro = "Departamento de Derecho Mercantil y Derecho Romano";
      break;
    case "02B079":
      centro = "Departamento de Derecho Penal";
      break;
    case "02B0D3":
      centro = "Departamento de Derecho Procesal y Derecho Eclesiástico del Estado";
      break;
    case "02B020":
      centro = "Departamento de Dibujo";
      break;
    case "02B021":
      centro = "Departamento de Didáctica de la Expresión Musical Plástica y Corporal";
      break;
    case "02B022":
      centro = "Departamento de Didáctica de la Lengua y la Literatura";
      break;
    case "02B023":
      centro = "Departamento de Didáctica de la Matemática";
      break;
    case "02B024":
      centro = "Departamento de Didáctica de las Ciencias Experimentales";
      break;
    case "02B025":
      centro = "Departamento de Didáctica de las Ciencias Sociales";
      break;
    case "02B026":
      centro = "Departamento de Didáctica y Organización Escolar";
      break;
    case "02B0C9":
      centro = "Departamento de Ecología";
      break;
    case "02B027":
      centro = "Departamento de Economía Aplicada";
      break;
    case "02B028":
      centro = "Departamento de Economía Financiera y Contabilidad";
      break;
    case "02B0D4":
      centro = "Departamento de Economía Internacional y de España";
      break;
    case "02B029":
      centro = "Departamento de Edafología y Química Agrícola";
      break;
    case "02B082":
      centro = "Departamento de Educación Física y Deportiva";
      break;
    case "02B0A6":
      centro = "Departamento de Electromagnetismo y Física de la Materia";
      break;
    case "02B083":
      centro = "Departamento de Electrónica y Tecnología de Computadores";
      break;
    case "02B031":
      centro = "Departamento de Enfermería";
      break;
    case "02B086":
      centro = "Departamento de Escultura";
      break;
    case "02B032":
      centro = "Departamento de Estadística e Investigación Operativa";
      break;
    case "02B0A1":
      centro = "Departamento de Estomatología";
      break;
    case "02B033":
      centro = "Departamento de Estratigrafía y Paleontología";
      break;
    case "02B034":
      centro = "Departamento de Estudios Semíticos";
      break;
    case "02B035":
      centro = "Departamento de Expresión Gráfica Arquitectónica y en la Ingeniería";
      break;
    case "02B036":
      centro = "Departamento de Farmacia y Tecnología Farmacéutica";
      break;
    case "02B037":
      centro = "Departamento de Farmacología";
      break;
    case "02B039":
      centro = "Departamento de Filología Francesa";
      break;
    case "02B0D2":
      centro = "Departamento de Filología Griega y Filología Eslava";
      break;
    case "02B042":
      centro = "Departamento de Filología Latina";
      break;
    case "02B0B8":
      centro = "Departamento de Filologías Inglesa y Alemana";
      break;
    case "02B043":
      centro = "Departamento de Filologías:Románica, Italiana, Gallego-Portuguesa y Catalana";
      break;
    case "02B0B9":
      centro = "Departamento de Filosofía del Derecho";
      break;
    case "02B0D5":
      centro = "Departamento de Filosofía I";
      break;
    case "02B0D6":
      centro = "Departamento de Filosofía II";
      break;
    case "02B046":
      centro = "Departamento de Física Aplicada";
      break;
    case "02B0D0":
      centro = "Departamento de Física Atómica, Molecular y Nuclear";
      break;
    case "02B080":
      centro = "Departamento de Física Teórica y del Cosmos";
      break;
    case "02B0E2":
      centro = "Departamento de Fisicoquímica";
      break;
    case "02B048":
      centro = "Departamento de Fisiología";
      break;
    case "02B0B1":
      centro = "Departamento de Fisiología Vegetal";
      break;
    case "02B0C2":
      centro = "Departamento de Fisioterapia";
      break;
    case "02B089":
      centro = "Departamento de Genética";
      break;
    case "02B049":
      centro = "Departamento de Geodinámica";
      break;
    case "02B050":
      centro = "Departamento de Geografía Humana";
      break;
    case "02B051":
      centro = "Departamento de Geometría y Topología";
      break;
    case "02B0B2":
      centro = "Departamento de Histología";
      break;
    case "02B093":
      centro = "Departamento de Historia Antigua";
      break;
    case "02B052":
      centro = "Departamento de Historia Contemporánea";
      break;
    case "02B053":
      centro = "Departamento de Historia del Arte";
      break;
    case "02B0D7":
      centro = "Departamento de Historia del Arte y Musica";
      break;
    case "02B054":
      centro = "Departamento de Historia Medieval y Ciencias y Técnicas Historiográficas";
      break;
    case "02B055":
      centro = "Departamento de Historia Moderna y de América";
      break;
    case "02B0F1":
      centro = "Departamento de Historia y Ciencias de la Música";
      break;
    case "02B0F2":
      centro = "Departamento de Información y Comunicación";
      break;
    case "02B095":
      centro = "Departamento de Ingeniería Civil";
      break;
    case "02B0E3":
      centro = "Departamento de Ingeniería de la Construcción y Proyectos de Ingeniería";
      break;
    case "02B056":
      centro = "Departamento de Ingeniería Química";
      break;
    case "02B0B3":
      centro = "Departamento de Lengua Española";
      break;
    case "02B081":
      centro = "Departamento de Lenguajes y Sistemas Informáticos";
      break;
    case "02B058":
      centro = "Departamento de Lingüística General y Teoría de la Literatura";
      break;
    case "02B0B4":
      centro = "Departamento de Literatura Española";
      break;
    case "02B059":
      centro = "Departamento de Matemática Aplicada";
      break;
    case "02B0D1":
      centro = "Departamento de Mecánica de Estructuras e Ingeniería Hidráulica";
      break;
    case "02B060":
      centro = "Departamento de Medicina";
      break;
    case "02B0E5":
      centro = "Departamento de Medicina Legal, Toxicología y Antropología Física";
      break;
    case "02B096":
      centro = "Departamento de Medicina Preventiva y Salud Pública";
      break;
    case "02B0E1":
      centro = "Departamento de Metodología de las Ciencias del Comportamiento";
      break;
    case "02B0B5":
      centro = "Departamento de Métodos Cuantitativos para la Economía y la Empresa";
      break;
    case "02B0A8":
      centro = "Departamento de Métodos de Investigación y Diagnóstico en Educación";
      break;
    case "02B072":
      centro = "Departamento de Microbiología";
      break;
    case "02B073":
      centro = "Departamento de Mineralogía y Petrología";
      break;
    case "02B074":
      centro = "Departamento de Nutrición y Bromatología";
      break;
    case "02B075":
      centro = "Departamento de Obstetricia y Ginecología";
      break;
    case "02B097":
      centro = "Departamento de Óptica";
      break;
    case "02B0B6":
      centro = "Departamento de Organización de Empresas";
      break;
    case "02B076":
      centro = "Departamento de Parasitología";
      break;
    case "02B077":
      centro = "Departamento de Pedagogía";
      break;
    case "02B094":
      centro = "Departamento de Pediatría";
      break;
    case "02B061":
      centro = "Departamento de Personalidad, Evaluación y Tratamiento Psicológico";
      break;
    case "02B085":
      centro = "Departamento de Pintura";
      break;
    case "02B062":
      centro = "Departamento de Prehistoria y Arqueología";
      break;
    case "02B0E6":
      centro = "Departamento de Psicobiología";
      break;
    case "02B063":
      centro = "Departamento de Psicología Evolutiva y de la Educación";
      break;
    case "02B0E7":
      centro = "Departamento de Psicología Experimental";
      break;
    case "02B0D9":
      centro = "Departamento de Psicología Social";
      break;
    case "02B0E8":
      centro = "Departamento de Psiquiatría";
      break;
    case "02B078":
      centro = "Departamento de Química Analítica";
      break;
    case "02B0B7":
      centro = "Departamento de Química Farmacéutica y Orgánica";
      break;
    case "02B066":
      centro = "Departamento de Química Física";
      break;
    case "02B067":
      centro = "Departamento de Química Inorgánica";
      break;
    case "02B068":
      centro = "Departamento de Química Orgánica";
      break;
    case "02B069":
      centro = "Departamento de Radiología y Medicina Física";
      break;
    case "02B070":
      centro = "Departamento de Sociología";
      break;
    case "02B0C3":
      centro = "Departamento de Teoría de la Señal, Telemática y Comunicaciones";
      break;
    case "02B0C0":
      centro = "Departamento de Teoría e Historia Económica";
      break;
    case "02B0C4":
      centro = "Departamento de Trabajo Social y Servicios Sociales";
      break;
    case "02B098":
      centro = "Departamento de Traducción e Interpretación";
      break;
    case "02B0E4":
      centro = "Departamento de Urbanística y Ordenación del Territorio";
      break;
    case "02B0E9":
      centro = "Departamento de Zoología";
      break;
    case "06US06":
      centro = "Edificio Casa de Porras";
      break;
    case "03FLG":
      centro = "Edificio Fray Luis de Granada";
      break;
    case "06US01":
      centro = "Edificio Hospital Real/Complejo Administrativo Triunfo";
      break;
    case "06US010":
      centro = "Edificio Hospital Real/C.Triunfo.- Turno Tarde";
      break;
    case "06US02":
      centro = "Edificio Santa Lucía";
      break;
    case "SUS26B":
      centro = "Editorial Universidad de Granada";
      break;
    case "06SA08":
      centro = "Editorial Universidad de Granada";
      break;
    case "06EG08":
      centro = "Equipo de Gerencia";
      break;
    case "06US044":
      centro = "Equipo Mantenimiento Cartuja";
      break;
    case "06US041":
      centro = "Equipo Mantenimiento Centro 1";
      break;
    case "06US042":
      centro = "Equipo Mantenimiento Centro 2";
      break;
    case "06US043":
      centro = "Equipo Mantenimiento Fuentenueva";
      break;
    case "06US045":
      centro = "Equipo Mantenimiento Jardines";
      break;
    case "06US04":
      centro = "Equipos de Mantenimiento";
      break;
    case "SUS27B":
      centro = "Escuela de Doctorado de Ciencias de la Salud";
      break;
    case "SUS27D":
      centro = "Escuela de Doctorado de Ciencias, Tecnologías e Ingenierías";
      break;
    case "SUS27C":
      centro = "Escuela de Doctorado de Humanidades, Ciencias Sociales y Jurídicas";
      break;
    case "SUEI":
      centro = "Escuela Internacional de Posgrado";
      break;
    case "SUS27A":
      centro = "Escuela Internacional de Posgrado";
      break;
    case "01EI":
      centro = "Escuela Internacional de Posgrado";
      break;
    case "010B55":
      centro = "E.T.S. de Arquitectura";
      break;
    case "010B38":
      centro = "E.T.S. de Ingeniería de Caminos, Canales y Puertos";
      break;
    case "010B68":
      centro = "E.T.S. de Ingeniería de Edificación";
      break;
    case "010B60":
      centro = "E.T.S. de Ingenierías Informática y de Telecomunicación";
      break;
    case "06EG09":
      centro = "Extensión Universitaria";
      break;
    case "010B01":
      centro = "Facultad de Bellas Artes";
      break;
    case "010B02":
      centro = "Facultad de Ciencias";
      break;
    case "010B49":
      centro = "Facultad de Ciencias de la Educación";
      break;
    case "010B69":
      centro = "Facultad de Ciencias de la Salud";
      break;
    case "010B65":
      centro = "Facultad de Ciencias de la Salud de Ceuta";
      break;
    case "010B72":
      centro = "Facultad de Ciencias del Deporte";
      break;
    case "010B59":
      centro = "Facultad de Ciencias del Trabajo";
      break;
    case "010B11":
      centro = "Facultad de Ciencias Económicas y Empresariales";
      break;
    case "010B37":
      centro = "Facultad de Ciencias Políticas y Sociología";
      break;
    case "010B64":
      centro = "Facultad de Ciencias Sociales de Melilla";
      break;
    case "010B61":
      centro = "Facultad de Comunicación y Documentación";
      break;
    case "010B03":
      centro = "Facultad de Derecho";
      break;
    case "010B74":
      centro = "Facultad de Educación, Economía y Tecnología de Ceuta";
      break;
    case "010B57":
      centro = "Facultad de Educación y Humanidades de Melilla";
      break;
    case "010B66":
      centro = "Facultad de Enfermería de Melilla";
      break;
    case "010B04":
      centro = "Facultad de Farmacia";
      break;
    case "010B05":
      centro = "Facultad de Filosofía y Letras";
      break;
    case "010B06":
      centro = "Facultad de Medicina";
      break;
    case "010B07":
      centro = "Facultad de Odontología";
      break;
    case "010B50":
      centro = "Facultad de Psicología";
      break;
    case "010B67":
      centro = "Facultad de Trabajo Social";
      break;
    case "010B53":
      centro = "Facultad de Traducción e Interpretación";
      break;
    case "SUFGU":
      centro = "Fundación General Universidad de Granada Empresa";
      break;
    case "06SA02":
      centro = "Gabinete de Acción Social";
      break;
    case "SUS22A":
      centro = "Gabinete de Calidad de Vida y Envejecimiento";
      break;
    case "06UG07":
      centro = "Gabinete de Comunicación";
      break;
    case "06UG06":
      centro = "Gabinete de la Rectora";
      break;
    case "06SA01":
      centro = "Gabinete de Prevención y Calidad Ambiental";
      break;
    case "06EG04":
      centro = "Gabinete de Protocolo y Relaciones Institucionales";
      break;
    case "06GA02":
      centro = "Gabinete de Recursos Humanos y Organización";
      break;
    case "06GA03":
      centro = "Gabinete Técnico de Construcción, Conservación y Mantenimiento";
      break;
    case "07OR12":
      centro = "Gerencia";
      break;
    case "SUHBU":
      centro = "Herbario";
      break;
    case "03HBU":
      centro = "Herbario Universidad";
      break;
    case "06EDIR":
      centro = "Hospital Real";
      break;
    case "06EG06":
      centro = "Inspección de Servicios";
      break;
    case "031NI":
      centro = "Inst. Nutrición y Tecnología de Alimentos 'José Mataix Verdu'";
      break;
    case "031GI":
      centro = "Instituto Andaluz de Ciencias de la Tierra";
      break;
    case "031SI":
      centro = "Instituto Andaluz de Geofísica y Prevención Desastres Sísmicos";
      break;
    case "031CI":
      centro = "Instituto Andaluz Interuniversitario de Criminología";
      break;
    case "031UI":
      centro = "Instituto 'Carlos I' de Física Teórica y Computacional";
      break;
    case "03CONF":
      centro = "Instituto Confucio";
      break;
    case "SUS28A":
      centro = "Instituto Confucio";
      break;
    case "03IBIM":
      centro = "Instituto de Biopatología y Medicina Regenerativa";
      break;
    case "031BI":
      centro = "Instituto de Biotecnología";
      break;
    case "03IEMG":
      centro = "Instituto de Investigación de Estudios de las Mujeres y de Género";
      break;
    case "03IMI":
      centro = "Instituto de Migraciones";
      break;
    case "031FI":
      centro = "Instituto de Neurociencias 'Federico Olóriz'";
      break;
    case "031AI":
      centro = "Instituto del Agua";
      break;
    case "03IIST":
      centro = "Instituto Inter de Inv. del Sistema Tierra en Andalucía (Ceama)";
      break;
    case "03IEM":
      centro = "Instituto Universitario de Estudios de la Mujer";
      break;
    case "031RI":
      centro = "Instituto Universitario de Investigación de Desarrollo Regional";
      break;
    case "031PC":
      centro = "Instituto Universitario de la Paz y los Conflictos";
      break;
    case "09S3":
      centro = "Junta de Personal de Administración y Servicios";
      break;
    case "09S2":
      centro = "Junta de Personal Docente e Investigador Funcionario";
      break;
    case "06EG05":
      centro = "Oficina de Control Interno";
      break;
    case "SUS12A":
      centro = "Oficina de Datos Análisis y Prospectiva";
      break;
    case "SUS02B":
      centro = "Oficina de Datos, Información y Prospectiva (Odip)";
      break;
    case "SUS07A":
      centro = "Oficina de Energía e Instalaciones";
      break;
    case "SUS12D":
      centro = "Oficina de Energía e Instalaciones";
      break;
    case "SUS02C":
      centro = "Oficina de Gestión de la Comunicación";
      break;
    case "SUS12C":
      centro = "Oficina de Infraestructura y Patrimonio";
      break;
    case "SUS05A":
      centro = "Oficina de Proyectos Internacionales";
      break;
    case "06SG02":
      centro = "Oficina de Relaciones Internacionales y Cooperación Universitaria al Desarrollo";
      break;
    case "SUS29B":
      centro = "Oficina de Software Libre";
      break;
    case "06UG04":
      centro = "Oficina de Transferencia de Resultados de Investigación";
      break;
    case "SUS12B":
      centro = "Oficina Económica";
      break;
    case "SUS29A":
      centro = "Oficina Web";
      break;
    case "SUS26A":
      centro = "Política Científica";
      break;
    case "07OR01":
      centro = "Rectorado";
      break;
    case "06EG01":
      centro = "Rectorado";
      break;
    case "SUS17A":
      centro = "Relaciones con Centros de Enseñanza Secundaria";
      break;
    case "08RCV":
      centro = "Residencia Carlos V";
      break;
    case "087MC":
      centro = "Residencia Universitaria Carmen de la Victoria";
      break;
    case "SUS22F":
      centro = "Residencia Universitaria Carmen de la Victoria";
      break;
    case "08RMC":
      centro = "Residencia Universitaria Corrala de Santiago";
      break;
    case "09S10":
      centro = "Sección Sindical Cc.Oo. Comisiones Obreras";
      break;
    case "09S9":
      centro = "Sección Sindical Csi-F Central Sindical Independiente y de Func";
      break;
    case "09S5":
      centro = "Sección Sindical Cta Granada- Coordinadora de Trabajadores de a";
      break;
    case "09S8":
      centro = "Sección Sindical Fete-Ugt";
      break;
    case "09S6":
      centro = "Sección Sindical Situgr-Sat Sindicato Independiente de la Ugr-S";
      break;
    case "09S7":
      centro = "Sección Sindical Ustea";
      break;
    case "07OR02":
      centro = "Secretaría General";
      break;
    case "06EG02":
      centro = "Secretaría General (Administración)";
      break;
    case "SUS22E":
      centro = "Secretariado de Campus Saludable";
      break;
    case "SUS28C":
      centro = "Secretariado de Coordinación Académica de la Internacionalización";
      break;
    case "SUS28D":
      centro = "Secretariado de Estrategia Internacional";
      break;
    case "SUS02A":
      centro = "Secretariado de Evaluación, Mejora y Acreditación de Títulos y Servicios";
      break;
    case "SUS02E":
      centro = "Secretariado de Formación, Innovación y Evaluación Docente";
      break;
    case "SUS22D":
      centro = "Secretariado de Igualdad y Conciliación";
      break;
    case "SUS25A":
      centro = "Secretariado de Información y Participación Estudiantil";
      break;
    case "SUS27E":
      centro = "Secretariado de Másteres y Títulos Propios";
      break;
    case "SUS24B":
      centro = "Secretariado de Personal Docente e Investigador";
      break;
    case "SUS24A":
      centro = "Secretariado de Plantilla y Planificación";
      break;
    case "SUS28E":
      centro = "Secretariado de Política Linguistica";
      break;
    case "SUS22C":
      centro = "Secretariado para la Inclusión y la Diversidad";
      break;
    case "06SG03":
      centro = "Servicio de Alumnos";
      break;
    case "06SG04":
      centro = "Servicio de Asistencia Estudiantil";
      break;
    case "06SG05":
      centro = "Servicio de Asuntos Generales";
      break;
    case "06SG06":
      centro = "Servicio de Becas";
      break;
    case "06US05":
      centro = "Servicio de Conductores";
      break;
    case "06SG09":
      centro = "Servicio de Contabilidad y Presupuesto";
      break;
    case "06SG08":
      centro = "Servicio de Contratación y Gestión Patrimonial";
      break;
    case "06US07":
      centro = "Servicio de Correo";
      break;
    case "06SA03":
      centro = "Servicio de Evaluación ,Calidad y Planes de Estudio";
      break;
    case "06SG01":
      centro = "Servicio de Gestión de Investigación";
      break;
    case "06SG10":
      centro = "Servicio de Gestión Económico-Financiero";
      break;
    case "06SG14":
      centro = "Servicio de Habilitación y Seguridad Social";
      break;
    case "06SG11":
      centro = "Servicio de Ordenación Académica y de Estadística";
      break;
    case "06SG13":
      centro = "Servicio de Personal de Administración y Servicios";
      break;
    case "06SG12":
      centro = "Servicio de Personal Docente e Investigador";
      break;
    case "SUS16B":
      centro = "Servicio de Prevención de Riesgos Laborales";
      break;
    case "SUS22B":
      centro = "Servicio de Protección Radiológica";
      break;
    case "06GA01":
      centro = "Servicios Jurídicos";
      break;
    case "SUS25E":
      centro = "Unidad de Becas y Asistencia al Estudiante";
      break;
    case "SUS16D":
      centro = "Unidad de Calidad Ambiental";
      break;
    case "SUS02D":
      centro = "Unidad de Calidad, Innovación y Prospectiva";
      break;
    case "SUS25D":
      centro = "Unidad de Orientación Profesional y Empleabilidad";
      break;
    case "SUS16E":
      centro = "Unidad para la Igualdad entre Mujeres y Hombres de la Ugr";
      break;
    case "06UG14":
      centro = "Unidad Técnica de Construcción";
      break;
    case "07OR27":
      centro = "Vicerrectorado de Docencia";
      break;
    case "07OR25":
      centro = "Vicerrectorado de Estudiantes y Empleabilidad";
      break;
    case "07OR23":
      centro = "Vicerrectorado de Extensión Universitaria";
      break;
    case "07OR28":
      centro = "Vicerrectorado de Internacionalización";
      break;
    case "07OR26":
      centro = "Vicerrectorado de Investigación y Transferencia";
      break;
    case "07OR24":
      centro = "Vicerrectorado de Personal Docente e Investigador";
      break;
    case "07OR22":
      centro = "Vicerrectorado de Responsabilidad Social, Igualdad e Inclusión";
      break;
    default:
      centro = "Centro de origen desconocido";
  }

  return centro;
};
