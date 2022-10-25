/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 */

function showSensitivitySetting(fields) {
  fetch('/api/sensitivitySettings')
    .then(showResponse)
    .catch(showResponse);
}

function hideSensitiveContent(fields) {
  fetch('/api/sensitivitySettings/hideSensitiveContent', {method: 'PUT'})
    .then(showResponse)
    .catch(showResponse);
}

function showSensitiveContent(fields) {
  fetch('/api/sensitivitySettings/showSensitiveContent', {method: 'PUT'})
    .then(showResponse)
    .catch(showResponse);
}

function hideHiddenFreet(fields) {
  fetch('/api/sensitivitySettings/hideHiddenFreet', {method: 'PUT'})
    .then(showResponse)
    .catch(showResponse);
}

function showHiddenFreet(fields) {
  fetch('/api/sensitivitySettings/showHiddenFreet', {method: 'PUT'})
    .then(showResponse)
    .catch(showResponse);
}
