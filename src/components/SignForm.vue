<script>
import { mapActions, mapWritableState } from 'pinia'
import { useDataStore } from '../stores/data'

import { vMaska } from 'maska'

export default {
  name: 'SignForm',
  data() {
    return {
      phone: null,
      name: null,
      iin: null
    }
  },
  directives: { maska: vMaska },
  methods: {
    ...mapActions(useDataStore, ['registerAndSendSms', 'setPhone', 'setIIN', 'setName']),
    ...mapWritableState(useDataStore, ['phoneStore']),

    async onSubmit(evt) {
      evt.preventDefault()

      if (this.phone) this.phone = this.phone.replaceAll(' ', '')
      if (this.iin) this.iin = this.iin.replaceAll(' ', '')

      if (!this.phone || !this.name || !this.iin) return alert('Заполните все поля')
      if (this.phone.length != 16) return alert('Неправильный номер телефона')
      if (this.iin.length != 12) return alert('Неправильный ИНН')

      const result = await this.registerAndSendSms(this.phone, this.iin, this.name)
      if (result) return this.$router.push('/signup/phone')
      return alert('Ошибка на стороне сервера')
    },

    onReset(evt) {
      if (evt) evt.preventDefault()

      this.phone = null
      this.iin = null
      this.name = null
    }
  },
  beforeUnmount() {
    this.setPhone(this.phone)
    this.setIIN(this.iin)
    this.setName(this.name)
  }
}
</script>

<template>
  <h3 class="text-sm mb-2">Академия «BRAMF ACADEMY»</h3>
  <h1 class="text-2xl md:text-6xl font-bold mb-4">Пройдите 1-ый этап отбора</h1>
  <p class="text-slate-700 mb-10 md:text-lg">
    Для вступления в академию BRAMF необходимо оставить свои персональные данные. Это поможет нам
    адаптировать обучение под Вас. Мы обещаем строго соблюдать конфиденциальность и безопасность
    Ваших данных. После ввода данных Вас ждет короткий тест. Он поможет нам определить уровень Ваших
    знаний.
  </p>

  <div class="w-full">
    <form @submit="onSubmit" @reset="onReset">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> ФИО* </label>
        <input
          v-model="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-400 focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Укажите ваше ФИО"
        />
      </div>
      <!-- ref="input_phone"
          type="tel"
          placeholder="+7 (___) ___ - __ - __" -->
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Номер телефона*
        </label>
        <input
          v-model="phone"
          v-maska
          data-maska="+7 (###) ###-##-##"
          placeholder="+7 (___) ___-__-__"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-400 focus:shadow-outline"
          id="tel"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> ИИН* </label>
        <input
          v-model="iin"
          v-maska
          data-maska="### ### ### ###"
          placeholder="Укажите ваш ИИН"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-orange-400 focus:shadow-outline"
          id="IIN"
        />
        <p class="text-red-500 text-xs italic">Должен быть 12 символов</p>
      </div>
      <div class="flex flex-col gap-3 items-center justify-between">
        <label class="text-sm text-gray-400"
          >Нажимая на блок с галочкой вы соглашаетесь с
          <span class="text-orange-300">Условиями предоставления услуг </span>
          <input type="checkbox" class="accent-orange-500 mt-1" checked
        /></label>
        <!-- <RouterLink to="/signup/phone"> -->
        <button
          type="submit"
          class="w-full md:w-[250px] bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white md:text-lg font-semibold py-2 px-4 rounded-lg"
        >
          Начать тестирование
        </button>
        <!-- </RouterLink> -->
      </div>
    </form>
  </div>
</template>
