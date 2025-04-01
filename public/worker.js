javascript
Copy
// worker.js
let fetchInterval;

self.onmessage = function(e) {
    if (e.data === 'start') {
        // Only start 5-second fetch interval
        fetchInterval = setInterval(() => {
            self.postMessage('fetch');
        }, 5000);
    } else if (e.data === 'stop') {
        clearInterval(fetchInterval);
    }
};
