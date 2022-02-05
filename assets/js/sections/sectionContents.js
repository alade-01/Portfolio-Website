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
/*
const skillsContent =  document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.ClassName
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}
//skillsHeader.forEach(n => n.addEventListener('click', linkAction))
skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

 */

/*==================== ACCORDION SKILLS UPDATE====================*/

// toggle answer

const toggleAnswer = (e) => {
    const question = e.childNodes[1];
    hideAllAnswers(question);
    e.childNodes[5].classList.toggle("rotate-icon");
    // e.classList.toggle("bold");
    e.nextElementSibling.classList.toggle("hide");
    //e.nextElementSibling.classList.add("transitionOpen");
};

//hide answers

const hideAllAnswers = (question) => {
    const questionsEl = [...document.querySelectorAll(".skills__header")];
    questionsEl.forEach((questionEl) => {
        console.log();
        if (questionEl.childNodes[1] !== question) {
            questionEl.classList.add("transitionOpen");
            questionEl.nextElementSibling.classList.add("hide");
            questionEl.childNodes[5].classList.remove("rotate-icon");
        }
    });
};

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')

        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtns,i) =>{
    modalBtns.addEventListener('click',() =>{
        modal(i)
    })
})

modalCloses.forEach((modalCloses) =>{
    modalCloses.addEventListener('click',() =>{
        modalViews.forEach((modalViews) =>{
            modalViews.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
/*
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
*/
let swiperPortfolio = new Swiper('.portfolio__container', {

    cssMode: true,
    logo :true,
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
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop :true,
    grabCursor:true,
    spaceBetween:48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }
});