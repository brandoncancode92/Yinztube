// Function for displaying the mobile search navbar when the magnifying
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

const subShowMore = document.getElementById('sub-show-more-div');
const subShowLess = document.getElementById('sub-show-less-div');
const subShowMoreElements = document.querySelectorAll('.sub-show-more');
const dividerElement = document.querySelector('.divider'); // Replace with the selector for your divider element

// Define function to toggle visibility
function toggleVisibility(isVisible) {
    if (isVisible) {
    subShowMore.style.display = 'none'; // Hide sub-show-more-div on show
    subShowMoreElements.forEach(element => element.style.display = 'block');
    dividerElement.style.display = 'none'; // Hide divider on show
    } else {
    subShowMore.style.display = 'flex'; // Show sub-show-more-div on hide
    subShowMoreElements.forEach(element => element.style.display = 'none');
    dividerElement.style.display = 'block'; // Show divider on hide
    }
}

// Hide sub-show-more elements, show divider, and hide sub-show-more-div initially
toggleVisibility(false);

subShowMore.addEventListener('click', () => {
  // Show sub-show-more elements and hide divider, but also hide sub-show-more-div on click
    toggleVisibility(true);
});

subShowLess.addEventListener('click', () => {
  // Hide sub-show-more elements and show divider, but also show sub-show-more-div on click
    toggleVisibility(false);
});