// Header Gallery Slider
document.addEventListener('DOMContentLoaded', function () {
  // Gallery Slider
  const slides = document.querySelectorAll('.gallery-slide');
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  // Change slide every 5 seconds
  if (slides.length > 1) {
    setInterval(showNextSlide, 5000);
  }

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        body.style.overflow = '';
      });
    });
  }

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    });
  });

  // Fade-in Animation on Scroll - Matching target (0.5s duration)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all section elements
  const sections = document.querySelectorAll('.content-section');
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Form Submission Handler (placeholder)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      // Here you would normally send the data to a server
      console.log('Form submitted:', data);

      // Show success message (you can customize this)
      alert('Thank you for your message! We will get back to you soon.');

      // Reset form
      contactForm.reset();
    });
  }

  // Add loading class to images
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('load', function () {
      this.style.opacity = '1';
    });

    // Set initial opacity
    if (!img.complete) {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.3s ease';
    }
  });

  // Parallax effect for header (optional)
  window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header-gallery');

    if (header && scrolled < window.innerHeight) {
      header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
});

// Preload images for gallery
function preloadImages() {
  const imagePaths = [
    '/images/header-1.jpg',
    '/images/header-2.jpg',
    '/images/header-3.jpg',
    '/images/header-4.jpg',
    '/images/header-5.jpg',
    '/images/header-6.jpg',
    '/images/header-7.jpg',
    '/images/header-8.jpg',
  ];

  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
  });
}

// Call preload when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', preloadImages);
} else {
  preloadImages();
}
