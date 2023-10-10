<script>
import IconAlternativeLogo from '../components/icons/IconAlternativeLogo.vue'
import SignForm from '../components/SignForm.vue'
import PhoneComfirmation from '../components/PhoneComfirmation.vue'

export default {
  components: { IconAlternativeLogo, SignForm, PhoneComfirmation }
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
      <SignForm v-if="$route.path == '/signup/form'" />
      <PhoneComfirmation v-else-if="$route.path == '/signup/phone'" />
    </div>
    <div class="w-full h-full md:w-1/2 md:order-2">
      <img src="../assets/images/Rectangle 4.png" class="w-fit h-5/6" alt="Promo" />
    </div>
  </main>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 1s,
    transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
