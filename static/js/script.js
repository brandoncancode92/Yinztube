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

// Show and hide the extra links in the column navbar
const showMoreDivs = {
    'sub-show-more': {
        divElement: document.getElementById('sub-show-more-div'),
        showLessElement: document.getElementById('sub-show-less-div'),
        elementsToToggle: document.querySelectorAll('.sub-show-more'),
    },
    'you-show-more': {
        divElement: document.getElementById('you-show-more-div'),
        showLessElement: document.getElementById('you-show-less-div'),
        elementsToToggle: document.querySelectorAll('.you-show-more'),
    },
};

const dividerElement = document.querySelector('.divider');

function toggleVisibility(sectionId, isVisible) {
    const { divElement, showLessElement, elementsToToggle } = showMoreDivs[sectionId];

    if (isVisible) {
        divElement.style.display = 'none';
        elementsToToggle.forEach(element => element.style.display = 'block');
        dividerElement.style.display = 'none';
    } else {
        divElement.style.display = 'flex';
        elementsToToggle.forEach(element => element.style.display = 'none');
        dividerElement.style.display = 'block';
    }

    showLessElement.style.display = isVisible ? 'block' : 'none';
}

// Initial state
for (const sectionId in showMoreDivs) {
    toggleVisibility(sectionId, false);
}

// Click events
for (const sectionId in showMoreDivs) {
    showMoreDivs[sectionId].divElement.addEventListener('click', () => {
        toggleVisibility(sectionId, true);
    });

    showMoreDivs[sectionId].showLessElement.addEventListener('click', () => {
        toggleVisibility(sectionId, false);
    });
}


const linksEl = document.getElementById('sub-navbar-links');
const forwardCaretEl = document.getElementById('sub-navbar-forward-caret');
const backCaretEl = document.getElementById('sub-navbar-back-caret');

// Scroll to the right when clicking the forward caret
forwardCaretEl.addEventListener('click', function () {
  linksEl.scrollTo({
    left: linksEl.scrollWidth, /* Scroll to the end */
    behavior: 'smooth' /* Smooth scrolling */
  });
  backCaretEl.style.visibility = 'visible';
  forwardCaretEl.style.visibility = 'hidden';
});

backCaretEl.addEventListener('click', function () {
    linksEl.scrollTo({ left: 0, behavior: 'smooth' });
    setTimeout(() => {
      backCaretEl.style.visibility = 'hidden';
      forwardCaretEl.style.visibility = 'visible';
    }, 10); // Delay in milliseconds
  });