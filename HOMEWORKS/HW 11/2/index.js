document.addEventListener("DOMContentLoaded", () => {

  const images = ["img1.png","img2.png" ,"img3.png", "img4.jpg", "img5.avif","img6.jpg", "img7.jpg" ];

  const randomIndex = Math.floor(Math.random() * images.length);
  
  const randomImage = images[randomIndex];
  document.getElementById("randomImage").src = `images/${randomImage}`;
});