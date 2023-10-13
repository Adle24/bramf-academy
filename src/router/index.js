import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignUpForm from '../views/SignUpForm.vue'
import Quiz from '../views/Quiz.vue'
import Result from '../views/Result.vue'
import PhoneComfirmation from '../components/PhoneComfirmation.vue'
import SignForm from '../components/SignForm.vue'

import AdminPanel from '../views/AdminPanel.vue'
import { Login } from '../components/login'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:testName', // adjustment, mensurer, seller
      name: 'home',
      component: Home
    },

    {
      path: '/signup',
      name: 'signup',
      component: SignUpForm,
      children: [
        {
          path: 'form',
          component: SignForm
        },
        {
          path: 'phone',
          component: PhoneComfirmation
        }
      ]
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
    },

    {
      path: '/admin_panel',
      name: 'Admin',
      component: AdminPanel,
      meta: {
        login: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        login: false
      }
    }
  ]
})

export default router
