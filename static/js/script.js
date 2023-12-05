function searchDiv() {
    // Hide the main navbar
    document.getElementById('main-navbar').style.display = 'none';

    // Show the mobile search navbar and apply CSS styles
    document.getElementById('mobile-search-navbar').style.display = 'flex';
    document.getElementById('mobile-search-navbar').style.justifyContent = 'around';
    document.getElementById('mobile-search-navbar').style.alignItems = 'center';
}

// Add an event listener to the magnifying glass icon
document.getElementById('magnifying-glass-link').addEventListener('click', searchDiv);