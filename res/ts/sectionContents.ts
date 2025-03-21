/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]') as NodeListOf<HTMLElement>;
const tabContents = document.querySelectorAll('[data-content]') as NodeListOf<HTMLElement>;

function activateTab(tab: HTMLElement) {
    // Get the target content and show it
    const target = document.querySelector(tab.dataset.target as string) as HTMLElement;
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
const modalViews = document.querySelectorAll('.services__modal') as NodeListOf<HTMLElement>;
const modalBtns = document.querySelectorAll('.services__button') as NodeListOf<HTMLElement>;
const modalCloses = document.querySelectorAll('.services__modal-close') as NodeListOf<HTMLElement>;

// Function to open modal
function openModal(index: number) {
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