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

// Randomly Choose one of three ads to display on the page.
const adIds = ['ad-1', 'ad-2', 'ad-3'];
const randomAdId = adIds[Math.floor(Math.random() * adIds.length)];

for (const adId of adIds) {
    document.getElementById(adId).style.display = 'none';
}

document.getElementById(randomAdId).style.display = 'block';