(function () {
    emailjs.init({
      publicKey: "_OphcjqnO7DjTSGmh", // Replace with your actual public key
    });
  
    /*==================== VALIDATION FORM ====================*/
    (function () {
      "use strict";
  
      // Defining types for form elements
      const form = document.getElementById("form") as HTMLFormElement;
      const emailTOValidation = document.getElementById("email_from") as HTMLInputElement;
      const nameProjectValidation = document.getElementById("name_person") as HTMLInputElement;
      const descriptionMessageValidation = document.getElementById("description_message") as HTMLTextAreaElement;
      const mailData = document.querySelector(".mail-data") as HTMLElement;
  
      // Clear initial mail data
      mailData.innerHTML = "";
  
      // Show input error message
      const showError = (input: HTMLInputElement | HTMLTextAreaElement, message: string): void => {
        const formControl = input.parentElement as HTMLElement;
        formControl.className = "contact__content error";
        formControl.querySelector("small")!.innerText = message;
      };
  
      // Show input success style
      const showSuccess = (input: HTMLInputElement | HTMLTextAreaElement): void => {
        const formControl = input.parentElement as HTMLElement;
        formControl.className = "contact__content success";
      };
  
      // Validate email
      const checkEmail = (input: HTMLInputElement): boolean => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (re.test(input.value.trim())) {
          showSuccess(input);
          return true;
        } else {
          showError(input, "Email is not valid");
          return false;
        }
      };
  
      // Validate required fields
      const checkRequired = (input: HTMLInputElement | HTMLTextAreaElement): boolean => {
        if (input.value.trim() === "") {
          showError(input, `${getFieldName(input)} is required`);
          return false;
        } else {
          showSuccess(input);
          return true;
        }
      };
  
      // Check input length
      const checkLength = (input: HTMLInputElement | HTMLTextAreaElement, min: number, max: number): boolean => {
        const length = input.value.length;
        if (length < min) {
          showError(input, `${getFieldName(input)} must be at least ${min} characters`);
          return false;
        } else if (length > max) {
          showError(input, `${getFieldName(input)} must be less than ${max} characters`);
          return false;
        } else {
          showSuccess(input);
          return true;
        }
      };
  
      // Get input field name from id
      const getFieldName = (input: HTMLInputElement | HTMLTextAreaElement): string => {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
      };
  
      // Handle form submission
      form.addEventListener("submit", async function (e: Event): Promise<void> {
        e.preventDefault();
  
        // Validate form fields
        const isValidEmail = checkEmail(emailTOValidation);
        const isValidName = checkRequired(nameProjectValidation);
        const isValidMessage = checkRequired(descriptionMessageValidation);
  
        if (isValidEmail && isValidName && isValidMessage) {
          const params = {
            name: nameProjectValidation.value,
            email: emailTOValidation.value,
            message: descriptionMessageValidation.value,
          };
  
          const serviceID = "service_chnwan4";
          const templateID = "template_dwcyl2e";
  
          try {
            const res = await emailjs.send(serviceID, templateID, params);
  
            if (res.status === 200) {
              mailData.innerHTML = `
                <div class="success-msg">
                  <i class="uil uil-comment-verify"></i>
                  The email was sent successfully
                </div>`;
  
              setTimeout(() => mailData.innerHTML = '', 5000);
            } else {
              showErrorMessage("Error sending an email!");
            }
          } catch (err) {
            console.error(err);
            showErrorMessage("Error sending an email!");
          }
        } else {
          showErrorMessage("Check the information entered carefully");
        }
      });
  
      // Display error message in the UI
      const showErrorMessage = (message: string): void => {
        mailData.innerHTML = `
          <div class="error-msg">
            <i class="fa fa-times-circle"></i>
            ${message}
          </div>`;
  
        setTimeout(() => mailData.innerHTML = '', 5000);
      };
    }).call(this);
  })();
  