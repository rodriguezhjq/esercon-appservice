<template>
  <div>
    <div class="accordion-item box shadow">
      <div id="faq-accordion-content-4" class="accordion-header flex">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faq-accordion-collapse-8"
          aria-expanded="false"
          aria-controls="faq-accordion-collapse-8"
        >
          <div v-if="conditionid == '4'">
            <div class="intro-y items-center col-span-12 flex">
              <div class="col-span-12 ">
                <label class="form-label"></label>
                <input
                  type="text"
                  class="form-control w-64"
                  placeholder="Otro"
                  v-model="otrospagos"
                />
              </div>
            </div>
            <div class="intro-y col-span-6 sm:col-span-6"></div>
          </div>
          <div v-else>
            {{ name }}
          </div>
        </button>
        <Trash2Icon
          class="block mx-auto w-4 h-4 mr-2 text-theme-6 cursor-pointer"
          @click="borrarPago"
        />
        <ChevronDownIcon class="w-4 h-4 ml-2" />
      </div>
      <div
        id="faq-accordion-collapse-8"
        class="accordion-collapse collapse"
        aria-labelledby="faq-accordion-content-4"
        data-bs-parent="#faq-accordion-2"
      >
        <div
          class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
        >
          <PaymentComponent
            class="intro-y col-span-12"
            :setpaymentData="objeto.payment"
            @getData="getPaymentData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentComponent from '@/components/payments-component.vue'

export default {
  components: {
    PaymentComponent
  },
  props: ['name', 'conditionid', 'objeto'],
  data() {
    return {
      conditionsdata: {},
      otrospagos: ''
    }
  },
  methods: {
    borrarPago() {
      this.$emit('borrarPago', {
        estado: this.objeto.estado,
        idinterna: this.objeto.idinterna
      })
    },
    getPaymentData(values) {
      this.conditionsdata = {
        id: this.objeto.id,
        nombre_condicion_economica_id: this.objeto.nombre_condicion_economica_id,
        estado: this.objeto.estado,
        formapago: values.formapago && values.formapago,
        paymentmethod: values.paymentmethod && values.paymentmethod,
        responsablepago: values.responsablepago && values.responsablepago,
        otromediopago: values.otromediopago && values.otromediopago,
        idinterna: this.objeto.idinterna,
        otros: this.otrospagos
      }
    }
  },
  watch: {
    conditionsdata(newValue, oldValue) {
      this.$emit('getData', newValue)
    }
  },
  mounted() {
  }
}
</script>

<style></style>
