let currentSlide = 0;
const slides = document.querySelectorAll('.product');
const totalSlides = slides.length;

function moveSlide(event, direction) {
    event.preventDefault();  

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const carousel = document.getElementById('carousel');
    const offset = -currentSlide * 100;  
    carousel.style.transform = `translateX(${offset}%)`;
}

function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    if (menu.style.left == "-250px") {
        menu.style.left = "0";
    } else {
        menu.style.left = "-250px";
    }
}

