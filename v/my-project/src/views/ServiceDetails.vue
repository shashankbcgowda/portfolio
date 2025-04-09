<template>
    <div class="container my-5">
      <h2 class="text-primary fw-bold mb-4">{{ service.title }}</h2>
  
      <div class="row align-items-center">
        <div class="col-md-6">
          <img
            :src="service.image"
            alt="Service Image"
            class="img-fluid rounded"
          />
        </div>
        <div class="col-md-6">
          <p class="mt-4 text-justify">{{ service.description }}</p>
          <router-link to="#" class="btn btn-primary mt-3">Back to Services</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServiceDetails",
    data() {
      return {
        services: [
        {
    id: 1,
    title: "Alternative to Animal Studies",
    description: "Seeking alternatives to animal studies is pivotal in modern research, reflecting an ethical commitment to animal welfare while advancing scientific progress At Chromed Biosciences, we embrace innovative approaches to minimize reliance on animal testing while maintaining the rigor and reliability of our research. Our suite of alternative methods includes sophisticated in vitro assays, organ-on-a-chip technology, computational modeling, and human-based clinical studies.These alternative approaches offer numerous advantages, including increased efficiency, reduced costs, and enhanced translatability to human physiology. By harnessing cutting-edge technologies and adopting a holistic approach to research, Chromed Biosciences is at the forefront of promoting cruelty-free research methodologies. Our commitment to excellence extends beyond traditional paradigms, ensuring that our clients can confidently pursue their research goals while upholding the highest standards of ethical integrity and scientific rigor. Trust Chromed Biosciences to be your partner in pioneering alternative methods and driving progress in biomedical research ",
    image: require("@/assets/service1.jpg"), // ✅ THIS WORKS!
  },
          {
            id: 2,
            title: "Bioassay",
            description: "At Chromed Biosciences, we excel in providing cutting-edge bioassay services that drive innovation in drug discovery and development. With a dedicated team of experts and state-of-the-art facilities, we offer comprehensive solutions tailored to meet the unique needs of our clients. From potency testing to efficacy assessments, our bioassay services deliver precise and reliable data, enabling our clients to make informed decisions and accelerate their research pipelines.Our commitment to excellence and innovation ensures that our bioassay services remain at the forefront of the industry. Whether you’re in pharmaceuticals, biotechnology, or medical devices, Chromed Biosciences is your trusted partner for high-quality, customized bioassays. With our expertise, you can navigate the complexities of drug development with confidence, bringing safe and effective therapies to market faster than ever before.",
            image: require("@/assets/service2.jpg"),
          },
          {
            id: 3,
            title: "Biomarker Studies",
            description: "TThe adoption of biomarkers holds promise in facilitating the availability of safer and more efficacious drug and biotechnology products, guiding dose selection, and refining their benefit-risk profile,” as outlined by the FDA ICH E16 guidelines.The evolution from a “one drug fits all” approach in drug discovery to personalized medicine marks a significant triumph in modern pharmaceuticals. Biomarkers serve as pivotal agents in driving this shift.The objective of integrating biomarkers into research endeavors is to streamline the drug development process, expediting the production of drug therapies while upholding safety standards. Biomarkers enhance animal testing efficacy and refine human risk assessment practices. At Chromed Biosciences, we provide a comprehensive array of safety, efficacy, and surrogate biomarker services tailored to meet the evolving needs of drug discovery and development.",
            image: require("@/assets/service3.jpg"),
          },
          {
            id: 4,
            title: "Cell Biology & biochemisty",
            description: "Cell biology and biochemistry are fundamental disciplines in understanding the intricate mechanisms underlying life processes at the molecular level.At Chromed Biosciences, we specialize in providing comprehensive services in cell biology and biochemistry, harnessing cutting-edge techniques and advanced methodologies to unlock the mysteries of cellular function and molecular interactions.Our expert team collaborates with clients across various sectors, including pharmaceuticals, biotechnology, and academia, to address key research questions and advance scientific knowledge. From elucidating signaling pathways to studying protein structure and function, our services cover a wide range of applications. Whether you require cell culture services, protein expression and purification, enzyme assays, or molecular profiling, Chromed Biosciences offers tailored solutions to meet your specific research needs.",
            image: require("@/assets/service4.jpg"),
          },
          {
            id: 5,
            title: "Service 5",
            description: "This is the detailed description for Service 5.",
            image: "https://via.placeholder.com/400x300?text=Service+5",
          },
          // Add up to 20 services like above...
        ],
        service: {},
      };
    },
    mounted() {
      const id = parseInt(this.$route.params.id);
  
      // Find the service with matching id
      const foundService = this.services.find((s) => s.id === id);
  
      if (foundService) {
        this.service = foundService;
      } else {
        // If no service found, redirect or show default
        this.$router.push("/");
      }
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
  </style>
  