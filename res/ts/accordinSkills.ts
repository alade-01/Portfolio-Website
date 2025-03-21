// Toggle the answer visibility and icon rotation
const toggleAnswer = (questionHeader: HTMLElement): void => {
    const answer = questionHeader.nextElementSibling as HTMLElement | null; // The answer div
    const icon = questionHeader.querySelector(".skills__arrow") as HTMLElement | null; // The icon inside the header
    
    // If there's no valid icon or answer, we exit early.
    if (!answer || !icon) return;

    // Hide all answers except the one clicked
    hideAllAnswers(questionHeader);
    
    // Toggle the icon rotation (if applicable)
    icon.classList.toggle("rotate-icon");
    
    // Toggle the visibility of the answer
    answer.classList.toggle("hide");
};

// Hide all answers except the one clicked
const hideAllAnswers = (question: HTMLElement): void => {
    const allQuestionHeaders = document.querySelectorAll(".skills__header");

    allQuestionHeaders.forEach((header) => {
        const answer = header.nextElementSibling as HTMLElement | null; // The answer div
        const icon = header.querySelector(".skills__arrow") as HTMLElement | null; // The icon inside the header

        // If there's no valid answer or icon, we skip this iteration
        if (!answer || !icon || header === question) return;

        // Hide the answer and rotate the icon back
        answer.classList.add("hide");
        icon.classList.remove("rotate-icon");
    });
};
