// Hero text animation (one time only)
gsap.from(".hero-text h1", { 
  duration: 1.2, 
  y: 50, 
  opacity: 0, 
  ease: "power3.out", 
  delay: 0.5 
});

gsap.from(".hero-text p", { 
  duration: 1, 
  y: 30, 
  opacity: 0, 
  ease: "power3.out", 
  delay: 1 
});

gsap.from(".btn btn-primary", { 
  duration: 1, 
  y: 30, 
  opacity: 0, 
  ease: "power3.out", 
  delay: 1.5
});

gsap.from(".hero-text ", { 
  duration: 1, 
  scale: 0.8, 
  opacity: 0, 
  ease: "power3.out", 
  delay: 1.5 
});

// Scroll animations for all sections
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: { 
      trigger: section, 
      start: "top 80%" 
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});

// 3D tilt effect on portfolio items on hover
document.querySelectorAll(".portfolio-item").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(card, { rotationY: x / 20, rotationX: -y / 20, duration: 0.3 });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.5 });
  });
});
