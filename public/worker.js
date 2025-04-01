// worker.js
let fetchInterval;
let changeInterval;

self.onmessage = function(e) {
    if (e.data === 'start') {
        // 5-second interval for data fetching
        fetchInterval = setInterval(() => {
            self.postMessage('fetch');
        }, 5000);
        
        // 15-minute interval for change calculations
        changeInterval = setInterval(() => {
            self.postMessage('calculateChange');
        }, 180000); // 15 minutes in milliseconds
        
    } else if (e.data === 'stop') {
        clearInterval(fetchInterval);
        clearInterval(changeInterval);
    }
};
