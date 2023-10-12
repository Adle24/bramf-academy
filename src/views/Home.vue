<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions } from 'pinia'
import { useDataStore } from '../stores/data'

import IconLogo from '../components/icons/IconLogo.vue'

import adjustment from '../components/TitleAdjustment.vue'
import measurer from '../components/TitleMeasurer.vue'
import seller from '../components/TitleSeller.vue'

export default {
  components: {
    RouterLink,
    RouterView,

    IconLogo,

    adjustment,
    measurer,
    seller
  },
  data() {
    return {
      testName: this.$route.params.testName
    }
  },
  methods: {
    ...mapActions(useDataStore, ['setTestName'])
  },
  unmounted() {
    this.setTestName(this.testName)
  }
}
</script>

<template>
  <!-- <div class="flex flex-col justify-between">
    <nav class="bg-slate-500 flex flex-nowrap justify-between md:px-[100px] md:pt-20">
      <IconLogo />
      <ul class="flex md:justify-between md:p-2.5 font-roboto">
        <li class="md:mr-6 text-2xl">Консультация по номеру</li>
        <li class="md:mr-20 text-2xl">+7 (777) 777 77 77</li>
        <li class="md:mr-10 text-xl">Рус</li>
        <li>Каз</li>
      </ul>
    </nav>
    <main class="bg-blue-500"></main>
  </div> -->
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
      <adjustment v-if="testName === 'adjustment'" />
      <measurer v-else-if="testName === 'measurer'" />
      <seller v-else-if="testName === 'seller'" />
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
      <img
        src="../assets/images/adjustment.png"
        v-if="testName === 'adjustment'"
        class="w-fit h-5/6"
        alt="adjustment"
      />
      <img
        src="../assets/images/measurer.png"
        v-else-if="testName === 'measurer'"
        class="w-fit h-5/6"
        alt="measurer"
      />
      <img
        src="../assets/images/seller.png"
        v-else-if="testName === 'seller'"
        class="w-fit h-5/6"
        alt="seller"
      />
    </div>
  </main>
  <RouterView />
</template>

<style scoped></style>
