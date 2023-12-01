// JS PARA EL CUADRO DE SEND MESSAGGE EN HOMEPAGE
document.getElementById('formContainer').addEventListener('click', function(event) {
    // Evita que el clic se propague al documento y active el evento exterior
    event.stopPropagation();
    
    var formContainer = this;

    // Mueve el formulario hacia la izquierda
    formContainer.style.left = '85%';
});

// Cierra el formulario si se hace clic en cualquier parte del documento
document.addEventListener('click', function() {
    var formContainer = document.getElementById('formContainer');
    
    // Mueve el formulario fuera de la vista
    formContainer.style.left = '100%';
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}