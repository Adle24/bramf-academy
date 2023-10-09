<script>
import IconAlternativeLogo from '../components/icons/IconAlternativeLogo.vue'

export default {
  components: { IconAlternativeLogo }
}
</script>

<template>
  <div class="flex flex-col h-screen justify-between">
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
    <main>
      <p class="text-center text-5xl font bold mb-[550px]">Спасибо мы с вами свяжемся</p>
    </main>
  </div>
</template>
