// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MOBILE MENU TOGGLE ==========
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active') && 
                !nav.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        
        // Close mobile menu when clicking on links
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    // ========== SMOOTH SCROLLING FOR NAVIGATION LINKS ==========
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== RESUME SECTION TABS - FIXED! ==========
    const resumeBtns = document.querySelectorAll('.resume-btn');
    const resumeDetails = document.querySelectorAll('.resume-detail');
    
    console.log('Resume buttons found:', resumeBtns.length);
    console.log('Resume details found:', resumeDetails.length);
    
    // Function to switch resume tabs
    function switchResumeTab(targetId) {
        // Remove active class from all buttons
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Remove active class from all details
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        
        // Add active class to clicked button
        const activeBtn = Array.from(resumeBtns).find(btn => 
            btn.getAttribute('data-target') === targetId
        );
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        // Add active class to corresponding detail
        const activeDetail = document.getElementById(targetId);
        if (activeDetail) {
            activeDetail.classList.add('active');
        }
    }
    
    // Add click event to each resume button
    resumeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            console.log('Button clicked:', targetId);
            
            if (targetId) {
                switchResumeTab(targetId);
            }
        });
    });
    
    // ========== DOWNLOAD CV BUTTON ==========
    const downloadCvButton = document.getElementById('download-cv');
    if (downloadCvButton) {
        downloadCvButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create CV content
            const cvContent = `
                ROCHELLE B GALPAO
                =================
                
                CONTACT INFORMATION
                -------------------
                Email: rochellebobisgalpao@gmail.com
                Phone: (+63) 9922349306
                Location: Urbiztondo, Pangasinan
                
                EDUCATION
                ---------
                Pangasinan State University - San Carlos Campus
                Bachelor of Science in Information Technology
                Major in Web and Mobile Application
                2024 - Present
                
                Real National High School
                Senior High School
                2019 - 2021
                
                SKILLS
                ------
                • HTML5 & CSS3 - 90%
                • JavaScript - 80%
                • React.js - 75%
                • Responsive Design - 85%
                • Team Collaboration
                • Problem Solving
                • Communication
                
                EXPERIENCE
                ----------
                Freelance Web Developer (2023 - Present)
                • Creating responsive websites for small businesses
                • Implementing modern web technologies
                
                Student Developer (2022 - 2023)
                • Developed web applications for academic projects
                • Collaborated on team-based development projects
            `;
            
            // Create blob and download
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Rochelle_Galpao_CV.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            // Show success message
            showNotification('CV download started! Thank you for your interest.', 'success');
        });
    }
    
    // ========== HIRE ME BUTTON ==========
    const hireMeButton = document.getElementById('hire-me');
    if (hireMeButton) {
        hireMeButton.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                window.scrollTo({
                    top: contactSection.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // ========== SERVICE BUTTONS ==========
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
            showNotification(`Let me tell you more about my ${title} services! I'd be happy to discuss how I can help you with your project.`, 'info');
        });
    });
    
    // ========== CONTACT FORM ==========
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('fullname')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const phone = document.getElementById('phone')?.value || '';
            const subject = document.getElementById('subject')?.value || '';
            const message = document.getElementById('message')?.value || '';
            
            // Validate form
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            console.log('Form submitted:', { name, email, phone, subject, message });
            
            // Show success message
            showNotification(`Thank you ${name}! Your message has been sent successfully. I will get back to you at ${email} within 24 hours.`, 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // ========== SKILL BAR ANIMATION ==========
    function animateSkillBars() {
        const skillLevels = document.querySelectorAll('.skill-level');
        
        skillLevels.forEach(level => {
            const width = level.getAttribute('data-width');
            if (width && level.style.width !== width + '%') {
                level.style.width = width + '%';
            }
        });
    }
    
    // Intersection Observer for skill bars
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // ========== ACTIVE NAVIGATION HIGHLIGHTING ==========
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav a');
        const headerHeight = document.querySelector('header').offsetHeight;
        
        let current = '';
        const scrollPosition = window.scrollY + headerHeight + 50;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('load', updateActiveNav);
    
    // ========== NOTIFICATION FUNCTION ==========
    function showNotification(message, type = 'info') {
        // Check if form message element exists in contact form
        let formMessage = document.getElementById('form-message');
        
        if (!formMessage) {
            // Create notification element if it doesn't exist
            formMessage = document.createElement('div');
            formMessage.id = 'form-message';
            formMessage.className = 'form-message';
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.appendChild(formMessage);
            } else {
                // If no contact form, use alert
                alert(message);
                return;
            }
        }
        
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.textContent = '';
            }, 300);
        }, 5000);
    }
    
    // ========== LOADING ANIMATION ==========
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        console.log('Portfolio website loaded successfully!');
        
        // Initialize skill bars if skills section is visible
        if (skillsSection && skillsSection.getBoundingClientRect().top < window.innerHeight) {
            animateSkillBars();
        }
    });
    
    // ========== TOUCH DEVICE DETECTION ==========
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
    
    if (isTouchDevice()) {
        document.body.classList.add('touch-device');
    }
    
    // ========== ADD CSS FOR NOTIFICATIONS ==========
    const style = document.createElement('style');
    style.textContent = `
        .form-message {
            margin-top: 1.5rem;
            padding: 1rem;
            border-radius: 1rem;
            font-size: 1.4rem;
            text-align: center;
            display: none;
            animation: slideIn 0.3s ease-out;
        }
        
        .form-message.success {
            display: block;
            background: rgba(124, 240, 61, 0.2);
            color: var(--main-color);
            border: 1px solid var(--main-color);
        }
        
        .form-message.error {
            display: block;
            background: rgba(255, 68, 68, 0.2);
            color: #ff4444;
            border: 1px solid #ff4444;
        }
        
        .form-message.info {
            display: block;
            background: rgba(33, 150, 243, 0.2);
            color: #2196f3;
            border: 1px solid #2196f3;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});
