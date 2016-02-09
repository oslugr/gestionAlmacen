var HOJA = "datos";
var SCRIPT = PropertiesService.getScriptProperties();

function doGet(e) {
  return handleResponse(e);
}

function doPost(e) {
  return handleResponse(e);
}

function handleResponse(e) {
  var bloqueo = LockService.getPublicLock();
  bloqueo.waitLock(10000);

  try {
    var doc = SpreadsheetApp.openById(SCRIPT.getProperty("clave"));
    var hoja = doc.getSheetByName(HOJA);
    var uFila = hoja.getLastColumn();
    var uColu = hoja.getLastRow()();

    var cabeceras = hoja.getRange(1, 1, 1, uColu).getValues()[0];
    var fila = [];

    for (i in cabeceras) {      
      if (cabeceras[i] == "funciona") {
        if (e.parameter[cabeceras[i]] == "on") {
          fila.push("Sí");
        } else {
          fila.push("No");
        }
      } else {
        fila.push(e.parameter[cabeceras[i]]);
      }
    }

    var datos = hoja.getSheetValues(1, 1, uFila, 1);
    var existe = false;
    var j = 0;

    while (!existe && j < uFila) {
      if (datos[j][0] == e.parameter["codigo"]) {
        existe = true;
      }

      j++;
    }

    if (!existe) {
      var sigFila = uFila + 1;
    } else {
      var sigFila = j;
    }

    hoja.getRange(sigFila, 1, 1, fila.length).setValues([fila]);

    var rango = s.getRange(3, 1, uFila - 1, uColu);
    
    rango.sort([{
      column: 4,
      ascending: true
    }, {
      column: 3,
      ascending: true
    }, {
      column: 5,
      ascending: true
    }]);

    return ContentService
      .createTextOutput(JSON.stringify({
        "resultado": "correcto",
        "fila": sigFila
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({
        "resultado": "error",
        "error": e
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    bloqueo.releaseLock();
  }
}

function setup() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  SCRIPT.setProperty("clave", doc.getId());
}
