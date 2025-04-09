<template>
  <div>
    <!-- Top Bar (Contact info) -->
    <div class="top-bar d-none d-md-flex justify-content-between px-4 py-2 text-white" id="topBar">
      <div>
        <i class="fas fa-phone-alt me-2"></i> +91-90199 23541 / 42 / 43 / 55
        <i class="fas fa-envelope ms-3 me-2"></i> info@chromedbio.com
        <i class="fas fa-map-marker-alt ms-3 me-2"></i> KIADB Industrial Area, Hirehalli, Tumakuru - 572168
      </div>
      <div>
        <i class="fab fa-facebook-f me-3"></i>
        <i class="fab fa-twitter me-3"></i>
        <i class="fab fa-google-plus-g me-3"></i>
        <i class="fab fa-linkedin-in me-3"></i>
        <i class="fas fa-rss me-3"></i>
        <i class="fab fa-youtube"></i>
      </div>
    </div>

    <!-- Sticky Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light sticky-top shadow-sm">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand" href="/">
          <img src="@/assets/chromed-logo-web.svg" alt="Logo" class="logo-img" />
        </a>

        <!-- Toggle button for mobile view -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation links -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav align-items-center gap-lg">
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/">Home</router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle fw-bold"
                href="/about"
                id="AboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul class="dropdown-menu" aria-labelledby="facilitiesDropdown">
                <li><a class="dropdown-item" href="/about#company">About Company</a></li>
                <li><a class="dropdown-item" href="/about#vision">Vision & Mission</a></li>
                <li><a class="dropdown-item" href="/about#industries">Industries We Serve</a></li>
                <li><a class="dropdown-item" href="/about#whyus">Why Us</a></li>
                <li><a class="dropdown-item" href="/about#advantages">Advantages</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/Facilities">Facilities</router-link>
            </li>

            <!-- Dropdown 2 -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle fw-bold"
                href="/service"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><a class="dropdown-item" href="/service#preclinical">Pre Clinical Research</a></li>
                <li><a class="dropdown-item" href="/service#devices">Medical Devices Testing</a></li>
                <li><a class="dropdown-item" href="/service#animals">Laboratory Animal</a></li>
                <li><a class="dropdown-item" href="/service#poultry">Poultry and Allied</a></li>
                <!--<li><a class="dropdown-item" href="/service#research">Research</a></li>-->
                <li><a class="dropdown-item" href="/service#training">Training and Internships</a></li>
              </ul>
            </li>

            <!-- Dropdown 3 -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle fw-bold"
                href="#"
                id="regulatoryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Regulatory Support
              </a>
              <ul class="dropdown-menu" aria-labelledby="regulatoryDropdown">
                <li><a class="dropdown-item" href="#">Send Services</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/business-enquiry">Business Enquiry</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/careers">Careers</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/Contact">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'AppNavbar',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const topBar = document.querySelector('.top-bar');
      if (window.scrollY > 50) {
        topBar.style.display = 'none';
      } else {
        topBar.style.display = 'flex';
      }
    }
  }
}
</script>

<style scoped>
/* Top bar styles */
.top-bar {
  font-size: 0.9rem;
  background-color: #0f2e4d !important;
  transition: all 0.3s ease;
}

/* Navbar styles */
.navbar {
  height: 150px;
  z-index: 10000;
  background-color: #ffffff !important;
  transition: height 0.3s ease;
  position: sticky;
  top:5px
}

/* Logo size */
.logo-img {
  max-height: 100px;
  width: auto;
}

/* Nav links */
.nav-link {
  color: #297e9a !important;
  padding: 12px 20px;
  font-size: 1.1rem;
}

/* Hover effects */
.navbar-nav .nav-link:hover,
.dropdown-menu .dropdown-item:hover {
  color: #ff6600 !important; 
}

/* Dropdown menu */
.dropdown-menu {
  min-width: 250px;
  padding: 10px 0;
}

/* Add gap between nav links on large screens */
.gap-lg > li {
  margin-left: 20px;
}

/* Responsive: hide top-bar on small devices */
@media (max-width: 768px) {
  .top-bar {
    display: none !important;
  }

  .navbar {
    height: auto;
  }

  .nav-link {
    padding: 10px 15px;
    font-size: 1rem;
  }
}

.dropdown-menu {
  padding: 0 !important;
  color: #297e9a !important;
  font-size: 1rem;
}

.dropdown-menu .dropdown-item {
  font-weight: bold;
  color: #297e9a !important;
}

.dropdown-menu .dropdown-item:hover {
  color: #ff6600 !important;
}

.nav-link.dropdown-toggle::after {
  display: none !important;
}

.dropdown-menu .dropdown-item {
  padding: 0.5rem 1rem;
}

/* New Styles to enable dropdown on hover */
.nav-item.dropdown:hover > .dropdown-menu {
  display: block;
  margin-top: 0;
}

.nav-item.dropdown > .nav-link {
  pointer-events: auto;
}
</style>
