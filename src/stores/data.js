import { defineStore } from 'pinia'
import axios from 'axios'

export const useDataStore = defineStore('data', {
  state: () => ({
    questions: null,
    phoneStore: '+7(778)081-66-49',
    iinStore: '',
    nameStore: '',
    testName: null,
    testIds: {
      adjustment: 1,
      measurer: 2,
      seller: 3
    }
  }),
  getters: {
    processedQuestions(state) {
      console.log(this.questions)
      return state.questions
    }
  },
  actions: {
    setTestName(testNameParam) {
      this.testName = testNameParam
    },
    setPhone(phoneParam) {
      this.phoneStore = phoneParam
    },
    setIIN(iinParam) {
      this.iinStore = iinParam
    },
    setName(nameParam) {
      this.nameStore = nameParam
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
      const data = await axios
        .get('http://185.146.3.144:8888/api/question/list', {
          params: {
            phone: this.phoneStore,
            id_test_list: this.testIds[this.testName]
          }
        })
        .then((response) => {
          if (response['status'] === 200) {
            this.questions = response.data.questions
          }
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          // always executed
          console.log(this.questions)
        })
      console.log(data)
    },

    async postQuestion(questionId, answerId) {
      await axios
        .post('http://185.146.3.144:8888/api/question/answer', {
          id_question: questionId,
          id_answer: answerId,
          id_test_list: this.testIds[this.testName],
          phone: this.phoneStore
        })
        .then((response) => {
          console.log(response)
          if (response['status'] === 200) {
            console.log('OK')
          }
        })
        .catch((error) => {})
    },

    async sendSms(phone, iin, name) {
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
