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
    async registerAndSendSms(phone, iin, name) {
      await axios.post('http://185.146.3.144:8888/api/register', {
        phone: phone,
        iin: iin,
        username: name
      })
        .then(function (response) {
          console.log(response)
          if (response['status'] === 200) {
            console.log('OK')
            console.log(this.router)
            this.router.push('/signup/phone')
          }
        })
        .catch(function (error) {

        });

        
    },

    async verifyPhone(phone, code) {
      await axios.post('http://185.146.3.144:8888/api/verify', {
        phone: phone,
        code: code
      })
        .then(function (response) {
          if (response['status'] === 200) {
            this.router.push('quiz')
          }

        })
        .catch(function (error) {
        });
    },

    async getQuestions() {
      await axios.get('http://185.146.3.144:8888/api/question/list', {
        params: {
          phone: this.phoneStore
        }
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  }
})

// /api/question/list?phone

