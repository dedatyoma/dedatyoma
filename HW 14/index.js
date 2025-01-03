document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  let slideIndex = 0;

  const showSlides = (index) => {
    slideIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.style.display = i === slideIndex ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === slideIndex);
    });
    prevButton.style.display = slideIndex === 0 ? 'none' : 'block';
    nextButton.style.display = slideIndex === slides.length - 1 ? 'none' : 'block';
  };

  prevButton.addEventListener('click', () => showSlides(slideIndex - 1));
  nextButton.addEventListener('click', () => showSlides(slideIndex + 1));
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlides(i));
  });
  showSlides(slideIndex);
});
