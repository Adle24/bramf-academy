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
      // questions: [
      //   {
      //     id_q: 1,
      //     q: 'Какие параметры важно измерить при проведении замера кухонного пространства?',
      //     answers: [
      //       {
      //         id_ans: 1,
      //         text: 'Только длину и ширину стен',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 2,
      //         text: 'Длину и ширину стен, высоту потолка, расположение дверей и окон, количество розеток в комнате',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 3,
      //         text: 'Только высоту потолка',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 4,
      //         text: 'Длину и ширину стен, а также количество розеток в комнате',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 2,
      //     q: 'Какие дополнительные данные следует учитывать при замере кухонных элементов?',
      //     answers: [
      //       {
      //         id_ans: 5,
      //         text: 'Только габариты кухонных шкафов',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 6,
      //         text: 'Только расположение розеток',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 7,
      //         text: 'Габариты кухонных шкафов, расположение розеток, раковины и вытяжки',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 8,
      //         text: 'Тип пола в кухне',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 3,
      //     q: 'Почему важно фиксировать особенности заказа и пожелания клиента в отчете?',
      //     answers: [
      //       {
      //         id_ans: 9,
      //         text: 'Для того чтобы подчеркнуть дизайнерские решения',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 10,
      //         text: 'Это не важно, так как клиент всегда может изменить заказ',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 11,
      //         text: 'Чтобы убедиться, что клиент получит именно то, что хотел',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 12,
      //         text: 'Это не имеет значения при создании проекта',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 4,
      //     q: 'Что следует делать, если клиент имеет дополнительные пожелания относительно кухонной мебели во время замера?',
      //     answers: [
      //       {
      //         id_ans: 13,
      //         text: 'Проигнорировать их, так как они не входят в обязанности замерщика',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 14,
      //         text: 'Записать пожелания клиента и обсудить их с дизайнером',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 15,
      //         text: 'Напомнить клиенту, что это не его дело, и продолжить замер',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 16,
      //         text: 'Попросить клиента обратиться к дизайнеру после замера.',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 5,
      //     q: 'Какой из следующих инструментов является неотъемлемым для работы замерщика кухонной мебели?',
      //     answers: [
      //       {
      //         id_ans: 17,
      //         text: 'Линейка',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 18,
      //         text: 'Лазерный дальномер',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 19,
      //         text: 'Магнитный ключ',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 20,
      //         text: 'измерительная лента',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 6,
      //     q: 'Что включает в себя задача замерщика кухонной мебели?',
      //     answers: [
      //       {
      //         id_ans: 21,
      //         text: 'Только измерение длины и ширины стен',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 22,
      //         text: 'Измерение кухонных элементов и оценка расположения технических характеристик',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 23,
      //         text: 'Изготовление мебели',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 24,
      //         text: 'Покраска стен',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 7,
      //     q: 'Какие параметры важно учитывать при измерении высоты потолка в кухне?',
      //     answers: [
      //       {
      //         id_ans: 25,
      //         text: 'Только высоту потолка',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 26,
      //         text: 'Высоту потолка и высоту точек подключения кухонных приборов',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 27,
      //         text: 'Только цвет потолка',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 28,
      //         text: 'Температуру в комнатес',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 8,
      //     q: 'Почему важно учитывать расположение дверей и окон при замере кухонного пространства?',
      //     answers: [
      //       {
      //         id_ans: 29,
      //         text: 'Для выбора цвета дверей и окон',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 30,
      //         text: 'Для установки жалюзи',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 31,
      //         text: 'Для правильного размещения мебели и учета освещения',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 32,
      //         text: 'Это не важно при замере кухни',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 9,
      //     q: 'По какой причине замерщик кухонной мебели должен вести детальные записи и создавать отчеты о замере?',
      //     answers: [
      //       {
      //         id_ans: 33,
      //         text: 'Для того чтобы запутать клиента',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 34,
      //         text: 'Для дополнительного оформления счета',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 35,
      //         text: 'Для предоставления клиенту точных данных и обеспечения успешной установки мебели',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 36,
      //         text: 'Замерщик не обязан создавать отчеты',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 10,
      //     q: 'Измерение пространства Задача: Вам необходимо провести замер кухонного пространства для создания проекта кухни. Какие измерения и данные вы будете собирать?',
      //     answers: [
      //       {
      //         id_ans: 37,
      //         text: 'Только длину и ширину стен',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 38,
      //         text: 'Длину и ширину стен, высоту потолка, расположение дверей и окон',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 39,
      //         text: 'Только высоту потолка',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 40,
      //         text: 'Длину и ширину стен, а также количество розеток в комнате',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 11,
      //     q: 'Оценка кухонных элементов Задача: Вы выполняете замер кухонной мебели. Какие данные и параметры вы будете фиксировать при измерении кухонных элементов?',
      //     answers: [
      //       {
      //         id_ans: 41,
      //         text: 'Только цвет кухонных шкафов',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 42,
      //         text: 'Габариты кухонных шкафов и раковины',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 43,
      //         text: 'Только расположение розеток',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 44,
      //         text: 'Марку и модель холодильника',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 12,
      //     q: 'Учет технических характеристик Задача: Во время замера кухонного пространства, какие технические характеристики и параметры вы должны учесть?',
      //     answers: [
      //       {
      //         id_ans: 45,
      //         text: 'Только цвет стен',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 46,
      //         text: 'Тип пола в кухне',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 47,
      //         text: 'Габариты кухонных элементов и расположение розеток',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 48,
      //         text: 'Только площадь пола',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 13,
      //     q: 'Расположение дверей и окон Задача: Почему важно учитывать расположение дверей и окон при замере кухонного пространства?',
      //     answers: [
      //       {
      //         id_ans: 49,
      //         text: 'Для выбора цвета дверей и окон',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 50,
      //         text: 'Для установки жалюзи',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 51,
      //         text: 'Для правильного размещения мебели и учета освещения',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 52,
      //         text: 'Это не важно при замере кухни',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 14,
      //     q: 'Создание отчета Задача: Зачем замерщик кухонной мебели должен вести детальные записи и создавать отчеты о замере?',
      //     answers: [
      //       {
      //         id_ans: 53,
      //         text: 'Для того чтобы запутать клиента',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 54,
      //         text: 'Для дополнительного оформления счета',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 55,
      //         text: 'Для предоставления клиенту точных данных и обеспечения успешной установки мебели',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 56,
      //         text: 'Замерщик не обязан создавать отчеты',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 15,
      //     q: 'Какой первый шаг при встрече с клиентом для замера кухонной мебели?',
      //     answers: [
      //       {
      //         id_ans: 57,
      //         text: 'Презентация каталога мебели',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 58,
      //         text: 'Вежливое приветствие и установление контакта с клиентом',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 59,
      //         text: 'Сразу начать измерения',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 60,
      //         text: 'Подарить клиенту скидочный купон',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 16,
      //     q: 'Какие навыки важны при общении с клиентом?',
      //     answers: [
      //       {
      //         id_ans: 61,
      //         text: 'Только навыки рисования схем мебели',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 62,
      //         text: 'Навыки маникюра',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 63,
      //         text: 'Навыки коммуникации, слушания и понимания потребностей клиента',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 64,
      //         text: 'Навыки бега на длинные дистанции',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 17,
      //     q: 'Какие действия следует предпринять, если клиент выражает недовольство качеством вашей работы?',
      //     answers: [
      //       {
      //         id_ans: 65,
      //         text: 'Игнорировать его жалобы',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 66,
      //         text: 'Оправдываться и обвинять клиента в недоразумении',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 67,
      //         text: 'Слушать его внимательно, извиниться, если необходимо, и предложить решение проблемы',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 68,
      //         text: 'Попросить клиента не выражать недовольства',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 18,
      //     q: 'Какой подход следует выбирать при общении с клиентами дома?',
      //     answers: [
      //       {
      //         id_ans: 69,
      //         text: 'Показать свой авторитет и контролировать беседу.',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 70,
      //         text: 'Быть открытым, доброжелательным и внимательным к потребностям и пожеланиям клиента',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 71,
      //         text: 'Пренебрегать мнением клиента и следовать своему плану',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 72,
      //         text: 'Пытаться продать клиенту самую дорогую мебель независимо от его потребностей',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 19,
      //     q: 'Вы заметили, что у клиента маленькие дети, которые интересуются вашим инструментом. Как вы поступите?',
      //     answers: [
      //       {
      //         id_ans: 73,
      //         text: 'Предупредите клиента и безопасно уберите инструменты подальше от детей',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 74,
      //         text: 'Проигнорируйте детей и продолжите работу',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 75,
      //         text: 'Расскажите детям, что они могут поиграть с инструментами, пока вы на перерыве',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 76,
      //         text: 'Ругните детей и продолжите работу',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 20,
      //     q: 'Во время работы вы получили звонок от другого клиента. Как вы поступите?',
      //     answers: [
      //       {
      //         id_ans: 77,
      //         text: 'Проигнорируйте звонок и продолжите работу',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 78,
      //         text: 'Ответите на звонок, отойдя в сторону, и коротко объясните ситуацию, обещая перезвонить позже',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 79,
      //         text: 'Проведите длительный разговор прямо на рабочем месте',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 80,
      //         text: 'Попросите клиента ответить за вас и объяснить ситуацию',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 21,
      //     q: 'Какие измерения включают в себя ширина и длина стен при проведении замера кухонной мебели?',
      //     answers: [
      //       {
      //         id_ans: 81,
      //         text: 'Только горизонтальные измерения',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 82,
      //         text: 'Только вертикальные измерения',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 83,
      //         text: 'Горизонтальные и вертикальные измерения',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 84,
      //         text: 'Только глубина стен',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 22,
      //     q: 'Что следует делать, чтобы учесть выступы, ниши и другие особенности кухонного пространства при замере?',
      //     answers: [
      //       {
      //         id_ans: 85,
      //         text: 'Проигнорировать их и измерить только главные стены',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 86,
      //         text: 'Фиксировать и измерять каждую особенность отдельно',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 87,
      //         text: 'Предполагать, что они не влияют на мебель и измерять только стены',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 88,
      //         text: 'Рисовать схему, где все особенности отмечены в произвольном порядке',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 23,
      //     q: 'Зачем важно учитывать расположение дверей и окон при создании плана кухни?',
      //     answers: [
      //       {
      //         id_ans: 89,
      //         text: 'Для определения цвета оконных рам и дверей',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 90,
      //         text: 'Для учета местоположения столов и стульев',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 91,
      //         text: 'Для правильного размещения мебели и учета освещения',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 92,
      //         text: 'Это не важно при создании плана кухни',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 24,
      //     q: 'Какие из следующих элементов следует измерить, чтобы определить максимальные размеры кухонных шкафов?',
      //     answers: [
      //       {
      //         id_ans: 93,
      //         text: 'Только длину и ширину стен',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 94,
      //         text: 'Только высоту потолка',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 95,
      //         text: 'Длину и ширину стен, а также расстояние от пола до верхней точки, где может быть установлен шкаф',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 96,
      //         text: 'Только глубину стен',
      //         is_correct: false
      //       }
      //     ]
      //   },
      //   {
      //     id_q: 25,
      //     q: 'Какие навыки нужны замерщику для создания точного плана кухни?',
      //     answers: [
      //       {
      //         id_ans: 97,
      //         text: 'Только навыки чтения чертежей',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 98,
      //         text: 'Навыки работы с лазерным дальномером и измерительной лентой',
      //         is_correct: true
      //       },
      //       {
      //         id_ans: 99,
      //         text: 'Только навыки рисования',
      //         is_correct: false
      //       },
      //       {
      //         id_ans: 100,
      //         text: 'Навыки плавания',
      //         is_correct: false
      //       }
      //     ]
      //   }
      // ]
    }
  },
  computed: {
    ...mapState(useDataStore, ['phoneStore', 'processedQuestions', 'questions']),
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
  created() {
    this.countDownTimer()
  },
  mounted() {
    console.log(this.processedQuestions)
    this.getQuestions()
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
