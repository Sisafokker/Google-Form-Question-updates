
// function onOpen() {
//   var Ui = SpreadsheetApp.getUi();
//   Ui.createMenu('<<< EL GRANERO - OPCIONES >>>')
//     .addSubMenu((Ui.createMenu('Actualizar Forms'))
//       .addItem('Actualizar todos los formularios', 'updateAllForms')
//     )
//     .addToUi();
// }

// const urlAsistConsul = "https://docs.google.com/forms/d/1YUAfkRaoXRsbjUI23tXpacLJ9dZa5nrxyXYK691wgpY/edit"; 
// const urlAsistPista = "https://docs.google.com/forms/d/1omBUmYG9qOfc7Su_9GFeFc9Mqnb3Ez3LW80Ny2qVNeI/edit";
// const urlAsistTaller = "https://docs.google.com/forms/d/192654OXn9OP2i3gdF73lPBTYlG5kJFKsxVr9UlQx1NY/edit";
// const urlPagosPista = "https://docs.google.com/forms/d/18gYcbIdGSTytp6In-6f0pP4_WQjJ2W0TFTiBcYp7Bdk/edit";
// const urlPagosConsul = "https://docs.google.com/forms/d/1Ax3WD1b-G-Tcu3HWGc_fSiaqIAYJE89JYZTQhHDJWOQ/edit";

// // Forms de Prueba
// //  var formIDAsistConsul = "1EGdBWmqSSokpEAAwtqlJ6LlgOfIjKAQ6LiVe5wySIVw";
// //  var formIDAsistPista = "1h1AZQJ0bqj_MaRLH_7v-Os1niPx95EzBJrDWMrlJ-Y0"; 
// //  var formIDAsistTaller = "1wi7rJaI5UOB_FhKxhnUystJxL6I2g7RVR_bMPJcRyX0"; 
// //  var formIDPagosPista = "18aGwVxVh6-IIXLlek7pHp-aCjrenj7qhHX17FLD8VGo";


// // Forms Reales
// const formIDAsistConsul = "1YUAfkRaoXRsbjUI23tXpacLJ9dZa5nrxyXYK691wgpY";
// const formIDAsistPista = "1omBUmYG9qOfc7Su_9GFeFc9Mqnb3Ez3LW80Ny2qVNeI";
// const formIDAsistTaller = "192654OXn9OP2i3gdF73lPBTYlG5kJFKsxVr9UlQx1NY";
// const formIDPagosPista = "18gYcbIdGSTytp6In-6f0pP4_WQjJ2W0TFTiBcYp7Bdk";
// const formIDPagosConsul = "1Ax3WD1b-G-Tcu3HWGc_fSiaqIAYJE89JYZTQhHDJWOQ";

// // Hojas por tipo
// const hojaPista = "Pista-Only";
// const hojaTaller = "Taller-Only";
// const hojaConsul = "Consul-Only";

// var rango = []
// //var form = []
// var ordenTerap = '';
// var ordenPac = '';

// ////////////////////////////////////////////////////////////////////
// function updateAllForms() {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   ss.toast("Empezando a actualizar Formularios !!");

//   // Get all Data
//   const terapPistas = getData('terapeutas', hojaPista);
//   console.log(terapPistas)
//   const pacPista = getData('pacientes', hojaPista);
//   const terapConsul = ('terapeutas', hojaConsul);
//   const pacConsul = getData('pacientes', hojaConsul);
//   const terapTaller = getData('terapeutas', hojaTaller);
//   const pacTaller = getData('pacientes', hojaTaller);

//   // Solicita Actualizar Formulatios
//   console.log("Arranca AsistPista ===========================================================");
//   changeForm(formIDAsistPista, terapPistas, pacPista);
//   console.log("Arranca PagosPista ===========================================================");
//   changeForm(formIDPagosPista, terapPistas, pacPista);
//   console.log("Arranca AsistConsul ===========================================================");
//   changeForm(formIDAsistConsul, terapConsul, pacConsul);
//   console.log("Arranca AsistTaller ===========================================================");
//   changeForm(formIDAsistTaller, terapTaller, pacTaller);
//   console.log("Arranca PagosConsul ===========================================================");
//   changeForm(formIDPagosConsul, terapConsul, pacConsul);
//   console.log("Arranca PagosPista ===========================================================");
//   changeForm(formIDPagosPista, terapPistas, pacPista);

//  ss.toast("Google Forms Updated !!");
// }


// function getData(personaTipo, hojaTipo) {
//   console.log("Running fx getdata", personaTipo, hojaTipo);
//   try {
//     if (personaTipo == "pacientes") {
//       rango = 'B2:B';
//     } else { rango = 'A2:A' };
//     //    Logger.log("rango:" +rango)
//     var sheetPista = SpreadsheetApp.getActive().getSheetByName(hojaTipo)
//     var range = sheetPista.getRange(rango);
//     var personas = range.getValues();
//     personas = personas.flat();
//     personas = personas.filter(row => row !='');
//     personas.sort();
//     // personas = personas.filter(function (r) { return r[0] !== "" });  // Filtra las no vacias
//     // personas.sort();
//     return personas;
//   } catch (e) {
//     Logger.log(e)
//   }
// }



// // Source: https://www.youtube.com/watch?v=S7aMNX-uBwU (minuto 5)
// // Otro: https://www.youtube.com/watch?reload=9&v=wYgrs9uwRtY

// // Obtiene el ID de cada pregunta del form
// function changeForm(formID, suTerap, suPac) {
//   console.log("Running changeForm fx:", formID);
//   try {
//     if (formID == formIDPagosConsul) {
//       ordenTerap = 0;
//       ordenPac = 7;
//     } else if (formID == formIDPagosPista) {
//       ordenTerap = 'NADA';
//       ordenPac = 0;
//     } else {
//       ordenTerap = 0;
//       ordenPac = 1;
//     }
//     var form = FormApp.openById(formID);
//     if (ordenTerap == 0) {
//       console.log("Intento Modificar Terapeuta: ordenTerap:", ordenTerap)
//       var terapeutasID = form.getItems()[ordenTerap].getId();
//       console.log("terapeutas ID:", terapeutasID);
//       var tituloTerapeutas = form.getItemById(terapeutasID);
//       console.log('Pregunta Ter?:', tituloTerapeutas.getTitle());
//     } else console.log("No hay que modificar Terapeuta");

//     if (ordenPac >= 0) {
//       console.log("Intento Modificar Pacientes: ordenPac:", ordenPac)
//       var pacientesID = form.getItems()[ordenPac].getId();
//       console.log("pacientesID:", pacientesID);
//       var tituloPacientes = form.getItemById(pacientesID);
//       console.log('Pregunta Pac?:', tituloPacientes.getTitle());
//     } else console.log("No hay que modificar Paciente");

//     setInfo(terapeutasID, pacientesID, formID, suTerap, suPac);
//   } catch (e) {
//     Logger.log(e)
//   }
// }

// // Set Info en el form
// function setInfo(terapeutasID, pacientesID, formID, suTerap, suPac) {
//   console.log("Running setInfo fx");
//   try {
//     var form = FormApp.openById(formID);
//     console.log(formID);
//     if (terapeutasID) {
//       var itemTerap = form.getItemById(terapeutasID).asMultipleChoiceItem();
//       itemTerap.setChoiceValues(suTerap);
//       console.log("Terapeutas Set");
//     } else console.log("Not setting Terapeuta");
//     if (pacientesID) {
//       var itemPac = form.getItemById(pacientesID).asMultipleChoiceItem();
//       itemPac.setChoiceValues(suPac)
//       console.log("Pacientes Set");
//     } else console.log("Not setting Pacientes");
//   } catch (e) {
//     Logger.log(e)
//   }
// }

