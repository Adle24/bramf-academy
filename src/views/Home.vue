<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapWritableState } from 'pinia'
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
    return {}
  },
  computed: {
    ...mapWritableState(useDataStore, ['testName'])
  },
  mounted() {
    this.testName = this.$route.params.testName
  },
  methods: {}
}
</script>

<template>
  <nav
    class="flex flex-nowrap items-center justify-between w-full pt-2 px-8 md:pt-20 md:px-[100px] font-bold text-gray-700 bg-white"
  >
    <IconLogo />
    <div class="md:flex md:items-center md:w-auto" id="menu">
      <ul
        class="font-roboto flex text-base font-medium md:text-xl text-gray-700 md:flex md:justify-between md:pt-0"
      >
        <li>
          <a class="p-3 py-1 block hover:text-red-400 text-red-500" href="#">Рус</a>
        </li>
        <li>
          <a class="p-3 py-1 block hover:text-red-400" href="#">Каз</a>
        </li>
      </ul>
    </div>
  </nav>
  <main class="flex flex-col md:flex-row md:gap-12 w-full">
    <div class="w-full md:w-1/2 p-8 md:px-[100px] order-2 md:order-1">
      <h3 class="font-roboto font-normal text-sm md:text-xl md:mb-4">Академия «BRAMF ACADEMY»</h3>
      <h1 class="font-roboto text-2xl md:text-5xl font-bold mb-4 md:mb-10 md:leading-tight">
        Присоединяйтесь к команде BRAMF!
      </h1>
      <adjustment v-if="testName === 'adjustment'" />
      <measurer v-else-if="testName === 'measurer'" />
      <seller v-else-if="testName === 'seller'" />
      <div>
        <RouterLink to="/signup/form">
          <button
            class="font-roboto md:mt-[30px] w-full md:w-auto bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white md:text-lg font-semibold py-2 px-4 md:py-3 md:px-10 rounded-lg"
          >
            Пройти тестирование
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="w-full md:w-1/2 p-4 md:px-[100px] md:order-2">
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
