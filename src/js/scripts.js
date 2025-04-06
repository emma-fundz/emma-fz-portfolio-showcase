
// Initialize AOS Animation Library
AOS.init({
  duration: 1000,
  once: true
});

// Animate skill bars when in viewport
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
  });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }

    // Close mobile menu after clicking a link
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  });
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success message (in a real scenario, you would send the form data to a server)
    const formElements = contactForm.elements;
    for (let i = 0; i < formElements.length; i++) {
      if (formElements[i].type !== 'submit') {
        formElements[i].value = '';
      }
    }
    
    // Create and show success alert
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success mt-3';
    alertDiv.textContent = 'Your message has been sent successfully!';
    contactForm.appendChild(alertDiv);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  });
}

// Initialize skill bar animation when the skills section is in viewport
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(animateSkillBars, 300);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

if (skillsSection) {
  observer.observe(skillsSection);
}

// Testimonial carousel custom configuration
const testimonialCarousel = document.getElementById('testimonialCarousel');
if (testimonialCarousel) {
  const carousel = new bootstrap.Carousel(testimonialCarousel, {
    interval: 5000,
    wrap: true
  });
}

// Portfolio item hover effect
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const overlay = item.querySelector('.portfolio-overlay');
    if (overlay) {
      overlay.style.opacity = '1';
    }
  });
  
  item.addEventListener('mouseleave', () => {
    const overlay = item.querySelector('.portfolio-overlay');
    if (overlay) {
      overlay.style.opacity = '0';
    }
  });
});

// Typing effect for hero section (on page load)
document.addEventListener('DOMContentLoaded', function() {
  // Add any additional initialization code here
  console.log('Portfolio website loaded successfully');
});
