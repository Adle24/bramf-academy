<script>
import IconAlternativeLogo from '../components/icons/IconAlternativeLogo.vue'

export default {
  components: { IconAlternativeLogo }
}
</script>

<template>
  <nav
    class="flex flex-nowrap items-center justify-between w-full py-8 px-8 md:py-6 border-b-2 md:px-16 text-lg font-bold text-gray-700 bg-white"
  >
    <IconAlternativeLogo />
    <div class="md:flex md:items-center md:w-auto" id="menu">
      <ul class="flex text-base text-gray-700 md:flex md:justify-between md:pt-0">
        <li>
          <a class="p-3 py-1 block hover:text-red-400 text-red-500" href="#">Рус</a>
        </li>
        <li>
          <a class="p-3 py-1 block hover:text-red-400" href="#">Каз</a>
        </li>
      </ul>
    </div>
  </nav>
  <main class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 p-8 md:p-16 order-2 md:order-1">
      <h3 class="text-sm mb-2">Академия «BRAMF ACADEMY»</h3>
      <h1 class="text-2xl md:text-6xl font-bold mb-4">Пройдите 1-ый этап отбора</h1>
      <p class="text-slate-700 mb-10 md:text-lg">
        Для вступления в академию BRAMF необходимо оставить свои персональные данные. Это поможет
        нам адаптировать обучение под Вас. Мы обещаем строго соблюдать конфиденциальность и
        безопасность Ваших данных. После ввода данных Вас ждет короткий тест. Он поможет нам
        определить уровень Ваших знаний.
      </p>

      <div class="w-full">
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> ФИО* </label>
            <input
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
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-400 focus:shadow-outline"
              id="tel"
              type="text"
              placeholder="Укажите ваш номер телефона"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> ИИН* </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-orange-400 focus:shadow-outline"
              id="IIN"
              type="text"
              placeholder="Укажите ваш ИИН"
            />
            <p class="text-red-500 text-xs italic">Должен быть 16 символов</p>
          </div>
          <div class="flex flex-col gap-3 items-center justify-between">
            <label class="text-sm text-gray-400"
              >Нажимая на блок с галочкой вы соглашаетесь с
              <span class="text-orange-300">Условиями предоставления услуг </span>
              <input type="checkbox" class="accent-orange-500 mt-1" checked
            /></label>
            <RouterLink to="/quiz">
              <button
                class="w-full md:w-[250px] bg-[#E1296D] text-white md:text-lg font-semibold py-2 px-4 rounded-lg"
              >
                Начать тестирование
              </button>
            </RouterLink>
          </div>
        </form>
      </div>

      <!-- <div>
        <button
          class="w-full md:w-1/3 bg-[#E1296D] text-white md:text-lg font-semibold py-2 px-4 rounded-lg"
        >
          Пройти тестирование
        </button>
      </div> -->
    </div>
    <div class="w-full h-full md:w-1/2 md:order-2">
      <img src="../assets/images/Rectangle 4.png" class="w-fit h-5/6" alt="Promo" />
    </div>
  </main>
</template>
