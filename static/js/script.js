// Fucntion for displaying the mobile search navbar when the magnifying
// glass is clicked.
function searchDiv() {
    // Hide the main navbar
    document.getElementById('main-navbar').style.display = 'none';

    // Show the mobile search navbar
    document.getElementById('mobile-search-navbar').style.display = 'flex';
    document.getElementById('mobile-search-navbar').style.justifyContent = 'space-around';
    document.getElementById('mobile-search-navbar').style.alignItems = 'center';
    document.getElementById('mobile-search-navbar').style.marginTop = '5px';
    document.getElementById('search-form').style.marginLeft = '30px';
    document.getElementById('search-form').style.marginRight = '30px';
}

  // Add an event listener to the magnifying glass icon
document.getElementById('magnifying-glass-link').addEventListener('click', searchDiv);

// Function to toggle the mobile navbars
function toggleNavbars() {
    // Get the visibility status of each navbar
    const mainNavbarHidden = document.getElementById('main-navbar').style.display === 'none';
    const mobileSearchNavbarHidden = document.getElementById('mobile-search-navbar').style.display === 'none';

    // Toggle visibility based on the current state
    if (mainNavbarHidden) {
      // Main navbar is hidden, so show it
        document.getElementById('main-navbar').style.display = 'flex';
        document.getElementById('main-navbar').style.justifyContent = 'space-between';
        document.getElementById('nav-links').style.marginLeft = '70px';
    } else {
      // Main navbar is visible, so hide it
        document.getElementById('main-navbar').style.display = 'none';
    }

    if (mobileSearchNavbarHidden) {
      // Mobile search navbar is hidden, so show it
        document.getElementById('mobile-search-navbar').style.display = 'flex';
    } else {
      // Mobile search navbar is visible, so hide it
        document.getElementById('mobile-search-navbar').style.display = 'none';
    }
}