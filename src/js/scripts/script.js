"use strict";

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const pageHeader = document.querySelector(".page-header");

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');
pageHeader.classList.remove("page-header--nav");

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    if (pageHeader.classList.contains("page-header--nav")) {
      pageHeader.classList.remove("page-header--nav");
    } else {
      pageHeader.classList.add("page-header--nav");
    };

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageHeader.classList.remove("page-header--nav");
  }
});

const sliderSection = document.querySelector('.slider');

if (sliderSection) {
  const slides = document.querySelectorAll(".slider__list-item"),
    dots = document.querySelectorAll(".slider__control-item"),
    buttonPrev = document.querySelector(".previous"),
    buttonNext = document.querySelector(".next");
  let currentSlide = 0;

  function showSlide() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add('slider__list-item--inactive');
      dots[i].classList.add('slider__control-item--inactive');
    }
    slides[currentSlide].classList.remove('slider__list-item--inactive');
    dots[currentSlide].classList.remove('slider__control-item--inactive');
  }

  function autoSlideShow() {

    if (currentSlide + 1 == slides.length) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    showSlide();
  }

  if (buttonNext) {
    function nextSlide() {

      buttonNext.onclick = function () {
        if (currentSlide + 1 == slides.length) {
          currentSlide = 0;
        } else {
          currentSlide++;
        }
        showSlide();
      }
    }
    nextSlide();
  }

  if (buttonPrev) {
    function prevSlide() {

      buttonPrev.onclick = function () {
        if (currentSlide == 0) {
          currentSlide = slides.length - 1;
        } else {
          currentSlide--;
        }
        showSlide();
      }
    }
    prevSlide();
  }



  function dotsSlide() {
    for (let i = 0; i < dots.length; i++) {
      dots[i].onclick = function () {
        dots[i].classList.remove('slider__control-item--inactive');
        if (!dots[i].classList.contains('slider__control-item--inactive')) {
          currentSlide = i;
        }
        showSlide();
      }
    }
  }
  setInterval(autoSlideShow, 8000);

  dotsSlide();
}
