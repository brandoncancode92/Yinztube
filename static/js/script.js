// Scrolls the sub-navbar and styles the sub-navbar arrows
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const subNavbar = document.getElementById('sub-navbar');

leftArrow.style.display = 'none'; // Initially hide the left arrow

// Right arrow event listener
rightArrow.addEventListener('click', () => {
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'none';
    subNavbar.scrollLeft += 650;
});

// Left arrow event listener
leftArrow.addEventListener('click', () => {
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'block';
    subNavbar.scrollLeft -= 650;
});

// Hiding and restoring the hidden sidebar when the
// hamburger bars are clicked
const burgerIcon = document.querySelector('.burger');
const sidebarDefaultClass = 'side-bar-default';
const sidebarHiddenClass = 'side-bar-hidden';

burgerIcon.addEventListener('click', () => {
    const sideBarLinks = document.querySelectorAll('.side-bar-link');
    for (const sideBarLink of sideBarLinks) {
        if (sideBarLink.classList.contains(sidebarHiddenClass)) {
            sideBarLink.classList.remove(sidebarHiddenClass);
            sideBarLink.classList.add(sidebarDefaultClass);
        } else {
            sideBarLink.classList.remove(sidebarDefaultClass);
            sideBarLink.classList.add(sidebarHiddenClass);
        }
    }
});

const ads = document.getElementById('ads').querySelectorAll('div');
let currentAdIndex = 0;

// Initially show the first ad
ads[currentAdIndex].style.display = 'block';

// Set up an interval to fade out and fade in ads every 5 seconds
setInterval(() => {
    // Fade out the current ad
    ads[currentAdIndex].style.transition = 'opacity 0.5s ease-in-out';
    ads[currentAdIndex].style.opacity = 0;

    // Update the current ad index to the next one
    currentAdIndex = (currentAdIndex + 1) % ads.length;

    // Wait for the fade out to finish before fading in the next ad
    setTimeout(() => {
        // Set the display property of the next ad to block
        ads[currentAdIndex].style.display = 'block'; // This line was missing

        // Start the fade-in animation for the next ad
        ads[currentAdIndex].style.transition = 'opacity 0.5s ease-in-out';
        ads[currentAdIndex].style.opacity = 1;
    }, 500);
}, 5000);