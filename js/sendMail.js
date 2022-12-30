function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        return true;

    return false;
}

function sendEmail() {
    var name = document.querySelector("#from_name");
    var email = document.querySelector("#from_email");
    var subject = document.querySelector("#subject");
    var message = document.querySelector("#message");

    if (name.value == "" || email.value == "" || subject.value == "" || message.value == "") {
        alert("Invalid details!");
        return false;
    } else if (!ValidateEmail(email.value)) {
        alert("You have entered an invalid email address!");
        return false;
    } else {
        return true;
    }
}

emailjs.init('_yghVmL7-zQ5xRihb');

document.getElementById('contact-form-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   if(!sendEmail())
    return;
   const serviceID = 'service_p5jcl85';
   const templateID = 'template_v47belp';
   var name = document.querySelector("#from_name");
   var email = document.querySelector("#from_email");
   var subject = document.querySelector("#subject");
   var message = document.querySelector("#message");
   emailjs.send(serviceID, templateID, {
    from_name: name.value,
    subject: subject.value,
    message: message.value,
    from_email:email.value
   })
    .then(() => {
      alert('Sent!');
    }, (err) => {
      alert(JSON.stringify(err));
    });

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
});