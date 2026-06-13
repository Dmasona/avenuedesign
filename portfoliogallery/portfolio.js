let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));

  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  slides[currentIndex].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

// Optional: auto-slide every 3 seconds
setInterval(() => {
  changeSlide(1);
}, 3000);