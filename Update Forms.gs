
// UPDATES MULTIPLE GOOGLE FORMS, BASES ON VALUES FROM A SPREADSHEET
// 

function onOpen() {
  var Ui = SpreadsheetApp.getUi();
  Ui.createMenu('<<< EL GRANERO - OPCIONES >>>')
    .addSubMenu((Ui.createMenu('Actualizar Forms'))
      .addItem('Actualizar todos los formularios', 'updateAllForms')
    )
    .addToUi();
}
const formIDAsistConsul = "formID1";
const formIDAsistPista = "formID2";
const formIDAsistTaller = "formID3";
const formIDPagosPista = "formID4";
const formIDPagosConsul = "formID5";

// Spreadsheet Sheets per type
const hojaPista = "Pista-Only";
const hojaTaller = "Taller-Only";
const hojaConsul = "Consul-Only";

// Other Global Variables
var rango = []
var ordenTerap = '';
var ordenPac = '';


function updateAllForms() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.toast("Empezando a actualizar Formularios !!");

  // Get all Data
  const terapPistas = getData('terapeutas', hojaPista);
  const terapConsul = getData('terapeutas', hojaConsul);
  const pacPista = getData('pacientes', hojaPista);
  const pacConsul = getData('pacientes', hojaConsul);
  const terapTaller = getData('terapeutas', hojaTaller);
  const pacTaller = getData('pacientes', hojaTaller);
  
  // Solicita Actualizar Formulatios
  console.log("============= Arranca AsistPista ===========================================================");
  changeForm(formIDAsistPista, terapPistas, pacPista);
  console.log("============= Arranca PagosPista ===========================================================");
  changeForm(formIDPagosPista, terapPistas, pacPista);
  console.log("============= Arranca AsistTaller ===========================================================");
  changeForm(formIDAsistTaller, terapTaller, pacTaller);
  console.log("============= Arranca AsistConsul ===========================================================");
  changeForm(formIDAsistConsul, terapConsul, pacConsul);
  console.log("============= Arranca PagosConsul ===========================================================");
  changeForm(formIDPagosConsul, terapConsul, pacConsul);

  ss.toast("All 5 Google Forms Updated !!");
}

// Gets data from spreadsheet
function getData(personaTipo, hojaTipo) {
  console.log("=== Running fx getdata ===", personaTipo, hojaTipo);
  // WARNING. The resulting array must be of UNIQUE VALUES. 
  // Otherwise you will not be able to set it as List o Multiple choice values.
    try {
    if (personaTipo == "pacientes") {
      rango = 'B2:B';
    } else { rango = 'A2:A' };
    //    Logger.log("rango:" +rango)
    var sheetPista = SpreadsheetApp.getActive().getSheetByName(hojaTipo)
    var range = sheetPista.getRange(rango);
    var personas = range.getValues();
    personas = personas.flat();
    personas = personas.filter(row => row != '');
    personas.sort();

    // THIS ONE WORKS AS WELL. Not mandatory to flatten the array.
    // personas = personas.filter(function (r) { return r[0] !== "" });  // Filtra las no vacias
    // personas.sort();
    return personas;
  } catch (e) {
    Logger.log(e)
  }
}



// Source1: https://www.youtube.com/watch?v=S7aMNX-uBwU (minuto 5)
// Source2: https://www.youtube.com/watch?reload=9&v=wYgrs9uwRtY
// Obtiene el ID de cada pregunta del form
function changeForm(formID, suTerap, suPac) {
  console.log("=== Running changeForm fx ===");
  try {
    // THESE ARE THE DESIGNATED ORDER OF EACH QUESTION IN EACH FORM... 
    // WORK ON AUTOMATING THIS...
    if (formID == formIDPagosConsul) {
      ordenTerap = 7;
      ordenPac = 0;
    } else if (formID == formIDPagosPista) {
      ordenTerap = 'NADA';
      ordenPac = 0;
    } else {
      ordenTerap = 0;
      ordenPac = 1;
    }
    var form = FormApp.openById(formID);
    if (ordenTerap >= 0) {
      console.log("ID para Modificar Terapeuta: ordenTerap:", ordenTerap)
      var terapeutasID = form.getItems()[ordenTerap].getId();
      console.log("terapeutas ID:", terapeutasID);
      var tituloTerapeutas = form.getItemById(terapeutasID);
      console.log('Pregunta Ter?:', tituloTerapeutas.getTitle());
    } else console.log("No hay que modificar Terapeuta");

    if (ordenPac >= 0) {
      console.log("ID para Modificar Pacientes: ordenPac:", ordenPac)
      var pacientesID = form.getItems()[ordenPac].getId();
      console.log("pacientesID:", pacientesID);
      var tituloPacientes = form.getItemById(pacientesID);
      console.log('Pregunta Pac?:', tituloPacientes.getTitle());
    } else console.log("No hay que modificar Paciente");

    setInfo(terapeutasID, pacientesID, formID, suTerap, suPac);
  } catch (e) {
    Logger.log(e)
  }
}

// Set Info en el form
function setInfo(terapeutasID, pacientesID, formID, suTerap, suPac) {
  console.log("=== Running setInfo fx ===");
  // USED IT TO DETECT FORMAT ERROR
  //   if (typeof formID === 'string' || formID instanceof String)
  //     console.log("OK: formID is a string: ",formID);
  //     else console.log("PROBLEM: formID NOT A string: ",formID);
  //   if (typeof terapeutasID === 'string' || terapeutasID instanceof String)
  //     console.log("PROBLEM: terapeutasID is a string: ",terapeutasID);
  //     else console.log("OK: terapeutasID NOT A string: ",terapeutasID);
  //   if (typeof pacientesID === 'string' || pacientesID instanceof String)
  //     console.log("PROBLEM: pacientesID is a string: ",pacientesID);
  //     else console.log("OK: pacientesID NOT A string: ",pacientesID);
  //   if (typeof suTerap === 'string' || suTerap instanceof String)
  //     console.log("PROBLEM: suTerap is a string");
  //     else console.log("OK: suTerap NOT A string");
  //  if (typeof suPac === 'string' || suPac instanceof String)
  //     console.log("PROBLEM: suPac is a string");
  //     else console.log("OK: suPac NOT A string");
  try {
    var form = FormApp.openById(formID);
    console.log(formID);
    if (terapeutasID) {
      console.log("Setting Terapeuta: ID", terapeutasID);
      var itemTerap = form.getItemById(terapeutasID).asMultipleChoiceItem();
      itemTerap.setChoiceValues(suTerap);
      console.log("Terapeutas Set");
    } else console.log("Not setting Terapeuta");
    if (pacientesID) {
      console.log("Setting Pacientes: ID", pacientesID);
      var itemPac = form.getItemById(pacientesID).asMultipleChoiceItem();
      itemPac.setChoiceValues(suPac)
      console.log("Pacientes Set");
    } else console.log("Not setting Pacientes");
  } catch (e) {
    Logger.log(e)
  }
}

