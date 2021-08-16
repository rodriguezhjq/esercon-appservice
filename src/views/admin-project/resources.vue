<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">
        Administrar recursos de {{ nombre }}
      </h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <a
          href="javascript:;"
          data-toggle="modal"
          data-target="#addvehicle"
          class="btn btn-primary shadow-md mr-2"
        >
          Agregar Vehículo
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
                  id="tabulator-export-csv"
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
                  @click="onExportCsv"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Export CSV
                </a>
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
                  @click="onExportJson"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Export JSON
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
                  @click="onExportXlsx"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Export XLSX
                </a>
                <a
                  id="tabulator-export-html"
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
                  @click="onExportHtml"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Export HTML
                </a>
              </div>
            </div>
          </div>
          <input
            id="input-wizard-1"
            type="text"
            class="form-control mr-2"
            placeholder="Buscar..."
            v-model="filterInput"
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
      id="delete-modal-preview"
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
                id="btnCloseModal"
                data-dismiss="modal"
                class="btn btn-outline-secondary w-24 dark:border-dark-5 dark:text-gray-300 mr-1"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="btn btn-danger w-24"
              >
                Si, Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="addvehicle" class="modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="font-medium text-base mr-auto">
              Asignar vehículos al proyecto
            </h2>
          </div>
          <div class="modal-body p-0">
            <div class="p-5">
              <label for="input-wizard-1" class="form-label">Proveedor</label>
              <TailSelect
                v-model="proveedor"
                placeholder="Seleccione un proveedor"
                :options="{
                  search: true,
                  classNames: 'w-full'
                }"
              >
                <option value="1">Parqueadero doña juana</option>
                <option value="2">Lavadero don pepe</option>
                <option value="3">Lubricantes la 37</option>
                <option value="4">Restaurente julia</option>
                <option value="5">Hotel el paso</option>
              </TailSelect>
              <div class="overflow-x-auto scrollbar-hidden">
                <div
                  ref="table"
                  class="mt-5 table-report table-report--tabulator"
                ></div>
              </div>
            </div>
            <div class="px-5 pb-8 text-right">
              <button type="button" class="btn btn-primary">
                Agregar vehículo(s)
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

export default {
  data() {
    return {
      tabulator: null,
      tabulator2: null,
      tablaData: [
        {
          placa: 'XXC-14F',
          marca: 'Mazda',
          modelo: '2012',
          proveedor: 'Proveedor 1',
          estado: 'Disponible'
        },
        {
          placa: 'WWF-41G',
          marca: 'Ford',
          modelo: '2017',
          proveedor: 'Proveedor 2',
          estado: 'No Disponible'
        }
      ],
      loading: false,
      filterInput: '',
      nombre: '',
      proveedor: '1'
    }
  },
  methods: {
    setData() {
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
            title: 'PLACA',
            responsive: 0,
            field: 'placa',
            vertAlign: 'middle',
            minWidth: 150,
            print: false,
            download: false
          },
          {
            title: 'MARCA',
            field: 'marca',
            vertAlign: 'middle',
            minWidth: 150,
            print: false,
            download: false
          },
          {
            title: 'MODELO',
            field: 'modelo',
            hozAlign: 'center',
            vertAlign: 'middle',
            minWidth: 150,
            print: false,
            download: false
          },
          {
            title: 'PROVEEDOR',
            field: 'proveedor',
            hozAlign: 'center',
            vertAlign: 'middle',
            minWidth: 180,
            print: false,
            download: false
          },
          {
            title: 'ESTADO',
            field: 'estado',
            hozAlign: 'center',
            vertAlign: 'middle',
            minWidth: 150,
            print: false,
            download: false
          },
          {
            title: '',
            field: '',
            vertAlign: 'middle',
            minWidth: 180,
            print: false,
            download: false,
            headerSort: false,
            formatter(cell) {
              /*                   const a = cash(`acciones`)
                  cash(a).on('click', function() {})
                  return a[0] */
              return `<div class="flex lg:justify-center items-center">
                            <a href="javascript:;" data-toggle="modal" data-target="#delete-modal-preview"
                               class="flex items-center text-theme-6 mr-1">
                              <i data-feather="trash" class="w-4 h-4 mr-1"></i>Eliminar
                            </a>
                        </div>`
            },
            cellClick: function(e, cell) {}
          }
        ]
      })
      this.tabulator2 = new Tabulator(this.$refs.table, {
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
            title: 'PLACA',
            responsive: 0,
            field: 'placa',
            vertAlign: 'middle',
            minWidth: 150,
            print: false,
            download: false
          },
          {
            title: 'MARCA',
            field: 'marca',
            vertAlign: 'middle',
            minWidth: 150,
            print: false,
            download: false
          },
          {
            title: 'MODELO',
            field: 'modelo',
            hozAlign: 'center',
            vertAlign: 'middle',
            minWidth: 150,
            print: false,
            download: false
          },
          {
            title: 'PROVEEDOR',
            field: 'proveedor',
            hozAlign: 'center',
            vertAlign: 'middle',
            minWidth: 180,
            print: false,
            download: false
          },
          {
            title: 'ESTADO',
            field: 'estado',
            hozAlign: 'center',
            vertAlign: 'middle',
            minWidth: 150,
            print: false,
            download: false
          },
          {
            title: '',
            field: '',
            vertAlign: 'middle',
            minWidth: 180,
            print: false,
            download: false,
            headerSort: false,
            formatter(cell) {
              return `<input
                        id="show-example-1"
                        data-target="#basic-accordion"
                        class="show-code form-check-switch mr-2 ml-3"
                        type="checkbox"
                    />`
            },
            cellClick: function(e, cell) {}
          }
        ]
      })
    }
  },
  watch: {
    filterInput(newValue) {
      const values = this.tablaData.filter(
        item =>
          item.placa.toLowerCase().includes(newValue.toLowerCase()) ||
          item.marca.toLowerCase().includes(newValue.toLowerCase()) ||
          item.modelo.toLowerCase().includes(newValue.toLowerCase()) ||
          item.proveedor.toLowerCase().includes(newValue.toLowerCase()) ||
          item.estado.toLowerCase().includes(newValue.toLowerCase())
      )
      this.tabulator.replaceData(values)
    }
  },
  mounted() {
    const params = this.$route.params
    this.nombre = params.nombre
    console.log(params)
    this.loading = false
    this.setData()
  }
}
</script>
