<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Usuarios</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button class="btn btn-primary shadow-md mr-2" @click="toAddNewUser">
          Nuevo Usuario
        </button>
      </div>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <div class="intro-y box p-5 mt-5">
      <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
        <!--         <form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">
          <div class="sm:flex items-center sm:mr-4">
            <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Field</label
            >
            <select
              id="tabulator-html-filter-field"
              v-model="filter.field"
              class="form-select w-full sm:w-32 xxl:w-full mt-2 sm:mt-0 sm:w-auto"
            >
              <option value="name">Name</option>
              <option value="category">Category</option>
              <option value="remaining_stock">Remaining Stock</option>
            </select>
          </div>
          <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
            <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Type</label
            >
            <select
              id="tabulator-html-filter-type"
              v-model="filter.type"
              class="form-select w-full mt-2 sm:mt-0 sm:w-auto"
            >
              <option value="like" selected>like</option>
              <option value="=">=</option>
              <option value="<">&lt;</option>
              <option value="<=">&lt;=</option>
              <option value=">">></option>
              <option value=">=">>=</option>
              <option value="!=">!=</option>
            </select>
          </div>
          <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
            <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Value</label
            >
            <input
              id="tabulator-html-filter-value"
              v-model="filter.value"
              type="text"
              class="form-control sm:w-40 xxl:w-full mt-2 sm:mt-0"
              placeholder="Search..."
            />
          </div>
          <div class="mt-2 xl:mt-0">
            <button
              id="tabulator-html-filter-go"
              type="button"
              class="btn btn-primary w-full sm:w-16"
              @click="onFilter"
            >
              Go
            </button>
            <button
              id="tabulator-html-filter-reset"
              type="button"
              class="btn btn-secondary w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1"
              @click="onResetFilter"
            >
              Reset
            </button>
          </div>
        </form> -->
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

    <!-- BEGIN: Modal Content -->
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
                v-on:click="removeUser"
              >
                Si, Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Modal Content -->

    <!-- BEGIN: Modal Toggle -->
    <div class="text-center" style="display:none;">
      <a
        href="javascript:;"
        id="btnSuccess"
        data-toggle="modal"
        data-target="#success-modal-preview"
        class="btn btn-primary"
        >Show Modal</a
      >
    </div>
    <!-- END: Modal Toggle -->
    <!-- BEGIN: Modal Content -->
    <div
      id="success-modal-preview"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <CheckCircleIcon class="w-16 h-16 text-theme-9 mx-auto mt-3" />
              <div class="text-3xl mt-5">Good job!</div>
              <div class="text-gray-600 mt-2">
                Registro eliminado exitosamente!
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                data-dismiss="modal"
                class="btn btn-primary w-24"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Modal Content -->
    <div class="text-center" style="display:none;">
      <a
        href="javascript:;"
        id="btnError"
        data-toggle="modal"
        data-target="#warning-modal-preview"
        class="btn btn-primary"
        >Show Modal</a
      >
    </div>
    <!-- END: Modal Toggle -->
    <!-- BEGIN: Modal Content -->
    <div
      id="warning-modal-preview"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <XCircleIcon class="w-16 h-16 text-theme-12 mx-auto mt-3" />
              <div class="text-3xl mt-5">Oops...</div>
              <div class="text-gray-600 mt-2">
                Ocurrio un error al elimnar el registro, vuelva a intentarlo más
                tarde
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                data-dismiss="modal"
                class="btn w-24 btn-primary"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Modal Content -->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import feather from 'feather-icons'

import Tabulator from 'tabulator-tables'
import * as moment from 'moment'
import { servicio as $s } from '@/utils/servicios.js'

export default defineComponent({
  data() {
    return {
      tabulator: null,
      tablaData: [],
      idEliminar: 0,
      filterInput: ''
    }
  },
  methods: {
    onPrint() {
      this.tabulator.value.print()
    },
    toAddNewUser() {
      this.$router.push('/admin-user/add-new-user')
    },
    setData() {
      var _self = this
      $s.getUsuarios(
        data => {
          this.tablaData = data.users.reverse()
          this.tabulator = new Tabulator(this.$refs.tableRef, {
            layout: 'fitColumns',
            pagination: 'local',
            ajaxFiltering: true,
            ajaxSorting: true,
            printAsHtml: true,
            printStyled: true,
            paginationSize: 10,
            paginationSizeSelector: [10, 20, 30, 40],
            responsiveLayout: 'collapse',
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
                title: 'NOMBRE USUARIO',
                minWidth: 150,
                field: 'name',
                hozAlign: 'left',
                vertAlign: 'middle',
                print: false,
                download: false
              },
              {
                title: 'USUARIO',
                minWidth: 100,
                field: 'email',
                hozAlign: 'left',
                vertAlign: 'middle',
                print: false,
                download: false
              },
              {
                title: 'FECHA CREADO',
                maxWidth: 200,
                field: 'created_at',
                hozAlign: 'left',
                vertAlign: 'middle',
                print: false,
                download: false,
                formatter(cell) {
                  return moment(cell.getValue())
                    .format('DD/MM/YYYY')
                    .toUpperCase()
                }
              },
              {
                title: 'FECHA MODIFICADO',
                maxWidth: 210,
                field: 'updated_at',
                hozAlign: 'center',
                vertAlign: 'middle',
                print: false,
                download: false,
                formatter(cell) {
                  return moment(cell.getValue())
                    .format('DD/MM/YYYY')
                    .toUpperCase()
                }
              },
              {
                title: '',
                width: 70,
                field: '',
                hozAlign: 'left',
                vertAlign: 'middle',
                headerSort: false,
                print: false,
                download: false,
                formatter() {
                  const a = cash(`<a class="items-center text-center text-theme-12 m-2 block mr-3">
                                    <i data-feather="edit-3" class="w-4 h-4 ml-1"></i>
                                    <div class="text-center text-xs mt-1">Editar</div>
                                  </a>`)
                  cash(a).on('click', function() {})
                  return a[0]
                },
                cellClick: function(e, cell) {
                  _self.editUser(cell._cell.row.data)
                }
              },
              {
                title: '',
                width: 80,
                field: '',
                hozAlign: 'left',
                vertAlign: 'middle',
                headerSort: false,
                print: false,
                download: false,
                formatter() {
                  const a = cash(`<a class="items-center text-center text-theme-6 m-2 block mr-3">
                                    <i data-feather="trash" class="w-4 h-4 ml-1"></i>
                                    <div class="text-center text-xs mt-1">Eliminar</div>
                                  </a>`)
                  cash(a).on('click', function() {})
                  return a[0]
                },
                cellClick: function(e, cell) {
                  _self.idEliminar = cell._cell.row.data.id
                }
              }
            ]
          })
        },
        error => {
          console.error(error)
        }
      )
    },
    editUser(cell) {
      this.$router.push({
        name: 'add-new-user',
        params: {
          name: cell.name,
          email: cell.email,
          id: cell.id
        }
      })
    },
    removeUser() {
      console.log(this.idEliminar)
      $s.removeUser(
        this.idEliminar,
        data => {
          document.getElementById('btnCloseModal').click()
          document.getElementById('btnSuccess').click()
        },
        error => {
          document.getElementById('btnCloseModal').click()
          document.getElementById('btnError').click()
          console.error(error)
        }
      )
    }
  },
  watch: {
    filterInput(newValue) {
      const values = this.tablaData.filter(
        item =>
          item.name.toLowerCase().includes(newValue.toLowerCase()) ||
          item.email.toLowerCase().includes(newValue.toLowerCase()) ||
          moment(item.created_at)
            .format('DD/MM/YYYY')
            .toLowerCase()
            .includes(newValue.toLowerCase()) ||
          moment(item.updated_at)
            .format('DD/MM/YYYY')
            .toLowerCase()
            .includes(newValue.toLowerCase())
      )
      this.tabulator.replaceData(values)
    }
  },
  mounted() {
    this.setData()
  }
})
</script>
