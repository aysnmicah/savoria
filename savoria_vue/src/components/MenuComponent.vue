<template>
  <div>
    <!-- Other code for headers, etc. -->
    <section class="menu section-padding">
      <div class="container">
        <div class="container section-title" data-aos="fade-up">
          <h2>Our Menu</h2>
          <p><span>Check Our</span> <span class="description-title">Savoria Menu</span></p>
        </div><!-- End Section Title -->

        <!-- Render items within each category inline -->
        <div v-for="category in groupedMenuItems" :key="category.name" class="menu-category">
          <h2 class="mb-lg-5 mb-4 text-center">{{ category.name }} Menu</h2>
          <div class="row gy-4">
            <div v-for="item in category.items" :key="item._id" class="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
              <div class="menu-thumb card shadow-sm">
                <img :src="`http://localhost:5000${item.image}`" class="card-img-top menu-image" alt="">

                <div class="card-body">
                  <h5 class="card-title name">{{ item.name }}</h5>
                  <p class="card-text descript">{{ item.description }}</p>
                  <p class="price-tag"><small>₱</small>{{ item.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
import axios from 'axios';

export default {
  name: "MenuComponent",
  data() {
    return {
      menuItems: [],
    };
  },
  computed: {
    groupedMenuItems() {
      // Group menu items by category
      const categories = ["Starters","Breakfast", "Lunch", "Dinner"];
      return categories.map(category => ({
        name: category,
        items: this.menuItems.filter(item => item.category === category),
      }));
    },
  },
  methods: {
    async fetchMenuItems() {
      try {
        const response = await axios.get('http://localhost:5000/menu');
        this.menuItems = response.data;
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    },
  },
  created() {
    this.fetchMenuItems();
  },
};
</script>

<style scoped>
.menu-category{
  margin-bottom: 50px;
}
.menu-category h2{
  font-weight: bolder;
  color: crimson;
}
.menu-thumb {
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.menu-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1em;
}

.name{
  color: crimson;
  text-align: center;
  font-size: 2em;
  margin: 0 auto;
  margin-top: 15px;
}

.descript{
  margin-top: 15px;
}

.price-tag {
  font-weight: bold;
  color:#333;
  font-size: 1.25em;
}
</style>
