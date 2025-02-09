// JavaScript for carousel functionality
const carousel = document.querySelector('.carousel-images');
let index = 0;

setInterval(() => {
    index = (index + 1) % 3; // Assuming there are 3 images in the carousel
    carousel.style.transform = `translateX(-${index * 100}%)`;
}, 4000); // Change image every 5 seconds
