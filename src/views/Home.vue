<script>
import { RouterLink, RouterView } from 'vue-router'
import IconLogo from '../components/icons/IconLogo.vue'

export default {
  components: {
    IconLogo
  }
}
</script>

<template>
  <nav
    class="flex flex-nowrap items-center justify-between w-full pt-2 px-8 md:pt-9 md:px-16 text-lg font-bold text-gray-700 bg-white"
  >
    <IconLogo />
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
      <h1 class="text-2xl md:text-5xl font-bold mb-4">Присоединяйтесь к команде BRAMF!</h1>
      <p class="text-slate-700 mb-2 md:text-lg">
        BRAMF - это фабричное производство, сборка нашей продукции требует особых знаний. И мы
        готовы поделиться с вами этими знаниями на нашем специальном курсе.
      </p>
      <p class="text-gray-800 mb-2 md:text-lg">
        Сейчас мы увеличиваем штат сборщиков мебели по всему Казахстану. Курс по сборке мебели
        направлен не только на получение знаний, но и на практику, стажировку и трудоустройство.<br />
        <span class="font-semibold">Средняя зарплата мастера - от 600 000 тг.</span>
      </p>
      <p class="mb-6 md:text-lg">
        Проезд, проживание и питание на время обучения оплачивает компания. Пройдите двухэтапный
        тест, чтобы попасть на обучение.
      </p>
      <div>
        <RouterLink to="/signup/form">
          <button
            class="w-full md:w-2/3 bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white md:text-lg font-semibold py-2 px-4 rounded-lg"
          >
            Пройти тестирование
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="w-full md:w-1/2 p-4 md:order-2">
      <img src="../assets/images/promo.png" class="w-fit h-5/6" alt="Promo" />
    </div>
  </main>
  <RouterView />
</template>

<style scoped></style>
