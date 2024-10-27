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
