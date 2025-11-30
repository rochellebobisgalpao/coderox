// Smooth Scrolling for Navigation Links
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// Download CV Button
const downloadCvButton = document.getElementById('download-cv');
downloadCvButton?.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Your CV download will start shortly. Thank you for your interest!');
  // In a real application, you would trigger a file download
  // window.location.href = 'path-to-cv-file.pdf';
});

// Hire Me Button
const hireMeButton = document.getElementById('hire-me');
hireMeButton?.addEventListener('click', (e) => {
  e.preventDefault();
  // Scroll to contact section
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    window.scrollTo({
      top: contactSection.offsetTop - 50,
      behavior: 'smooth'
    });
  }
});

// Resume Button functionality
const resumeBtns = document.querySelectorAll('.resume-btn[data-target]');
const resumeDetails = document.querySelectorAll('.resume-detail');
resumeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and details
    resumeBtns.forEach(b => b.classList.remove('active'));
    resumeDetails.forEach(detail => detail.classList.remove('active'));
    
    // Activate clicked button
    btn.classList.add('active');
    
    // Activate corresponding detail
    const targetId = btn.getAttribute('data-target');
    const targetDetail = document.getElementById(targetId);
    if (targetDetail) {
      targetDetail.classList.add('active');
    }
  });
});

// Service Links functionality
const serviceLinks = document.querySelectorAll('.service-link');
serviceLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const serviceBox = link.closest('.services-box');
    const serviceTitle = serviceBox.querySelector('h3').textContent;
    alert(`You're interested in ${serviceTitle}! Let's discuss how I can help you with this service.`);
  });
});

// Service Buttons functionality
const serviceBtns = document.querySelectorAll('.service-btn');
serviceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const serviceBox = btn.closest('.services-box');
    const serviceTitle = serviceBox.querySelector('h3').textContent;
    alert(`Let me tell you more about my ${serviceTitle} services!`);
  });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  
  // Simulate form submission
  alert(`Thank you ${name}! Your message has been sent successfully. I will get back to you at ${email} soon.`);
  
  // Reset form
  contactForm.reset();
});

// Social Media Links
const socialLinks = document.querySelectorAll('.sci a');
socialLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Links already have target="_blank" so they will open in new tab
    console.log(`Opening: ${link.href}`);
  });
});

// Active navigation highlighting on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
