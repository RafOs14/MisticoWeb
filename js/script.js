//EmailJs integration

const btn = document.getElementById('button');
const formulario = document.getElementById('form');
const formfooter = document.getElementById('formfooter');

form.addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'service_p68d7gy';
   const templateID = 'template_m7gikbn';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {    
      Toastify({
        text: "Gracias por suscribirte",
        duration: 3000,
        gravity: "bottom",
        position: 'right',
        style: {
          background: "linear-gradient(to right, #fcaae3, #9181e5)"        
        }
      }).showToast();
      form.reset();
  }, (err) => {    
      Toastify({
        text: "Error al suscribirte",
        duration: 3000,
        gravity: "bottom",
        position: 'right',
        style: {
          background: "#ff0000"
        }          
      }).showToast();
  });
});

formfooter.addEventListener('submit', function(event) {
  event.preventDefault();

  const serviceID = 'service_p68d7gy';
  const templateID = 'template_m7gikbn';

  emailjs.sendForm(serviceID, templateID, this)
  .then(() => {     
      Toastify({
        text: "Gracias por suscribirte",
        duration: 3000,
        gravity: "bottom",
        position: 'right',
        style: {
          background: "linear-gradient(to right, #fcaae3, #9181e5)"        
        }
      }).showToast();
      formfooter.reset();
  }, (err) => {    
      Toastify({
        text: "Error al suscribirte",
        duration: 3000,
        gravity: "bottom",
        position: 'right',
        style: {
          background: "#ff0000"
        }          
      }).showToast();
  });
});


//EmailJS










