fetch('/robots.txt')
  .then(response => response.text())
  .then(text => alert(text))
  .catch(error => alert('LFI Failed: ' + error.message));
