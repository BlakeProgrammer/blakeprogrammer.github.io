// 1. Initialize once
Module.onRuntimeInitialized = () => {
    Module._initGraph();
    console.log("Graph Ready!");
};

// 2. Call when user clicks 'Fly'
function handleSearch() {
    const start = document.getElementById('start').value; // e.g. "BNA"
    const end = document.getElementById('end').value;     // e.g. "LHR"
    
    const rawResult = Module.ccall('findPath', 'string', ['string', 'string', 'number'], [start, end, 1]);
    
    // rawResult = "BNA-JFK-LHR:4200|"
    const pathSegments = rawResult.split('|')[0].split(':')[0].split('-');
    // pathSegments = ["BNA", "JFK", "LHR"]
    
    // Now you can pass ["BNA", "JFK", "LHR"] to your globe drawing function!
    drawPathOnGlobe(pathSegments);
}