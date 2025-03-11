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
                * */
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
    }
}