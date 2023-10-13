import axios from 'axios'
import { LOGOUT } from '../components/login'

export function initialize(store, router) {
  document.title = import.meta.env.VITE_APP_NAME
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND_HOST

  router.beforeEach(async (to, from, next) => {
    const login = to.matched.some((record) => record.meta.login)
    const currentUser = store.$state.isLogged

    console.log(to, from, next)

    console.log(login, currentUser)

    if (login && !currentUser) {
      store.$state.isLogged = 0
      next('/login')
    } else if (to.path == '/login' && currentUser) {
      next('/admin_panel')
    } else if (to.path == '/signup/form' && !store.$state.testName) {
      next(from.path)
    } else if (to.path == '/signup/phone' && !store.$state.loginForm.phone) {
      next(from.path)
    } else if (to.path == '/quiz' && !store.$state.verify) {
      next(from.path)
    } else if (to.path == '/finish' && !store.$state.verify) {
      next(from.path)
    } else {
      next()
    }
  })

  axios.interceptors.request.use((config) => {
    console.log(config)
    // const token = localStorage.getItem('token')
    // config.headers['Authorization'] = `Bearer ${token}`
    return config
  })

  axios.interceptors.response.use(null, (error) => {
    console.log(error)

    if (error.response.status == 401) {
      // store.state.helpers.first_load = 0;
      // store.commit("logout");
      // store.dispatch(LOGOUT);
      // router.push("/login");
    }
    if (error.response.status == 400) {
      // router.push(error.response.data.route);
    }

    return Promise.reject(error)
  })
}

export function setAuthorization(token) {
  console.log(token)
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
