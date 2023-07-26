// email.js

(function () {
    emailjs.init('YOUR_USER_ID');
  })();
  
  function sendEmail(event) {
    event.preventDefault(); 
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target)
      .then(function(response) {
        console.log('L\'e-mail a été envoyé avec succès !', response);
        alert('L\'e-mail a été envoyé avec succès !');
        resetForm();
      }, function(error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
        alert('Erreur lors de l\'envoi de l\'e-mail : ' + error);
      });
  }
  
  function resetForm() {
    const form = document.getElementById('contact-form');
    form.reset();
  }
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    sendEmail(event);
  });
  