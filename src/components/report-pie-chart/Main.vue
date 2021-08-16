<template>
  <Chart
    type="pie"
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
        labels: ['Caracoli', 'Ruta SEYTU', 'TUF'],
        datasets: [
          {
            data: [15000, 10000, 65000],
            backgroundColor: ['#FF8B26', '#FFC533', '#285FD3'],
            hoverBackgroundColor: ['#FF8B26', '#FFC533', '#285FD3'],
            borderWidth: 5,
            borderColor: darkMode.value ? '#303953' : '#fff'
          }
        ]
      }
    })
    const options = computed(() => {
      return {
        legend: {
          display: false
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
