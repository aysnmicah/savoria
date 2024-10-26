<template>
  <div id="app">
    <!-- Navbar -->
    <header id="header" class="header d-flex align-items-center sticky-top">
      <div class="container position-relative d-flex align-items-center justify-content-between">

        <router-link to="/" class="logo d-flex align-items-center me-auto me-xl-0">
          <h1 class="sitename">Savoria</h1>
          <span>.</span>
        </router-link>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/menu">Menu</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <router-link class="btn-getstarted" to="/book">Book a Table</router-link>

      </div>
    </header>

    <!-- Main content area for routed components -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Add your styles here */
</style>
