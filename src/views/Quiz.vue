<script>
import IconAlternativeLogo from '../components/icons/IconAlternativeLogo.vue'

export default {
  components: { IconAlternativeLogo },
  data() {
    return {
      countDown: 30,
      questionsAnswered: 0,
      totalCorrect: 0,
      questions: [
        {
          q: 'Какой орган в человеческом теле является самым большим по площади поверхности?',
          answers: [
            {
              text: 'Сердце',
              is_correct: false
            },
            {
              text: 'Печень',
              is_correct: false
            },
            {
              text: 'Кожа',
              is_correct: true
            },
            {
              text: 'Мозг',
              is_correct: false
            }
          ]
        }
      ]
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
    },
    methods: {
      questionAnswered(is_correct) {
        if (is_correct) {
          this.totalCorrect++
        }

        this.questionsAnswered++
      }
    }
  },
  created() {
    this.countDownTimer()
  }
}
</script>

<template>
  <div class="flex flex-col h-screen justify-between">
    <nav
      class="flex flex-nowrap mb-auto items-center justify-between w-full py-8 px-8 md:py-6 border-b-2 md:px-16 text-lg font-bold text-gray-700 bg-white"
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
    <main class="flex flex-col md:flex-row mb-auto h-full">
      <div class="w-full md:w-1/2 p-8 md:p-16">
        <div class="flex gap-8 mb-24">
          <h1 class="text-5xl font-bold">Времени осталось:</h1>
          <p class="text-5xl font-bold text-green-600">{{ countDown }}</p>
        </div>
        <div class="text-2xl font-semibold mb-6">Вопрос:</div>

        <p class="text-lg">{{ questions[0].q }}</p>
      </div>
      <div class="bg-[#EEEEEE] p-8 md:p-16 md:w-1/2 flex flex-col gap-4">
        <div
          class="border-2 rounded-lg bg-white px-16 py-5 hover:bg-orange-500 active:bg-orange-500"
          v-for="answer in questions[0].answers"
          :key="answer.text"
        >
          <div>
            {{ answer.text }}
          </div>
        </div>
      </div>
    </main>
    <footer class="h-24 flex items-center justify-between md:px-16 border-t-2">
      <div class="text-2xl">
        Вопрос:
        <span class="text-2xl font-bold">{{ questionsAnswered }} / {{ questions.length }}</span>
      </div>
      <div class="bg-red-200 w-3/5">
        <div class="h-2 rounded-full bg-gray-200">
          <div
            class="h-2 rounded-full bg-orange-500"
            :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
          ></div>
        </div>
      </div>
      <button
        class="w-full md:w-[250px] bg-orange-500 text-white md:text-lg font-semibold py-2 px-4 rounded-lg"
      >
        Далее
      </button>
    </footer>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s linear;
}
.fade-leave-active {
  transition: all 0.3s linear;
  opacity: 0;
  position: absolute;
}
.fade-leave-to {
  opacity: 0;
}
</style>
