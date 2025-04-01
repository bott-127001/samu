// worker.js
let fetchInterval;
let changeInterval;
let isPaused = false;

self.onmessage = function(e) {
    if (e.data === 'start') {
        startIntervals();
    } else if (e.data === 'stop') {
        clearIntervals();
    } else if (e.data === 'pause') {
        isPaused = true;
        clearIntervals();
    } else if (e.data === 'resume') {
        if (isPaused) {
            isPaused = false;
            startIntervals();
        }
    }
};

function startIntervals() {
    // Clear any existing intervals
    clearIntervals();
    
    // Start new intervals
    fetchInterval = setInterval(() => {
        self.postMessage('fetch');
    }, 5000);
    
    changeInterval = setInterval(() => {
        self.postMessage('calculateChange');
    }, 900000);
}

function clearIntervals() {
    clearInterval(fetchInterval);
    clearInterval(changeInterval);
}
