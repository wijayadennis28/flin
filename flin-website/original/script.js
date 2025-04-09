// Simple JavaScript File - Not Minified

function greetUser() {
    // This is a simple function
    const heading = document.querySelector('h1');
    if (heading) {
        console.log('Heading found:', heading.textContent);
    } else {
        console.log('Heading element not found yet.'); 
        // This might happen if script runs before DOM is ready
    }

    // Add more complex logic here if needed later
}

// Add an event listener after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    greetUser(); // Call the function once DOM is ready
});

console.log('script.js loaded'); // Log immediately when the script file itself is loaded

// A lot of whitespace and comments below for demonstration

// 
// 
// End of script example.
// 
//