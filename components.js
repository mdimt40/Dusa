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

// Footer HTML - SIMPLE VERSION
const footerHTML = `<footer>
  <div class="container">
    <div class="row footer-top-section">
      <div class="footer-col footer-col-left">
        <h5 class="fs-2 mb-3"><img src="images/logo.png" alt="" onerror="this.src='https://via.placeholder.com/40/FF6B00/FFFFFF?text=D'" style="height: 40px; border-radius: 8px;"> DUSA</h5>
        <p>Empowering Dumki students with resources, networking, growth, and community for academic and personal success.</p>
      </div>
      <div class="footer-col footer-col-right">
        <h5>Quick Links</h5>
        <ul class="list-unstyled text-white">
          <li><a href="index.html#home" class="text-white text-decoration-none">Home</a></li>
          <li><a href="donor.html" class="text-white text-decoration-none">Find Blood Donor</a></li>
          <li><a href="index.html#events" class="text-white text-decoration-none">Events</a></li>
          <li><a href="index.html#contact" class="text-white text-decoration-none">Contact</a></li>
        </ul>
      </div>
    </div>
    
    <div class="row footer-middle-section">
      <div class="col-lg-3 col-md-6">
        <h5>Pages</h5>
        <ul class="list-unstyled text-white">
          <li><a href="index.html" class="text-white text-decoration-none">Home</a></li>
          <li><a href="index.html#activities" class="text-white text-decoration-none">Activities</a></li>
          <li><a href="donor.html" class="text-white text-decoration-none">Blood Bank</a></li>
        </ul>
      </div>
      
      <div class="col-lg-3 col-md-6">
        <h5>About</h5>
        <ul class="list-unstyled text-white">
          <li><a href="index.html#leadership" class="text-white text-decoration-none">Leadership</a></li>
          <li><a href="index.html#executive" class="text-white text-decoration-none">Executive</a></li>
          <li><a href="index.html#magazine" class="text-white text-decoration-none">Magazine</a></li>
        </ul>
      </div>
      
      <div class="col-lg-3 col-md-6">
        <h5>Contact</h5>
        <ul class="list-unstyled text-white small">
          <li><i class="fas fa-phone-alt me-2" style="color: var(--brand-orange)"></i> Phone: [Your Number]</li>
          <li><i class="fas fa-envelope me-2" style="color: var(--brand-orange)"></i> Email: [Your Email]</li>
          <li><i class="fas fa-map-marker-alt me-2" style="color: var(--brand-orange)"></i> Dumki Upazila</li>
        </ul>
      </div>
      
      <div class="col-lg-3 col-md-6">
        <h5>Connect</h5>
        <div class="d-flex gap-2">
          <a href="https://www.facebook.com/dusa.official" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
    
    <div class="row pt-3 border-top border-light border-opacity-10">
      <div class="col-12">
        <p class="mb-0 small opacity-75 text-center">&copy; 2026 Dumki Upazila Students Association (DUSA). All rights reserved. | Developed by <a href="https://mdimtiaz.pro.bd" class="text-white fw-bold text-decoration-none">Imtiaz</a></p>
      </div>
    </div>
  </div>
</footer>`;

// Load Navbar
function loadNavbar() {
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
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
