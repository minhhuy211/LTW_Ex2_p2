let slides = document.querySelectorAll('.item');
let dots = document.querySelectorAll('.dot');
let btnLeft = document.querySelector('.left');
let btnRight = document.querySelector('.right');

let currentSlide = 0;

// SlideShow

let refreshSlides = setInterval(() => {btnRight.click()},3000);

var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    dots.forEach((dot) => {
        dot.classList.remove('active');
    })
    slides[manual].classList.add('active');
    dots[manual].classList.add('active');
    clearInterval(refreshSlides);
    refreshSlides = setInterval(() => {btnRight.click()},3000);
}

// Show dotsBNt
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        currentSlide = i;
        manualNav(i);
    })
})

// BTN-Right
btnRight.addEventListener('click', () => {
    if (currentSlide + 1 > slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    manualNav(currentSlide);
})

// BTN-Left
btnLeft.addEventListener('click', () => {
    if (currentSlide - 1 < 0) {
        currentSlide = slides.length - 1;
    }else {
        currentSlide--;
    }
    manualNav(currentSlide);
})

// Slide auto

// var repeat = function (activeClass) {
//     let active = document.getElementsByClassName('active');
//     let i = 1;
//
//     var repeater = () => {
//         setTimeout(function () {
//             [...active].forEach((activeClass) => {
//                 activeClass.classList.remove('active');
//             })
//
//             slides[i].classList.add('active');
//             dots[i].classList.add('active');
//             i++;
//
//             if(slides.length == i) {
//                 i = 0;
//             }
//             if(i > slides.length) {
//                 return;
//             }
//             repeater();
//         }, 3000);
//     }
//     repeater();
// }
// repeat();