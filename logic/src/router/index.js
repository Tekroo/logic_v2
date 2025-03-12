import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import RealisationView from '@/views/RealisationView.vue'
import ServicesView from '@/views/ServicesView.vue'
import RealisationViewDetail from '@/components/RealisationViewDetail.vue'
import TeamView from '@/views/TeamView.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/services', name: 'services', component: ServicesView },
  { path: '/realisation', name: 'realisation', component: RealisationView },
  { path: '/realisations/:id', name: 'realisationdetail', component: RealisationViewDetail }, // Route dynamique
  { path: '/team', name: 'team', component: TeamView },
  { path: '/notfound', name: 'notfound', component: PageNotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Retourne la position de défilement à { top: 0 } lors de la navigation
    return { top: 0 };
  },
});

export default router
