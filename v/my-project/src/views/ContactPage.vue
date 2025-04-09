<template>
  <div class="banner-container mb-4">
      <img
        src="@/assets/about1.jpeg"
        alt="Banner"
        class="img-fluid w-100 banner-img"
      />
    </div>
   
    <div class="container my-5">
      <h2 class="fw-bold mb-4">CONTACT US</h2>
  
      <div class="d-flex flex-column flex-md-row align-items-start justify-content-center">
        
        <!-- Map Section -->
        <div class="map-container mb-4 mb-md-0 me-md-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.037460123625!2d77.0845282145977!3d13.124917515057996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1c3f04c4de2cb%3A0xf4f176f8892b2990!2sChromed%20Biosciences!5e0!3m2!1sen!2sin!4v1649492073082!5m2!1sen!2sin"
            width="800"
            height="350"
            style="border:0; border-radius: 8px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
  
        <!-- Office Address Section -->
        <div class="address-container ps-md-4">
          <h4 class="fw-bold mb-3">Office Address</h4>
          <p class="mb-2"><strong>Chromed Biosciences</strong></p>
          <p class="mb-2">Plot No. C 38, KIADB Industrial Area,</p>
          <p class="mb-2">Hirehalli, Mydala, Karnataka 572168</p>
          <p class="mb-2"><strong>Phone:</strong> +91-9019923541</p>
          <p class="mb-2"><strong>Email:</strong> info@chromedbio.com</p>
        </div>
  
      </div>
    </div>
    <!--FORM-->
    <div class="container my-5">
    <h2 class="text-center mb-4">Any Enquree</h2>
    <div class="row">
      <!-- Left Column: Office Information -->
      <div class="col-md-5">
        <ul class="list-unstyled">
          <li class="mb-4 d-flex">
            <img src="https://img.icons8.com/color/48/000000/marker.png" alt="Address Icon" class="me-3" />
            <div>
              <strong>Chromed Biosciences Pvt. Ltd.</strong><br>
              #38 C, KIADB Hirehalli Industrial Area,<br>
              Tumkur - 572168. Karnataka, India.
            </div>
          </li>

          <li class="mb-4 d-flex">
            <img src="https://img.icons8.com/color/48/000000/phone.png" alt="Phone Icon" class="me-3" />
            <div>
              +91-9019923541 / 42<br>
              +91-9019923543 / 55
            </div>
          </li>

          <li class="mb-4 d-flex">
            <img src="https://img.icons8.com/color/48/000000/new-post.png" alt="Email Icon" class="me-3" />
            <div>
              info@chromedbio.com<br>
              bd@chromedbio.com
            </div>
          </li>

          <li class="mb-4 d-flex">
            <img src="https://img.icons8.com/color/48/000000/clock--v1.png" alt="Clock Icon" class="me-3" />
            <div>
              Monday to Friday: 9:00 AM - 6:00 PM (IST)<br>
              Saturday: 9:00 AM - 1:00 PM (IST)<br>
              Closed on Sundays and Public Holidays
            </div>
          </li>

          <li class="mb-4 d-flex">
            <img src="https://img.icons8.com/color/48/000000/domain.png" alt="Website Icon" class="me-3" />
            <div>
              chromedbio.com
            </div>
          </li>
        </ul>
      </div>
      

      <!-- Right Column: Contact Form -->
      <div class="col-md-7">
        <p>
          Thank you for your interest in Chromed Biosciences Pvt. Ltd. If you have any inquiries, requests for quotations, or would like to learn more about our services, please feel free to contact us using the information provided below. Our dedicated team is here to assist you and address any questions or concerns you may have.
        </p>

        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Your name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name" />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Your email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" />
          </div>

          <div class="mb-3">
            <label for="contact" class="form-label">Your Contact Number</label>
            <input type="text" class="form-control" id="contact" placeholder="Enter your contact number" />
          </div>

          <div class="mb-3">
            <label class="form-label">Services Looking For (required)</label>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="training" />
              <label class="form-check-label" for="training">Training</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="internship" />
              <label class="form-check-label" for="internship">Internship Programs</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="preclinical" />
              <label class="form-check-label" for="preclinical">Pre Clinical Research Services</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="sendServices" />
              <label class="form-check-label" for="sendServices">SEND SERVICES</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="otherEnquires" />
              <label class="form-check-label" for="otherEnquires">Other Enquiries</label>
            </div>
          </div>

          <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" class="form-control" id="subject" placeholder="Enter subject" />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Your message (optional)</label>
            <textarea class="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" class="btn btn-primary">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "ContactPage",
  };
  </script>
  
  <style scoped>
 h2 {
  font-size: 28px;
}

iframe {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.address-container p {
  font-size: 14px;
  color: #333;
}

.map-container {
  flex-shrink: 0;
}

.banner-img {
  width: 100%;
  height: 300px; /* Adjust the height as needed */
  object-fit: cover;
  border-radius: 5px;
}

img {
  width: 40px;
  height: 40px;
}

ul {
  padding-left: 100; /* Seems like a typo. Use: padding-left: 100px; */
}

  </style>
  