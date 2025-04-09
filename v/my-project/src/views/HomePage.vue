<template>

<div class="image-slider">
      <div class="slide">
        <img :src="slides[currentIndex]" alt="Slide Image" />
      </div>
  
      <div class="controls">
        <button @click="prevSlide">‹</button>
        <button @click="nextSlide">›</button>
      </div>
    </div>
  <div class="container py-5">
    <div class="row align-items-center">
      <!-- Left side image with hover effect -->
      <div class="col-md-6 text-center mb-4 mb-md-0 " >
        <div class="image-hover-box">
          <img
  src="@/assets/read-more.jpg"
  alt="Chromed Biosciences"
  class="img-fluid"
  style="width: 350px; height: 450px;"
/>
        </div>
      </div>

      <!-- Right side text content -->
      <div class="col-md-6">
        <h2 class="text-primary mb-4">
          Welcome to Chromed Biosciences Pvt. Ltd.
        </h2>
        <p>
          Chromed Biosciences Pvt. Ltd., based in Tumkur, is a pioneering biotechnology company dedicated to advancing healthcare through innovative research, development, and production of biopharmaceuticals and diagnostic solutions.
        </p>
        <p>
          Established with a mission to address unmet medical needs, Chromed Biosciences specializes in the discovery and commercialization of novel therapeutics and diagnostics that aim to improve patient outcomes and quality of life.
        </p>
        <a href="/about#company" class="btn custom-readmore-btn">Read More</a>

      </div>
    </div>
  </div>
<!-- Core Services Offered Section -->
<div class="section-title">Core Services Offered</div>

<div class="section-description">
  <p>
    We specialize in providing pre-clinical solutions across a spectrum of industries, including pharmaceuticals, anti-infectives, medical devices, biotechnology, agrochemicals, consumer goods, cosmeceuticals, nutraceuticals, and dermatology. Our comprehensive suite of services encompasses discovery biology and discovery chemistry, meticulously tailored to meet the unique requirements of each client.
  </p>
  <p>
    At Chromed Biosciences, we pride ourselves on our versatile capabilities and unwavering commitment to quality, which have earned us the trust and satisfaction of an expanding clientele base. Our dedication to excellence is evident in the enduring relationships we cultivate with our customers, patrons, and partners, built upon mutual respect, collaboration and shared success.
  </p>
</div>

<div class="container" style="max-width: 1100px;" >
  <div class="row g-4">

    <!-- Card 1 -->
    <div class="col-md-4">
      <div class="card service-card">
        <div class="image-container">
          <img src="@/assets/pre-clinical.jpg" alt="Pre Clinical Research" class="card-img-top">
          <div class="overlay"></div>
        </div>
        <div class="card-body">
          <h5>Pre Clinical Research</h5>
          <p>Pre-clinical research services play a crucial role in providing preliminary evidence of safety and efficacy.</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="col-md-4">
      <div class="card service-card">
        <div class="image-container">
          <img src="@/assets/broilers-house.jpg" alt="Poultry Studies" class="card-img-top">
          <div class="overlay"></div>
        </div>
        <div class="card-body">
          <h5>Poultry Studies</h5>
          <p>Poultry studies are conducted by researchers in academic institutions, government agencies, industry organizations and private.</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="col-md-4">
      <div class="card service-card">
        <div class="image-container">
          <img src="@/assets/BALB-c-img.jpeg" alt="Lab Animals Supply" class="card-img-top">
          <div class="overlay"></div>
        </div>
        <div class="card-body">
          <h5>Lab Animals Supply</h5>
          <p>Laboratory animal supply plays a critical role in supporting biomedical research by providing researchers with.</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>

  </div>
</div>
<br>
<br>
<!---->

<section class="device-development-section py-5">
  <div class="container">
    <div class="row align-items-center">
      <!-- Image on the left -->
      <div class="col-md-6">
        <img src="@/assets/research.jpg" alt="Medical Device Development" class="img-fluid rounded">
      </div>

      <!-- Content on the right -->
      <div class="col-md-6 text-white">
        <h2 class="mb-4">NAVIGATE MEDICAL DEVICE DEVELOPMENT WITH CONFIDENCE:</h2>

        <p><em>PARTNER WITH CHROMED BIOSCIENCES FOR EXPERT MEDICAL TESTING SERVICES</em></p>

        <p><strong>Unveiling the Path to Success:</strong> At Chromed Biosciences we are your trusted partner in preclinical medical device testing. We understand the intricacies of navigating device development, and our comprehensive testing services empower you to achieve success.</p>

        <a href="/about#whyus" class="btn btn-primary px-4 py-2">Know More</a>
      </div>
    </div>
  </div>
</section>
<br>
<!---->

<div class="container my-5">
  <h4 style="color:#045D8C; font-weight:bold; text-align: center;">INDUSTRIES WE SERVE</h4>

  <p>Experience the difference with Chromed Biosciences Pvt. Ltd., where your pre-clinical needs are met with precision, innovation, and a steadfast commitment to exceeding expectations.</p>

  <div class="row text-center">
  
    <!-- Pharmaceuticals -->
    <div class="col-md-4 mb-4">
      <div class="card h-100" style="background-color:#0E2A47; color:#fff; border:none;">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <img src="@/assets/pharmaceuticals-icon.png" alt="Pharmaceuticals" style="width:100px; height:auto; margin-bottom:15px;">
          <h5 style="color:#FF914D;">Pharmaceuticals</h5>
        </div>
      </div>
    </div>

    <!-- Cosmetics -->
    <div class="col-md-4 mb-4">
      <div class="card h-100" style="background-color:#0E2A47; color:#fff; border:none;">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <img src="@/assets/cosmetics-icon.png" alt="Cosmetics" style="width:100px; height:auto; margin-bottom:15px;">
          <h5 style="color:#FF914D;">Cosmetics</h5>
        </div>
      </div>
    </div>

    <!-- Medical Devices -->
    <div class="col-md-4 mb-4">
      <div class="card h-100" style="background-color:#0E2A47; color:#fff; border:none;">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <img src="@/assets/medical-devices-icon.png" alt="Medical Devices" style="width:100px; height:auto; margin-bottom:15px;">
          <h5 style="color:#FF914D;">Medical Devices</h5>
        </div>
      </div>
    </div>

    <!-- Biotech -->
    <div class="col-md-4 mb-4">
      <div class="card h-100" style="background-color:#0E2A47; color:#fff; border:none;">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <img src="@/assets/biotech-icon.png" alt="Biotech" style="width:100px; height:auto; margin-bottom:15px;">
          <h5 style="color:#FF914D;">Biotech</h5>
        </div>
      </div>
    </div>

    <!-- Agrochemicals -->
    <div class="col-md-4 mb-4">
      <div class="card h-100" style="background-color:#0E2A47; color:#fff; border:none;">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <img src="@/assets/agrochemicals-icon.png" alt="Agrochemicals" style="width:100px; height:auto; margin-bottom:15px;">
          <h5 style="color:#FF914D;">Agrochemicals</h5>
        </div>
      </div>
    </div>

    <!-- Veterinary Products -->
    <div class="col-md-4 mb-4">
      <div class="card h-100" style="background-color:#0E2A47; color:#fff; border:none;">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <img src="@/assets/veterinary-products-icon.png" alt="Veterinary Products" style="width:100px; height:auto; margin-bottom:15px;">
          <h5 style="color:#FF914D;">Veterinary Products</h5>
        </div>
      </div>
    </div>

    <!-- Herbals & Nutraceuticals -->
    <div class="col-md-4 mb-4">
      <div class="card h-100" style="background-color:#0E2A47; color:#fff; border:none;">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <img src="@/assets/herbals-icon.png" alt="Herbals & Nutraceuticals" style="width:100px; height:auto; margin-bottom:15px;">
          <h5 style="color:#FF914D;">Herbals & Nutraceuticals</h5>
        </div>
      </div>
    </div>

    <!-- Diagnostics -->
    <div class="col-md-4 mb-4">
      <div class="card h-100" style="background-color:#0E2A47; color:#fff; border:none;">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <img src="@/assets/diagnostics-icon.png" alt="Diagnostics" style="width:100px; height:auto; margin-bottom:15px;">
          <h5 style="color:#FF914D;">Diagnostics</h5>
        </div>
      </div>
    </div>

    <!-- Clinical Research Organization -->
    <div class="col-md-4 mb-4">
      <div class="card h-100" style="background-color:#0E2A47; color:#fff; border:none;">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <img src="@/assets/clinical-research-icon.png" alt="Clinical Research Organization" style="width:100px; height:auto; margin-bottom:15px;">
          <h5 style="color:#FF914D;">Clinical Research<br>Organization</h5>
        </div>
      </div>
    </div>

  </div>
</div>

<!--cerfificate-->
<section class="certifications-section py-5">
    <div class="container">
      <h2 class="text-center mb-5" style="color:#045D8C; font-weight:bold;">Our Accreditations and Certifications</h2>
      <div class="certifications-carousel">
        <div class="carousel-track">
          <div class="carousel-item" v-for="(slide, index) in slides" :key="index">
            <img :src="slide" class="cert-img" :alt="`Certification ${index + 1}`" />
          </div>
          <!-- Repeat the slides for the infinite effect -->
          <div class="carousel-item" v-for="(slide, index) in slides" :key="`repeat-${index}`">
            <img :src="slide" class="cert-img" :alt="`Certification ${index + 1}`" />
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<script>


export default {
  name: 'HomePage',

    data() {
      return {
        currentIndex: 0,
        slides: [
          require('@/assets/slider1.png'),
          require('@/assets/slider2.png'),
          require('@/assets/slider3.png'),
          require('@/assets/slider4.png')
        ]
      }
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      }
    }
  }
  
  
</script>



<style scoped>
/* Container for hover effect */
.image-hover-box {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

/* Image inside container */
.image-hover-box img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
}

/* Border on all four sides */
.image-hover-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 0%;
  border: 10px solid #0a5c7d;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  opacity: 0;
}

.image-hover-box:hover::before {
  width: 100%;
  height: 100%;
  opacity: 1;
}

/* Shrink image on hover */
.image-hover-box:hover img {
  transform: scale(0.95);
}

/* Read More Button with Custom Hover Effect */
.custom-readmore-btn {
  background-color: #0a5c7d;
  color: #fff;
  border: 2px solid #0a5c7d;
  transition: all 0.3s ease-in-out;
}

.custom-readmore-btn:hover {
  background-color: #fff;
  color: #0a5c7d;
  border-color: #0a5c7d;
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(10, 92, 125, 0.5);
}
.image-slider {
    width: fit-content;
    margin: 0 auto;
    position: relative;
  }
  
  .slide img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }
  
  .controls button {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 50%;
    transition: background 0.3s;
  }
  
  .controls button:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .section-title {
  background-color: #045D8C;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 30px; /* You can adjust left/right padding */
  margin: 0 auto 20px; /* Center the element */
  width: 1100px; 
    border-radius: 2px; /* Optional: add rounded corners */
}

  .section-description {
    color: #333;
    text-align: justify;
    max-width: 1100px;
    margin: 0 auto 40px;
    padding: 0 15px;
  }

  .service-card {
    border: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border-radius: 5px;
  }

  .service-card .image-container {
    position: relative;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
  }

  .service-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .service-card .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(4, 93, 140, 0.5);
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .service-card:hover img {
    transform: scale(1.1);
  }

  .service-card:hover .overlay {
    opacity: 1;
  }

  .service-card .card-body {
    padding: 20px;
    text-align: center;
  }

  .service-card h5 {
    font-weight: bold;
    margin-bottom: 15px;
    color: #333;
  }

  .service-card p {
    color: #333;
    font-size: 14px;
    margin-bottom: 20px;
    min-height: 80px;
  }

  .service-card .btn-primary {
    background-color: #045D8C;
    border-color: #045D8C;
  }

  .service-card .btn-primary:hover {
    background-color: #033f63;
    border-color: #033f63;
  }

  .device-development-section {
  position: relative;
  color: #fff;
  overflow: hidden; /* Ensure the overlay doesn't spill out */
}

/* This is the overlay simulating brightness reduction */
.device-development-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* Background image goes here */
  background: url('@/assets/background.jpg') no-repeat center center/cover;

  /* Filter applied ONLY to the background image */
  filter: brightness(25%);

  z-index: 1;
}

/* Content inside the section */
.device-development-section .container {
  position: relative;
  z-index: 2; /* Ensure it's above the overlay */
}


.device-development-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
  z-index: 1;
}

.device-development-section .container {
  position: relative;
  z-index: 2;
}

.device-development-section h2 {
  font-weight: bold;
}

.device-development-section .btn-primary {
  background-color: #045D8C;
  border-color: #045D8C;
  font-weight: bold;
}

</style>
