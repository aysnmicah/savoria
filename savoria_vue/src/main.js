import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Vendor CSS Files
import '@/assets/vendor/bootstrap/css/bootstrap.min.css';
import '@/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '@/assets/vendor/aos/aos.css';
import '@/assets/vendor/glightbox/css/glightbox.min.css';
import '@/assets/vendor/swiper/swiper-bundle.min.css';

// Import Main CSS File
import '@/assets/css/main.css';

// Optional: Import AOS, PureCounter, and any custom global styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from './assets/vendor/aos/aos.js';
import PureCounter from './assets/vendor/purecounter/purecounter_vanilla.js';
import Swiper from 'swiper';

// Initialize AOS and PureCounter when the app is created
const app = createApp(App);

app.use(router);
app.mount('#app');

const swiper = new Swiper('.swiper-container', {
    // Swiper options can be set here if not using in component
  });
// Initialize animations and counters
AOS.init();
new PureCounter();
