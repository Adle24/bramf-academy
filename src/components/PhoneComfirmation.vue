<script>
export default {
  name: 'PhoneComfirmation',
  data() {
    return {
      countDown: 30
    }
  },
  methods: {
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
    this.countDownTimer()
  }
}
</script>
<template>
  <button
    class="flex flex-row items-center justify-evenly w-1/3 border-none border-gray-700 rounded-md outline-none py-1 bg-gray-100 text-gray-700 text-md font-semibold"
  >
    <i>&larr;</i> Назад к вводу данных
  </button>
  <h3 class="text-sm mt-24 mb-2">Академия «BRAMF ACADEMY»</h3>
  <h1 class="text-2xl md:text-6xl font-bold mb-4">Введите код из СМС</h1>
  <p class="text-slate-700 mb-10 md:text-lg">
    На номер <span class="font-bold">+7 707 777 5534</span> было отправлено SMS с кодом для
    подтверждения регистрации
  </p>
  <div>
    <form action="" method="post">
      <div class="flex flex-col space-y-6">
        <div class="font-bold">Код из СМС</div>
        <div class="flex flex-row items-center justify-between w-full max-w-xs">
          <div class="w-16 h-16">
            <input
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-orange-700"
              type="text"
              name=""
              id=""
            />
          </div>
          <div class="w-16 h-16">
            <input
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-orange-700"
              type="text"
              name=""
              id=""
            />
          </div>
          <div class="w-16 h-16">
            <input
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-orange-700"
              type="text"
              name=""
              id=""
            />
          </div>
          <div class="w-16 h-16">
            <input
              class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-300 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-orange-700"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>

        <div class="flex flex-col space-y-8">
          <div>
            <button
              class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-orange-700 border-none text-white text-sm shadow-sm"
            >
              Подтвердить номер
            </button>
          </div>
          <div>
            <button
              class="flex flex-row items-center justify-center text-center w-full border-2 border-gray-700 rounded-xl outline-none py-5 bg-white-700 text-gray-700 text-sm shadow-sm"
            >
              Отправить код повторно через {{ countDown }}
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
