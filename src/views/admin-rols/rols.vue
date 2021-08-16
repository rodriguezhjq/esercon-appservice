<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Roles</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button class="btn btn-primary shadow-md mr-2" @click="newRol">
          Nuevo Rol
        </button>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-2">
      <!-- BEGIN: HTML Table Data -->
      <div
        v-if="loading"
        class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center text-center"
      >
        <LoadingIcon icon="oval" class="w-8 h-8" />
        <div class="text-center  text-xs mt-2">Cargando...</div>
      </div>
      <div class="md:col-span-12 col-span-12 lg:col-span-12 intro-y box p-5">
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
                    <FileTextIcon class="w-4 h-4 mr-2" /> Export Excel
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
      <!--      <div class="md:col-span-12 col-span-12 lg:col-span-6">
        <div class="box intro-y ">
          <div
            class=" flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Permisos</h2>
          </div>
          <div id="checkbox-switch" class="p-5">
            <div class="form-check mb-2" v-for="i in 10" :key="i">
              <input
                id="checkbox-switch-7"
                class="form-check-switch"
                type="checkbox"
              />
              <label class="form-check-label" for="checkbox-switch-7"
                >Permiso {{ i }}</label
              >
            </div>
          </div>
        </div>
      </div> -->
    </div>
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
              <button type="button" class="btn btn-danger w-24">
                Si, Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="addRol" class="modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="font-medium text-base mr-auto">
              Nuevo Rol
            </h2>
          </div>
          <div class="modal-body p-0">
            <div class="p-5">
              <div class="grid grid-cols-12 gap-4 gap-y-5">
                <div class="col-span-6 sm:col-span-6">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input
                    id="nombre"
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    v-model="nombre"
                  />
                </div>
                <div class="col-span-6 sm:col-span-6">
                  <label for="slug" class="form-label">Slug</label>
                  <input
                    id="slug"
                    type="text"
                    class="form-control"
                    placeholder="Slug"
                    v-model="nombrecorto"
                  />
                </div>
              </div>
            </div>
            <div class="px-5 pb-8 text-right">
              <button type="button" class="btn btn-primary">
                Agregar Rol
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="editRol" class="modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="font-medium text-base mr-auto">
              Editar Rol
            </h2>
            {{ nombre }}
            {{ nombrecorto}}
          </div>
          <div class="modal-body p-0">
            <div class="p-5">
              <div class="grid grid-cols-12 gap-4 gap-y-5">
                <div class="col-span-6 sm:col-span-6">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input
                    id="nombre"
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    v-model="nombre"
                  />
                </div>
                <div class="col-span-6 sm:col-span-6">
                  <label for="slug" class="form-label">Slug</label>
                  <input
                    id="slug"
                    type="text"
                    class="form-control"
                    placeholder="Slug"
                    v-model="slug"
                  />
                </div>
              </div>
            </div>
            <div class="px-5 pb-8 text-right">
              <button type="button" class="btn btn-primary">
                Editar Rol
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
      tabulator: null,
      tablaData: [],
      loading: false,
      filterInput: ''
    }
  },
  methods: {
    newRol() {
      this.nombre = ''
      this.nombrecorto = ''
      // Show modal
      cash('#addRol').modal('show')
    },
    onPrint() {
      this.tabulator.print(false, true)
    },
    onPDF() {
      this.tabulator.download('pdf', 'RolesEsercon.pdf', {
        orientation: 'portrait',
        autoTable: function(doc) {
          doc.text('Roles del sistema ESERCON', 10, 20)
          return {
            styles: {
              fillColor: [59, 131, 189]
            }
          }
        }
      })
    },
    onExcel() {
      this.tabulator.download('xlsx', 'RolesEsercon.xlsx', {
        sheetName: 'Roles'
      })
    },
    getData() {
      var self = this
      $s.getRoles(
        data => {
          self.tablaData = data.roles.reverse()
          self.setData()
          self.loading = false
        },
        error => {
          self.loading = false
          console.error(error)
        }
      )
    },
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
            title: 'Nombre',
            responsive: 0,
            field: 'name',
            vertAlign: 'middle',
            minWidth: 150,
            print: true,
            download: true
          },
          {
            title: 'Slug',
            responsive: 0,
            field: 'slug',
            vertAlign: 'middle',
            minWidth: 150,
            print: true,
            download: true
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
              return `<a class="items-center text-center text-theme-12 m-2 block mr-3" data-toggle="modal" data-target="#editRol">
                        <i data-feather="edit-3" class="w-4 h-4 ml-1"></i>
                        <div class="text-center text-xs mt-1">Editar</div>
                      </a>
                      <a class="items-center text-center text-theme-6" data-toggle="modal" data-target="#delete-modal-preview">
                        <i data-feather="trash" class="w-4 h-4"></i>
                        <div class="text-center text-xs mt-1">Eliminar</div>
                      </a>
                  `
            },
            cellClick: function(e, cell) {
              console.log(cell._cell.row.data)
              this.nombre = cell._cell.row.data
            }
          }
        ]
      })
    }
  },
  watch: {
    filterInput(newValue) {
      const values = this.tablaData.filter(
        item =>
          item.name.toLowerCase().includes(newValue.toLowerCase()) ||
          item.slug.toLowerCase().includes(newValue.toLowerCase())
      )
      this.tabulator.replaceData(values)
    }
  },
  mounted() {
    this.loading = true
    this.getData()
  }
}
</script>
