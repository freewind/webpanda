chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('dist/index.html', {
        'id': 'webpanda',
        'bounds': {
            'width': 960,
            'height': 640
        }
    });
});
