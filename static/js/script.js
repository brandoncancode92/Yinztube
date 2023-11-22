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

const ads = document.querySelectorAll('#ads > div'); // Select all ad elements
let currentAdIndex = 0; // Initialize the current ad index

// Initialize the ad rotation loop
const adRotationInterval = setInterval(() => {
    // Fade out the current ad
    ads[currentAdIndex].classList.remove('ad-enter');
    ads[currentAdIndex].classList.add('ad-leave'); // Apply the 'ad-leave' animation class

    // Handle the animationend event for the last ad (ad-3) separately
    if (currentAdIndex === ads.length - 1) {
        ads[currentAdIndex].addEventListener('animationend', () => {
            // Update the display property after the fade-out animation completes
            ads[currentAdIndex].style.display = 'none';

            // Reset the current ad index to start the loop again from the first ad
            currentAdIndex = 0;

            // Show the first ad and apply the 'ad-enter' animation class
            ads[currentAdIndex].style.display = 'block';
            ads[currentAdIndex].classList.add('ad-enter');
        });
    } else {
        // Handle animationend events for other ads (ad-1, ad-2)
        ads[currentAdIndex].addEventListener('animationend', () => {
            // Update the display property after the fade-out animation completes
            ads[currentAdIndex].style.display = 'none';

            // Update the current ad index
            currentAdIndex = (currentAdIndex + 1) % ads.length;

            // Show the next ad and apply the 'ad-enter' animation class
            ads[currentAdIndex].style.display = 'block';
            ads[currentAdIndex].classList.add('ad-enter');

            // Remove the event listener to prevent multiple callbacks
            ads[currentAdIndex].removeEventListener('animationend', this);
        });
    }
}, 15000);

// Initially show the first ad and apply the 'ad-enter' animation class
ads[currentAdIndex].style.display = 'block';
ads[currentAdIndex].classList.add('ad-enter');

// Keep the ad rotation interval active

