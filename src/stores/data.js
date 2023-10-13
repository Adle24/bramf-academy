import axios from 'axios'

import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    firstLoad: 0,
    userList: null,
    isLogged: localStorage.isLogged !== undefined,
    userName: localStorage.userName === undefined ? 'No name' : localStorage.userName,
    userInfo: localStorage.userInfo === undefined ? null : JSON.parse(localStorage.userInfo),
    token: localStorage.token === undefined ? null : localStorage.token,

    questions: null,

    verify: null,
    loginForm: {
      username: null,
      phone: null,
      iin: null
    },

    testName: null,
    testIds: {
      adjustment: 1,
      measurer: 2,
      seller: 3
    }
  }),
  getters: {},
  actions: {
    SET_IS_LOGGED({ userName = 'No name', userInfo = null, token = null }) {
      this.isLogged = true
      localStorage.setItem('isLogged', 'true')
      this.userName = userName
      this.userInfo = userInfo
      localStorage.setItem('userName', userName)
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      localStorage.setItem('token', token)

      this.token = token
    },
    LOGOUT() {
      this.isLogged = false
      localStorage.removeItem('isLogged')
      this.userName = 'No name'
      this.userInfo = null
      localStorage.removeItem('userName')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('token')

      this.token = null
    },
    async GET_RESULTS() {
      return new Promise((resolve) => {
        axios
          .get('api/admin/results')
          .then((response) => {
            if (response['status'] === 200) {
              this.userList = response.data
              resolve(true)
            } else {
              resolve(false)
            }
          })
          .catch((error) => {
            resolve(false)
          })
      })
    },

    registerAndSendSms(payload) {
      return new Promise((resolve) => {
        axios
          .post('/api/register', payload)
          .then((response) => {
            if (response['status'] === 200) {
              resolve(true)
            } else {
              resolve(false)
            }
          })
          .catch((error) => {
            resolve(false)
          })
      })
    },

    verifyPhone(phone, code) {
      return new Promise((resolve) => {
        const payload = {
          phone: phone,
          code: code
        }

        axios
          .post('/api/verify', payload)
          .then((response) => {
            if (response['status'] === 200) {
              this.verify = true
              resolve(true)
            } else {
              resolve(false)
            }
          })
          .catch((error) => {
            resolve(false)
          })
      })
    },

    async getQuestions() {
      return new Promise((resolve) => {
        const payload = {
          params: {
            phone: this.loginForm.phone,
            id_test_list: this.testIds[this.testName]
          }
        }

        axios
          .get('/api/question/list', payload)
          .then((response) => {
            if (response['status'] === 200) {
              this.questions = response.data.questions
              resolve(true)
            } else {
              resolve(false)
            }
          })
          .catch((error) => {
            resolve(false)
          })
      })
    },

    async postQuestion(questionId, answerId) {
      const payload = {
        id_question: questionId,
        id_answer: answerId,
        id_test_list: this.testIds[this.testName],
        phone: this.loginForm.phone
      }

      await axios
        .post('/api/question/answer', payload)
        .then((response) => {
          if (response['status'] === 200) {
          }
        })
        .catch((error) => {})
    },

    async sendSms(payload) {
      await axios
        .post('/api/register', payload)
        .then((response) => {
          if (response['status'] === 200) {
          }
        })
        .catch((error) => {})
    }
  }
})

// /api/question/list?phone
// /api/question/answer
// {
//   "phone": "+77777777777",
//   "id_question": 1,
//   "id_answer": 3
// }
