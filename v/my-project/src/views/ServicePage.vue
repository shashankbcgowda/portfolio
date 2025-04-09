<template>
    <!-- Banner Image Section -->
    <div class="banner-container mb-4">
      <img
        src="@/assets/about1.jpeg"
        alt="Banner"
        class="img-fluid w-100"
      />
    </div>
  
    <div class="container my-5">
      <!-- Subtopic Content -->
      <div class="mt-4">
        <div v-if="activeSection === 'preclinical'">
          <div class="container my-5">
            <h2 class="text-primary fw-bold mb-4">Pre Clinical Research Services</h2>
  
            <!-- Services Grid -->
            <div class="row g-4">
              <div
                class="col-6 col-sm-4 col-md-3"
                v-for="(box, index) in services"
                :key="index"
              >
                <div
                  class="card h-100 shadow-sm text-center"
                  style="cursor: pointer;"
                  @click="goToServiceDetails(box.id)"
                >
                  <img
                    :src="box.image"
                    alt="Service Image"
                    class="card-img-top"
                    style="height: 230px; width:fit; object-fit: cover;"
                  />
                  <div class="card-body">
                    <span class="text-muted">{{ box.title }}</span>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
  
        <!-- Other sections remain unchanged -->
        <div v-if="activeSection === 'devices'">
          <div class="container my-5">
    <!-- Title -->
    <h2 class="text-primary fw-bold mb-4 text-uppercase">Medical Devices Testing</h2>

    <!-- Row with Image & Text -->
    <div class="row align-items-center">
      <!-- Images (Left Side) -->
      <div class="col-md-6 d-flex">
        <img
          src="@/assets/device1.webp"
          alt="Device Testing"
          class="img-fluid rounded shadow me-3"
          style="max-width: 45%; height: auto;"
        />
        <img
          src="@/assets/device2.jpg"
          alt="Device Testing"
          class="img-fluid rounded shadow"
          style="max-width: 45%; height: auto;"
        />
      </div>

      <!-- Text Content (Right Side) -->
      <div class="col-md-6">
        <p>
          Chromed Biosciences Pvt. Ltd. is a CCSEA / CPCSEA Registered, ISO & IBSC approved, CDSCO & NABL ISO / IEC – 17025 Accredited Laboratory,
          committed to providing best-in-class Preclinical / Non-Clinical Research support for Medical Devices, Pharma, Herbal, Biotech, Cosmetics,
          Poultry, and Veterinary Research in compliance with OECD GLP / ISO and other international guidelines.
        </p>
        <p>
          At Chromed, Biocompatibility and Biological evaluations of Medical Devices are carried out in line with ISO 10993 Guidelines.
        </p>
        <p>
          Apart from Medical Device Testing, Chromed Biosciences also imparts Preclinical Research services.
        </p>
      </div>
    </div>
  

  </div>

  <div class="container my-5">
    <!-- Main Heading -->
    <div class="text-center py-2 rounded">
      <h2 class="main-heading">Biocompatibility Evaluation Endpoints</h2>
    </div>

    <!-- Grid Layout for Categories -->
    <div class="row mt-4">
      <!-- Left Column -->
      <div class="col-md-6">
        <div class="box">
          <h5 class="category">Cytotoxicity: ISO 10993 (Part 5), 2009</h5>
          <ul>
            <li>✔ In Vitro Cytotoxicity</li>
          </ul>
        </div>

        <div class="box">
          <h5 class="category">Irritation: ISO 10993 (Part 23) Intracutaneous Reactivity Test</h5>
          <ul>
            <li>✔ Ocular Irritation</li>
            <li>✔ Vaginal Irritation</li>
            <li>✔ Penile Irritation</li>
            <li>✔ Oral Mucosal Irritation Test</li>
            <li>✔ <em>In vitro:</em> RhE and RhCE irritation Model (OECD – 492)</li>
          </ul>
        </div>

        <div class="box">
          <h5 class="category">Sensitization: ISO 10993 (Part 10)</h5>
          <ul>
            <li>✔ Guinea Pig Maximization Test (Magnusson & Kligman)</li>
            <li>✔ Buehler Test</li>
          </ul>
        </div>
      </div>

      <!-- Right Column -->
      <div class="col-md-6">
        <div class="box">
          <h5 class="category">Toxicity: ISO 10993 (Part 11)</h5>
          <ul>
            <li>✔ Acute Systemic Toxicity Test</li>
            <li>✔ Systemic Toxicity Test (Subacute, Sub chronic & Chronic)</li>
            <li>✔ Material Mediated Pyrogenicity Test: ISO (Part 11 & USP 131)</li>
          </ul>
        </div>

        <div class="box">
          <h5 class="category">Genotoxicity: ISO 10993 (Part 3)</h5>
          <ul>
            <li>✔ Bacterial Reverse Mutation / Ames Test</li>
            <li>✔ In Vitro Micronucleus Test</li>
            <li>✔ In Vitro Chromosomal Aberration Test</li>
            <li>✔ In Vivo Mammalian Chromosomal Aberration Test</li>
            <li>✔ In Vivo Mammalian Micronucleus Test</li>
            <li>✔ Mouse Lymphoma Assay</li>
          </ul>
        </div>

        <div class="box">
          <h5 class="category">Hemocompatibility: ISO 10993 (Part 4)</h5>
          <ul>
            <li>✔ Hemolysis (ASTM and ISO)</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Full Width Section -->
    <div class="row mt-4">
      <div class="col-12">
        <div class="box">
          <h5 class="category">Bacterial Endotoxin Test & Microbial Limit Test</h5>
          <ul>
            <li>✔ Bacterial Endotoxin Test: ISO 11737 (Part 3) / USP 85</li>
            <li>✔ Sterility Check: ISO 11737 (Part 2) / USP 71</li>
            <li>✔ Microbial Limit Test / Bioburden Test: ISO 11737 (Part 1) / USP 61</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

        </div>
  
        <div v-if="activeSection === 'animals'">
          <div class="container my-5">
    <!-- Section Title -->
    <h2 class="section-title">Laboratory Animal Supply</h2>

    <!-- Image and Text in a Row -->
    <div class="row align-items-center mt-4">
      <!-- Left: Text Content -->
      <div class="col-md-12" style="text-align: justify;">
        <p>
          Chromed Biosciences offers laboratory animal supply services, providing animals for scientific research purposes, including poultry studies.
        </p>
        <p>
          Chromed Biosciences is a CPCSEA Licensed Laboratory Animal Facility in an accessible location near Bangalore. It has a state-of-the-art vivarium to provide uniformly healthy and clean animals for biomedical research.
        </p>
        <p>
          We have the resources to breed different species in a controlled environment with strong health monitoring and animal welfare policies. Our experienced team is dedicated to vivarium management and client support.
        </p>
        <p>
          As a provider of laboratory animal supply services, Chromed Biosciences offers a range of animals for biomedical and scientific research, including mice, rats, rabbits, guinea pigs, and poultry species like chickens or ducks.
        </p>
      </div>

      <!-- Right: Image -->
      <div class="col-md-12" style="display: flex;">
        <img src="@/assets/lab_image.jpeg" alt="Laboratory Animal Supply" class="img-fluid rounded shadow">
      </div>
    </div>
  </div>
  <div class="container my-5">
    <div class="row">
      <!-- Left Section: Two Images with Centered Text -->
      <div class="col-md-4 d-flex flex-column align-items-center">
        <img src="@/assets/lab_mouse.jpg" class="img-fluid mb-3 rounded shadow" alt="Lab Animal 1">
        <p class="bold-text text-center">CBPL will also supply quality Blood / Serum / Plasma of different species.</p>
        <img src="@/assets/microscope.jpg" class="img-fluid rounded shadow" alt="Lab Research">
      </div>

      <!-- Right Section: Information List -->
      <div class="col-md-8">
        <h3 class="section-heading text-center">
          Here's what Chromed Biosciences’ laboratory animal supply services might entail:
        </h3>
        <ol>
          <li><strong>Animal Procurement and Breeding:</strong> Chromed Biosciences may breed and maintain colonies of laboratory animals, ensuring their health, genetic integrity, and suitability for research purposes.</li>
          <li><strong>Animal Care and Housing:</strong> Providing appropriate housing, nutrition, and veterinary care for laboratory animals.</li>
          <li><strong>Animal Health Monitoring:</strong> Regular health monitoring and disease surveillance to prevent infections.</li>
          <li><strong>Genetic and Phenotypic Characterization:</strong> Offering animals with specific genetic traits for research.</li>
          <li><strong>Transportation and Logistics:</strong> Ensuring safe and compliant transportation of laboratory animals.</li>
          <li><strong>Regulatory Compliance:</strong> Adhering to local, national, and international ethical guidelines.</li>
        </ol>
      </div>
    </div>
  </div>
        </div>
  
        <div v-if="activeSection === 'poultry'">
          <h2>Poultry and Allied Research</h2>
          <div class="section-container">
  <!-- Header -->
  <div class="header-box">
    <p class="header-text">
      Covers: Growth Promotion Studies • Efficacy Studies • Egg and Meat Quality Studies • Challenging Studies
    </p>
  </div>

  <!-- Content -->
  <div class="content-box">
    <div class="text-content">
      <p>
        Chromed Biosciences’ expertise in poultry studies and allied services can contribute to advancements in poultry
        production, welfare and sustainability, benefiting both the poultry industry and consumers. However, please note
        that this information is hypothetical, and I cannot confirm whether Chromed Biosciences actually offers these
        specific services without further verification.
      </p>
      <p class="italic-text" style="text-align: justify;">Potential services offered by Chromed Biosciences in the realm of poultry studies include:</p>
      <ol>
        <li><strong>Nutritional Research:</strong> Formulating balanced diets for poultry species at different growth stages to optimize health and productivity.</li>
        <li><strong>Disease Management:</strong> Conducting studies to understand and manage diseases affecting poultry, including developing vaccines and treatments.</li>
        <li><strong>Genetic Studies:</strong> Investigating poultry genetics, breeding programs, and genetic selection methods to enhance desirable traits such as growth rate and disease resistance.</li>
        <li><strong>Welfare Assessments:</strong> Evaluating housing systems, environmental conditions, and management practices to ensure the welfare and well-being of poultry.</li>
        <li><strong>Reproduction Studies:</strong> Researching poultry reproductive physiology, breeding techniques, and hatchery management to improve reproductive efficiency and chick quality.</li>
        <li><strong>Product Quality Research:</strong> Assessing egg and meat quality parameters and developing strategies to enhance product quality and safety.</li>
        <li><strong>Consulting Services:</strong> Providing expert advice and consultation on various aspects of poultry production, including nutrition, disease management, genetics, and welfare.</li>
        <li><strong>Training Programs:</strong> Offering educational programs and workshops for poultry producers, researchers, and industry professionals on best practices in poultry production and management.</li>
      </ol>
    </div>

    <!--<div class="image-box">
        <img src="@/assets/image.png" alt="Poultry Research" class="side-image" >
    </div>-->

  </div>
</div>
        </div>
  
      <!--  <div v-if="activeSection === 'research'">
          <h2>Research</h2>
          <p>Write your Research content here...</p>
        </div>-->
  
        <div v-if="activeSection === 'training'">
          <h2>Training and Internship Programmes</h2>
          <!-- Research Section -->
<!-- Research Section -->
<!-- Research Section -->
<!-- Research Section -->
<section class="research-section">
    <div class="container">
        <div class="image-box">
            <img src="@/assets/intenship.jpg" alt="Research Image" class="research-image">
        </div>
        <div class="text-box">
            <p>
                Apart from regulatory research, Chromed Biosciences offering internships for research scholars is a fantastic opportunity for aspiring scientists and researchers. Chromed Biosciences encourages and provides an excellent platform for carrying out basic research work for Postgraduate and Ph.D. students.
            </p>
            <p>
                Extensive research support is to be provided by our scientific team in the field of In-Vitro / In-Vivo research and Analytical chemistry.
            </p>
            <p>
                Basic research at Chromed Biosciences emphasizes reconnoitering and training the students / faculties and scientists on the modern and upcoming trends in the research field, thus sensitizing them to the ‘Science for the future,’ and also keeping them at ready to take up any changes / updates in the regulatory research at ease.
            </p>
        </div>
    </div>
</section>




        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServicePage",
    data() {
      return {
        activeSection: "preclinical",
        services: [
        {
    id: 1,
    title: "Alternative to Animal Studies",
    image: require("@/assets/service1.jpg"), // ✅ THIS WORKS!
  },
          {
            id: 2,
            title: "Bioassay",
            image: require("@/assets/service2.jpg"),          },
          {
            id: 3,
            title: "Biomarker Studies",
            image: require("@/assets/service3.jpg"),          },
          {
            id: 4,
            title: "Cell Biology & biochemisty",
            image: require("@/assets/service4.jpg"),          },
        ],
      };
    },
    methods: {
      setActiveSection(section) {
        this.activeSection = section;
      },
      goToServiceDetails(id) {
        this.$router.push({ name: "ServiceDetails", params: { id } });
      },
    },
    mounted() {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        this.activeSection = hash;
      }
  
      window.addEventListener("hashchange", () => {
        const newHash = window.location.hash.replace("#", "");
        this.activeSection = newHash || "preclinical";
      });
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #005f80;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.1rem;
  }
  .text-justify {
    text-align: justify;
  }
  h2 {
  color: #005f80;
  font-weight: bold;
}
p {
  font-size: 1.1rem;
  text-align: justify;
}
.small-img {
  max-width: 80%; /* Reduce image size */
  height: auto;
  display: block;
  margin: 0 auto; /* Center images */
}
/* Main Heading Styling */
.main-heading {
  color: #e67e22;
  font-weight: bold;
  font-size: 1.8rem;
}

/* Box Styling */
.box {
  background-color: #fff3e0;
  border-left: 6px solid #e67e22;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

/* Category Heading */
.category {
  background-color: #e67e22;
  color: white;
  padding: 8px;
  border-radius: 5px;
  font-size: 1rem;
}

/* List Styling */
ul {
  list-style: none;
  padding-left: 0;
}
li {
  font-size: 1rem;
  padding: 5px 0;
}
/* Section Title */
.section-title {
  color: 005f80;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}

/* Paragraph Styling */
p {
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
}
/* Section Title */
.section-heading {
  font-style: italic;
  font-weight: bold;
  color: #3a2c83; /* Dark blue */
}

/* Centered Bold Text */
.bold-text {
  font-weight: bold;
  color: #2c3e50; /* Dark grey */
}

/* Image Styling */
img {
  max-height: 200px; /* Adjust as needed */
  object-fit: cover;
}
.section-container {
  margin: 50px auto;
  width: 90%;
}

/* Header */
.header-box {
  background-color: #0d3b66;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}

.header-text {
  color: white;
  font-weight: bold;
  font-size: 16px;
}

/* Section Container */
.section-container {
  margin: 50px auto;
  width: 90%;
}

/* Header */
.header-box {
  background-color: #0d3b66;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}

.header-text {
  color: white;
  font-weight: bold;
  font-size: 16px;
}

/* Content Box */
.content-box {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* Text Content */
.text-content {
  width: 600%;
  text-align: justif;
}

.italic-text {
  font-style: italic;
  font-weight: bold;
  color: #3a2c83;
  text-align: justify;
}

.image-box {
    width: 55%; /* Increased from 35% */
    display: flex;
    justify-content: center;
    align-items: center;
}

.side-image {
    width: 100%; /* Ensures full width usage */
    height: auto; /* Maintains aspect ratio */
    object-fit: contain; /* Prevents cropping */
    border-radius: 10px;
}

.research-section {
    padding: 50px 0;
    background-color: #f0f0f0; /* Light gray background */
    text-align: center;
}

.image-box {
    text-align: center;
    width: 100%;
}

.research-image {
    width: 100%;  /* Ensures full width */
    max-width: 14000px;  /* Increase size as needed */
    height: auto;  /* Adjust height dynamically */
    display: block;
    object-fit: cover;  /* Prevents cropping */
    border-radius: 8px;
    margin: 0 auto;
}

.research-image {
    width: 100%; /* Makes image responsive */
    height: auto; /* Prevents cropping */
    display: block;
    max-width: 1200px; /* Adjust width limit */
    border-radius: 8px;
    margin: 0 auto;
}

.text-box {
    padding: 30px;
    background-color: #e0e0e0;
    border-radius: 8px;
    font-family: "Times New Roman", serif;
    text-align: justify;
    max-width: 1200px;
    margin: 20px auto;
}


  </style>
  