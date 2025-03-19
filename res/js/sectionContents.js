/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

function activateTab(tab) {
    // Get the target content and show it
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach(tabContent => tabContent.classList.remove('qualification__active'));
    target.classList.add('qualification__active');

    // Highlight the clicked tab and remove active class from others
    tabs.forEach(t => t.classList.remove('qualification__active'));
    tab.classList.add('qualification__active');
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab));
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

// Function to open modal
function openModal(index) {
    modalViews[index].classList.add('active-modal');
}

// Function to close all modals
function closeModals() {
    modalViews.forEach(modalView => modalView.classList.remove('active-modal'));
}

// Add event listeners to modal buttons
modalBtns.forEach((modalBtn, index) => {
    modalBtn.addEventListener('click', () => openModal(index));
});

// Add event listeners to modal close buttons
modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', closeModals);
});

/*==================== PORTFOLIO SWIPER  ====================*/
/*
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
*/
const swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
const swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    },
});
