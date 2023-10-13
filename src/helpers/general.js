import axios from 'axios'

export function initialize(store, router) {
  document.title = import.meta.env.VITE_APP_NAME
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND_HOST

  router.beforeEach(async (to, from, next) => {
    const login = to.matched.some((record) => record.meta.login)
    const currentUser = store.$state.isLogged

    if (login && !currentUser) {
      store.$state.isLogged = 0
      next('/login')
    } else if (to.path == '/login' && currentUser) {
      next('/admin_panel')
    } else if (to.path == '/signup/form' && !store.$state.testName) {
      next('/')
    } else if (to.path == '/signup/phone' && !store.$state.loginForm.phone) {
      next('/')
    } else if (to.path == '/quiz' && !store.$state.verify) {
      next('/')
    } else {
      next()
    }
  })

  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  })

  axios.interceptors.response.use(null, (error) => {
    if (error.response.status == 401) {
      store.LOGOUT()
      router.push('/login')
    }

    return Promise.reject(error)
  })
}

export function setAuthorization(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
