<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Proyectos</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button class="btn btn-primary shadow-md mr-2" @click="toAddNewProject">
          Nuevo Proyecto
        </button>
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
                  @click="onPDF"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Export PDF
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
    <div id="pausarproyecto" class="modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <AlertTriangleIcon class="w-16 h-16 text-theme-12 mx-auto mt-3" />
              <div class="text-3xl mt-5">Está seguro?</div>
              <div class="text-gray-600 mt-2">
                Realmente deseas pausar este proyecto? <br />
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
              <button type="button" class="btn btn-primary w-24">
                Si, Pausar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import feather from 'feather-icons'

import Tabulator from 'tabulator-tables'
import { servicio as $s } from '@/utils/servicios.js'

export default defineComponent({
  components: {},
  data() {
    return {
      tabulator: null,
      tablaData: [],
      loading: false,
      filterInput: '',
      columnsfortable: [
        {
          title: 'CÓDIGO',
          width: 150,
          responsive: 0,
          field: 'codigo',
          vertAlign: 'middle',
          print: true,
          download: true
        },
        {
          title: 'NOMBRE',
          width: 200,
          responsive: 0,
          field: 'nombre',
          vertAlign: 'middle',
          print: true,
          download: true
        },
        {
          title: 'UBICACIÓN INICIAL',
          width: 200,
          responsive: 0,
          field: 'ubicacion inicial',
          hozAlign: 'center',
          vertAlign: 'middle',
          print: true,
          download: true
        },
        {
          title: 'FECHA INICIO',
          minWidth: 200,
          responsive: 0,
          field: 'fecha inicio',
          hozAlign: 'center',
          vertAlign: 'middle',
          print: true,
          download: true,
          formatter: function(cell, formatterParams, onRendered) {
            return cell.getValue().replaceAll('-', '/')
          }
        },
        {
          title: 'Estado',
          minWidth: 150,
          field: 'estado',
          responsive: 1,
          hozAlign: 'center',
          vertAlign: 'middle',
          print: true,
          download: true,
          formatter(cell) {
            return cell.getValue() ? 'Activo' : 'Inactivo'
          }
        }
      ],
      itemSelected: {}
    }
  },
  methods: {
    toActionMenu(action, param) {
      this.$router.push({
        name: action,
        params: {
          nombre: param.nombre,
          id: param.id
        }
      })
    },
    onPrint() {
      this.tabulator.print(false, true)
    },
    onPDF() {
      this.tabulator.download('pdf', 'ProyectosEsercon.pdf', {
        orientation: 'portrait',
        autoTable: function(doc) {
          doc.text('PROYECTOS ESERCON', 10, 20)

          return {
            styles: {
              fillColor: [59, 131, 189]
            }
          }
        }
      })
    },
    onExcel() {
      this.tabulator.download('xlsx', 'ProyectosEsercon.xlsx', {
        sheetName: 'Proyectos'
      })
    },
    toAddNewProject() {
      this.$router.push('/admin-project/add-new-project')
    },
    setUpTable() {
      const self = this
      this.tabulator = new Tabulator(this.$refs.tableRef, {
        layout: 'fitDataFill',
        pagination: 'local',
        printAsHtml: true,
        printStyled: true,
        paginationSize: 10,
        paginationSizeSelector: [10, 20, 30, 40],
        placeholder: 'No se encontraron registros',
        data: [],
        renderComplete() {
          feather.replace({
            'stroke-width': 1.5
          })
        },
        columns: [
          ...this.columnsfortable,
          {
            title: '',
            width: 20,
            responsive: 2,
            hozAlign: 'left',
            vertAlign: 'middle',
            align: 'center',
            headerSort: false,
            print: false,
            download: false,
            tooltips: 'Editar',
            tooltipGenerationMode: 'hover',
            formatter() {
              return `
                  <div class="lg:justify-center items-center text-center">
                       <a title="Editar Proyecto" class="items-center text-theme-12">
                           <i  data-feather="edit-3"  class="w-4 h-4 mr-1"></i>
                           <div class="text-center text-xs mt-2">Editar</div>
                       </a>
                    </div>`
            },
            cellClick: function(e, cell) {
              self.toActionMenu('edit-project', cell._cell.row.data)
            }
          },
          {
            responsive: 1,
            title: '',
            minWidth: 20,
            hozAlign: 'left',
            vertAlign: 'middle',
            align: 'center',
            headerSort: false,
            print: false,
            download: false,
            formatter() {
              return `<div class="lg:justify-center items-center text-center">
                            <a title="Gestión Financiera" class="items-center text-theme-9">
                                <i data-feather="bar-chart" class="w-4 h-4 mr-1"></i>
                                <div class="text-center text-xs mt-2">G. Financiera</div>
                            </a>
                        </div>
                        `
            },
            cellClick: function(e, cell) {
              alert(
                `Gestion financiera. Sitio en construccion!. id: ${cell._cell.row.data.id} ${cell._cell.row.data.nombre}`
              )
            }
          },
          {
            responsive: 1,
            title: '',
            minWidth: 20,
            hozAlign: 'left',
            vertAlign: 'middle',
            headerSort: false,
            print: false,
            download: false,
            align: 'center',
            formatter() {
              return `<div class="lg:justify-center items-center text-center">
                            <a title="Pusar Proyecto" class="items-center text-theme-10" data-toggle="modal" data-target="#pausarproyecto">
                                <i data-feather="pause-circle" class="w-4 h-4 mr-1"></i>
                                <div class="text-center text-xs mt-2">Pausar</div>
                            </a>
                        </div>`
            },
            cellClick: function(e, cell) {}
          },
          {
            responsive: 1,
            title: '',
            minWidth: 20,
            hozAlign: 'left',
            vertAlign: 'middle',
            headerSort: false,
            print: false,
            download: false,
            align: 'center',
            formatter() {
              return `<div class="lg:justify-center items-center text-center">
                            <a title="Administracion de recursos" class="items-center text-theme-6">
                                <i data-feather="settings" class="w-4 h-4 mr-1"></i>
                                <div class="text-center text-xs mt-2">Recursos</div>
                            </a>
                        </div>`
            },
            cellClick: function(e, cell) {
              self.toActionMenu('resources', cell._cell.row.data)
            }
          }
        ]
      })
    },
    setData() {
      var _self = this
      $s.getProyectos(
        result => {
          this.tablaData = result.Proyecto.reverse()
          this.tabulator.replaceData(this.tablaData)
          _self.loading = false
        },
        error => {
          _self.loading = false
          alert(error)
          console.error(error)
        }
      )
    },
    editProject(cell) {
      console.log(cell)
    },
    indicadoresProject(cell) {
      console.log(cell)
    },
    pauseProject(cell) {
      console.log(cell)
    }
  },
  watch: {
    filterInput(newValue) {
      const searchState =
        newValue.toLowerCase() === 'activo'
          ? true
          : newValue.toLowerCase() === 'inactivo' && false
      const values = this.tablaData.filter(
        item =>
          item.codigo.toLowerCase().includes(newValue.toLowerCase()) ||
          item.nombre.toLowerCase().includes(newValue.toLowerCase()) ||
          item['ubicacion inicial']
            .toLowerCase()
            .includes(newValue.toLowerCase()) ||
          item['fecha inicio'].toLowerCase().includes(newValue.toLowerCase()) ||
          item['fecha fin'].toLowerCase().includes(newValue.toLowerCase()) ||
          item.estado == searchState
      )
      this.tabulator.replaceData(values)
    }
  },
  mounted() {
    this.loading = true
    this.setUpTable()
    this.setData()
  }
})
</script>
