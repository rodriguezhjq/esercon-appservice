<template>
  <div>
    <div class="accordion-item box shadow">
      <div id="faq-accordion-content-1" class="accordion-header flex">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faq-accordion-collapse-5"
          aria-expanded="true"
          aria-controls="faq-accordion-collapse-5"
        >
          <div v-if="Service.serviceid == '4'">
            <div class="intro-y items-center col-span-12 flex">
              <div class="col-span-12 ">
                <label class="form-label"></label>
                <input
                  type="text"
                  class="form-control w-64"
                  placeholder="Otro"
                  v-model="otroservicio"
                />
              </div>
            </div>
            <div class="intro-y col-span-6 sm:col-span-6"></div>
          </div>
          <div v-else>
            {{ TitleService }}
          </div>
        </button>
        <Trash2Icon
          class="block mx-auto w-4 h-4 mr-2 text-theme-6 cursor-pointer"
          @click="deleteService"
        />
        <ChevronDownIcon class="w-4 h-4 ml-2" />
      </div>
      <div
        id="faq-accordion-collapse-5"
        class="accordion-collapse collapse show"
        aria-labelledby="faq-accordion-content-1"
        data-bs-parent="#faq-accordion-2"
      >
        <div
          class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
        >
          <div class="grid grid-cols-12 gap-4 gap-y-5">
            <div class="intro-y items-center col-span-12 flex">
              <div class="col-span-12 ">
                <label class="form-label">Proveedor</label>
                <TailSelect
                  v-model="proveedor"
                  placeholder="Seleccione un proveedor"
                  :options="{
                    search: true,
                    classNames: 'w-full'
                  }"
                >
                  <option value="0">Seleccione</option>
                  <option
                    v-for="item in listProveedor"
                    :key="item.id"
                    :value="item.id"
                    >{{ item.razon_social }}</option
                  >
                </TailSelect>
              </div>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <label class="form-label">Nit</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nit"
                v-model="nit"
                disabled
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <label class="form-label">Ciudad</label>
              <input
                type="text"
                class="form-control"
                placeholder="Ciudad"
                v-model="ciudad"
                disabled
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <label class="form-label">Dirección</label>
              <input
                type="text"
                class="form-control"
                placeholder="Dirección"
                v-model="direccion"
                disabled
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
              <label class="form-label">Teléfono</label>
              <input
                type="number"
                class="form-control"
                placeholder="Teléfono"
                v-model="telefono"
                disabled
              />
            </div>
            <PaymentComponent
              class="intro-y col-span-12"
              @getData="getPaymentData"
              :setpaymentData="Service.payment"
            />
            <div class="intro-y col-span-12 font-medium text-base mt-5">
              Agregar costos
            </div>
            <div class="intro-y col-span-12 sm:col-span-3">
              <label class="form-label">Nombre del costo</label>
              <select
                class="form-select"
                v-model="serviceType"
                placeholder="Seleccione una opción"
              >
                <option value="0">Seleccione </option>
                <option
                  v-for="item in listDetalleCosto"
                  :key="item.id"
                  :value="item.id"
                  >{{ item.nombre }}</option
                >
              </select>
            </div>
            <div class="intro-y col-span-12 sm:col-span-3">
              <label class="form-label">Otro</label>
              <input
                max="60"
                type="text"
                class="form-control"
                placeholder="Cual"
                :disabled="disabledField"
                v-model="otroField"
              />
            </div>
            <div class="intro-y col-span-12 sm:col-span-3">
              <label class="form-label">Valor</label>
              <div class="input-group">
                <div class="input-group-text">$</div>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Valor"
                  v-model="valorservicio"
                />
              </div>
            </div>
            <div class="intro-y col-span-12 sm:col-span-3 self-center pt-2">
              <label class="form-label"></label>
              <div class="input-group">
                <button
                  class="btn btn-primary btn-sm mr-2"
                  @click="editCostFlag ? editCostLogic() : addCost()"
                  :disabled="
                    serviceType == 4 && otroField
                      ? false
                      : serviceType != 4
                      ? false
                      : true
                  "
                >
                  <PlusIcon class="w-4 h-4 mr-2" />
                  {{ editCostFlag ? 'Editar' : 'Añadir' }}
                </button>
                <button
                  class="btn btn-danger btn-sm "
                  v-show="editCostFlag"
                  @click="canceledit"
                >
                  <XIcon class="w-4 h-4 mr-2" />
                  Cancelar
                </button>
              </div>
            </div>
            <div class="intro-y col-span-12 sm:col-span-12">
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr class="bg-gray-200 text-gray-700">
                      <th class="border whitespace-nowrap">
                        Nombre del costo
                      </th>
                      <th class="border whitespace-nowrap">
                        Valor
                      </th>
                      <th class="border whitespace-nowrap">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in listacostos.filter(item => item.estado != 'delete')"
                      :key="item.name"
                      class="hover:bg-gray-200"
                    >
                      <td class="border">
                        {{ item.id == 4 ? item.otro : item.name}}
                      </td>
                      <td class="border">{{ item.valor }}</td>
                      <td class="border">
                        <button
                          @click="editCost(item)"
                          class="btn btn-warning btn-sm text-white mr-2"
                        >
                          Editar
                        </button>
                        <button
                          @click="deleteCost(item)"
                          class="btn btn-danger btn-sm text-white mt--2"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PaymentComponent from '@/components/payments-component.vue'
import { servicio as $s } from '@/utils/servicios.js'

export default {
  components: {
    PaymentComponent
  },
  props: {
    TitleService: {
      type: String,
      default: ''
    },
    ServiceId: {
      type: Number
    },
    Service: Object
  },
  data() {
    return {
      listacostos: [],
      editCostFlag: false,
      serviceType: '0',
      otroField: '',
      disabledField: true,
      proveedor: '',
      nit: '',
      direccion: '',
      ciudad: '',
      telefono: '',
      valorservicio: '',
      dataservice: {
        serviceid: this.ServiceId,
        paymentdata: {}
      },
      otroservicio: '',
      listDetalleCosto: [],
      listProveedor: []
    }
  },
  methods: {
    async getDetalleCosto() {
      await $s.getDetalleCosto(
        result => {
          this.listDetalleCosto = result.costo_detalle
          if (this.Service) {
            this.proveedor = this.Service.proveedor.toString()
            this.listacostos = this.Service.listacostos
            this.dataservice.paymentdata = this.Service.payment
          }
        },
        error => {
          console.log(error)
          return []
        }
      )
    },
    async getProveedores() {
      await $s.getProveedor(
        result => {
          this.listProveedor = result.provedores
          this.getDetalleCosto()
        },
        error => {
          console.log(error)
          return []
        }
      )
    },
    deleteService() {
      this.$emit('deleteService', {
        ...this.Service
      })
    },
    addCost() {
      const list = this.listacostos
      if (this.serviceType && this.valorservicio && this.serviceType != '0') {
        if (list.length > 0) {
          if (
            !list.find(
              item => item.id == this.serviceType || item.name == this.otroField
            )
          ) {
            const costo = this.listDetalleCosto.find(
              item => item.id == this.serviceType
            )
            this.listacostos.push({
              estado: 'new',
              id: this.serviceType,
              tipo_costo_servicio_id: this.serviceType,
              name: costo.nombre,
              valor: this.valorservicio,
              otro: this.otroField
            })
          }
        } else {
          const costo = this.listDetalleCosto.find(
            item => item.id == this.serviceType
          )
          this.listacostos.push({
            estado: 'new',
            id: this.serviceType,
            tipo_costo_servicio_id: this.serviceType,
            name: costo.nombre,
            valor: this.valorservicio,
            otro: this.otroField
          })
        }
      }
      this.editCostFlag = false
      this.serviceType = '0'
      this.otroField = ''
      this.valorservicio = ''
    },
    deleteCost(cost) {
      this.editCostFlag = false
      this.serviceType = '0'
      this.otroField = ''
      this.valorservicio = ''
      this.listacostos.map(item => {
        if (item.id == cost.id) {
          item.estado = 'delete'
        }
        return item
      })
    },
    editCost(cost) {
      this.serviceType = cost.id
      this.valorservicio = cost.valor
      this.otroField = cost.otro
      this.editCostFlag = true
    },
    editCostLogic() {
      var objIndex = this.listacostos.findIndex(
        obj => obj.id == this.serviceType
      )
      const costo = this.listDetalleCosto.find(
        item => item.id == this.serviceType
      )
      this.listacostos[objIndex].name = costo.nombre
      this.listacostos[objIndex].valor = this.valorservicio
      this.listacostos[objIndex].otro = this.otroField
      this.editCostFlag = false
      this.serviceType = '0'
      this.otroField = ''
      this.valorservicio = ''
    },
    canceledit() {
      this.editCostFlag = false
      this.serviceType = '0'
      this.otroField = ''
      this.valorservicio = ''
    },
    getPaymentData(values) {
      this.dataservice.paymentdata = values
    }
  },
  watch: {
    serviceType(newValue, oldValue) {
      if (newValue == 4) {
        this.disabledField = false
      } else {
        this.disabledField = true
        this.otroField = ''
      }
    },
    proveedor: {
      handler(newValue) {
        if (newValue) {
          const proveedor = this.listProveedor.find(x => x.id == newValue)
          if (proveedor) {
            this.dataservice.proveedor_id = newValue
            try {
              this.nit = proveedor.numeros_identicacion[0].numero
              this.direccion = proveedor.direccion
              this.ciudad = proveedor.municipio
              this.telefono = proveedor.telefono
            } catch (e) {
              console.error(e)
            }
          }
        }
      },
      deep: true
    },
    listacostos: {
      handler(newValue) {
        this.dataservice.listacostos = newValue
      },
      deep: true
    },
    otroservicio: {
      handler(newValue) {
        this.dataservice.otroservicio = newValue
      },
      deep: true
    },
    dataservice: {
      handler(newValue) {
        this.$emit('getData', newValue)
      },
      deep: true
    }
  },
  async mounted() {
    this.dataservice.estado = this.Service.estado
    this.dataservice.servicio_id = this.Service.servicio_id
    if (this.Service.listacostos) {
      this.listacostos = this.Service.listacostos
    }
    await this.getProveedores()
  }
}
</script>
