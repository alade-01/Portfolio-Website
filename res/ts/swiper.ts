
 /**
  * 
import Swiper from 'swiper';
import 'swiper/css';
  // Import Swiper styles
//import '../css/styles.css';


document.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper when the page loads
  const swiper = new Swiper('.portfolio__container', {
    loop: true,  // Loop slides
    autoplay: {
      delay: 2500, // Time between slides (2.5 seconds)
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination', // Pagination element
      clickable: true, // Make pagination clickable
    },
    navigation: {
      nextEl: '.swiper-button-next', // Next button
      prevEl: '.swiper-button-prev', // Previous button
    },
  });
});
  */


/**
 * document.addEventListener('DOMContentLoaded', () => {
  const swiperContainer = document.querySelector('.portfolio__container');

  if (swiperContainer) {
    const swiper = new Swiper(swiperContainer as HTMLElement, {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    console.error('Swiper container not found');
  }
});
 * 
 */

/**
 * /*==================== PORTFOLIO SWIPER  ====================*/
/* Import Swiper module
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';

 * import Swiper from 'swiper';
//import '/swiper/swiper-bundle.min';  // Import Swiper styles

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

/*==================== TESTIMONIAL ====================*
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
 */