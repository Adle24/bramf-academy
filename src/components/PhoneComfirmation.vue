<script>
import { mapActions, mapState } from 'pinia'
import { useDataStore } from '../stores/data'
export default {
  name: 'PhoneComfirmation',
  data() {
    return {
      countDown: 30,
      code1: '',
      code2: '',
      code3: '',
      code4: ''
    }
  },
  computed: {
    ...mapState(useDataStore, ['phoneStore'])
  },
  methods: {
    ...mapActions(useDataStore, ['verifyPhone']),
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    }
  },
  created() {
    console.log(this.phoneStore)
    this.countDownTimer()
  }
}
</script>
<template>
  <button
    class="flex flex-row items-center justify-evenly w-1/3 border-none border-gray-700 rounded-md outline-none py-1 bg-gray-100 text-gray-700 text-md font-semibold">
    <i>&larr;</i> Назад к вводу данных
  </button>
  <h3 class="text-sm mt-24 mb-2">Академия «BRAMF ACADEMY»</h3>
  <h1 class="text-2xl md:text-5xl font-bold mb-4 text-[#333333]">Введите код из СМС</h1>
  <p class="text-slate-700 mb-10 md:text-md text-[#77777] font-normal leading-5">
    На номер <span class="font-bold">{{ this.phoneStore }}</span> было отправлено SMS с кодом для
    подтверждения регистрации
  </p>
  <div>
    <form action="" method="post">
      <div class="flex flex-col space-y-6">
        <div class="font-medium text-md">Код из СМС</div>
        <div class="flex flex-row items-center justify-between w-full max-w-xs">
          <div class="w-16 h-16">
            <input v-model="code1"
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 caret-[#ef7f1a] ring-[#ef7f1a]"
              type="text" name="" id="" />
          </div>
          <div class="w-16 h-16">
            <input v-model="code2"
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 caret-[#ef7f1a] ring-[#ef7f1a]"
              type="text" name="" id="" />
          </div>
          <div class="w-16 h-16">
            <input v-model="code3"
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 caret-[#ef7f1a] ring-[#ef7f1a]"
              type="text" name="" id="" />
          </div>
          <div class="w-16 h-16">
            <input v-model="code4"
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 caret-[#ef7f1a] ring-[#ef7f1a]"
              type="text" name="" id="" />
          </div>
        </div>

        <div class="flex flex-col space-y-8">
          <div>
            <RouterLink to="/quiz">
              <button
              @click="verifyPhone(this.phoneStore, this.code1 + this.code2 + this.code3 + this.code4)"
                class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-gradient-to-r from-[#ff512f] to-[#dd2476] border-none text-white text-sm shadow-sm">
                Подтвердить номер
              </button>
            </RouterLink>

            <!-- </RouterLink> -->
          </div>
          <div>
            <button
              class="flex flex-row items-center justify-center text-center w-full border-2 border-[#999999] rounded-xl outline-none py-5 bg-white-700 text-gray-700 text-sm shadow-sm">
              Отправить код повторно через {{ countDown }}
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
