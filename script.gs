function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function recordData(name, mobileNumber) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var timeStamp = new Date();
  sheet.appendRow([name, mobileNumber, timeStamp]);
}
