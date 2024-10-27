<template>
  <div>
      <main class="main">

          <!-- Contact Section -->
          <section id="contact" class="contact section">

              <!-- Section Title -->
              <div class="container section-title" data-aos="fade-up">
                  <h2>Contact</h2>
                  <p><span>Need Help?</span> <span class="description-title">Contact Us</span></p>
              </div><!-- End Section Title -->

              <div class="container" data-aos="fade-up" data-aos-delay="100">

                  <div class="mb-5">
                      <iframe style="width: 100%; height: 400px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen=""></iframe>
                  </div><!-- End Google Maps -->

                  <div class="row gy-4">

                      <div class="col-md-6">
                          <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                              <i class="icon bi bi-geo-alt flex-shrink-0"></i>
                              <div>
                                  <h3>Address</h3>
                                  <p>A108 Adam Street, New York, NY 535022</p>
                              </div>
                          </div>
                      </div><!-- End Info Item -->

                      <div class="col-md-6">
                          <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                              <i class="icon bi bi-telephone flex-shrink-0"></i>
                              <div>
                                  <h3>Call Us</h3>
                                  <p>+1 5589 55488 55</p>
                              </div>
                          </div>
                      </div><!-- End Info Item -->

                      <div class="col-md-6">
                          <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                              <i class="icon bi bi-envelope flex-shrink-0"></i>
                              <div>
                                  <h3>Email Us</h3>
                                  <p>info@example.com</p>
                              </div>
                          </div>
                      </div><!-- End Info Item -->

                      <div class="col-md-6">
                          <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                              <i class="icon bi bi-clock flex-shrink-0"></i>
                              <div>
                                  <h3>Opening Hours<br></h3>
                                  <p><strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed</p>
                              </div>
                          </div>
                      </div><!-- End Info Item -->

                  </div>

                  <form @submit.prevent="handleSubmitForm" class="php-email-form" data-aos="fade-up" data-aos-delay="600">
                      <div class="row gy-4">

                          <div class="col-md-6">
                              <input type="text" v-model="contact.name" class="form-control" placeholder="Your Name" required>
                          </div>

                          <div class="col-md-6">
                              <input type="email" v-model="contact.email" class="form-control" placeholder="Your Email" required>
                          </div>

                          <div class="col-md-12">
                              <input type="text" v-model="contact.subject" class="form-control" placeholder="Subject" required>
                          </div>

                          <div class="col-md-12">
                              <textarea v-model="contact.message" class="form-control" rows="6" placeholder="Message" required></textarea>
                          </div>

                          <div class="col-md-12 text-center">
                              <div v-if="loading" class="loading">Loading...</div>
                              <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                              <div v-if="successMessage" class="sent-message">{{ successMessage }}</div>

                              <button type="submit" :disabled="loading">Send Message</button>
                          </div>

                      </div>
                  </form>

              </div>

          </section><!-- /Contact Section -->

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
  import axios from 'axios';

  export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      loading: false,
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
  async handleSubmitForm() {
    this.loading = true; 
    this.successMessage = '';
    this.errorMessage = '';

    const apiURL = 'http://localhost:5000/api/submit-contact';

    try {
      const response = await axios.post(apiURL, this.contact);
      this.successMessage = response.data.msg; 
      alert(this.successMessage); 
      this.contact = { name: '', email: '', subject: '', message: '' }; 
    } catch (error) {
      console.error(error);
      this.errorMessage = 'Error submitting form: ' + (error.response.data.msg || error.message); 
    } finally {
      this.loading = false; 
    }
  },
},

};
</script>

<style scoped>
/* Add specific styles for the contact form and information here if needed */
</style>
