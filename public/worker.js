// worker.js
let fetchInterval;

self.onmessage = function(e) {
    if (e.data === 'start') {
        fetchInterval = setInterval(() => {
            self.postMessage('fetch');
        }, 5000);
    } else if (e.data === 'stop') {
        clearInterval(fetchInterval);
    }
};
