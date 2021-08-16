<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Ubicaciones</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <a @click="newLocation" class="btn btn-primary shadow-md mr-2">
          Nueva Ubicación
        </a>
      </div>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <div
      v-if="loading"
      class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center"
    >
      <LoadingIcon icon="oval" class="w-8 h-8" />
      <div class="text-center  text-xs mt-2">Cargando...</div>
    </div>
    <div class="intro-y box p-5 mt-5">
      <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
        <div class="flex justify-content-end mt-5 sm:mt-0">
          <button
            id="tabulator-print"
            class="btn btn-outline-secondary w-1/2 sm:w-auto mr-2"
            @click="onPrint"
          >
            <PrinterIcon class="w-4 h-4 mr-2" /> Print
          </button>
          <div class="dropdown w-1/2 sm:w-auto mr-2">
            <button
              class="dropdown-toggle btn btn-outline-secondary w-full sm:w-auto"
              aria-expanded="false"
            >
              <FileTextIcon class="w-4 h-4 mr-2" /> Export
              <ChevronDownIcon class="w-4 h-4 ml-auto sm:ml-2" />
            </button>
            <div class="dropdown-menu w-40">
              <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                <a
                  id="tabulator-export-json"
                  href="javascript:;"
                  class="
                    flex
                    items-center
                    block
                    p-2
                    transition
                    duration-300
                    ease-in-out
                    bg-white
                    dark:bg-dark-1
                    hover:bg-gray-200
                    dark:hover:bg-dark-2
                    rounded-md
                  "
                  @click="onPDF"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Export PDF
                </a>
                <a
                  id="tabulator-export-xlsx"
                  href="javascript:;"
                  class="
                    flex
                    items-center
                    block
                    p-2
                    transition
                    duration-300
                    ease-in-out
                    bg-white
                    dark:bg-dark-1
                    hover:bg-gray-200
                    dark:hover:bg-dark-2
                    rounded-md
                  "
                  @click="onExcel"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Export EXCEL
                </a>
              </div>
            </div>
          </div>
          <input
            id="input-wizard-1"
            type="text"
            class="form-control mr-2"
            placeholder="Buscar..."
          />
        </div>
      </div>
      <div class="overflow-x-auto scrollbar-hidden">
        <div
          ref="tableRef"
          class="mt-5 table-report table-report--tabulator"
        ></div>
      </div>
    </div>
    <!-- END: HTML Table Data -->
    <div
      id="delete-modal-ubicacion"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <AlertTriangleIcon class="w-16 h-16 text-theme-12 mx-auto mt-3" />
              <div class="text-3xl mt-5">Está seguro?</div>
              <div class="text-gray-600 mt-2">
                Realmente quieres eliminar este registro? <br />
                Este proceso no se podra deshacer.
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                @click.prevent="modalCancel"
                class="btn btn-outline-secondary w-24 dark:border-dark-5 dark:text-gray-300 mr-1"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="btn btn-danger w-24"
                @click="eliminarUbicacion"
              >
                Si, Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="addlocation"
      class="modal"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="font-medium text-base mr-auto">
              Nueva ubicación
            </h2>
          </div>
          <div class="modal-body p-0">
            <div class="p-5">
              <div class="grid grid-cols-12 gap-4 gap-y-5">
                <div class="col-span-4 sm:col-span-4">
                  <label for="input-wizard-1" class="form-label"
                    >Departamento</label
                  >
                  <TailSelect
                    v-model="departamento"
                    placeholder="Departamento"
                    :options="{
                      search: true,
                      classNames: 'w-full'
                    }"
                  >
                    <option value="0">Seleccione</option>
                    <option
                      v-for="item in Departamentos"
                      :key="item.id"
                      :value="item.id"
                      >{{ item.nombre }}</option
                    >
                  </TailSelect>
                  <p class=" text-theme-6" v-if="errorDepartamento">
                    <strong>Seleccione al menos uno</strong>
                  </p>
                </div>
                <div class="col-span-4 sm:col-span-4">
                  <label for="input-wizard-1" class="form-label"
                    >Ciudad / Municipio</label
                  >
                  <TailSelect
                    v-model="municipio"
                    placeholder="Municipio"
                    :options="{
                      search: true,
                      classNames: 'w-full'
                    }"
                  >
                    <option value="0">Seleccione</option>
                    <option
                      v-for="item in Municipios"
                      :key="item.id"
                      :value="item.id"
                      >{{ item.nombre }}</option
                    >
                  </TailSelect>
                  <p class=" text-theme-6" v-if="errorMunicipio">
                    <strong>Seleccione al menos uno</strong>
                  </p>
                </div>
                <div class="col-span-4 sm:col-span-4">
                  <label for="direccion" class="form-label">Dirección</label>
                  <input
                    id="direccion"
                    type="text"
                    class="form-control"
                    placeholder="Dirección"
                    v-model="direccion"
                    maxLength="70"
                  />
                  <p class=" text-theme-6" v-if="errorDireccion">
                    <strong>Ingrese una dirección</strong>
                  </p>
                </div>
                <div class="col-span-6 sm:col-span-6">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input
                    id="nombre"
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    v-model="nombre"
                    maxLength="70"
                  />
                  <p class=" text-theme-6" v-if="errorNombre">
                    <strong>Ingrese un nombre</strong>
                  </p>
                </div>
                <div class="col-span-6 sm:col-span-6">
                  <label for="clasificacion" class="form-label"
                    >Clasficación</label
                  >
                  <select
                    id="clasificacion"
                    class="form-select sm:mr-2"
                    aria-label="Clasificacion"
                    v-model="clasificacion"
                  >
                    <option value="0">
                      Seleccione
                    </option>
                    <option
                      :value="item.id"
                      v-for="item in clasificaciones"
                      :key="item.id"
                    >
                      {{ item.nombre }}
                    </option>
                  </select>
                  <p class="text-theme-6" v-if="errorClasificacion">
                    <strong>Seleccione al menos uno</strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="px-5 pb-8 text-right">
              <button
                type="button"
                @click.prevent="modalCancel"
                class="btn btn-outline-secondary w-24 dark:border-dark-5 dark:text-gray-300 mr-1"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="crearUbicacion()"
              >
                Agregar Ubicación
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="editLocation"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="font-medium text-base mr-auto">
              Editar ubicación
            </h2>
          </div>
          <div class="modal-body p-0">
            <div class="p-5">
              <div class="grid grid-cols-12 gap-4 gap-y-5">
                <div class="col-span-4 sm:col-span-4">
                  <label for="input-wizard-1" class="form-label"
                    >Departamento</label
                  >
                  <TailSelect
                    v-model="departamento"
                    placeholder="Departamento"
                    :options="{
                      search: true,
                      classNames: 'w-full'
                    }"
                  >
                    <option value="0">Seleccione</option>
                    <option
                      v-for="item in Departamentos"
                      :key="item.id"
                      :value="item.id"
                      >{{ item.nombre }}</option
                    >
                  </TailSelect>
                  <p class=" text-theme-6" v-if="errorDepartamento">
                    <strong>Seleccione al menos uno</strong>
                  </p>
                </div>
                <div class="col-span-4 sm:col-span-4">
                  <label for="input-wizard-1" class="form-label"
                    >Ciudad / Municipio</label
                  >
                  <TailSelect
                    v-model="municipio"
                    placeholder="Municipio"
                    :options="{
                      search: true,
                      classNames: 'w-full'
                    }"
                  >
                    <option value="0">Seleccione</option>
                    <option
                      v-for="item in Municipios"
                      :key="item.id"
                      :value="item.id"
                      >{{ item.nombre }}</option
                    >
                  </TailSelect>
                  <p class=" text-theme-6" v-if="errorMunicipio">
                    <strong>Seleccione al menos uno</strong>
                  </p>
                </div>
                <div class="col-span-4 sm:col-span-4">
                  <label for="direccion" class="form-label">Dirección</label>
                  <input
                    id="direccion"
                    type="text"
                    class="form-control"
                    placeholder="Dirección"
                    v-model="direccion"
                    maxLength="70"
                  />
                  <p class=" text-theme-6" v-if="errorDireccion">
                    <strong>Ingrese una dirección</strong>
                  </p>
                </div>
                <div class="col-span-6 sm:col-span-6">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input
                    id="nombre"
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    v-model="nombre"
                    maxLength="70"
                  />
                  <p class=" text-theme-6" v-if="errorNombre">
                    <strong>Ingrese un nombre</strong>
                  </p>
                </div>
                <div class="col-span-6 sm:col-span-6">
                  <label for="clasificacion" class="form-label"
                    >Clasficación</label
                  >
                  <select
                    id="clasificacion"
                    class="form-select sm:mr-2"
                    aria-label="Clasificacion"
                    v-model="clasificacion"
                  >
                    <option value="0">
                      Seleccione
                    </option>
                    <option
                      :value="item.id"
                      v-for="item in clasificaciones"
                      :key="item.id"
                    >
                      {{ item.nombre }}
                    </option>
                  </select>
                  <p class="text-theme-6" v-if="errorClasificacion">
                    <strong>Seleccione al menos uno</strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="px-5 pb-8 text-right">
              <button
                type="button"
                @click.prevent="modalCancel"
                class="btn btn-outline-secondary w-24 dark:border-dark-5 dark:text-gray-300 mr-1"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="actualizarUbicacion"
              >
                Editar Ubicación
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabulator from 'tabulator-tables'
import feather from 'feather-icons'
import { servicio as $s } from '@/utils/servicios.js'

export default {
  data() {
    return {
      Departamentos: [],
      departamento: 0,
      Municipios: [],
      municipio: 0,
      direccion: '',
      nombre: '',
      clasificacion: 0,
      clasificaciones: [],
      tabulator: null,
      tablaData: [],
      loading: false,
      errorDepartamento: false,
      errorMunicipio: false,
      errorDireccion: false,
      errorNombre: false,
      errorClasificacion: false,
      selectedId: ''
    }
  },
  methods: {
    async getUbicaciones() {
      await $s.getUbicaciones(
        result => {
          this.tablaData = result.ubicacion_recorrido
          this.setData()
          this.loading = false
        },
        error => {
          console.log(error)
          return []
        }
      )
    },
    async getClasificaciones() {
      await $s.getClasificaciones(
        result => {
          this.clasificaciones = result.clasificacion
        },
        error => {
          console.log(error)
          return []
        }
      )
    },
    async getDepartamentos() {
      await $s.getDepartamentos(
        result => {
          this.Departamentos = result.despartamentos
        },
        error => {
          console.log(error)
        }
      )
    },
    async getMunicipios(id) {
      await $s.getMunicipiosByDepartamento(
        id,
        result => {
          this.Municipios = result.despartamento.municipios
        },
        error => {
          console.log(error)
          return []
        }
      )
    },
    setData() {
      const _self = this
      this.tabulator = new Tabulator(this.$refs.tableRef, {
        layout: 'fitColumns',
        pagination: 'local',
        printAsHtml: true,
        printStyled: true,
        paginationSize: 10,
        paginationSizeSelector: [10, 20, 30, 40],
        placeholder: 'No se encontraron registros',
        data: this.tablaData,
        renderComplete() {
          feather.replace({
            'stroke-width': 1.5
          })
        },
        columns: [
          // For HTML table
          {
            title: 'CIUDAD',
            responsive: 0,
            field: 'municipio',
            vertAlign: 'middle',
            minWidth: 150,
            print: true,
            download: true
          },
          {
            title: 'DIRECCIÓN',
            field: 'direccion',
            vertAlign: 'middle',
            minWidth: 150,
            print: true,
            download: true
          },
          {
            title: 'NOMBRE',
            field: 'nombre',
            hozAlign: 'center',
            vertAlign: 'middle',
            minWidth: 150,
            print: true,
            download: true
          },
          {
            title: 'CLASIFICACIÓN',
            field: 'clasificacion',
            hozAlign: 'center',
            vertAlign: 'middle',
            minWidth: 180,
            print: true,
            download: true
          },
          {
            title: '',
            field: '',
            vertAlign: 'middle',
            minWidth: 60,
            print: false,
            download: false,
            headerSort: false,
            formatter(cell) {
              return `<a class="items-center text-center text-theme-5" data-toggle="modal" data-target="#editLocation">
                        <i data-feather="edit-3" class="w-4 h-4 ml-1"></i>
                        <div class="text-center text-xs mt-2">Editar</div>
                      </a>`
            },
            cellClick: function(e, cell) {
              _self.clickCell(cell)
            }
          },
          {
            title: '',
            field: '',
            vertAlign: 'middle',
            minWidth: 60,
            print: false,
            download: false,
            headerSort: false,
            formatter(cell) {
              return `
              <a class="items-center text-center text-theme-6" data-toggle="modal" data-target="#delete-modal-ubicacion">
                        <i data-feather="trash" class="w-4 h-4 ml-1"></i>
                        <div class="text-center text-xs mt-2">Eliminar</div>
                      </a>
                      `
            },
            cellClick: function(e, cell) {
              _self.selectedId = cell._cell.row.data.id
            }
          }
        ]
      })
    },
    clickCell(cell) {
      this.departamento = cell._cell.row.data.departamento_id.toString()
      this.selectedId = cell._cell.row.data.id
      this.direccion = cell._cell.row.data.direccion
      this.nombre = cell._cell.row.data.nombre
      this.clasificacion = cell._cell.row.data.clasificacion_id
      this.municipio = cell._cell.row.data.municipio_id.toString()
    },
    modalCancel() {
      this.selectedId = ''
      this.departamento = ''
      this.direccion = ''
      this.nombre = ''
      this.clasificacion = ''
      this.municipio = ''
      cash('#addlocation').modal('hide')
      cash('#editLocation').modal('hide')
      cash('#delete-modal-ubicacion').modal('hide')
    },
    onPrint() {
      this.tabulator.print(false, true)
    },
    onPDF() {
      this.tabulator.download('pdf', 'UbicacionesEsercon.pdf', {
        orientation: 'portrait',
        autoTable: function(doc) {
          doc.text('UBICACIONES ESERCON', 10, 20)

          return {
            styles: {
              fillColor: [59, 131, 189]
            }
          }
        }
      })
    },
    onExcel() {
      this.tabulator.download('xlsx', 'UbicacionesEsercon.xlsx', {
        sheetName: 'Ubicaciones'
      })
    },
    newLocation() {
      this.nombre = ''
      this.direccion = ''
      this.clasificacion = 0
      // Show modal
      cash('#addlocation').modal('show')
    },
    async crearUbicacion() {
      if (
        this.nombre &&
        this.direccion &&
        this.departamento != 0 &&
        this.municipio != 0 &&
        this.clasificacion
      ) {
        this.errorNombre = false
        this.errorDireccion = false
        this.errorMunicipio = false
        this.errorDepartamento = false
        cash('#addlocation').modal('hide')
        await $s.addUbicacion(
          {
            nombre: this.nombre,
            direccion: this.direccion,
            municipio_id: this.municipio,
            clasificacion: this.clasificacion
          },
          result => {
            console.info(result)
            this.getUbicaciones()
          },
          error => {
            console.log(error)
            return []
          }
        )
      } else {
        this.errorNombre = !this.nombre && true
        this.errorDireccion = !this.direccion && true
        this.errorMunicipio = this.municipio == 0 && true
        this.errorDepartamento = this.departamento == 0 && true
        this.errorClasificacion = this.clasificacion == 0 && true
      }
    },
    async actualizarUbicacion() {
      if (
        this.nombre &&
        this.direccion &&
        this.departamento != 0 &&
        this.municipio != 0 &&
        this.clasificacion != 0
      ) {
        this.errorNombre = false
        this.errorDireccion = false
        this.errorMunicipio = false
        this.errorDepartamento = false
        await $s.updateUbicacion(
          this.selectedId,
          {
            nombre: this.nombre,
            direccion: this.direccion,
            municipio_id: this.municipio,
            clasificacion: this.clasificacion
          },
          result => {
            console.info(result)
            this.getUbicaciones()
            cash('#editLocation').modal('hide')
          },
          error => {
            console.log(error)
            return []
          }
        )
      } else {
        this.errorNombre = !this.nombre && true
        this.errorDireccion = !this.direccion && true
        this.errorMunicipio = this.municipio == 0 && true
        this.errorDepartamento = this.departamento == 0 && true
        this.errorClasificacion = this.clasificacion == 0 && true
      }
    },
    async eliminarUbicacion() {
      console.log(this.selectedId)
      if (this.selectedId) {
        await $s.deleteUbicacion(
          this.selectedId,
          {
            nombre: this.nombre,
            direccion: this.direccion,
            municipio_id: this.municipio,
            clasificacion: this.clasificacion
          },
          result => {
            this.selectedId = ''
            this.getUbicaciones()
            cash('#delete-modal-ubicacion').modal('hide')
          },
          error => {
            console.log(error)
            return []
          }
        )
      }
    }
  },
  watch: {
    async departamento(newVal, oldVal) {
      if (newVal) {
        this.getMunicipios(newVal)
      }
    }
  },
  async mounted() {
    this.loading = true
    await this.getUbicaciones()
    await this.getClasificaciones()
    await this.getDepartamentos()
    this.clasificacion = 0
  }
}
</script>
