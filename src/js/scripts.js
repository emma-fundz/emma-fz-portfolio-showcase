
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    once: true, 
    offset: 100
  });
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll(); // Initialize on page load
  
  // Add active class to nav links while scrolling
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function handleNavHighlight() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', handleNavHighlight);
  window.addEventListener('load', handleNavHighlight);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      
      // Close the mobile menu
      if (document.querySelector('.navbar-collapse').classList.contains('show')) {
        document.querySelector('.navbar-toggler').click();
      }
    });
  });
  
  // Animate skill bars when in viewport
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (barPosition < screenPosition) {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      }
    });
  }
  
  window.addEventListener('scroll', animateSkillBars);
  window.addEventListener('load', animateSkillBars);
  
  // Portfolio filtering
  const filterButtons = document.querySelectorAll('.btn-filter');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 200);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 500);
        }
      });
    });
  });
  
  // Contact form validation and submission to WhatsApp
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value || 'Contact from Portfolio';
      const message = document.getElementById('message').value;
      
      // Simple validation
      let isValid = true;
      
      if (!name.trim()) {
        document.getElementById('name').classList.add('is-invalid');
        isValid = false;
      } else {
        document.getElementById('name').classList.remove('is-invalid');
      }
      
      if (!email.trim() || !isValidEmail(email)) {
        document.getElementById('email').classList.add('is-invalid');
        isValid = false;
      } else {
        document.getElementById('email').classList.remove('is-invalid');
      }
      
      if (!message.trim()) {
        document.getElementById('message').classList.add('is-invalid');
        isValid = false;
      } else {
        document.getElementById('message').classList.remove('is-invalid');
      }
      
      if (isValid) {
        // Create WhatsApp message
        const whatsappMessage = `Hello Emmanuel, my name is ${name}. 
Email: ${email} 
Subject: ${subject} 
Message: ${message}`;
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Create WhatsApp URL - using the correct number format
        const whatsappURL = `https://wa.me/9046779204?text=${encodedMessage}`;
        
        // Create and show success message
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success mt-3';
        successAlert.textContent = 'Message sent successfully! Redirecting to WhatsApp...';
        contactForm.appendChild(successAlert);
        
        // Reset form
        contactForm.reset();
        
        // Open WhatsApp in a new window
        setTimeout(() => {
          window.open(whatsappURL, '_blank');
          
          // Remove success message after 5 seconds
          setTimeout(() => {
            successAlert.remove();
          }, 5000);
        }, 1500);
      }
    });
  }
  
  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // TypeWriter effect for hero section (optional)
  function typeWriter(element, text, speed, delay = 0) {
    setTimeout(() => {
      let i = 0;
      element.textContent = '';
      
      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      
      type();
    }, delay);
  }
  
  // Apply typing effect to elements with 'typing-effect' class
  const typingElements = document.querySelectorAll('.typing-effect');
  
  typingElements.forEach(element => {
    const originalText = element.textContent;
    const speed = parseInt(element.getAttribute('data-speed')) || 100;
    const delay = parseInt(element.getAttribute('data-delay')) || 0;
    
    typeWriter(element, originalText, speed, delay);
  });
  
  // Tooltip initialization for Bootstrap
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Handle testimonial carousel
  const testimonialCarousel = document.getElementById('testimonialCarousel');
  if (testimonialCarousel) {
    new bootstrap.Carousel(testimonialCarousel, {
      interval: 5000,
      touch: true
    });
  }
});
