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

/**
 * /*==================== ACCORDION SKILLS UPDATE ====================*

// Toggle answer visibility and rotate icon
const toggleAnswer = (e) => {
    const questionHeader = e.querySelector('.skills__header');
    const answer = e.nextElementSibling;
    const icon = e.querySelector('.rotate-icon');
    
    // Hide all answers except the clicked one
    hideAllAnswers(questionHeader);

    // Toggle the answer visibility and rotate the icon
    icon.classList.toggle('rotate-icon');
    answer.classList.toggle('hide');
};

// Hide all answers and reset icons
const hideAllAnswers = (currentQuestion) => {
    const questions = document.querySelectorAll('.skills__header');

    questions.forEach((question) => {
        // Only hide the answers for questions that are not the current one
        if (question !== currentQuestion) {
            const icon = question.querySelector('.rotate-icon');
            const answer = question.nextElementSibling;

            // Reset all other questions
            icon.classList.remove('rotate-icon');
            answer.classList.add('hide');
        }
    });
};

// Add event listeners for each accordion item
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    item.addEventListener('click', (e) => toggleAnswer(e.target));
});

 */