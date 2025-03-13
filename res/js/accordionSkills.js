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