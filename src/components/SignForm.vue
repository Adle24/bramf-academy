<script>
import { mapActions, mapWritableState } from 'pinia'
import { useDataStore } from '../stores/data'

import { vMaska, Mask } from 'maska'

export default {
  name: 'SignForm',
  data() {
    return {
      form: {
        username: null,
        phone: null,
        iin: null
      }
    }
  },
  directives: { maska: vMaska },
  computed: {
    ...mapWritableState(useDataStore, ['loginForm'])
  },
  mounted() {
    if (this.loginForm) Object.assign(this.form, this.loginForm)
  },
  methods: {
    ...mapActions(useDataStore, ['registerAndSendSms']),

    validate(form) {
      for (const key in form) {
        const element = form[key]
        if (!element) return false
      }
      return true
    },

    async onSubmit(evt) {
      evt.preventDefault()
      if (!this.validate(this.form)) return alert('Заполните все поля')

      const phoneUnmasked = new Mask({ mask: '+# (###) ###-##-##' }).unmasked(this.form.phone)
      const iinUnmasked = new Mask({ mask: '### ### ### ###' }).unmasked(this.form.iin)

      if (phoneUnmasked.length != 11) return alert('Неправильный номер телефона')
      if (iinUnmasked.length != 12) return alert('Неправильный ИНН')

      this.loginForm.username = this.form.username
      this.loginForm.phone = phoneUnmasked
      this.loginForm.iin = iinUnmasked

      const result = await this.registerAndSendSms(this.loginForm)
      if (result) return this.$router.push('/signup/phone')
      return alert('Ошибка на стороне сервера')
    },

    onReset(evt) {
      if (evt) evt.preventDefault()

      this.form.username = null
      this.form.phone = null
      this.form.iin = null
    }
  }
}
</script>

<template>
  <h3 class="font-roboto text-sm md:text-base mb-2">Академия «BRAMF ACADEMY»</h3>
  <h1 class="font-roboto text-2xl md:text-5xl font-bold mb-4">Пройдите 1-ый этап отбора</h1>
  <p class="font-roboto text-slate-700 mb-10 md:text-base">
    Для вступления в академию BRAMF необходимо оставить свои персональные данные. Это поможет нам
    адаптировать обучение под Вас. Мы обещаем строго соблюдать конфиденциальность и безопасность
    Ваших данных. После ввода данных Вас ждет короткий тест. Он поможет нам определить уровень Ваших
    знаний.
  </p>

  <div class="w-full">
    <form @submit="onSubmit" @reset="onReset">
      <div class="mb-4 font-roboto font-medium md:text-sm">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> ФИО* </label>
        <input
          v-model="form.username"
          type="text"
          placeholder="Укажите ваше ФИО"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-400 focus:shadow-outline"
          id="username"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Номер телефона*
        </label>
        <input
          v-maska
          v-model="form.phone"
          data-maska="+7 (###) ###-##-##"
          placeholder="+7 (___) ___-__-__"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-400 focus:shadow-outline"
          id="tel"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> ИИН* </label>
        <input
          v-maska
          v-model="form.iin"
          data-maska="### ### ### ###"
          placeholder="Укажите ваш ИИН"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-orange-400 focus:shadow-outline"
          id="IIN"
        />
        <p class="text-red-500 text-xs italic">Должен быть 12 символов</p>
      </div>
      <div class="flex flex-col gap-3 items-center justify-between">
        <label class="text-sm text-gray-400 font-roboto"
          >Нажимая на блок с галочкой вы соглашаетесь с
          <span class="text-orange-300">Условиями предоставления услуг </span>
          <input type="checkbox" class="accent-orange-500 mt-1" checked
        /></label>
        <button
          type="submit"
          class="w-full md:w-[250px] font-roboto bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white md:text-lg font-semibold py-2 px-4 rounded-lg"
        >
          Начать тестирование
        </button>
        <!-- </RouterLink> -->
      </div>
    </form>
  </div>
</template>
