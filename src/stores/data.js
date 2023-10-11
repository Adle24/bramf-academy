import { defineStore } from 'pinia'
import axios from 'axios'

export const useDataStore = defineStore('data', {
  state: () => ({
    phoneStore: ''
  }),
  getters: {},
  actions: {
    setPhone(phoneParam) {
      this.phoneStore = phoneParam
    },
    registerAndSendSms(phone, iin, name) {
      return new Promise(async (resolve, reject) => {
        await axios
          .post('http://185.146.3.144:8888/api/register', {
            phone: phone,
            iin: iin,
            username: name
          })
          .then((response) => {
            console.log(response)
            if (response['status'] === 200) {
              console.log('OK')
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
      return new Promise(async (resolve, reject) => {
        await axios
          .post('http://185.146.3.144:8888/api/verify', {
            phone: phone,
            code: code
          })
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

    async getQuestions() {
      await axios
        .get('http://185.146.3.144:8888/api/question/list', {
          params: {
            phone: this.phoneStore
          }
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          // always executed
        })
    }
  }
})

// /api/question/list?phone
