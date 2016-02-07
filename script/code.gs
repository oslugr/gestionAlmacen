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

    var cabeceras = hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0];
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

    var todo = hoja.getSheetValues(1, 1, hoja.getLastRow(), 1);
    var existe = false;
    var j = 0;

    while (!existe && j < hoja.getLastRow()) {
      if (todo[j][0] == e.parameter["codigo"]) {
        existe = true;
      }

      j++;
    }

    if (!existe) {
      var sigFila = hoja.getLastRow() + 1;
    } else {
      var sigFila = j;
    }

    hoja.getRange(sigFila, 1, 1, fila.length).setValues([fila]);

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