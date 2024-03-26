const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const imageSlideContainer = document.querySelector(".image-slider-container");
const circles = document.querySelectorAll(".dot-nav *");

let currentSlide = 0;
const slideWidth = 600;
const totalSlides = imageSlideContainer.children.length;

function nextSlide() {
  if (currentSlide === totalSlides - 1) {
    currentSlide = 0;
  } else currentSlide++;
  console.log(currentSlide);
  imageSlideContainer.style.transform = `translateX(-${
    currentSlide * slideWidth
  }px)`;
  updateCircle();
  clearInterval(autoInterval);
  autoInterval = setInterval(nextSlide, 5000);
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = totalSlides - 1;
  } else currentSlide--;
  console.log(currentSlide);
  imageSlideContainer.style.transform = `translateX(-${
    currentSlide * slideWidth
  }px)`;
  updateCircle();
  clearInterval(autoInterval);
  autoInterval = setInterval(nextSlide, 5000);
}

rightArrow.addEventListener("click", () => {
  console.log("this is right");
  nextSlide();
});

leftArrow.addEventListener("click", () => {
  console.log("this is left");
  prevSlide();
});

function updateCircle() {
  circles.forEach((circle) => {
    circle.classList.remove("active");
  });
  circles[currentSlide].classList.add("active");
}

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    currentSlide = index;
    imageSlideContainer.style.transform = `translateX(-${
      currentSlide * slideWidth
    }px)`;
    updateCircle();
    clearInterval(autoInterval);
    autoInterval = setInterval(nextSlide, 5000);
  });
});

let autoInterval = setInterval(nextSlide, 5000);
