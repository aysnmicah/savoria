<template>
    <div>
        <main class="main">

<!-- Book A Table Section -->
<section id="book-a-table" class="book-a-table section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Book A Table</h2>
      <p><span>Book Your</span> <span class="description-title">Stay With Us<br></span></p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="row g-0" data-aos="fade-up" data-aos-delay="100">

        <div class="col-lg-4 reservation-img"></div>

        <div class="col-lg-8 d-flex align-items-center reservation-form-bg" data-aos="fade-up" data-aos-delay="200">
          <form action="forms/book-a-table.php" method="post" role="form" class="php-email-form">
            <div class="row gy-4">
              <div class="col-lg-4 col-md-6">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="">
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="">
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone" required="">
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="date" name="date" class="form-control" id="date" placeholder="Date" required="">
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="time" class="form-control" name="time" id="time" placeholder="Time" required="">
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="number" class="form-control" name="people" id="people" placeholder="# of people" required="">
              </div>
            </div>

            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
            </div>

            <div class="text-center mt-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
              <button type="submit">Book a Table</button>
            </div>
          </form>
        </div><!-- End Reservation Form -->

      </div>

    </div>

  </section><!-- /Book A Table Section -->

</main>

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
          <strong>Email:</strong> <span>info@example.com</span><br>
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
  export default {
    name: "BookComponent",
  };
  </script>
  
  <style scoped>
.reservation-img {
  background-image: url('../../public/img/reservation.jpg');
  background-size: cover;
  background-position: center;
}
  </style>
  