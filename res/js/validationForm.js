(function () {
    emailjs.init({
      publicKey: "_OphcjqnO7DjTSGmh",
    });
  })();
  
  /*==================== VALIDATION FORM ====================*/
  (function () {
    "use strict";
  
    const form = document.getElementById("form"),
      emailTOValidation = document.getElementById("email_from"),
      nameProjectValidation = document.getElementById("name_person"),
      descriptionMessageValidation = document.getElementById("description_message"),
      mailData = document.querySelector(".mail-data");
  
    // Clear initial mail data
    mailData.innerHTML = "";
  
    // Show input error message
    const showError = (input, message) => {
      const formControl = input.parentElement;
      formControl.className = "contact__content error";
      formControl.querySelector("small").innerText = message;
    };
  
    // Show input success style
    const showSuccess = (input) => {
      const formControl = input.parentElement;
      formControl.className = "contact__content success";
    };
  
    // Validate email
    const checkEmail = (input) => {
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
    const checkRequired = (input) => {
      if (input.value.trim() === "") {
        showError(input, `${getFieldName(input)} is required`);
        return false;
      } else {
        showSuccess(input);
        return true;
      }
    };
  
    // Check input length
    const checkLength = (input, min, max) => {
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
    const getFieldName = (input) => {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    };
  
    // Handle form submission
    form.addEventListener("submit", async function (e) {
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
    const showErrorMessage = (message) => {
      mailData.innerHTML = `
        <div class="error-msg">
          <i class="fa fa-times-circle"></i>
          ${message}
        </div>`;
  
      setTimeout(() => mailData.innerHTML = '', 5000);
    };
  }).call(this);
  