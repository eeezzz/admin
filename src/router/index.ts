import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import LoveFlower from '../views/LoveFlower.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginPage },
    { path: '/loveflower', component: LoveFlower },
  ],
})
export default router
