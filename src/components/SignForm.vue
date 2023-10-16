<script>
import { mapActions, mapWritableState, mapState } from 'pinia'
import { useDataStore } from '../stores/data'

import { vMaska, Mask } from 'maska'

import iconCheckboxSelected from '@/components/icons/iconCheckboxSelected.vue'
import iconCheckboxUnselected from '@/components/icons/iconCheckboxUnselected.vue'

export default {
  name: 'SignForm',
  components: {
    iconCheckboxSelected,
    iconCheckboxUnselected
  },
  data() {
    return {
      agreeRules: false,
      form: {
        username: null,
        phone: null,
        birthdate: null,
        city: 'null',
        isReady: 0
      }
    }
  },
  directives: { maska: vMaska },
  computed: {
    ...mapState(useDataStore, ['testName', 'cites']),
    ...mapWritableState(useDataStore, ['loginForm'])
  },
  mounted() {
    if (this.loginForm) Object.assign(this.form, this.loginForm)
  },
  methods: {
    ...mapActions(useDataStore, ['registerAndSendSms']),

    validate(form) {
      const notRequired = ['city', 'isReady']

      for (const key in form) {
        const element = form[key]
        if (notRequired.includes(key)) continue
        if (!element) return false
      }
      return true
    },

    async onSubmit(evt) {
      evt.preventDefault()

      if (!this.validate(this.form)) return alert('Заполните все поля')
      if (!this.agreeRules) return alert('Пользовательское соглашение не принято')

      const phoneUnmasked = new Mask({ mask: '+# (###) ###-##-##' }).unmasked(this.form.phone)
      const birthdateUnmasked = new Mask({ mask: '####' }).unmasked(this.form.birthdate)

      if (phoneUnmasked.length != 11) return alert('Неправильный номер телефона')
      if (birthdateUnmasked.length != 4) return alert('Неправильный год рождения')

      this.loginForm.username = this.form.username
      this.loginForm.phone = phoneUnmasked
      this.loginForm.birthdate = birthdateUnmasked
      this.loginForm.city = this.form.city
      this.loginForm.isReady = this.form.isReady

      const result = await this.registerAndSendSms(this.loginForm)
      if (result) return this.$router.push('/signup/phone')
      return alert('Ошибка на стороне сервера')
    },

    onReset(evt) {
      if (evt) evt.preventDefault()

      this.form.username = null
      this.form.phone = null
      this.form.birthdate = null
    }
  }
}
</script>

<template>
  <div class="md:w-[600px]">
    <h3 class="font-roboto text-sm md:text-base mb-2">Академия «BRAMF ACADEMY»</h3>
    <h1 class="font-roboto text-2xl md:text-5xl font-bold mb-4">Пройдите 1-ый этап отбора</h1>
    <p class="font-roboto text-slate-700 mb-10 md:mb-18 md:text-base">
      Для вступления в академию BRAMF необходимо оставить свои персональные данные. Это поможет нам
      адаптировать обучение под Вас. Мы обещаем строго соблюдать конфиденциальность и безопасность
      Ваших данных. После ввода данных Вас ждет короткий тест. Он поможет нам определить уровень
      Ваших знаний.
    </p>

    <div class="w-full">
      <form @submit="onSubmit" @reset="onReset">
        <div class="mb-4 font-roboto font-medium md:text-sm">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> ФИО* </label>
          <input
            v-model="form.username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-400 focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Укажите ваше ФИО"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Номер телефона*
          </label>
          <input
            v-model="form.phone"
            v-maska
            data-maska="+7 (###) ###-##-##"
            placeholder="Укажите ваш номер телефона"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-400 focus:shadow-outline"
            id="tel"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Год рождения*
          </label>
          <input
            v-model="form.birthdate"
            v-maska
            data-maska="####"
            placeholder="Укажите ваш год рождения"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-400 focus:shadow-outline"
            id="IIN"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Город </label>
          <select
            v-model="form.city"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-400 focus:shadow-outline"
          >
            <option v-for="city in cites[testName]" :key="city">
              {{ city }}
            </option>
          </select>
        </div>

        <div class="mb-6 flex items-center">
          <label class="text-gray-700 text-sm font-bold" for="isReady">
            Вы готовы приступить к работе в компании BRAMF
          </label>
          <span class="ms-3" @click="form.isReady = !form.isReady" style="cursor: pointer">
            <iconCheckboxUnselected v-if="!form.isReady" />
            <iconCheckboxSelected v-else />
          </span>
        </div>
        <div
          class="flex flex-col-reverse gap-3 md:flex-row md:gap-7 md:mt-12 items-center justify-between"
        >
          <button
            v-if="agreeRules && validate(form)"
            type="submit"
            class="w-full md:w-2/3 font-roboto bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white md:text-lg font-semibold py-4 px-4 rounded-lg"
          >
            Начать тестирование
          </button>
          <button
            v-else
            type="submit"
            class="w-full md:w-2/3 font-roboto bg-gradient-to-r from-[#D9D9D9] to-[#D9D9D9] text-white md:text-lg font-semibold py-4 px-4 rounded-lg"
          >
            Начать тестирование
          </button>

          <div class="w-full flex justify-between md:gap-2">
            <label class="text-sm text-gray-400 w-52 font-roboto md:order-2"
              >Нажимая на блок с галочкой вы соглашаетесь с
              <span class="text-orange-300">Условиями предоставления услуг </span>
            </label>
            <span class="mt-1 md:order-3" @click="agreeRules = !agreeRules" style="cursor: pointer">
              <iconCheckboxUnselected v-if="!agreeRules" />
              <iconCheckboxSelected v-else />
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
