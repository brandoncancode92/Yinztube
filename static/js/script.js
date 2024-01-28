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

// Variables for back and forward caret functions
const linksEl = document.getElementById('sub-navbar-links');
const forwardCaretEl = document.getElementById('sub-navbar-forward-caret');
const backCaretEl = document.getElementById('sub-navbar-back-caret');

// Function for scrolling to the right when clicking the forward caret
forwardCaretEl.addEventListener('click', function () {
    linksEl.scrollTo({
        left: linksEl.scrollWidth, /* Scroll to the end */
        behavior: 'smooth' /* Smooth scrolling */
    });
    backCaretEl.style.visibility = 'visible';
    forwardCaretEl.style.visibility = 'hidden';
});

// Function for scrolling to the left when clicking the back caret
backCaretEl.addEventListener('click', function () {
    linksEl.scrollTo({ left: 0, behavior: 'smooth' }); /* Scroll to the beginning */
    setTimeout(() => {
        backCaretEl.style.visibility = 'hidden';
        forwardCaretEl.style.visibility = 'visible';
    }, 30); // Delay in milliseconds
});

// Hide collapsed-column-navbar by default
window.addEventListener("load", function() {
    document.getElementById("collapsed-column-navbar").style.display = "none";
});

// Toggle visibility of column-navbar and collapsed-column-navbar on hamburger click
document.getElementById("hamburger").addEventListener("click", function() {
    const columnNavbar = document.getElementById("column-navbar");
    const collapsedColumnNavbar = document.getElementById("collapsed-column-navbar");

    columnNavbar.style.display = columnNavbar.style.display === "none" ? "block" : "none";
    collapsedColumnNavbar.style.display = columnNavbar.style.display === "none" ? "block" : "none";
});


// 1. Get a reference to the mobile sub-navbar element:
const mobileSubNavbar = document.getElementById('mobile-sub-navbar');

// 2. Add a listener for window resizing events:
window.addEventListener('resize', () => {
  // 3. Calculate the desired width based on viewport width:
  const calculatedWidth = window.innerWidth * 0.8; // Use 80% of viewport width

  // 4. Set the calculated width to the element's style:
    mobileSubNavbar.style.width = `${calculatedWidth}px`;
});

// 5. Trigger an initial resize event to set the width on page load:
window.dispatchEvent(new Event('resize'));

const mobileSubNavbarCompass = document.getElementById('mobile-sub-navbar-compass');
const mobileZIndexColumnNavbarDiv = document.getElementById('mobile-z-index-column-navbar-div');

mobileSubNavbarCompass.addEventListener('click', () => {
  mobileZIndexColumnNavbarDiv.style.display = 'block'; // Or any other display style you prefer
});

const navbarDiv = document.getElementById('mobile-z-index-column-navbar-div');
const footer = document.getElementById('mobile-footer');

let startX;

navbarDiv.addEventListener('touchstart', handleTouchStart);
navbarDiv.addEventListener('touchmove', handleTouchMove);
navbarDiv.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    const deltaX = event.touches[0].clientX - startX;
    const translateX = Math.min(deltaX, 0); // Limit translation to a maximum of 0 (original position)

    navbarDiv.style.transform = `translateX(${translateX}px)`;
    navbarDiv.style.opacity = 1 - Math.abs(deltaX / navbarDiv.offsetWidth); // Fade out as it slides
}

function handleTouchEnd(event) {
    if (navbarDiv.style.transform !== 'none') {
    navbarDiv.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
    navbarDiv.style.transform = 'translateX(-100%)'; // Slide off completely
    navbarDiv.style.opacity = 0;
    navbarDiv.querySelector('#mobile-footer').style.display = 'none'; // Hide the footer after the transition
    }
}
const compass = document.getElementById('mobile-sub-navbar-compass');

compass.addEventListener('click', () => {
    if (navbarDiv.style.transform === 'translateX(-100%)') {
      navbarDiv.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'; // Add transition properties for sliding in
        navbarDiv.style.transform = 'translateX(0)';
        navbarDiv.style.opacity = 1;
        navbarDiv.querySelector('#mobile-footer').style.display = 'block';
    }
});

// Select the ads and container
const ads = document.querySelectorAll('#advertisements .advert');
const adContainer = document.getElementById('advertisements');

let currentAdIndex = 0;

// Function to rotate ads
ads[0].style.display = 'block';

function showNextAd() {
    ads[currentAdIndex].classList.remove('active');
    ads[currentAdIndex].style.display = 'none'; // Hide the previous ad

    currentAdIndex = (currentAdIndex + 1) % ads.length;

    ads[currentAdIndex].classList.add('active');
    ads[currentAdIndex].style.display = 'block'; // Show the next ad
}

// Start the ad rotation
setInterval(showNextAd, 30000); // Change ads every 5 seconds

// Initially show the first ad
ads[0].classList.add('active');

