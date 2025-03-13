
/*==================== VALIDATION FORM ====================*/
(function() {
    "use strict";
    const form  = document.getElementById('form'),
        emailTOValidation   = document.getElementById('email_from'),
        nameProjectValidation = document.getElementById('name_person'),
        descriptionMessageValidation = document.getElementById('description_message'),
        mailData = document.querySelector('.mail-data')

        mailData.innerHTML = '';

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
            return true;
        }else {
            showError(input,'Email is not invalid');
            return false;
        }
    }

    //checkRequired fields
    function checkRequired(inputArr) {
        if(inputArr.value.trim() === ''){
            showError(inputArr,`${getFieldName(inputArr)} is required`);
            return false;
        }else {
            showSucces(inputArr);
            return true;
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

    //Event Listeners
    form.addEventListener('submit',function(e) {
        e.preventDefault();
        console.log(checkRequired(nameProjectValidation));
        console.log(checkRequired(emailTOValidation));
        console.log(checkRequired(descriptionMessageValidation));
        //checkLength(nameProjectValidation,8,50);
        checkEmail(emailTOValidation);
        
        if(checkRequired(nameProjectValidation) == true && checkRequired(emailTOValidation)
            && checkRequired(descriptionMessageValidation) && 
                checkEmail(emailTOValidation))
        {

            //console.log(nameProject);
            var params = {
              name: document.getElementById("name_person").value,
              email: document.getElementById("email_from").value,
              message: document.getElementById("description_message").value,
            };
      
            const serviceID = "service_chnwan4";
            const templateID = "template_dwcyl2e";
          
              emailjs.send(serviceID, templateID, params)
              .then(res=>
                {
                  console.log(res.status);
        
                  if (res.status === 200) {
      
       /*
                      * hiddenNotification function
                      * */
       function hiddenNotification()
       {
        mailData.innerHTML = `<div class="success-msg">
        <i class="uil uil-comment-verify"></i>
        Email was successfully sent to 
      </div>
      <br>` + mailData.innerHTML;
       }
      
       console.log(res);
      
       /*Make the message disappear 4 seconds after displaying it*/
       window.setTimeout(hiddenNotification, 4000);
      
       
                    }
                  else{
                      
                    mailData.innerHTML = '<div class="error-msg">\n' +
                    '                    <i class="fa fa-times-circle"></i>\n' +
                    '                    Error sending an email!<br>.\n' +
                    '                </div>' + mailData.innerHTML;
      
      
                  }
              })
              .catch(err=>console.log(err));
          
        }else{
            console.log("form is not valid");
        }
    });
}).call(this);