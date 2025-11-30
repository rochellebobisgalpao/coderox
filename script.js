@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
}

:root {
    --bg-color: #1f242d;
    --second-bg-color: #323946;
    --main-color: #7cf03d;
    --white-color: #fff;
    --text-color: #b0b0b0;
}

html {
    scroll-behavior: smooth;
    font-size: 62.5%; /* 10px = 1rem */
}

body {
    color: var(--white-color);
    background: var(--bg-color);
    line-height: 1.6;
}

/* Header & Navigation */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 5%;
    background: var(--bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.logo {
    font-size: 2.8rem;
    color: var(--white-color);
    font-weight: 700;
    user-select: none;
}

.nav {
    display: flex;
    align-items: center;
}

.nav a {
    font-size: 1.8rem;
    color: var(--white-color);
    font-weight: 500;
    margin-left: 3rem;
    transition: 0.3s;
    position: relative;
}

.nav a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: var(--main-color);
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.5s;
}

.nav a:hover::after,
.nav a.active::after {
    transform-origin: left;
    transform: scaleX(1);
}

.nav a:hover,
.nav a.active {
    color: var(--main-color);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 5px;
}

.menu-toggle span {
    width: 25px;
    height: 3px;
    background: var(--white-color);
    margin: 3px 0;
    transition: 0.3s;
    border-radius: 2px;
}

/* Sections */
section {
    min-height: 100vh;
    padding: 10rem 5% 5rem;
    width: 100%;
}

/* Home Section */
.home {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    min-height: 100vh;
}

.home-detail h1 {
    font-size: clamp(3rem, 5vw, 5.5rem);
    font-weight: 700;
    line-height: 1.2;
}

.home-detail h2 {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    margin: 1rem 0;
    color: var(--main-color);
}

.home-detail p {
    font-size: 1.8rem;
    margin: 2rem 0 3rem;
    color: var(--text-color);
    max-width: 600px;
}

.btn-sci {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.button {
    display: inline-block;
    padding: 1.2rem 3rem;
    background: var(--main-color);
    border: 2px solid var(--main-color);
    border-radius: 4rem;
    font-size: 1.8rem;
    color: var(--bg-color);
    font-weight: 600;
    transition: all 0.3s ease;
    text-align: center;
    cursor: pointer;
}

.button:hover {
    background: transparent;
    color: var(--main-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(124, 240, 61, 0.3);
}

.button.secondary {
    background: transparent;
    color: var(--main-color);
}

.button.secondary:hover {
    background: var(--main-color);
    color: var(--bg-color);
}

.sci {
    display: flex;
    gap: 1.5rem;
}

.sci a {
    display: inline-flex;
    padding: 1rem;
    border: 2px solid var(--main-color);
    border-radius: 50%;
    font-size: 2.2rem;
    color: var(--main-color);
    transition: all 0.3s ease;
}

.sci a:hover {
    background: var(--main-color);
    color: var(--bg-color);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(124, 240, 61, 0.4);
}

.image-img {
    flex-shrink: 0;
}

.image-img .img-box {
    width: 35vw;
    height: 35vw;
    max-width: 400px;
    max-height: 400px;
    min-width: 250px;
    min-height: 250px;
    border-radius: 50%;
    padding: 0.8rem;
    border: 3px solid var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.image-img .img-box .img-item {
    width: 100%;
    height: 100%;
    background: var(--second-bg-color);
    border-radius: 50%;
    overflow: hidden;
}

.image-img .img-box .img-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Headings */
.heading {
    font-size: clamp(3.5rem, 6vw, 5rem);
    text-align: center;
    margin-bottom: 4rem;
}

.heading span {
    color: var(--main-color);
}

.sub-heading {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    margin-bottom: 2rem;
}

.sub-heading span {
    color: var(--main-color);
}

/* Services Section */
.services-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}

.services-box {
    padding: 3rem 2.5rem;
    background: var(--second-bg-color);
    border-radius: 2rem;
    transition: all 0.3s ease;
    text-align: center;
    border: 2px solid transparent;
}

.services-box:hover {
    border-color: var(--main-color);
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.services-box .icon {
    margin-bottom: 2rem;
}

.services-box .icon i:first-child {
    font-size: 5rem;
    color: var(--main-color);
    margin-bottom: 1.5rem;
}

.services-box .service-link {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    background: var(--main-color);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--bg-color);
    font-size: 2rem;
    transition: 0.3s;
}

.services-box h3 {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
    color: var(--white-color);
}

.services-box p {
    font-size: 1.6rem;
    color: var(--text-color);
    margin-bottom: 2rem;
    line-height: 1.7;
}

.service-btn {
    padding: 1rem 2.5rem;
    background: var(--main-color);
    border: 2px solid var(--main-color);
    border-radius: 3rem;
    color: var(--bg-color);
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.service-btn:hover {
    background: transparent;
    color: var(--main-color);
    transform: translateY(-2px);
}

/* Resume Section */
.resume-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
    align-items: start;
}

.resume-box h3 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    color: var(--white-color);
}

.resume-box .desc {
    font-size: 1.6rem;
    color: var(--text-color);
    margin-bottom: 3rem;
    line-height: 1.7;
}

.resume-buttons {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.resume-btn {
    padding: 1.5rem 2rem;
    background: var(--second-bg-color);
    border: 2px solid var(--second-bg-color);
    border-radius: 1rem;
    color: var(--white-color);
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
}

.resume-btn.active,
.resume-btn:hover {
    border-color: var(--main-color);
    color: var(--main-color);
    transform: translateX(10px);
}

.resume-content {
    min-height: 400px;
}

.resume-detail {
    display: none;
    animation: fadeIn 0.5s ease-in;
}

.resume-detail.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.experience-item,
.education-item {
    background: var(--second-bg-color);
    padding: 2rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    border-left: 4px solid var(--main-color);
}

.experience-item h5,
.education-item h5 {
    font-size: 2rem;
    color: var(--main-color);
    margin-bottom: 0.5rem;
}

.experience-item .date,
.education-item .date {
    font-size: 1.4rem;
    color: var(--text-color);
    margin-bottom: 1rem;
    font-style: italic;
}

.skills-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.skill-category h5 {
    font-size: 2rem;
    color: var(--main-color);
    margin-bottom: 2rem;
}

.skill-item {
    margin-bottom: 1.5rem;
}

.skill-item span {
    font-size: 1.6rem;
    color: var(--white-color);
    display: block;
    margin-bottom: 0.5rem;
}

.skill-bar {
    width: 100%;
    height: 8px;
    background: var(--bg-color);
    border-radius: 4px;
    overflow: hidden;
}

.skill-level {
    height: 100%;
    background: var(--main-color);
    border-radius: 4px;
    transition: width 1s ease-in-out;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.skill-tag {
    padding: 0.8rem 1.5rem;
    background: var(--main-color);
    color: var(--bg-color);
    border-radius: 2rem;
    font-size: 1.4rem;
    font-weight: 500;
}

.personal-info {
    margin-top: 2rem;
}

.info-item {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    padding: 1rem;
    background: var(--second-bg-color);
    border-radius: 0.5rem;
}

/* Contact Section */
.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
}

.contact-box h3 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    color: var(--white-color);
}

.contact-detail {
    display: flex;
    align-items: center;
    margin: 2.5rem 0;
    padding: 1.5rem;
    background: var(--second-bg-color);
    border-radius: 1rem;
    transition: 0.3s;
}

.contact-detail:hover {
    transform: translateX(10px);
    border-left: 4px solid var(--main-color);
}

.contact-detail i {
    font-size: 3rem;
    color: var(--main-color);
    margin-right: 2rem;
    min-width: 40px;
}

.contact-detail .detail p:first-child {
    color: var(--main-color);
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.contact-detail .detail p:last-child {
    font-size: 1.5rem;
    color: var(--text-color);
}

.contact-box form {
    background: var(--second-bg-color);
    padding: 3rem;
    border-radius: 2rem;
}

.field-box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.input-group {
    width: 100%;
}

.input-group.full-width {
    grid-column: 1 / -1;
}

.contact-box input,
.contact-box textarea {
    width: 100%;
    padding: 1.5rem 2rem;
    background: var(--bg-color);
    border: 2px solid transparent;
    border-radius: 1rem;
    font-size: 1.6rem;
    color: var(--white-color);
    transition: 0.3s;
}

.contact-box input:focus,
.contact-box textarea:focus {
    border-color: var(--main-color);
    outline: none;
    transform: translateY(-2px);
}

.contact-box textarea {
    height: 150px;
    resize: vertical;
    min-height: 120px;
}

.contact-box .btn {
    width: 100%;
    padding: 1.5rem;
    background: var(--main-color);
    border: none;
    border-radius: 1rem;
    color: var(--bg-color);
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
}

.contact-box .btn:hover {
    background: transparent;
    color: var(--main-color);
    border: 2px solid var(--main-color);
    transform: translateY(-3px);
}

/* Footer */
.footer {
    background: var(--second-bg-color);
    padding: 3rem 5%;
    text-align: center;
}

.footer-content p {
    font-size: 1.6rem;
    color: var(--text-color);
    margin-bottom: 2rem;
}

.footer-sci {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.footer-sci a {
    display: inline-flex;
    padding: 1rem;
    border: 2px solid var(--main-color);
    border-radius: 50%;
    font-size: 2rem;
    color: var(--main-color);
    transition: 0.3s;
}

.footer-sci a:hover {
    background: var(--main-color);
    color: var(--bg-color);
    transform: translateY(-3px);
}

/* ===== RESPONSIVE DESIGN ===== */

/* Tablets */
@media (max-width: 1024px) {
    .resume-container {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .skills-container {
        grid-template-columns: 1fr;
    }
    
    .resume-buttons {
        flex-direction: row;
        overflow-x: auto;
        padding-bottom: 1rem;
    }
    
    .resume-btn {
        white-space: nowrap;
        min-width: 150px;
        text-align: center;
    }
}

/* Mobile Devices */
@media (max-width: 768px) {
    html {
        font-size: 55%;
    }
    
    header {
        padding: 1.5rem 5%;
    }
    
    .menu-toggle {
        display: flex;
    }
    
    .nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background: var(--second-bg-color);
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 8rem 5%;
        transition: 0.5s;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
    }
    
    .nav.active {
        right: 0;
    }
    
    .nav a {
        margin: 2rem 0;
        font-size: 2.2rem;
        width: 100%;
        padding: 1rem 0;
    }
    
    .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .home {
        flex-direction: column-reverse;
        text-align: center;
        gap: 3rem;
        padding: 12rem 5% 5rem;
    }
    
    .home-detail .btn-sci {
        justify-content: center;
    }
    
    .image-img .img-box {
        width: 70vw;
        height: 70vw;
        max-width: 300px;
        max-height: 300px;
    }
    
    .services-container {
        grid-template-columns: 1fr;
    }
    
    .contact-container {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .resume-buttons {
        flex-direction: column;
    }
    
    .resume-btn {
        min-width: auto;
        text-align: left;
    }
    
    section {
        padding: 8rem 5% 3rem;
        min-height: auto;
    }
}

/* Small Mobile Devices */
@media (max-width: 480px) {
    html {
        font-size: 50%;
    }
    
    .home-detail .btn-sci {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    
    .sci {
        justify-content: center;
    }
    
    .image-img .img-box {
        width: 80vw;
        height: 80vw;
    }
    
    .services-box {
        padding: 2rem 1.5rem;
    }
    
    .contact-box form {
        padding: 2rem;
    }
    
    .contact-detail {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .contact-detail i {
        margin-right: 0;
        margin-bottom: 1rem;
    }
    
    .nav {
        width: 80%;
    }
}

/* Large Desktop */
@media (min-width: 1440px) {
    .container {
        max-width: 1400px;
        margin: 0 auto;
    }
}

/* Smooth scrolling for older browsers */
@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
    
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
