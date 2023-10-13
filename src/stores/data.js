import axios from 'axios'

import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  state: () => ({
    isLogged: 0,
    firstLoad: 0,
    userList: [],

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
    setTestName(testNameParam) {
      this.testName = testNameParam
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
            console.log(error)
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
          console.log(response)
          if (response['status'] === 200) {
            console.log('OK')
          }
        })
        .catch((error) => {})
    },

    async sendSms(payload) {
      await axios
        .post('/api/register', payload)
        .then((response) => {
          console.log(response)
          if (response['status'] === 200) {
            console.log('OK')
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
