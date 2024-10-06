fetch('/auth/realms/master/.well-known/openid-configuration')
  .then(response => response.json())
  .then(data => {
    alert(JSON.stringify(data));  // Display internal config data
  })
  .catch(error => alert('LFI Failed: ' + error.message));
