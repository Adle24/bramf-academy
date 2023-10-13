<script>
import { mapActions, mapState } from 'pinia'
import { useDataStore } from '../stores/data'
export default {
  name: 'PhoneComfirmation',
  data() {
    return {
      countDown: 30,
      show_resend: false,
      show_alert: false,
      code1: null,
      code2: null,
      code3: null,
      code4: null
    }
  },
  watch: {},
  computed: {
    ...mapState(useDataStore, ['loginForm'])
  },
  methods: {
    ...mapActions(useDataStore, ['verifyPhone', 'sendSms']),
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          if (this.countDown == 0) {
            this.show_resend = true
          }
          this.countDownTimer()
        }, 1000)
      }
    },

    async onSubmit(evt) {
      evt.preventDefault()

      if (!this.code1 || !this.code2 || !this.code3 || !this.code4) return this.onReset()

      const result = await this.verifyPhone(
        this.loginForm.phone,
        this.code1 + this.code2 + this.code3 + this.code4
      )
      if (result) return this.$router.push('/quiz')

      this.show_alert = true
      return this.onReset()
    },

    onReset(evt) {
      if (evt) evt.preventDefault()
      this.code1 = null
      this.code2 = null
      this.code3 = null
      this.code4 = null
    },

    pasteOTP(event) {
      event.preventDefault()
      let inputs = document.querySelectorAll('#otp > div > *[id]')
      let pasteVal = event.clipboardData.getData('text').split('')
      for (let index = 0; index < inputs.length; index++) {
        this[`code${index + 1}`] = pasteVal[index]
      }
    }
  },
  created() {
    this.countDownTimer()
  },
  mounted() {
    const editor = document.getElementById('first')
    editor.onpaste = this.pasteOTP
    editor.focus()

    const inputs = document.querySelectorAll('#otp > div > *[id]')
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('input', (event) => {
        if (event.inputType === 'deleteContentBackward') {
          this[`code${i + 1}`] = ''
          if (i !== 0) inputs[i - 1].focus()
          event.preventDefault()
        } else {
          const value = parseInt(event.data)
          if (isNaN(value)) {
            this[`code${i + 1}`] = ''
            event.preventDefault()
            return
          } else if (i === inputs.length - 1 && inputs[i].value !== '') {
            this[`code${i + 1}`] = event.data
            event.preventDefault()
          } else {
            this[`code${i + 1}`] = event.data
            if (i !== inputs.length - 1) inputs[i + 1].focus()
            event.preventDefault()
          }
        }
      })
    }
  }
}
</script>
<template>
  <div class="md:w-[600px]">
    <RouterLink to="/signup/form">
      <button
        class="flex flex-row items-center justify-evenly w-full md:w-1/3 border-none border-gray-700 rounded-md outline-none py-1 bg-gray-100 text-gray-700 text-md font-semibold"
      >
        <i class="hidden">&larr;</i> Назад к вводу данных
      </button>
    </RouterLink>

    <h3 class="font-roboto text-sm md:text-base mt-24 mb-2">Академия «BRAMF ACADEMY»</h3>
    <h1 class="text-2xl md:text-5xl font-bold mb-4 text-[#333333]">Введите код из СМС</h1>
    <p class="font-roboto text-slate-700 mb-10 md:text-base text-[#77777] font-normal leading-5">
      На номер <span class="font-bold">{{ this.loginForm.phone }}</span> было отправлено SMS с кодом
      для подтверждения регистрации
    </p>
    <div>
      <form @submit="onSubmit" @reset="onReset">
        <div class="flex flex-col space-y-6">
          <div class="font-roboto font-medium text-md md:text-sm">Код из СМС</div>
          <div id="otp" class="flex flex-row items-center justify-between w-full max-w-xs">
            <div class="w-16 h-16">
              <input
                v-model="code1"
                class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 caret-[#ef7f1a] ring-[#ef7f1a]"
                type="tel"
                id="first"
              />
            </div>
            <div class="w-16 h-16">
              <input
                v-model="code2"
                class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 caret-[#ef7f1a] ring-[#ef7f1a]"
                type="tel"
                id="second"
              />
            </div>
            <div class="w-16 h-16">
              <input
                v-model="code3"
                class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 caret-[#ef7f1a] ring-[#ef7f1a]"
                type="tel"
                id="third"
              />
            </div>
            <div class="w-16 h-16">
              <input
                v-model="code4"
                class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 caret-[#ef7f1a] ring-[#ef7f1a]"
                type="tel"
                id="fourth"
              />
            </div>
          </div>
          <p v-if="show_alert" class="text-xs text-red-500">Неверный код изи СМС сообщения</p>
        </div>
        <div class="flex flex-col space-y-8 md:mt-20">
          <div>
            <button
              type="submit"
              class="font-roboto flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-gradient-to-r from-[#ff512f] to-[#dd2476] border-none text-white text-sm shadow-sm"
            >
              Подтвердить номер
            </button>
          </div>
          <div>
            <button
              v-if="!show_resend"
              class="font-roboto flex flex-row items-center justify-center text-center w-full border-2 border-[#999999] rounded-xl outline-none py-5 bg-white-700 text-gray-700 text-sm shadow-sm"
            >
              Отправить код повторно через {{ countDown }}
            </button>
            <button
              v-if="show_resend"
              @click="sendSms(this.loginForm)"
              class="flex flex-row items-center justify-center text-center w-full border-2 border-[#F46B45] rounded-xl outline-none py-5 bg-white-700 text-[#F46B45] text-sm shadow-sm"
            >
              Отправить код повторно
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
