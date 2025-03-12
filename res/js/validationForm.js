
/*==================== VALIDATION FORM ====================*/
(function() {
    "use strict";
    const form  = document.getElementById('form'),
        emailTOValidation   = document.getElementById('email_from_sec'),
        nameProjectValidation = document.getElementById('name_person_sec'),
        descriptionMessageValidation = document.getElementById('description_message_sec');

    //Show input error messages
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'contact__content error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    //show success colour
    function showSucces(input) {
        const formControl = input.parentElement;
        formControl.className = 'contact__content success';
    }

    //check email is valid
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value.trim())) {
            showSucces(input)
        }else {
            showError(input,'Email is not invalid');
        }
    }

    //checkRequired fields
    function checkRequired(inputArr) {
        /*
        inputArr.forEach(function(input){
            if(input.value.trim() === ''){
                showError(input,`${getFieldName(input)} is required`)
            }else {
                showSucces(input);
            }
        });*/

        if(inputArr.value.trim() === ''){
            showError(inputArr,`${getFieldName(inputArr)} is required`)
        }else {
            showSucces(inputArr);
        }
    }


    //check input Length
    function checkLength(input, min ,max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        }else if(input.value.length > max) {
            showError(input, `${getFieldName(input)} must be les than ${max} characters`);
        }else {
            showSucces(input);
        }
    }

    // get FieldName
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    // check passwords match
    function checkPasswordMatch(input1, input2) {
        if(input1.value !== input2.value) {
            showError(input2, 'Passwords do not match');
        }
    }


    //Event Listeners
    form.addEventListener('submit',function(e) {
        e.preventDefault();

        //checkRequired([nameProjectValidation, emailFromValidation, emailTOValidation, descriptionMessageValidation]);
        checkRequired(nameProjectValidation);
        checkRequired(emailTOValidation);
        checkRequired(descriptionMessageValidation);
        checkLength(nameProjectValidation,8,50);
        //checkLength(password,6,25);
        checkEmail(emailTOValidation);
        //checkPasswordMatch(password, password2);
    });
}).call(this);