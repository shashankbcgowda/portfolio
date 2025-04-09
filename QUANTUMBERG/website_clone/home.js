// Simple intersection observer to trigger animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-map-section').forEach(section => {
    observer.observe(section);
});
const services = [
    {
      title: "Consulting And Strategy",
      img: "images/ConsultingAndStrategy.png" ,
      points: [
        "Technology and architecture consulting",
        "Project planning and roadmapping",
        "Feasibility studies",
        "Digital transformation strategies",
        "Scalability and optimization assessments"
      ]
    },
    {
      title: "User Experience (UX) And UI Design",
      img: "images/UIUX-design-Trends.png",
      points: [
        "User research and usability testing",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Responsive design",
        "Accessibility and user-centric design"
      ]
    },
    {
      title: "Full-Stack Application Development",
      img: "images/Full-Stack-Developer.jpg",
      points: [
        "Frontend and backend development",
        "API integration",
        "Database design",
        "Scalable architecture"
      ]
    },
    {
      title: "Testing And Quality Assurance",  
      img: "images/QA.jpeg",
      points: [
        "Automated testing",
        "Manual testing",
        "Performance testing",
        "Security testing"
      ]
    },
    {
      title: "Cloud Services And Deployment",
      img: "images/cloud.jpeg",
      points: [
        "Cloud migration",
        "Deployment strategies",
        "Serverless architecture",
        "Cost optimization"
      ]
    },
    {
      title: "Maintenance And Support",
      img: "images/support.jpeg",
      points: [
        "24/7 monitoring",
        "Bug fixes and updates",
        "Performance optimization",
        "Security patches"
      ]
    },
    {
      title: "Client Training",
      img: "images/client.jpeg",
      points: [
        "Workshops and seminars",
        "Documentation",
        "Hands-on training",
        "Continuous learning support"
      ]
    }
  ];
  
  // Store the image element for reuse
  const imgEl = document.getElementById("serviceImage");
  
  function hoverService(index) {
    // Update Image
    imgEl.style.opacity = 0;
    setTimeout(() => {
      imgEl.src = services[index].img;
      imgEl.style.opacity = 1;
    }, 300);
  
    // Show only the hovered points
    for (let i = 0; i < services.length; i++) {
      const pointsEl = document.getElementById(`points-${i}`);
      if (i === index) {
        pointsEl.classList.remove('d-none');
        if (pointsEl.childElementCount === 0) {
          services[index].points.forEach(point => {
            const li = document.createElement("li");
            li.textContent = point;
            pointsEl.appendChild(li);
          });
        }
      } else {
        pointsEl.classList.add('d-none');
        pointsEl.innerHTML = "";
      }
    }
  }
  
  function resetService() {
    // Reset image to default
    imgEl.style.opacity = 0;
    setTimeout(() => {
      imgEl.src = "C:\Users\shash\Desktop\website_clone\images\services.jpeg";
      imgEl.style.opacity = 1;
    }, 200);
  
    // Hide all key points
    for (let i = 0; i < services.length; i++) {
      const pointsEl = document.getElementById(`points-${i}`);
      pointsEl.classList.add('d-none');
      pointsEl.innerHTML = "";
    }
  }
  


  // Pause scrolling on hover
//const rows = document.querySelectorAll('.scroll-row');

//rows.forEach(row => {
  //row.addEventListener('mouseenter', () => {
    //row.style.animationPlayState = 'paused';
  //});
  //row.addEventListener('mouseleave', () => {
   // row.style.animationPlayState = 'running';
  //});
//});
