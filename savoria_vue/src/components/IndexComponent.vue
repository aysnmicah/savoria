<template>
    <div>
      <main class="main">
        <!-- Hero Section -->
        <section id="hero" class="hero section light-background">
          <div class="container">
            <div class="row gy-4 justify-content-center justify-content-lg-between">
              <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">Enjoy Your Healthy<br>Delicious Food</h1>
                <p data-aos="fade-up" data-aos-delay="100">
                  Fresh, flavorful, and wholesome meals that nourish your body and delight your taste buds
                </p>
                <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                  <router-link to="/book" class="btn-get-started">Book a Table</router-link>
                  <router-link to="/menu" class="btn-watch-video d-flex align-items-center">See Our Menu</router-link>
                </div>
              </div>
              <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                <img src="../../public/img/hero-img.png" class="img-fluid animated" alt="Hero Image">
              </div>
            </div>
          </div>
        </section>
  
        <!-- Why Us Section -->
        <section id="why-us" class="why-us section light-background">

<div class="container">

  <div class="row gy-4">

    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
      <div class="why-box">
        <h3>Why Choose Savoria</h3>
        <p>
          Savoria offers fresh, locally sourced ingredients in innovative, flavorful dishes, making healthy eating enjoyable for everyone. With a warm atmosphere and a commitment to sustainability, we’re your go-to spot for nutritious meals that support your well-being and the planet.
        </p>
        <div class="text-center">
          <a href="./about" class="more-btn"><span>Learn More</span> <i class="bi bi-chevron-right"></i></a>
        </div>
      </div>
    </div><!-- End Why Box -->

    <div class="col-lg-8 d-flex align-items-stretch">
      <div class="row gy-4" data-aos="fade-up" data-aos-delay="200">

        <div class="col-xl-4">
          <div class="icon-box d-flex flex-column justify-content-center align-items-center">
            <i class="bi bi-heart"></i>
            <h4>Nutrient-Rich Meals</h4>
            <p>Our menu is designed to provide balanced, nutrient-dense meals that are both delicious and nourishing.</p>
          </div>
        </div><!-- End Icon Box -->

        <div class="col-xl-4" data-aos="fade-up" data-aos-delay="300">
          <div class="icon-box d-flex flex-column justify-content-center align-items-center">
            <i class="bi bi-currency-dollar"></i>
            <h4>Affordable Pricing</h4>
            <p>Enjoy wholesome, delicious meals without overspending. We believe healthy eating should be accessible to everyone</p>
          </div>
        </div><!-- End Icon Box -->

        <div class="col-xl-4" data-aos="fade-up" data-aos-delay="400">
          <div class="icon-box d-flex flex-column justify-content-center align-items-center">
            <i class="bi bi-emoji-grin"></i>
            <h4>Customized Options</h4>
            <p>Choose from a range of customizable meals to fit your dietary preferences, whether it’s vegan, gluten-free, or low-carb</p>
          </div>
        </div><!-- End Icon Box -->

      </div>
    </div>

  </div>

</div>

</section>
      
</main>

<!-- Footer Section -->
<footer id="footer" class="footer dark-background">

<div class="container">
  <div class="row gy-3">
    <div class="col-lg-3 col-md-6 d-flex">
      <i class="bi bi-geo-alt icon"></i>
      <div class="address">
        <h4>Address</h4>
        <p>#123 Street</p>
        <p>Angeles City, Pampanga, PH</p>
        <p></p>
      </div>

    </div>

    <div class="col-lg-3 col-md-6 d-flex">
      <i class="bi bi-telephone icon"></i>
      <div>
        <h4>Contact</h4>
        <p>
          <strong>Phone:</strong> <span>+1 5589 55488 55</span><br>
          <strong>Email:</strong> <span>savoria@gmail.com</span><br>
        </p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex">
      <i class="bi bi-clock icon"></i>
      <div>
        <h4>Opening Hours</h4>
        <p>
          <strong>Mon-Sat:</strong> <span>11AM - 23PM</span><br>
          <strong>Sunday</strong>: <span>Closed</span>
        </p>
      </div>
    </div>

    <div class="col-lg-3 col-md-6">
      <h4>Follow Us</h4>
      <div class="social-links d-flex">
        <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>

  </div>
</div>

<div class="container copyright text-center mt-4">
  <p>© <span>Copyright</span> <strong class="px-1 sitename">Savoria</strong> <span>All Rights Reserved</span></p>
</div>

</footer>

<!-- Scroll Top -->
<a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</div>
  </template>
  
  <script>
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  name: "IndexComponent",
  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 'auto',
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
  },
};
</script>
  
  <style scoped>
  </style>
  