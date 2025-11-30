// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on links
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Download CV Button
const downloadCvButton = document.getElementById('download-cv');
downloadCvButton?.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create a simple PDF download simulation
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Rochelle-Galpao-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert('Your CV download has started! Thank you for your interest.');
});

// Hire Me Button - Scroll to contact
const hireMeButton = document.getElementById('hire-me');
hireMeButton?.addEventListener('click', (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        window.scrollTo({
            top: contactSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }
});

// Resume Section Tabs
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

// Service Buttons
const serviceBtns = document.querySelectorAll('.service-btn');
serviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const service = btn.getAttribute('data-service');
        const serviceTitles = {
            'web-development': 'Web Development',
            'ui-ux-design': 'UI/UX Design',
            'graphic-design': 'Graphic Design',
            'seo': 'SEO Optimization'
        };
        
        const title = serviceTitles[service] || 'this service';
        alert(`Let me tell you more about my ${title} services! I'd be happy to discuss how I can help you with your project.`);
    });
});

// Service Links
const serviceLinks = document.querySelectorAll('.service-link');
serviceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceBox = link.closest('.services-box');
        const serviceTitle = serviceBox.querySelector('h3').textContent;
        alert(`You're interested in ${serviceTitle}! This is one of my specialties. Let's work together!`);
    });
});

// Contact Form
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
    
    // Simulate form submission
    console.log('Form submitted:', { name, email, subject });
    
    // Show success message
    alert(`Thank you ${name}! Your message has been sent successfully. I will get back to you at ${email} within 24 hours.`);
    
    // Reset form
    contactForm.reset();
});

// Active Navigation Highlighting
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

// Skill Bar Animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-level');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 300);
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Touch device detection
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Add touch-specific classes if needed
if (isTouchDevice()) {
    document.body.classList.add('touch-device');
}

// Prevent zoom on double tap (mobile)
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

console.log('Portfolio website loaded successfully!');
