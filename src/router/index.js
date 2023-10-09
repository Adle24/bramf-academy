import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignUpForm from '../views/SignUpForm.vue'
import Quiz from '../views/Quiz.vue'
import Result from '../views/Result.vue'

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
    },
    {
      path: '/finish',
      name: 'finish',
      component: Result
    }
  ]
})

export default router
