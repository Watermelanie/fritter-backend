/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 */

function viewAllReports(fields) {
  fetch(`/api/reports/${fields.freetId}`)
    .then(showResponse)
    .catch(showResponse);
}

function viewReportsByType(fields) {
  fetch(`/api/reports/${fields.freetId}/${fields.type}`)
    .then(showResponse)
    .catch(showResponse);
}

function createReport(fields) {
  fetch(`/api/reports/${fields.freetId}/${fields.type}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}
