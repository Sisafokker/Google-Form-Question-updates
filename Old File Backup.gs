// ===================================================================================================================================================================
// HACE UN BACKUP ENTERO. CREA UN NUEVO DOCUMENTO.
// ===================================================================================================================================================================
function BackUpPlanillaMadre() {
  Logger.log("Antes hacia un backup")
  }
// function BackUpPlanillaMadre() {
//   Logger.log("===== [COMIENZA] BackUp ======");
 
//   // Get Source spreadsheet (the one having all the infomation we want to backup).
//   var sourceSpreadsheet = SpreadsheetApp.getActive();
  
//   // Gets the DATE of when the Backup is being created.
//   var backupDate = Utilities.formatDate(new Date(), "GMT+2", "yyyy-MM-dd HH:mm"); // New Date en el formato que yo quiero.
//   Logger.log("Fecha del Backup "+ backupDate);
  
//   // Define el nombre del nuevo archivo
//   var nombreArchivo = "[BACKUP P.Madre] - ";
  
//   // Nombre de la nueva HOJA a crear
//   var newSheetName = "BACKUP";
  
//    // Get Drive folder containing the sourceSpreadsheet to save the file.
//   var parents = DriveApp.getFileById(sourceSpreadsheet.getId()).getParents();
//   if (parents.hasNext()) {
//     var folder = parents.next();
//   }
//   else {
//     folder = DriveApp.getRootFolder();
//   }
 
// // Copy whole spreadsheet and applies the name.
//   var destSpreadsheet = SpreadsheetApp.open(DriveApp.getFileById(sourceSpreadsheet.getId()).makeCopy(nombreArchivo+" "+backupDate, folder))
  
//   // Gets the ID of the new file
//   var IDdestSpreadsheet = destSpreadsheet.getId()
  
//   // Activo el New File  
//   var activeSS= SpreadsheetApp.openById(IDdestSpreadsheet);
//   var yourNewSheet= activeSS.getSheetByName(newSheetName);
  
//     if (yourNewSheet != null) {
//         activeSS.deleteSheet(yourNewSheet);
//     }
  
//   // Inserts / Creates the new sheet
//   yourNewSheet = activeSS.insertSheet();

//   // Sets the name of the new Sheet
//   yourNewSheet.setName(newSheetName);
  
//  // Moves the Active Sheet to Position #1
//   activeSS.moveActiveSheet(1);
         
// // Escribe en la hoja PLANTILLA del la nueva copia del documento un TEXTO en varias filas.
//   var tituloBackup = "Esto es un BackUp de la Planilla Madre"
//   yourNewSheet.getRange('A1').setValue(tituloBackup);
//   yourNewSheet.getRange('A2').setValue("Creado el:");
//   yourNewSheet.getRange('B2').setValue(backupDate);                                                                   

//   var mensajeBackup = "BACKUP --- BACKUP --- BACKUP --- BACKUP --- BACKUP --- BACKUP --- BACKUP --- ";
//   yourNewSheet.getRange('A5').setValue(mensajeBackup + mensajeBackup);
//   yourNewSheet.getRange('A10').setValue(mensajeBackup + mensajeBackup);
//   yourNewSheet.getRange('A15').setValue(mensajeBackup + mensajeBackup);
    
//     Logger.log("===== [FIN] BackUp ======");

// }
