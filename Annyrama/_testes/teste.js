const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelector('.carousel-slides');
let currentSlide = 0;

carouselContainer.addEventListener('mousedown', (e) => {
  startDrag(e);
});

carouselContainer.addEventListener('mouseup', (e) => {
  endDrag(e);
});

carouselContainer.addEventListener('mousemove', (e) => {
  move(e);
});

let startX;
let isDragging = false;

function startDrag(e) {
  startX = e.clientX;
  isDragging = true;
  carouselContainer.classList.add('dragging');
}

function endDrag() {
  isDragging = false;
  carouselContainer.classList.remove('dragging');
  // Implemente a lógica para navegar entre slides quando o arrastar é interrompido
  // Exemplo:
  const distance = Math.abs(currentSlide - slidesPositions[Math.floor(Math.max(0, (e.clientX - startX) / 100))]);
  if(distance > 1) {
        // Navega para o próximo slide
        currentSlide += (e.clientX - startX) > 0 ? -1: 1;
        // Restringe o movimento para o limite de slides
        if(currentSlide < 0){
            currentSlide = 0;
        }
        if(currentSlide > slidesPositions.length -1){
            currentSlide = slidesPositions.length -1;
        }
  }
}

function move(e) {
  if (!isDragging) return;

  let x = e.clientX - startX;
  let translateValue = -(currentSlide * 100) + x * 100/100;
  carouselSlides.style.transform = `translateX(${translateValue}%)`;
}

// Calcula a posição de cada slide
const slidesPositions = Array.from({length: carouselSlides.children.length}).map((_, i) => {
  return i;
});