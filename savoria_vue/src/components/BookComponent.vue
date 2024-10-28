<template>
  <div>
    <main class="main">
      <section id="book-a-table" class="book-a-table section">
        <div class="container section-title" data-aos="fade-up">
          <h2>Book A Table</h2>
          <p><span>Book Your</span> <span class="description-title">Stay With Us<br></span></p>
        </div>
        <div class="container">
          <div class="row g-0" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-4 reservation-img"></div>
            <div class="col-lg-8 d-flex align-items-center reservation-form-bg" data-aos="fade-up" data-aos-delay="200">
              <form @submit.prevent="handleSubmitForm" class="php-email-form">
                <div class="row gy-4">
                  <div class="col-lg-4 col-md-6">
                    <label for="name">Your Name</label>
                    <input id="name" type="text" v-model="booking.name" class="form-control" placeholder="Your Name" required />
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <label for="email">Your Email</label>
                    <input id="email" type="email" v-model="booking.email" class="form-control" placeholder="Your Email" required />
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <label for="phone">Your Phone</label>
                    <input id="phone" type="text" v-model="booking.phone" class="form-control" placeholder="Your Phone" required />
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <label for="date">Date</label>
                    <input id="date" type="date" v-model="booking.date" class="form-control" required />
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <label for="time">Time</label>
                    <input id="time" type="time" v-model="booking.time" class="form-control" required />
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <label for="people"># of people</label>
                    <input id="people" type="number" v-model="booking.people" class="form-control" placeholder="# of people" required />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" v-model="booking.message" rows="5" placeholder="Message"></textarea>
                </div>
                <div class="text-center mt-3">
                  <div class="error-message" v-if="error">{{ error }}</div>
                  <div class="sent-message" v-if="success">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                  <button type="submit" :disabled="loading">Book a Table</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
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
import axios from 'axios';

export default {
  name: "BookComponent",
  data() {
    return {
      booking: {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: 1,
        message: '',
      },
      loading: false,
      success: false,
      error: null,
    };
  },
  methods: {
  async handleSubmitForm() {
    this.loading = true;
    this.success = false;
    this.error = null;

    const apiURL = 'http://localhost:5000/api/submit-booking';

    console.log("Booking Data:", this.booking); 

    try {
      const response = await axios.post(apiURL, this.booking);
      console.log(response.data); 
      this.success = true;

      // Show success alert
      alert('Booking created successfully!'); 

      this.booking = { name: '', email: '', phone: '', date: '', time: '', people: 1, message: '' }; 
    } catch (err) {
      if (err.response) {
        this.error = err.response.data.error || 'An error occurred. Please try again.';
      } else {
        this.error = 'No response from server. Please check your connection.';
      }
      console.error(err); 
    } finally {
      this.loading = false;
    }
  }
}

};
</script>

<style scoped>
.reservation-img {
  background-image: url('../../public/img/reservation.jpg');
  background-size: cover;
  background-position: center;
}

.error-message {
  color: red;
}
.sent-message {
  color: green;
}
</style>
