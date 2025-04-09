<template>
    <!--your-banner-image-->
     <div>
    <!-- Banner Image Section -->
    <div class="banner-container mb-4">
      <img
        src="@/assets/about1.jpeg"
        alt="Banner"
        class="img-fluid w-100"
      />
    </div>
    <div class="container my-5">
      <div v-if="activeSection === 'company'" id="company">
        <div class="container py-3" id="company">
    <!-- Title -->
    <h2 class="text-primary fw-bold mb-4">ABOUT COMPANY</h2>

    <!-- Row for Image and Content -->
    <div class="row align-items-center">
      <!-- Left Column: Image -->
      <div class="col-md-5 mb-4 mb-md-0">
        <img
          src="@/assets/read-more.jpg"
          alt="About Company"
          class="img-fluid shadow rounded"
          style="width: 350px; height: 450px;"
        />
      </div>

      <!-- Right Column: Text -->
      <div class="col-md-7">
        <!-- Heading Block -->
        <div class="bg-primary text-white px-3 py-2 mb-3 rounded">
          <h3 class="m-0">Chromed Biosciences Pvt. Ltd.</h3>
        </div>

        <!-- Paragraphs -->
        <p>
          CHROMED BIOSCIENCES PVT. LTD. (CBPL), based in Tumkur is a Preclinical Contract Research Organization (CRO) which provides quality research services and assists in the testing of products for R & D phase. As a pioneering biotechnology company, CBPL is dedicated to advancing healthcare through innovative research, development & production of biopharmaceuticals including diagnostic solutions.
        </p>
        <p>
          Established with a mission to address unmet medical needs, Chromed Biosciences specializes in the discovery and commercialization of novel therapeutics and diagnostics that aim to improve patient outcomes and quality of life.
        </p>
        <p>
          With a commitment to scientific excellence and a focus on collaboration, Chromed Biosciences leverages cutting-edge technologies and interdisciplinary approaches to tackle complex medical challenges. Through strategic partnerships and a dedication to ethical practices, the company aims to make significant contributions to the field of biotechnology and ultimately, to global health.
        </p>
        <p>
          CBPL assists in obtaining the Certifications of the finished products in compliance with various national and international regulatory bodies. CBPL Offers Toxicology, Pharmacology, DMPK, Bio-Compatibility / Biological Reactivity and Pharmacopoeia testing services for Pharmaceutical, Bio-Pharmaceutical, Medical Device, Agrochemical, Herbal, Nutraceutical, food and FMCG companies. CBPL has state-of-the-art testing facilities and laboratories in a tranquil environment.
        </p>
      </div>
    </div>
  </div>
  <div class="section-container py-4">
    <!-- Title Box -->
    <div class="title-box text-center mb-3">
      <h3 class="text-white m-0 py-2">CBPL - Inspire Research with Innovations</h3>
    </div>

    <!-- Content -->
    <div class="content-box">
      <ul>
        <li>
          Our values are morality, innovation and social responsibility. Our services are provided in a proficient, specific, competent and unbiased manner. We resolutely trust that our responsibility is determined by our commitment to the high excellence of our services.
        </li>
        <li>
          Our skilled scientists at Chromed Biosciences conduct efficient in-vitro and in-vivo tests for discovery programs and to satisfy regulatory criteria. We work hard to provide high-authentic reports with quick turnaround times. Our scientists thoroughly assess your test items’ effectiveness and safety, enhancing your endeavors’ research success.
        </li>
        <li>
          At CBPL, we understand the importance of toxicology data for regulatory approvals. Our expert toxicologists conduct the following studies as per OECD, US FDA, ISO, and Schedule Y guidelines.
        </li>
      </ul>
    </div>
  </div>
      </div>
      </div>
  



      <!--vision-->



      <div v-if="activeSection === 'vision'" id="vision">
        <section id="vision-mission" class="py-5" style="background-color:#ffffff;">
  <div class="container">
    <!-- Heading -->
    <div class=" mb-4">
 <h2 class="text-primary fw-bold mb-4">VISION & MISSION</h2>  
  </div>

<!-- Vision Section -->
<div class="row align-items-center mb-5">
  <!-- Text First -->
  <div class="col-md-8">
    <h4 style="color:#7a2978; font-weight:bold;">Our Vision</h4>
    <ul>
      <li>To be the Preferred and Trusted Preclinical Research Solution Partner for Global Pharmaceutical, Biotechnology, Nutraceuticals and Medical Device Industries.</li>
      <li>To create benchmarks and shape the future of the Pre-clinical Research Industry by ensuring Quality, Reliability and Value-added Services.</li>
    </ul>
  </div>
  <!-- Image Second -->
  <div class="col-md-4 text-center">
    <img src="@/assets/vision.png" alt="Our Vision" class="img-fluid" style="max-width:400px;">
  </div>
</div>

<!-- Divider Line -->
<hr style="border-top: 2px dashed #ccc;">

<!-- Mission Section -->
<div class="row align-items-center mb-5">
  <!-- Image First -->
  <div class="col-md-4 text-center">
    <img src="@/assets/misssion.png" alt="Our Mission" class="img-fluid" style="max-width:400px;">
  </div>
  <!-- Text Second -->
  <div class="col-md-8">
    <h4 style="color:#7a2978; font-weight:bold;">Our Services</h4>
    <ul>
      <li>We provide proficient, specific, competent, and unbiased research services.</li>
      <li>Our skilled scientists conduct efficient in-vitro and in-vivo tests to support discovery programs and meet regulatory criteria.</li>
      <li>We ensure timely, high-quality reports that enhance the success of your research programs.</li>
      <li>Our toxicology data complies with OECD, US FDA, ISO, and Schedule Y guidelines for regulatory approvals.</li>

    </ul>
  </div>
</div>
</div>

</section>
<!-- Core Values Section -->
<div class="container my-5">
  <div class="row align-items-center">
    
    <!-- Left Side: Image/Graphics -->
    <div class="col-md-6 text-center mb-4 mb-md-0">
      <img src="@/assets/core-values.png" alt="Our Core Values" class="img-fluid" style="max-width: 400px;">
    </div>
    
    <!-- Right Side: Text Content -->
    <div class="col-md-6">
      <h4 style="color:#7a2978; font-weight:bold;">Our Core Values</h4>
      <ul class="list-unstyled mt-4">
        <li class="mb-3">
          <strong>Innovation</strong> – To develop unique research methods based on advanced technologies and offer speed, flexibility, and cost-effectiveness to our clients.
        </li>
        <li class="mb-3">
          <strong>Reliability</strong> – We will never compromise in terms of data quality.
        </li>
        <li class="mb-3">
          <strong>Technical Support</strong> – We guarantee the highest level of technical support and in-depth insights.
        </li>
        <li class="mb-3">
          <strong>Trust</strong> – We will never give promises we cannot fulfill.
        </li>
        <li>
          <strong>Social Responsibility</strong> – We believe in a better community and that each contribution can make a change.
        </li>
      </ul>
    </div>

  </div>
</div>
</div>

<!--industries-->
      
  
      <!-- Industries We Serve Section -->
      <div v-if="activeSection === 'industries'" id="industries">
      <div class="container my-5">
  <h4 style="color:#045D8C; font-weight:bold;">INDUSTRIES WE SERVE</h4>
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
</div>



<!--why us-->
  
      <div v-if="activeSection === 'whyus'" id="whyus">
        <section class="container my-5">
    <h2 class="text-primary fw-bold">WHY CHROMED BIOSCIENCES?</h2>
    <p>
        At Chromed Biosciences, our commitment to research is unwavering. Central to our mission is the provision of
        top-tier consultancy services. Recognizing the challenges inherent in drug discovery, we prioritize
        consultation, guiding, and supporting teams to achieve optimal outcomes.
    </p>

    <h4 class="text-center text-warning  mt-4" style="font-size: 2rem; color:#FF914D;">
        Here are some of our standout features
    </h4>

    <div class="row mt-4 d-flex">
        <div class="col-md-6 d-flex">
            <div class="p-4 border bg-light w-100 d-flex flex-column justify-content-between" style="height: 100%;">
                <p><strong>Extensive Expertise:</strong> We boast a wealth of knowledge and experience in drug discovery.</p>
                <p><strong>Project Flexibility:</strong> Our ability to manage projects of any scale and meet deadlines consistently sets us apart.</p>
                <p><strong>Quality Assurance:</strong> We deliver preclinical candidates of unparalleled quality, underpinned by rigorous testing and analysis.</p>
                <p><strong>Therapeutic Diversity:</strong> With expertise spanning various therapeutic areas, including infection, oncology, inflammation, dermatology, and more, we offer comprehensive solutions.</p>
                <p><strong>Data Interpretation:</strong> We excel in interpreting biological data to inform decision-making.</p>
                <p><strong>Optimization Services:</strong> Our team specializes in optimizing ADME, PK, and PK/PD profiles to enhance drug efficacy.</p>
            </div>
        </div>

        <div class="col-md-6 d-flex">
            <div class="p-4 border bg-light w-100 d-flex flex-column justify-content-between" style="height: 100%;">
                <p><strong>Patenting Support:</strong> We assist clients in developing patenting strategies to safeguard their intellectual property.</p>
                <p><strong>Client-Centric Approach:</strong> Every client receives strategic attention, tailored to their unique needs and goals.</p>
                <p><strong>Project Management:</strong> Our expertise in project management ensures smooth execution and timely delivery.</p>
                <p><strong>IP Protection:</strong> We prioritize the protection of intellectual property and data security at every stage.</p>
                <p><strong>Cost-Effective Solutions:</strong> Our services are designed to offer cost-effective solutions without compromising quality or efficiency.</p>
            </div>
        </div>
    </div>

    <div class="mt-4">
        <h4 class="text-primary">Ready to Take the Next Step?</h4>
        <p><em>Contact us today for a free consultation and discuss how our tailored testing.</em></p>
        <p class="text-danger fw-bold">+91 9019923541 / 2</p>
    </div>
</section>

      </div>
  
      <div v-if="activeSection === 'advantages'" id="advantages">
       <!-- ADVANTAGES SECTION -->
<section class="container py-5">
    <!-- Heading -->
    <h2 class="text-primary fw-bold mb-4">ADVANTAGES</h2>

    <!-- Subheading -->
    <h4 class="text-center text-warning fw-semibold mb-5" style="font-size: 28px;">
        Advantages of Opting Chromed Biosciences
    </h4>

    <!-- Features Row -->
    <div class="row g-4">
        <!-- Left Column -->
        <div class="col-md-6">
            <div class="p-4 border bg-light h-100">
                <p><strong>Expertise:</strong> Our team of experienced scientists and engineers possesses in-depth knowledge of biocompatibility testing, electrical safety, and mechanical performance evaluation.</p>
                <p><strong>Streamlined Efficiency:</strong> We leverage cutting-edge technology and established protocols to deliver accurate and timely results, accelerating your time to market.</p>
            </div>
        </div>

        <!-- Right Column -->
        <div class="col-md-6">
            <div class="p-4 border bg-light h-100">
                <p><strong>Regulatory Navigation:</strong> Our team stays current on evolving regulations (FDA, EU) to ensure your device meets all safety and performance standards.</p>
                <p><strong>Unwavering Commitment:</strong> Data integrity and confidentiality are paramount. We adhere to current regulatory practice and utilize robust data security measures to safeguard your intellectual property.</p>
            </div>
        </div>
    </div>

    <!-- Contact Section -->
    <div class="text-start mt-5">
        <h4 class="text-primary fw-semibold">Ready to Take the Next Step?</h4>
        <p class="fw-semibold fst-italic">
            Contact us today for a free consultation and discuss how our tailored testing.
        </p>
        <p class="text-danger fw-bold">
            +91 9019923541 / 2
        </p>
    </div>
</section>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
    data() {
      return {
        activeSection: "company", // default
      };
    },
    methods: {
      setActiveSection(section) {
        this.activeSection = section;
      },
    },
    mounted() {
      // Read the hash from URL and show the correct section
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        this.activeSection = hash;
      }
  
      // Optional: Listen to hash changes if you need
      window.addEventListener("hashchange", () => {
        const newHash = window.location.hash.replace("#", "");
        this.activeSection = newHash || "company";
      });
    },
  };
  </script>
  
  <style scoped>
 
  .text-primary {
  color: #186b99 !important; /* Same color as the image */
}

.bg-primary {
  background-color: #186b99 !important; /* Button title block color */
}

p {
  text-align: justify;
}
.section-container {
  background-color: #e3e3e3; /* Grey background */
  padding: 40px 20px;
}

.title-box {
  background-color: #166483; /* Dark teal-blue */
  display: flexbox;
  padding: 0 20px;
}

.content-box ul {
  list-style-type: disc;
  padding-left: 20px;
 
}
.content-box li {
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 1.6;
}
/* vision nd msiiion */
#vision-mission ul {
  list-style-type: disc;
  padding-left: 20px;
}

#vision-mission ul li {
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.6;
}


  </style>
  