// Если нужно использовать document.getElementById как в уроке, то можно сделать слайдер для двух картинок
// let image = document.getElementById('img1');
// console.log(image);

// function nextImage() {
//     image.src = "https://i.postimg.cc/cLVh9nKk/2.png"
// }

// function prevImage() {
//     image.src = "https://i.postimg.cc/nhsTGkLQ/1.png"
// }



// Если нужно сделать слайдер для всей галереи
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

updateSlider();