const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const total = images.length;
const radius = 300;
const step = 360 / total;

let currentAngle = 0;
let currentIndex = 0;
const rotationSpeed = 0.3; // السرعة
const pauseTime = 1200; // التوقف عند الأمام

function positionImages() {
  images.forEach((img, i) => {
    const angle = step * i + currentAngle;
    const rad = angle * (Math.PI / 180);
    const x = Math.sin(rad) * radius;
    const z = Math.cos(rad) * radius;

    img.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px)`;
    img.style.opacity = z > 0 ? 1 : 0.3;

    if (Math.abs((angle % 360) - 0) < step / 2) {
      img.style.transform += " scale(1.3)";
      img.style.opacity = 1;
    }
  });
}

function rotateCarousel() {
  currentAngle -= step;
  positionImages();
  setTimeout(() => {
    rotateCarousel();
  }, pauseTime);
}

positionImages();
setTimeout(rotateCarousel, pauseTime);


const services = document.querySelectorAll('.service-card');
const descBox = document.querySelector('#services .desc-box');
let currentIndex1 = 0;

function showService(index) {
  services.forEach((service, i) => {
    service.classList.toggle('active', i === index);
  });
  
  descBox.classList.remove('visible');
  setTimeout(() => {
    descBox.textContent = services[index].querySelector('p').textContent;
    descBox.classList.add('visible');
  }, 300);
}

function cycleServices() {
  showService(currentIndex);
  currentIndex = (currentIndex + 1) % services.length;
}

// بدء التكرار والتبديل كل 4 ثواني
cycleServices();
setInterval(cycleServices, 4000);

