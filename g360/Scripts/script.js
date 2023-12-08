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


// JS PARA EL COMPONENTE DE GALERIA

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

//JS PARA EL CUADRO DE CONDICIONES DE FOTOS
document.addEventListener('DOMContentLoaded', function () {
  const showConditionsLink = document.getElementById('showConditions');
  const conditionsPopup = document.getElementById('conditionsPopup');
  const closeConditionsBtn = document.getElementById('closeConditions');

  showConditionsLink.addEventListener('click', function (e) {
    e.preventDefault();
    conditionsPopup.style.display = 'block';
  });

  closeConditionsBtn.addEventListener('click', function () {
    conditionsPopup.style.display = 'none';
  });
});

//JS para las tarjetas de tour
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;
  let currentIndex = 0;

  function showCard(index) {
      cards.forEach(card => card.classList.remove('active', 'prev', 'next', 'hidden'));

      const prevIndex = (index - 1 + totalCards) % totalCards;
      const nextIndex = (index + 1) % totalCards;

      cards[prevIndex].classList.add('active', 'next');
      cards[index].classList.add('active');
      cards[nextIndex].classList.add('prev', 'hidden');
      
  }

  function showNext() {
      currentIndex = (currentIndex + 1) % totalCards;
      showCard(currentIndex);
  }

  function showPrev() {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      showCard(currentIndex);
  }

  const nextButton = document.getElementById('nextButton');
  const prevButton = document.getElementById('prevButton');

  nextButton.addEventListener('click', showNext);
  prevButton.addEventListener('click', showPrev);

  showCard(currentIndex);
});


