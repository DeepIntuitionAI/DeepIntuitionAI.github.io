// Content for each section
const content = {
    "home": "This is the home page.",
    "section1": "This is the content for Section 1.",
    "section2": "This is the content for Section 2.",
    "section3": "This is the content for Section 3.",
    "section4": "This is the content for Section 4."
};

// Function to change content and highlight active section
function loadContent() {
    const hash = window.location.hash.substring(1) || "home";
    const mainContent = document.querySelector(".main-content");
    const selectedNav = document.querySelector(`#${hash}`);
    
    // Remove existing 'selected' class
    document.querySelectorAll('.side-navigation a').forEach(a => a.classList.remove('selected'));
    
    // Add 'selected' class to active section
    if (selectedNav) {
        selectedNav.classList.add('selected');
    }

    // Load content into main section
    if (mainContent) {
        mainContent.innerHTML = content[hash];
    }
}

// Initial load
loadContent();

// Listen for hash changes (URL fragment changes)
window.addEventListener('hashchange', loadContent);

