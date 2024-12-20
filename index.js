const nombre = prompt("Cómo te llamas?")
alert("Hola " + nombre + "! Bienvenid@ a mi primera web!")
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.tarjeta a');
    const spans = document.querySelectorAll('.close');
  
    btns.forEach((btn, index) => {
      btn.addEventListener('click', function(event) {
        event.preventDefault();
        modals[index].style.display = 'block';
      });
    });
  
    spans.forEach((span, index) => {
      span.addEventListener('click', function() {
        modals[index].style.display = 'none';
      });
    });
  
    window.addEventListener('click', function(event) {
      modals.forEach((modal) => {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
