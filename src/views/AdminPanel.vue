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

    <div class="page-content">
      <div class="card">
        <div class="card-head">
          <div class="title-input">
            <span class="title">Пользователи</span>
          </div>

          <div>
            <button_document :userList="userList" />
          </div>
        </div>

        <div class="custom-table">
          <div class="loading" v-if="isLoading || !userList">
            <img src="/images/loading.gif" alt="loading" />
          </div>
          <div class="dont-have-data" v-else-if="!userList.length">Нет данных</div>
          <table v-else>
            <thead>
              <tr>
                <td>Название теста</td>
                <td>ФИО</td>
                <td>Номер телефона</td>
                <td>Дата регистрации</td>
                <td>Правильных/Всего ответов</td>
                <td>Всего вопросов</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) of userList" :key="index">
                <td class="highlight">{{ user.test_name }}</td>
                <td class="highlight">{{ user.username }}</td>
                <td class="highlight">{{ user.phone }}</td>
                <td>{{ user.created_at }}</td>
                <td class="highlight">{{ user.user_corrects }}</td>
                <td>{{ user.questions_total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useDataStore } from '../stores/data'

import IconAlternativeLogo from '../components/icons/IconAlternativeLogo.vue'

import { button_document } from '@/components/UI/button-document'

export default {
  components: {
    IconAlternativeLogo,
    button_document
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState(useDataStore, ['userList'])
  },
  async mounted() {
    this.isLoading = true
    await this.GET_RESULTS()
    this.isLoading = false

    this.userList.sort(function (a, b) {
      return new Date(b.created_at) - new Date(a.created_at)
    })
  },
  unmounted() {},
  methods: {
    ...mapActions(useDataStore, ['GET_RESULTS'])
  }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar-track {
  border-radius: 0.125rem;
  background-color: transparent;
}
::-webkit-scrollbar {
  width: 0.25rem;
  border-radius: 0.125rem;
}
::-webkit-scrollbar-thumb {
  border-radius: 0.125rem;
  background-color: gray;
}
.custom-table {
  width: calc(100% + 40px);
  margin: 0 -20px;

  height: 100%;
  overflow: auto;

  .loading {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: fit-content;
    }
  }

  .dont-have-data {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #555;
    font-family: 'Roboto';
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  table {
    width: 100%;

    thead {
      tr {
        height: 40px;
      }
    }
    tbody {
      tr {
        height: 60px;
      }

      tr:hover {
        box-shadow: 0px 0px 20px #e9e9e9;
      }

      tr.active {
        border-left: 3px solid #f2722c !important;
        background: rgba(242, 114, 44, 0.05);
        * {
          color: #777777 !important;
        }
      }
    }

    tr {
      border-bottom: 1px solid #efefef;
    }

    td:first-child {
      padding-left: 20px;
    }
    td:last-child {
      padding-right: 20px;
    }
  }

  table {
    thead {
      td {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        color: #777777;
      }
    }

    tbody {
      td {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #999999;
      }

      .description {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
      }

      .count-details {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
      }

      .highlight {
        font-weight: 500;
        color: #333333;
      }
    }
  }
}

.page-content {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  height: calc(100% - 122px);

  padding: 20px;

  .card {
    padding: 20px;

    box-shadow: 0px 0px 25px #00000025;

    border-radius: 15px;
    background: #ffffff;

    border: 1px solid #efefef;

    height: 100%;
    overflow: hidden;

    flex: 1;

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title-input {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 10px;
      }
    }
  }
}

.page-content {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #777777;
}
</style>
