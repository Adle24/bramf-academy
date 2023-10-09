import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignUpForm from '../views/SignUpForm.vue'
import Quiz from '../views/Quiz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpForm
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    }
  ]
})

export default router
