
(function(){
    emailjs.init({
        publicKey: "_OphcjqnO7DjTSGmh",
    });
})(); 

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

    //show success color
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
            showError(input,'Email is not valid');
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
        
                  if (res.status === 200) {
      
       mailData.innerHTML = `<div class="success-msg">
       <i class="uil uil-comment-verify"></i>
       The email was sent successfully
       </div>` + mailData.innerHTML;
      
        //console.log(res);

       setTimeout(function() {
        mailData.remove();
    }, 5000);
       
                    }
                  else{
                      
                    mailData.innerHTML = '<div class="error-msg">\n' +
                    '                    <i class="fa fa-times-circle"></i>\n' +
                    '                    Error sending an email!<br>\n' +
                    '                </div>' + mailData.innerHTML;

                    setTimeout(function() {
                        mailData.remove();
                    }, 5000);
      
      
                  }
              })
              .catch(err=>console.log(err));
          
        }else{
            console.log("form is not valid");
            mailData.innerHTML = '';
            mailData.innerHTML = '<div class="error-msg">\n' +
            '                    <i class="fa fa-times-circle"></i>\n' +
            '                    Check the information entered carefully' +
            '                </div>' + mailData.innerHTML;
            setTimeout(function() {
                
                mailData.remove();
                
            }, 5000);
            
        }
    });
}).call(this);


/*==================== SEND MAIL OLD CODE ====================*/
/*

const emailTO = document.querySelector('.email_to'),
    emailFrom = document.querySelector('.email_from'),
    nameProject = document.querySelector('.name_project'),
    descriptionMessage = document.querySelector('.description_message'),
    submitButton = document.querySelector('.submit'),
    mailData = document.querySelector('.mail-data')

spaceInMessage = '  ';
mailData.innerHTML = '';

submitButton.onclick = () => {

    if (emailTO.value.length === 0 || nameProject.value.length === 0 || descriptionMessage.value.length === 0 || emailFrom.value.length === 0 )
        submitButton.type = 'submit';
    else {
        submitButton.type = 'button';

        fetch('https://movers-san-francisco.com/email_sender.php', {
            method:   'POST',
            'Accept': 'application/json',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body:     'email_message=' + JSON.stringify({
                'mail_to': emailTO.value,
                'mail_subject': nameProject.value,
                'mail_message': descriptionMessage.value + spaceInMessage + emailFrom.value
                //'mail_message': emailsend.value
            })
        }).then(response => response.json()).then(data => {

            if (data.result === 'success') {
                /*
                * hiddenNotification function
                * *
                function hiddenNotification()
                {
                    mailData.innerHTML="";
                }
                mailData.innerHTML = `<div class="success-msg">
                                        <i class="uil uil-comment-verify"></i>
                                        Email was successfully sent to ${data.email_to}.
                                      </div>
                                      <br>` + mailData.innerHTML;
                console.log(data);

                /*Make the message disappear 4 seconds after displaying it*
                window.setTimeout(hiddenNotification, 4000);
            }
            else{
                mailData.innerHTML = '<div class="error-msg">\n' +
                    '                    <i class="fa fa-times-circle"></i>\n' +
                    '                    Error sending an email!<br>.\n' +
                    '                </div>' + mailData.innerHTML;
            }
        })
    }
}
*/