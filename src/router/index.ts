import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Home2 from '../views/Home2.vue';
import Home3 from '../views/Home3.vue';
import Home4 from '../views/Home4.vue';
import Home5 from '../views/Home5.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/home2',
    name: 'Home2',
    component: Home2,
  },
  {
    path: '/home3',
    name: 'Home3',
    component: Home3,
  },
  {
    path: '/home4',
    name: 'Home4',
    component: Home4,
  },
  {
    path: '/home5',
    name: 'Home5',
    component: Home5,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
