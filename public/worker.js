// worker.js
let fetchInterval;
let changeInterval;
let isVisible = true;

// More frequent checks when visible
const ACTIVE_INTERVAL = 5000; 
// Slower but keeps alive when hidden
const BACKGROUND_INTERVAL = 30000; 

function startPolling() {
    clearInterval(fetchInterval);
    clearInterval(changeInterval);
    
    const interval = isVisible ? ACTIVE_INTERVAL : BACKGROUND_INTERVAL;
    
    fetchInterval = setInterval(() => {
        self.postMessage('fetch');
    }, interval);
    
    // Keep 15-min change calc as-is
    changeInterval = setInterval(() => {
        self.postMessage('calculateChange'); 
    }, 900000);
}

self.onmessage = function(e) {
    if (e.data === 'visibilityChange') {
        isVisible = e.data.visible;
        startPolling();
    }
    else if (e.data === 'start') {
        startPolling();
    }
    else if (e.data === 'stop') {
        clearInterval(fetchInterval);
        clearInterval(changeInterval);
    }
};
