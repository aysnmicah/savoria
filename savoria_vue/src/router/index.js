import { createRouter, createWebHistory } from 'vue-router';
import IndexComponent from '../components/IndexComponent.vue';
import MenuComponent from '../components/MenuComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
import BookComponent from '../components/BookComponent.vue';

const routes = [
  { path: '/', name: 'Home', component: IndexComponent },
  { path: '/menu', name: 'Menu', component: MenuComponent },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/contact', name: 'Contact', component: ContactComponent },
  { path: '/book', name: 'Book', component: BookComponent },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
