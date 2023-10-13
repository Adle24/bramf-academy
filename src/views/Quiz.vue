<script>
import { mapActions, mapState } from 'pinia'
import { useDataStore } from '../stores/data'
import IconAlternativeLogo from '../components/icons/IconAlternativeLogo.vue'
export default {
  components: { IconAlternativeLogo },
  data() {
    return {
      countDown: 600,
      questionsAnswered: 0
    }
  },
  computed: {
    ...mapState(useDataStore, ['questions']),

    formattedTime() {
      let minutes = Math.floor(this.countDown / 60)
      let seconds = this.countDown - minutes * 60
      return this.str_pad_left(minutes, '0', 2) + ':' + this.str_pad_left(seconds, '0', 2)
    }
  },
  methods: {
    ...mapActions(useDataStore, ['getQuestions', 'postQuestion']),

    str_pad_left(string, pad, length) {
      return (new Array(length + 1).join(pad) + string).slice(-length)
    },

    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    selectAnswer(question_id, answer_id) {
      this.questionsAnswered++

      this.postQuestion(question_id, answer_id)

      if (this.questionsAnswered === this.questions.length) {
        this.$router.push('/finish')
      }
    }
  },
  async mounted() {
    await this.getQuestions()
    this.countDownTimer()
  }
}
</script>

<template>
  <div class="flex flex-col h-screen justify-between">
    <nav
      class="flex flex-nowrap items-center justify-between w-full py-8 px-8 md:py-6 border-b-2 md:px-16 text-lg font-bold text-gray-700 bg-white"
    >
      <IconAlternativeLogo />
      <div class="md:flex md:items-center md:w-auto" id="menu">
        <ul
          class="font-roboto flex text-base md:text-xl font-medium text-gray-700 md:flex md:justify-between md:pt-0"
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
    <TransitionGroup name="fade" mode="out-in">
      <template v-if="questions">
        <div
          class="flex flex-col h-screen justify-between mb-auto"
          v-for="(question, qi) in questions"
          :key="qi"
          v-show="questionsAnswered === qi"
        >
          <main class="flex flex-col md:flex-row mb-auto h-full">
            <div class="w-full font-roboto md:w-1/2 p-8 md:p-16">
              <div class="flex gap-8 mb-3 md:mb-24">
                <h1 class="text-xl md:text-5xl font-bold">Времени осталось:</h1>
                <p class="text-xl md:text-5xl font-bold text-green-600">{{ formattedTime }}</p>
              </div>
              <div class="text-md md:text-2xl font-semibold mb-3 md:mb-6">Вопрос:</div>

              <p class="text-lg">
                {{ question.text }}
              </p>
            </div>
            <div class="bg-[#EEEEEE] p-8 md:p-16 md:w-1/2 flex flex-col gap-4">
              <div
                class="font-roboto border-2 rounded-lg bg-white px-16 py-5 hover:text-white active:text-white hover:bg-gradient-to-r from-[#ff512f] to-[#dd2476] active:bg-gradient-to-r from-[#ff512f] to-[#dd2476]"
                v-for="(answer, answerInd) in question.answers"
                :key="answerInd"
                @click.prevent="selectAnswer(question.id, answer.id)"
              >
                <div>
                  {{ answer.text }}
                </div>
              </div>
            </div>
          </main>
        </div>
      </template>
    </TransitionGroup>
    <footer
      class="h-24 flex flex-col gap-3 md:flex-row md:items-center justify-between px-8 py-8 md:px-16 border-t-2"
    >
      <template v-if="questions">
        <div class="font-roboto text-xs md:text-2xl">
          Вопрос:
          <span class="text-xs md:text-2xl font-bold"
            >{{ questionsAnswered }} / {{ questions.length }}</span
          >
        </div>
        <div class="w-4/5">
          <div class="h-1 md:h-2 rounded-full bg-gray-200">
            <div
              class="h-1 md:h-2 rounded-full bg-gradient-to-r from-[#ff512f] to-[#dd2476]"
              :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
            ></div>
          </div>
        </div>
      </template>
    </footer>
  </div>
</template>

<style scoped>
/* .fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateX(300%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s, transform 2s;
} */
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-active {
  transition: all 0s linear;
  opacity: 0;
  position: absolute;
}

.fade-leave-to {
  opacity: 0;
}
</style>
