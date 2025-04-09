<template>
  <footer class="footer-section">
    <div class="container">
      <div class="row">

        <!-- Our Commitment -->
        <div class="col-md-4 col-sm-12 mb-4">
          <h5>OUR COMMITMENT</h5>
          <hr class="underline" />
          <p>
            With a commitment to scientific excellence and a focus on collaboration, Chromed Biosciences leverages cutting-edge technologies and interdisciplinary approaches to tackle complex medical challenges. Through strategic partnerships and a dedication to ethical practices, the company aims to make significant contributions to the field of biotechnology and ultimately, to global health.
          </p>
        </div>

        <!-- Downloads -->
        <div class="col-md-4 col-sm-12 mb-4">
          <h5>DOWNLOADS</h5>
          <hr class="underline" />
          <ul class="footer-links">
            <li><a href="#">Company Brochure</a></li>
            <li><a href="#">Medical Device Testing</a></li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="col-md-4 col-sm-12 mb-4 ">
          <h5>QUICK LINKS</h5>
          <hr class="underline" />
          <ul class="footer-links">
            <li><a href="#">EHS Policy</a></li>
            <li><a href="#">Customer Privacy Policy</a></li>
            <li><a href="#">Animal Welfare Policy</a></li>
            <li><a href="#">Website Privacy Policy</a></li>
          </ul>
        </div>

      </div>
      <hr class="underline-large" />

      <!-- Social Icons -->
      <div class="footer-social text-center">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-google-plus-g"></i></a>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom text-center">
        <p>
          Copyrights © 2020 - 25,
          All Rights Reserved by
          <a href="https://chromedbio.com/" target="_blank" class="company">Chromed Biosciences Pvt. Ltd.</a>
 |
 <span class="developed">Developed by: <b><a href="https://www.quantumberg.com/" target="_blank" style="color: inherit; text-decoration: none;">QUANTUMBER TECHNOLOGIES</a></b></span>

        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>
.footer-section {
  background-color: #0f3044;
  color: #b1bbc4;
  padding: 40px 0;
  font-size: 14px;
}

.footer-section h5 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 15px;
}

.underline {
  width: 50px;
  border: 1px solid #27aae1;
  margin-bottom: 15px;
}

.underline-large {
  width: 1300px;
  border: 1px solid #27aae1;
  margin-bottom: 15px;
}
.footer-section p {
  text-align: justify;
  line-height: 1.6;
}

.footer-links {
  list-style-type: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links li a {
  color: #b1bbc4;
  text-decoration: none;
  transition: 0.3s;
}

.footer-links li a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.footer-social {
  margin: 30px 0;
}

.footer-social a {
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 50%;
  transition: 0.4s;
}

.footer-social a:hover {
  background-color: #27aae1;
  border-color: #27aae1;
  color: #fff;
}

.footer-bottom {
  font-size: 13px;
}

.company {
  color: #27aae1;
}

.developed b {
  color: #ffffff;
}


</style>
