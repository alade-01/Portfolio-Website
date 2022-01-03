/*==================== BASE ====================*/ 
/*========== Colors ==========*/ 
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/* Review this code
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100)
        nav.classList.add('scroll-header');
    else
        nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
/*==================== VARIABLES CSS ====================*/ 
/*==================== LAYOUT ====================*/ 
/*==================== LAYOUT ====================*/ 
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById('nav-toggle'), navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
/*==================== ACCORDION SKILLS ====================*/
/*
var acc = document.getElementsByClassName("skills__content");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
*/
System.register("layouts/section", ["../../js/swiper-bundle.min.js"], function (exports_1, context_1) {
    "use strict";
    var skillsContent, skillsHeader, tabs, tabContents, modalViews, modalBtns, modalCloses, modal, swiper_bundle_min_js_1, swiperPortfolio, swiperTestimonial;
    var __moduleName = context_1 && context_1.id;
    function toggleSkills() {
        let itemClass = this.parentNode.ClassName;
        var i;
        for (i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills__content skills__close';
        }
        if (itemClass === 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open';
        }
    }
    return {
        setters: [
            function (swiper_bundle_min_js_1_1) {
                swiper_bundle_min_js_1 = swiper_bundle_min_js_1_1;
            }
        ],
        execute: function () {/*==================== ACCORDION SKILLS ====================*/
            /*
            var acc = document.getElementsByClassName("skills__content");
            var i;
            
            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }
            */
            skillsContent = document.getElementsByClassName('skills__content'), skillsHeader = document.querySelectorAll('.skills__header');
            //skillsHeader.forEach(n => n.addEventListener('click', linkAction))
            skillsHeader.forEach((el) => {
                el.addEventListener('click', toggleSkills);
            });
            /*==================== QUALIFICATION TABS ====================*/
            tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content]');
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const target = document.querySelector(tab["dataset"].target);
                    tabContents.forEach(tabContent => {
                        tabContent.classList.remove('qualification__active');
                    });
                    target.classList.add('qualification__active');
                    tabs.forEach(tab => {
                        tab.classList.remove('qualification__active');
                    });
                    tab.classList.add('qualification__active');
                });
            });
            /*==================== SERVICES MODAL ====================*/
            modalViews = document.querySelectorAll('.services__modal'), modalBtns = document.querySelectorAll('.services__button'), modalCloses = document.querySelectorAll('.services__modal-close');
            modal = function (modalClick) {
                modalViews[modalClick].classList.add('active-modal');
            };
            modalBtns.forEach((modalBtns, i) => {
                modalBtns.addEventListener('click', () => {
                    modal(i);
                });
            });
            modalCloses.forEach((modalCloses) => {
                modalCloses.addEventListener('click', () => {
                    modalViews.forEach((modalViews) => {
                        modalViews.classList.remove('active-modal');
                    });
                });
            });
            /*
            import Swiper from 'swiper/swiper-bundle.esm.js';
            import 'swiper/swiper-bundle.css';
            */
            swiperPortfolio = new swiper_bundle_min_js_1.default('.portfolio__container', {
                cssMode: true,
                logo: true,
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
            swiperTestimonial = new swiper_bundle_min_js_1.default('.testimonial__container', {
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
                    }
                }
            });
        }
    };
});
/* Font size for large devices */
/* For large devices */ 
/* For medium devices */ 
/* For small devices */ 
/*==================== REUSABLE CSS CLASSES ====================*/ 
/*==================== BUTTONS ====================*/ 
/*==================== CONTACT ME ====================*/ 
//# sourceMappingURL=all.js.map