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