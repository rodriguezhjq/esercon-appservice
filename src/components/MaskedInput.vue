<template>
  <div>
    <input
      type="text"
      :placeholder="template"
      class="form-control"
      v-model="number"
    />
  </div>
</template>

<script>
export default {
  props: ['template'],
  data() {
    return {
      number: '',
      format: '',
      regex: '^'
    }
  },
  mounted() {
    let x = 1
    this.format = this.template.replace(/#+/g, () => '$' + x++)
    this.template.match(/#+/g).forEach((char, key) => {
      this.regex += '(\\d{' + char.length + '})?'
    })
  },
  watch: {
    number() {
      this.number = this.number
        .replace(/[^0-9]/g, '')
        .replace(new RegExp(this.regex, 'g'), this.format)
        .substr(0, this.template.length)
    }
  }
}
</script>
