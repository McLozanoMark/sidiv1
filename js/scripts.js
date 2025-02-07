let currentIndex = 0;

function moveSlide(direction) {
  const imagesContainer = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  } else if (currentIndex >= totalImages) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  imagesContainer.style.transform = `translateX(${offset}%)`;
}


// Cambiar la imagen automáticamente cada 5 segundos
setInterval(function() {
    moveSlide(1); // Avanza una imagen cada 5 segundos
}, 5000);

