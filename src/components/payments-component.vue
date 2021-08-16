<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="intro-y">
      <label for="input-wizard-1" class="form-label">
        Quién realiza el pago</label
      >
      <select
        class="form-select"
        v-model="responsablepago"
        placeholder="Seleccione una opción"
      >
        <option value="0">Seleccione</option>
        <option value="Esercon">Esercon</option>
        <option value="Proveedor">Proveedor</option>
      </select>
    </div>
    <div class="intro-y">
      <label for="input-wizard-121" class="form-label">Forma de pago</label>
      <div class="preview">
        <select
          class="form-select"
          v-model="formapago"
          placeholder="Seleccione una opción"
        >
          <option value="0">Seleccione</option>
          <option value="Diaria">Diaria</option>
          <option value="Semanal">Semanal</option>
          <option value="Quincenal">Quincenal</option>
          <option value="Mensual">Mensual</option>
        </select>
      </div>
    </div>
    <div class="intro-y">
      <label for="input-wizard-121" class="form-label">Medio de pago</label>
      <div class="preview">
        <select
          class="form-select"
          v-model="paymentMethod"
          placeholder="Seleccione una opción"
        >
          <option value="0">Seleccione</option>
          <option value="Efectivo">Efectivo</option>
          <option value="Credito">Crédito</option>
          <option value="Transferencia">Transferencia</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
    </div>
    <div class="intro-y">
      <label for="input-wizard-1" class="form-label">Otro</label>
      <input
        :disabled="disabledField"
        type="text"
        class="form-control"
        placeholder="Cual"
        v-model="otroField"
        maxlength="60"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    setpaymentData: Object
  },
  data() {
    return {
      paymentMethod: '0',
      responsablepago: '0',
      formapago: '0',
      disabledField: true,
      otroField: '',
      datapayment: {}
    }
  },
  watch: {
    responsablepago: {
      handler(newVal) {
        this.datapayment.responsablepago = newVal
      },
      deep: true
    },
    formapago: {
      handler(newVal) {
        this.datapayment.formapago = newVal
      },
      deep: true
    },
    paymentMethod(newValue, oldValue) {
      if (newValue == 'Otro') {
        this.disabledField = false
      } else {
        this.disabledField = true
        this.otroField = ''
      }
      this.datapayment.paymentmethod = newValue
    },
    otroField: {
      handler(newVal) {
        this.datapayment.otromediopago = newVal
      },
      deep: true
    },
    datapayment: {
      handler(newVal) {
        if (newVal.responsablepago != null && newVal.formapago != null && newVal.paymentmethod != null) {
          this.$emit('getData', newVal)
        }
      },
      deep: true
    }
  },
  mounted() {
    if (this.setpaymentData) {
      this.paymentMethod = this.setpaymentData.paymentmethod
      this.responsablepago = this.setpaymentData.responsablepago
      this.formapago = this.setpaymentData.formapago
      this.otroField = this.setpaymentData.otromediopago
    }
  }
}
</script>
