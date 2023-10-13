<template>
  <div class="btn-export-excel" @click="export_to_excel"><icon_download_document /></div>
</template>

<style src="./button-document.scss" lang="scss" scoped />

<script>
import * as XLSX from 'xlsx'

import icon_download_document from '@/components/icons/icon-download-document.vue'

export default {
  name: 'button-document',
  props: {
    userList: {
      default: []
    }
  },
  components: {
    icon_download_document
  },
  computed: {},
  methods: {
    export_to_excel() {
      const tableData = this.userList.map((user) => {
        return {
          'Название теста': user.test_name,
          ФИО: user.username,
          'Номер телефона': user.phone,
          'Дата регистрации': user.created_at,
          'Правильных ответов': user.user_corrects,
          'Всего вопросов': user.questions_total
        }
      })

      const worksheet = XLSX.utils.json_to_sheet(tableData, { header: Object.keys(tableData[0]) })
      const workbook = XLSX.utils.book_new()

      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')

      const cols = [{ wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 20 }]
      worksheet['!cols'] = cols

      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })

      const excelData = new Blob([excelBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      })

      const excelFilename = `отчет_по_пользователям_${new Date().toLocaleString('kz')}.xlsx`
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(excelData, excelFilename)
      } else {
        const link = document.createElement('a')
        if (link.download !== undefined) {
          const url = URL.createObjectURL(excelData)
          link.setAttribute('href', url)
          link.setAttribute('download', excelFilename)
          link.style.visibility = 'hidden'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      }
    }
  }
}
</script>
