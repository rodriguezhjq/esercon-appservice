<template>
  <Chart
    type="line"
    :width="width"
    :height="height"
    :data="data"
    :options="options"
  />
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const store = useStore()
    const darkMode = computed(() => store.state.main.darkMode)
    const data = computed(() => {
      return {
        labels: [
          'Caracoli',
          'Ruta SEYTU',
          'Avanzamos',
          'TUF',
          'Dragon',
          'Rela',
          'CXP',
          'Gadman'
        ],
        datasets: [
          {
            label: 'Costo',
            data: [50000, 45000, 85000, 105000, 90050, 110000, 90000, 120000],
            borderWidth: 1,
            borderColor: '#3160D8',
            backgroundColor: 'transparent',
            pointBorderColor: 'transparent'
          },
          {
            label: 'Costo',
            data: [32000, 60000, 72000, 850, 60090, 80005, 120000, 100010],
            borderWidth: 1,
            borderDash: [1, 1],
            borderColor: '#a0afbf',
            backgroundColor: 'transparent',
            pointBorderColor: 'transparent'
          }
        ]
      }
    })
    const options = computed(() => {
      return {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontSize: '12',
                fontColor: darkMode.value ? '#718096' : '#777777'
              },
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontSize: '12',
                fontColor: darkMode.value ? '#718096' : '#777777',
                callback: function(value) {
                  return '$' + value
                }
              },
              gridLines: {
                color: darkMode.value ? '#718096' : '#D8D8D8',
                zeroLineColor: darkMode.value ? '#718096' : '#D8D8D8',
                borderDash: [2, 2],
                zeroLineBorderDash: [2, 2],
                drawBorder: false
              }
            }
          ]
        }
      }
    })

    return {
      data,
      options
    }
  }
})
</script>
