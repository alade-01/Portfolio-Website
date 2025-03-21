


/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu-p') as HTMLElement | null;
const navToggle = document.getElementById('nav-toggle-p') as HTMLElement | null;
const navClose = document.getElementById('nav-close-p') as HTMLElement | null;

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.add('show-menu');
        }
    });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('show-menu');
        }
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link') as NodeListOf<HTMLElement>;

function linkAction(): void {
    if (navMenu) {
        navMenu.classList.remove('show-menu');
    }
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]') as NodeListOf<HTMLElement>;
let lastScrollY = 0;

function scrollActive(): void {
    const scrollY = window.pageYOffset;
    if (Math.abs(scrollY - lastScrollY) < 10) return; // Preventing unnecessary updates on small scrolls
    lastScrollY = scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`) as HTMLElement;
        if (!link) return;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', throttle(scrollActive, 50)); // Throttle scroll event

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(): void {
    const nav = document.getElementById('header') as HTMLElement;
    nav.classList.toggle('scroll-header', window.scrollY >= 100);
}

window.addEventListener('scroll', throttle(scrollHeader, 50)); // Throttle scroll event

/*==================== SHOW SCROLL UP ====================*/
function scrollUp(): void {
    const scrollUpBtn = document.getElementById('scroll-up') as HTMLElement;
    scrollUpBtn.classList.toggle('show-scroll', window.scrollY >= 560);
}

window.addEventListener('scroll', throttle(scrollUp, 50)); // Throttle scroll event

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button') as HTMLElement;
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Get stored theme from localStorage and apply it
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const applyTheme = (theme: string, icon: string): void => {
    document.body.classList.toggle(darkTheme, theme === 'dark');
    themeButton.classList.toggle(iconTheme, icon === 'uil-moon');
};

if (selectedTheme) {
    applyTheme(selectedTheme, selectedIcon || 'uil-sun');
}

themeButton.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const currentIcon = themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const newIcon = currentIcon === 'uil-moon' ? 'uil-sun' : 'uil-moon';

    // Apply theme and save to localStorage
    applyTheme(newTheme, newIcon);
    localStorage.setItem('selected-theme', newTheme);
    localStorage.setItem('selected-icon', newIcon);
});

/*==================== THROTTLE FUNCTION ====================*/
function throttle(func: Function, delay: number): Function {
    let lastCall = 0;
    return function (...args: any[]) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}
