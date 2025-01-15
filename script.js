// Smooth Scrolling for Navigation Links
const menuLinks = document.querySelectorAll('.menu-link'); // Ensure proper selection of menu links
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,  // Adjust scroll position
        behavior: 'smooth'
      });
    }
  });
});

// Login and Registration Popup
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const closeIcon = document.querySelector('.icon-close');
const loginPopup = document.querySelector('.btnlogin-popup');

// Open login popup
loginPopup?.addEventListener('click', () => {
  wrapper?.classList.add('active-popup');
});

// Close popup
closeIcon?.addEventListener('click', (event) => {
  event.preventDefault();
  wrapper?.classList.remove('active-popup');
});

// Switch to registration form
registerLink?.addEventListener('click', (event) => {
  event.preventDefault();
  wrapper?.classList.add('active');
});

// Switch to login form
loginLink?.addEventListener('click', () => {
  wrapper?.classList.remove('active');
});

// Form Validation
const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');

// Login Form Validation with Navigation to resume.html
loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.querySelector('input[type="email"]');
  const password = loginForm.querySelector('input[type="password"]');

  if (!email.value || !password.value) {
    alert('Please fill out all fields.');
  } else {
    alert('Login successful!');
    window.location.href = 'resume.html'; // Redirect to resume.html
  }
});

// Registration Form Validation
registerForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = registerForm.querySelector('input[type="text"]');
  const email = registerForm.querySelector('input[type="email"]');
  const password = registerForm.querySelector('input[type="password"]');
  const termsCheckbox = registerForm.querySelector('input[type="checkbox"]');

  if (!username.value || !email.value || !password.value) {
    alert('Please fill out all fields.');
  } else if (!termsCheckbox.checked) {
    alert('You must agree to the terms and conditions.');
  } else {
    alert('Registration successful!');
    window.location.href = 'resume.html'; // Redirect to resume.html after registration
  }
});

// Additional Button or Link Navigation to resume.html
const goToResumeButton = document.getElementById('goto-resume');
goToResumeButton?.addEventListener('click', () => {
  window.location.href = 'resume.html';
});

// Resume Button functionality
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and details
    resumeBtns.forEach(b => b.classList.remove('active'));
    resumeDetails.forEach(detail => detail.classList.remove('active'));
    // Activate clicked button and corresponding detail
    btn.classList.add('active');
    resumeDetails[idx]?.classList.add('active');
  });
});

// Login Validation Function
function validateLogin() {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    // Check if inputs exist
    if (!usernameField || !passwordField) {
        alert('Username or password input is missing!');
        return false;
    }
    const username = usernameField.value.trim();
    const password = passwordField.value.trim();
    // Simple hardcoded username and password
    if (username === 'user' && password === 'password123') {
        alert('Login successful!');
        window.location.href = "resume.html"; // Redirect to another page
        return false; // Prevent form submission
    } else {
        alert('Invalid username or password');
        return false; // Prevent form submission
    }
}
