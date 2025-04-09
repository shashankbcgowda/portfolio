import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import FacilitiesPage from '../views/FacilitiesPage.vue';
import CareersPage from '../views/CareersPage.vue';
import ContactPage from '../views/ContactPage.vue';
import BusinessPage from '../views/BusinessPage.vue';
import ServicePage from '@/views/ServicePage.vue';
import ServiceDetails from '@/views/ServiceDetails.vue';




const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/Facilities', name: 'FacilitiesPage', component: FacilitiesPage },
  { path: '/Careers', name: 'CareersPage', component: CareersPage },
  { path: '/Contact', name: 'ContactPage', component: ContactPage },
  { path: '/business-enquiry', name: 'BusinessPage', component: BusinessPage },
  { path: '/service', name: 'ServicePage', component: ServicePage },
  { path: '/service', name: 'ServiceDetails', component: ServiceDetails },
  {
    path: "/service/:id",
    name: "ServiceDetails",
    component: ServiceDetails,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
