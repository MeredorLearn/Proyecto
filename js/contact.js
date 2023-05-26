const btn = document.getElementById('button');

formulario = document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_seq10ob';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Mensaje enviado!');
      
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));

    });
});