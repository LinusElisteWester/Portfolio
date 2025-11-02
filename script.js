const slides = document.querySelectorAll(".skills-grid");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let current = 0;
let slideInterval = setInterval(showNextSlide, 5000);

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function showNextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function showPrevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Manual controls
nextBtn.addEventListener("click", () => {
  showNextSlide();
  resetInterval();
});

prevBtn.addEventListener("click", () => {
  showPrevSlide();
  resetInterval();
});

// Reset the interval when manually changing slides
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(showNextSlide, 5000);
}

// Initialize first slide
showSlide(current);
