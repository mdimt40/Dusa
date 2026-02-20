// Navbar HTML
const navbarHTML = `<nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img src="images/logo.png" alt="Logo" onerror="this.src='https://via.placeholder.com/40/FF6B00/FFFFFF?text=D'">
      DUSA
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style="border: none; outline: none;">
      <i class="fas fa-bars-staggered" style="color: white; font-size: 1.8rem;"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html#home">Home</a></li>
         <li class="nav-item"><a class="nav-link" href="https://forms.gle/Lm8UUss4WjfLGPSy6">Join Dusa</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#standing">Standing Committee</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#leadership">Leadership</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#activities">Activities</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#events">Events</a></li>
        <li class="nav-item"><a class="nav-link" href="index.html#executive">Executive</a></li>
        <li class="nav-item"><a class="nav-link" href="donor.html"><i class="fas fa-droplet"></i> Blood Donor</a></li>
      </ul>
    </div>
  </div>
</nav>`;

// Footer HTML
const footerHTML = `<footer>
  <div class="container">
    <div class="row border-bottom border-light border-opacity-10 pb-4 mb-4">
      <div class="col-lg-6 mb-4">
        <h5 class="fs-2 mb-3 d-flex align-items-center gap-2">
          <img src="images/logo.png" alt="" onerror="this.src='https://via.placeholder.com/40/FF6B00/FFFFFF?text=D'" style="height: 40px; border-radius: 8px;"> DUSA
        </h5>
        <p class="mb-4 pe-lg-4">Empowering Dumki students with resources, networking, growth, and community for academic and personal success.</p>
      </div>
      <div class="col-lg-6 text-lg-end">
        <h5>Quick Links</h5>
        <ul class="list-unstyled text-white">
          <li><a href="index.html#home" class="footer-link">Home</a></li>
          <li><a href="donor.html" class="footer-link">Find Blood Donor</a></li>
          <li><a href="index.html#events" class="footer-link">Events</a></li>
          <li><a href="index.html#contact" class="footer-link">Contact</a></li>
        </ul>
      </div>
    </div>
    
    <div class="row border-bottom border-light border-opacity-10 pb-4 mb-4">
      <div class="col-lg-3 mb-5">
        <h5>Pages</h5>
        <ul class="list-unstyled text-white">
          <li><a href="index.html" class="footer-link">Home</a></li>
          <li><a href="index.html#activities" class="footer-link">Activities</a></li>
          <li><a href="donor.html" class="footer-link">Blood Bank</a></li>
        </ul>
      </div>
      
      <div class="col-lg-3 mb-5">
        <h5>About</h5>
        <ul class="list-unstyled text-white">
          <li><a href="index.html#leadership" class="footer-link">Leadership</a></li>
          <li><a href="index.html#executive" class="footer-link">Executive</a></li>
          <li><a href="index.html#magazine" class="footer-link">Magazine</a></li>
        </ul>
      </div>
      
      <div class="col-lg-3 mb-5">
        <h5>Contact</h5>
        <ul class="list-unstyled text-white">
          <li class="mb-3 d-flex align-items-center"><i class="fas fa-phone-alt me-3 fs-5" style="color: var(--brand-orange)"></i> Phone: [Your Number]</li>
          <li class="mb-3 d-flex align-items-center"><i class="fas fa-envelope me-3 fs-5" style="color: var(--brand-orange)"></i> Email: [Your Email]</li>
          <li class="mb-4 d-flex align-items-center"><i class="fas fa-map-marker-alt me-3 fs-5" style="color: var(--brand-orange)"></i> Address: Dumki Upazila, Patuakhali</li>
        </ul>
      </div>
      
      <div class="col-lg-3 mb-5">
        <h5>Connect With Us</h5>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <a href="https://www.facebook.com/dusa.official" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-12 text-center">
        <p class="mb-0 small opacity-75">&copy; 2026 Dumki Upazila Students Association (DUSA). All rights reserved. | Developed by 
          <a href="https://mdimtiaz.pro.bd" class="text-white fw-bold text-decoration-none hover-orange">Imtiaz</a>
        </p>
      </div>
    </div>
  </div>
</footer>`;

// Load Navbar
function loadNavbar() {
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  
  // Mark current page link as active
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === 'donor.html' && currentPage === 'donor.html') {
      link.classList.add('active');
    } else if ((href.includes('index.html') || href === '#home') && (currentPage === 'index.html' || currentPage === '')) {
      link.classList.add('active');
    }
  });
  
  // Initialize navbar scroll effect
  initNavbarScroll();
}

// Load Footer
function loadFooter() {
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Navbar scroll effect
function initNavbarScroll() {
  const mainNav = document.getElementById('mainNav');
  if (!mainNav) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadNavbar();
  loadFooter();
});
