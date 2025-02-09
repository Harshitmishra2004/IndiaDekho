let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    let slides = document.querySelectorAll('.slider-images');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    
    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    
    // Show the current slide
    slides[currentIndex].style.display = 'block';
}

// Next and Previous buttons functionality
function nextSlide() {
    showSlide(currentIndex += 1);
}

function prevSlide() {
    showSlide(currentIndex -= 1);
}

// Initialize the slider by showing the first slide
document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentIndex);

    // Set up interval to auto change the slide every 3 seconds
    setInterval(nextSlide, 3000);
});
