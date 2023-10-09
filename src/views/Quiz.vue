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
          q: 'Что такое лобзик?',
          answers: [
            {
              text: 'Инструмент для сверления отверстий',
              is_correct: false
            },
            {
              text: 'Инструмент для точной пиления деталей по контуру',
              is_correct: true
            },
            {
              text: 'Инструмент для измерения уровня горизонта',
              is_correct: false
            },
            {
              text: 'Инструмент для шлифования поверхностей',
              is_correct: false
            }
          ]
        },
        {
          q: 'Для каких работ лучше всего подходит шуруповёрт?',
          answers: [
            {
              text: 'Резка дерева',
              is_correct: false
            },
            {
              text: 'Измерение длины',
              is_correct: false
            },
            {
              text: 'Закручивание и откручивание шурупов',
              is_correct: true
            },
            {
              text: 'Поднятие тяжелых предметов',
              is_correct: false
            }
          ]
        },
        {
          q: 'Вам нужно установить полку горизонтально. Какой инструмент вы используете?',
          answers: [
            {
              text: 'Лобзик',
              is_correct: false
            },
            {
              text: 'Шуруповёрт.',
              is_correct: false
            },
            {
              text: 'Лазерный уровень',
              is_correct: true
            },
            {
              text: 'Ручной фрезер',
              is_correct: false
            }
          ]
        },
        {
          q: 'Какой инструмент используется для создания декоративных кромок на деталях из дерева?',
          answers: [
            {
              text: 'Шуруповёрт',
              is_correct: false
            },
            {
              text: 'Ручной фрезер',
              is_correct: true
            },
            {
              text: 'Лазерный уровень.',
              is_correct: false
            },
            {
              text: 'Лобзик.',
              is_correct: false
            }
          ]
        },
        {
          q: 'Какой из инструментов надо использовать для сверления стен?',
          answers: [
            {
              text: 'Шуруповёрт',
              is_correct: false
            },
            {
              text: 'Ручной фрезер',
              is_correct: false
            },
            {
              text: 'Лазерный уровень.',
              is_correct: false
            },
            {
              text: 'Перфоратор',
              is_correct: true
            }
          ]
        },
        {
          q: 'Вам нужно установить кронштейн для полки так, чтобы он был строго вертикален. Как вы это проверите?',
          answers: [
            {
              text: 'Глазомером',
              is_correct: false
            },
            {
              text: 'Линейкой',
              is_correct: false
            },
            {
              text: 'Лазерным уровнем',
              is_correct: true
            },
            {
              text: 'Уровнем с пузырьком',
              is_correct: false
            }
          ]
        },
        {
          q: 'Как правильно использовать лобзик для вырезания фигуры из деревянной плиты по контуру?',
          answers: [
            {
              text: 'Начните резать с самой сложной части фигуры',
              is_correct: false
            },
            {
              text: 'Держите лобзик вертикально и следуйте контуру медленно, чтобы избежать ошибок',
              is_correct: true
            },
            {
              text: 'Используйте высокую скорость для более быстрого реза',
              is_correct: false
            },
            {
              text: 'Нажимайте на лобзик сильно, чтобы ускорить процесс',
              is_correct: false
            }
          ]
        },
        {
          q: 'При использовании лазерного уровня для установки полок, что является ключевым этапом для обеспечения их горизонтальности?',
          answers: [
            {
              text: 'Убедиться, что лазер проходит по верхней части обеих полок',
              is_correct: true
            },
            {
              text: 'Убедиться, что лазер проходит по центру полок',
              is_correct: false
            },
            {
              text: 'Убедиться, что полки касаются лазерного луча только с одной стороны',
              is_correct: false
            },
            {
              text: 'Убедиться, что лазер установлен на необходимой высоте от пола',
              is_correct: false
            }
          ]
        },
        {
          q: 'При создании декоративного канта на деревянной доске с помощью ручного фрезера, что из нижеперечисленного НЕ является правилом безопасности?',
          answers: [
            {
              text: 'Используйте защитные очки',
              is_correct: false
            },
            {
              text: 'Держите фрезер обеими руками',
              is_correct: false
            },
            {
              text: 'Начните работу с высокой скоростью для лучшего результата',
              is_correct: true
            },
            {
              text: 'Убедитесь, что доска надежно закреплена',
              is_correct: false
            }
          ]
        },
        {
          q: 'Вам дали новое задание, инструкции к которому вы не совсем поняли. Что вы сделаете?',
          answers: [
            {
              text: 'Попробую выполнить, опираясь на свой опыт',
              is_correct: false
            },
            {
              text: 'Проигнорирую это задание',
              is_correct: false
            },
            {
              text: 'Спрошу у коллег совета',
              is_correct: false
            },
            {
              text: 'Обращусь за уточнением к руководителю или инструктору',
              is_correct: true
            }
          ]
        },
        {
          q: 'Ваша последняя работа была с ошибками, и вам об этом сказали. Ваше отношение к этому?',
          answers: [
            {
              text: 'Найду, кого винить',
              is_correct: false
            },
            {
              text: 'Отношусь к критике спокойно и стараюсь учесть замечания',
              is_correct: false
            },
            {
              text: 'Избегаю ответственности и скажу, что всё было не так уж плохо',
              is_correct: false
            },
            {
              text: 'Решу, что эта работа не для меня и уйду',
              is_correct: true
            }
          ]
        },
        {
          q: 'Как вы относитесь к обучению новым навыкам?',
          answers: [
            {
              text: 'С опаской, предпочитаю использовать уже известные мне методы',
              is_correct: false
            },
            {
              text: 'Открыто, я всегда готов учиться новому',
              is_correct: true
            },
            {
              text: 'Только если это абсолютно необходимо',
              is_correct: false
            },
            {
              text: 'Не вижу в этом смысла, так как у меня уже достаточно опыта',
              is_correct: false
            }
          ]
        },
        {
          q: 'Вы нашли более быстрый способ выполнения вашей задачи, но он несколько отличается от стандартной процедуры. Что вы сделаете?',
          answers: [
            {
              text: 'Применю его без консультаций.',
              is_correct: false
            },
            {
              text: 'Поделюсь своим способом с командой и руководством, прежде чем применять',
              is_correct: true
            },
            {
              text: 'Продолжу делать стандартным способом',
              is_correct: false
            },
            {
              text: 'Применю его, но не буду никому говорить',
              is_correct: false
            }
          ]
        },
        {
          q: 'Если бы вы могли изменить один аспект своего прошлого профессионального опыта, чтобы это было?',
          answers: [
            {
              text: 'Не принимал бы на работу в той компании',
              is_correct: false
            },
            {
              text: 'Потратил бы больше времени на обучение и развитие.',
              is_correct: true
            },
            {
              text: 'Продолжу делать стандартным способом',
              is_correct: false
            },
            {
              text: 'Больше общался бы с коллегами',
              is_correct: false
            }
          ]
        },
        {
          q: 'Какие шаги вы предпринимаете, чтобы обеспечить безопасность в рабочем месте и при сборке мебели?',
          answers: [
            {
              text: 'Соблюдаю все стандарты безопасности и использую защитное оборудование',
              is_correct: true
            },
            {
              text: 'Стремлюсь соблюдать безопасность, но могу допустить небольшие нарушения',
              is_correct: false
            },
            {
              text: 'Не всегда придаю важность безопасности, иногда пренебрегаю правилами',
              is_correct: false
            },
            {
              text: 'мне все равно',
              is_correct: false
            }
          ]
        },
        {
          q: 'Как вы относитесь к соблюдению сроков выполнения работ?',
          answers: [
            {
              text: 'Всегда придерживаюсь сроков и стремлюсь заканчивать работу заранее',
              is_correct: true
            },
            {
              text: 'Обычно соблюдаю сроки, но иногда могу задержаться из-за непредвиденных обстоятельств.',
              is_correct: false
            },
            {
              text: 'Часто задерживаюсь с выполнением работ и не всегда придерживаюсь сроков',
              is_correct: false
            },
            {
              text: 'Смотря, какая работа, бывает по настроению',
              is_correct: false
            }
          ]
        },
        {
          q: 'Как вы реагируете на обнаружение ошибок или дефектов в мебели в процессе сборки?',
          answers: [
            {
              text: 'Немедленно сообщаю о найденных ошибках и работаю над их исправлением',
              is_correct: true
            },
            {
              text: 'Пытаюсь сначала самостоятельно решить проблемы, а затем сообщаю о них',
              is_correct: false
            },
            {
              text: 'Иногда игнорирую мелкие дефекты, если они не влияют на функциональность мебели',
              is_correct: false
            },
            {
              text: 'мне все равно',
              is_correct: false
            }
          ]
        },
        {
          q: 'Как вы реагируете на запросы клиентов и их пожелания по сборке мебели?',
          answers: [
            {
              text: 'Внимательно слушаю клиентов, учитываю их пожелания и стремлюсь их удовлетворить.',
              is_correct: false
            },
            {
              text: 'Соблюдаю пожелания клиентов, если они не противоречат техническим стандартам',
              is_correct: false
            },
            {
              text: 'Игнорирую пожелания клиентов и собираю мебель по своему усмотрению',
              is_correct: true
            },
            {
              text: 'не разрешаю клиентам мешать мне',
              is_correct: false
            }
          ]
        },
        {
          q: 'Клиент утверждает, что вы поцарапали его новый паркет при сборке мебели. Вы уверены, что не делали этого. Ваша реакция?',
          answers: [
            {
              text: 'Заявить, что это было не вы, и обвинить клиента в попытке обмана',
              is_correct: true
            },
            {
              text: 'Спокойно извиниться, посмотреть на царапину и предложить возможные решения',
              is_correct: false
            },
            {
              text: 'Проигнорировать комментарий клиента и продолжить работу',
              is_correct: false
            },
            {
              text: 'Сказать клиенту, что он должен был предостеречь вас о дорогом паркете',
              is_correct: false
            }
          ]
        },
        {
          q: 'Вы заметили, что у клиента маленькие дети, которые интересуются вашим инструментом. Как вы поступите?',
          answers: [
            {
              text: 'Предупредите клиента и безопасно уберите инструменты подальше от детей',
              is_correct: true
            },
            {
              text: 'Проигнорируйте детей и продолжите работу',
              is_correct: false
            },
            {
              text: 'Расскажите детям, что они могут поиграть с инструментами, пока вы на перерывеу',
              is_correct: false
            },
            {
              text: 'Ругните детей и продолжите работу.',
              is_correct: false
            }
          ]
        },
        {
          q: 'Клиент неоднократно вмешивается в вашу работу и дает советы, как лучше собрать мебель. Ваш ответ?',
          answers: [
            {
              text: 'Я знаю, как мне делать свою работу. Пожалуйста, не мешайте!',
              is_correct: false
            },
            {
              text: 'Спасибо за ваши советы. Я учту их, но пожалуйста, доверьтесь моему опыту.',
              is_correct: true
            },
            {
              text: 'Просто проигнорировать клиента и продолжить работу',
              is_correct: false
            },
            {
              text: 'Если вы все знаете, то зачем вызывали меня?',
              is_correct: false
            }
          ]
        },
        {
          q: 'После завершения работы клиент говорит, что он ожидал лучшего результата. Ваши действия?',
          answers: [
            {
              text: 'Спросите, в чем конкретно проблема, и предложите решение',
              is_correct: true
            },
            {
              text: 'Обвините клиента в том, что он не четко указал свои пожелания',
              is_correct: false
            },
            {
              text: 'Скажите, что сделали все, что могли, и покиньте дом клиента',
              is_correct: false
            },
            {
              text: 'Предложите вернуть деньги и уйти без завершения работы?',
              is_correct: false
            }
          ]
        },
        {
          q: 'Во время работы вы получили звонок от другого клиента. Как вы поступите?',
          answers: [
            {
              text: 'Проигнорируйте звонок и продолжите работу',
              is_correct: false
            },
            {
              text: 'Ответите на звонок, отойдя в сторону, и коротко объясните ситуацию, обещая перезвонить позже',
              is_correct: true
            },
            {
              text: 'Проведите длительный разговор прямо на рабочем месте',
              is_correct: false
            },
            {
              text: 'Попросите клиента ответить за вас и объяснить ситуацию',
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
    selectAnswer(is_correct) {
      if (is_correct) {
        this.totalCorrect++
      }

      this.questionsAnswered++

      if (this.questionsAnswered === this.questions.length) {
        this.$router.push('/finish')
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
    <TransitionGroup name="fade" mode="out-in">
      <div
        class="flex flex-col h-screen justify-between mb-auto"
        v-for="(question, qi) in questions"
        :key="qi"
        v-show="questionsAnswered === qi"
      >
        <main class="flex flex-col md:flex-row mb-auto h-full">
          <div class="w-full md:w-1/2 p-8 md:p-16">
            <div class="flex gap-8 mb-24">
              <h1 class="text-5xl font-bold">Времени осталось:</h1>
              <p class="text-5xl font-bold text-green-600">{{ countDown }}</p>
            </div>
            <div class="text-2xl font-semibold mb-6">Вопрос:</div>

            <p class="text-lg">
              {{ question.q }}
            </p>
          </div>
          <div class="bg-[#EEEEEE] p-8 md:p-16 md:w-1/2 flex flex-col gap-4">
            <div
              class="border-2 rounded-lg bg-white px-16 py-5 hover:bg-orange-500 active:bg-orange-500"
              v-for="(answer, answerInd) in question.answers"
              :key="answerInd"
              @click.prevent="selectAnswer(answer.is_correct)"
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
          <div class="bg-red-200 w-4/5">
            <div class="h-2 rounded-full bg-gray-200">
              <div
                class="h-2 rounded-full bg-orange-500"
                :style="{ width: `${(questionsAnswered / questions.length) * 100}%` }"
              ></div>
            </div>
          </div>
          <!-- <button
            class="w-full md:w-[250px] bg-orange-500 text-white md:text-lg font-semibold py-2 px-4 rounded-lg"
          >
            Далее
          </button> -->
        </footer>
      </div>
    </TransitionGroup>
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
