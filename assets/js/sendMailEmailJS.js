function sendMail() {
    
    var params = {
      name: document.getElementById("name_person_sec").value,
      email: document.getElementById("email_from_sec").value,
      message: document.getElementById("description_message_sec").value,
    };
  
    const serviceID = "service_chnwan4";
    const templateID = "template_dwcyl2e";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name_person_sec").value = "";
          document.getElementById("email_from_sec").value = "";
          document.getElementById("description_message_sec").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }