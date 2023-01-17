import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/LoginPage.vue";
import AddResto from './components/AddResto.vue';
import AboutResto from './components/AboutResto.vue';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: 'LoginPage',
    component: LoginPage,
    path: '/login'
  },
  {
    name: 'AboutResto',
    component: AboutResto,
    path: '/about-restaurant'
  },
  {
    name: 'AddResto',
    component: AddResto,
    path: '/add-restaurant/:id'
  },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router