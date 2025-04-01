// worker.js
let fetchInterval;
let changeInterval;

self.onmessage = function(e) {
    if (e.data === 'start') {
        // Start 5-second interval for regular data fetching
        fetchInterval = setInterval(() => {
            self.postMessage('fetch');
        }, 5000);

        // Start 15-minute interval for change calculations
        changeInterval = setInterval(() => {
            self.postMessage('calculateChange');
        }, 900000); // 15 minutes in milliseconds

    } else if (e.data === 'stop') {
        clearInterval(fetchInterval);
        clearInterval(changeInterval);
    }
};
