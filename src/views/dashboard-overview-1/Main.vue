<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 xxl:col-span-12">
      <div class="grid grid-cols-12 gap-6">
        <!-- BEGIN: General Report -->
        <div class="col-span-12 mt-8">
          <h2 class="text-lg font-medium truncate mr-5">Accesos directos</h2>
          <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 lg:col-span-3 py-2">
              <div class="zoom-in">
                <div class="box p-9">
                  <a href="">
                    <!-- <img src="@/assets/images/tripper.svg"  /> -->
                    <BriefcaseIcon
                      class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
                    />
                    <div class="font-medium text-center text-base mt-3">
                      Gestión Administrativa
                    </div>
                    <div class="text-gray-600 mt-2 w-3/4 text-center mx-auto">
                      Administrativa y gestiona tus proyectos, proveedores y
                      vehículos
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="intro-y col-span-12 lg:col-span-3 py-2">
              <div class="zoom-in">
                <div class="box p-9">
                  <a href="">
                    <!-- <img src="@/assets/images/tripper.svg"  /> -->
                    <HomeIcon
                      class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
                    />
                    <div class="font-medium text-center text-base mt-3">
                      Gestión Financiera
                    </div>
                    <div class="text-gray-600 mt-2 w-3/4 text-center mx-auto">
                      Supervisa los indicadores económicos de los proyectos
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="intro-y col-span-12 lg:col-span-3 py-2">
              <div class="zoom-in">
                <div class="box p-9">
                  <a href="">
                    <!-- <img src="@/assets/images/tripper.svg"  /> -->
                    <UsersIcon
                      class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
                    />
                    <div class="font-medium text-center text-base mt-3">
                      Gestión Humana
                    </div>
                    <div class="text-gray-600 mt-2 w-3/4 text-center mx-auto">
                      Adminisra y gestiona el recurso humano asociado a los
                      proyectos
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="intro-y col-span-12 lg:col-span-3 py-2">
              <div class="zoom-in">
                <div class="box p-7">
                  <a href="">
                    <!-- <img src="@/assets/images/tripper.svg"  /> -->
                    <DiscIcon
                      class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
                    />
                    <div class="font-medium text-center text-base mt-3">
                      Gestión de Operaciones
                    </div>
                    <div class="text-gray-600 mt-2 w-3/4 text-center mx-auto">
                      Realiza seguimiento a las operaciones diaras de vehículos
                      asociados al proyecto
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: General Report -->
        <div class="col-span-12 mt-1">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <ClipboardIcon class="report-box__icon text-theme-10" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-9 cursor-pointer"
                        content="33% Proyectos activos"
                      >
                        33% Activos
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-bold leading-8 mt-6">10</div>
                  <div class="text-base text-gray-600 mt-1">
                    Cantidad de Proyectos
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <ArchiveIcon class="report-box__icon text-theme-11" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-9 cursor-pointer"
                        content="2% Proveedores vinculados a proyectos"
                      >
                        2% Vinculados
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-bold leading-8 mt-6">100</div>
                  <div class="text-base text-gray-600 mt-1">
                    Cantidad de Proveedores
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <TruckIcon class="report-box__icon text-theme-12" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-9 cursor-pointer"
                        content="12% Vehículos vinculados a proyectos"
                      >
                        12% Vinculados
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-bold leading-8 mt-6">30</div>
                  <div class="text-base text-gray-600 mt-1">
                    Cantidad de Vehículos
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <UserIcon class="report-box__icon text-theme-9" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-9 cursor-pointer"
                        content="22% Conductores vinculados a proyectos"
                      >
                        22% Vinculados
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-bold leading-8 mt-6">25</div>
                  <div class="text-base text-gray-600 mt-1">
                    Cantidad de Conductores
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Operacion carga y descarga -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 lg:col-span-6 mt-8">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">
              Operaciones Carga y Descarga Diarias
            </h2>
            <div
              class="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300"
            >
              <CalendarIcon
                class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
              />
              <Litepicker
                v-model="salesReportFilter"
                :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true
                  }
                }"
                class="form-control sm:w-56 box pl-10"
              />
            </div>
          </div>
          <div class="intro-y box p-5 mt-12 sm:mt-5">
            <div class="report-chart">
              <HorizontalBarChart :height="0" />
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
        <!-- BEGIN: Weekly Top Seller -->
        <div class="col-span-12 sm:col-span-12 lg:col-span-6 mt-8">
          <div class="intro-y flex items-center h-10"></div>
          <div class="intro-y box p-5 mt-5">
            <ReportPieChart :height="120" class="mt-3" />
            <div class="mt-8"></div>
          </div>
        </div>
        <!-- END: Weekly Top Seller -->
        <!-- COSTOS COMBUSTIBLE POR PROYECTO -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 lg:col-span-6 mt-8">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">
              Costos de Combustible por Proyecto
            </h2>
            <div
              class="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300"
            >
              <CalendarIcon
                class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
              />
              <Litepicker
                v-model="salesReportFilter"
                :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true
                  }
                }"
                class="form-control sm:w-56 box pl-10"
              />
            </div>
          </div>
          <div class="intro-y box p-5 mt-12 sm:mt-5">
            <div class="report-chart">
              <ReportLineChart :height="169" class="mt-6" />
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
        <!-- BEGIN: Weekly Top Seller -->
        <div class="col-span-12 sm:col-span-12 lg:col-span-6 mt-8">
          <div class="intro-y flex items-center h-10">
            <a href="" class="ml-auto text-theme-1 dark:text-theme-10 truncate"
              >Ver más</a
            >
          </div>
          <div class="intro-y box p-5 mt-5">
            <ReportPieChart :height="120" class="mt-3" />
            <div class="mt-8">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                <span class="truncate">17 - 30 Years old</span>
                <div
                  class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                ></div>
                <span class="font-medium xl:ml-auto">62%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                <span class="truncate">31 - 50 Years old</span>
                <div
                  class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                ></div>
                <span class="font-medium xl:ml-auto">33%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                <span class="truncate">>= 50 Years old</span>
                <div
                  class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                ></div>
                <span class="font-medium xl:ml-auto">10%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Weekly Top Seller -->
        <!--         VEHICULOS POR PROVEEDORES Y PROYECTOS -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 lg:col-span-6 mt-8">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">
              Vehículos por Proveedores y Proyectos
            </h2>
            <div
              class="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300"
            >
              <CalendarIcon
                class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
              />
              <Litepicker
                v-model="salesReportFilter"
                :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true
                  }
                }"
                class="form-control sm:w-56 box pl-10"
              />
            </div>
          </div>
          <div class="intro-y box p-5 mt-12 sm:mt-5">
            <div class="report-chart">
              <ReportLineChart :height="169" class="mt-6" />
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
        <!-- BEGIN: Weekly Top Seller -->
        <div class="col-span-12 sm:col-span-12 lg:col-span-6 mt-8">
          <div class="intro-y flex items-center h-10">
            <a href="" class="ml-auto text-theme-1 dark:text-theme-10 truncate"
              >Ver más</a
            >
          </div>
          <div class="intro-y box p-5 mt-5">
            <ReportPieChart :height="120" class="mt-3" />
            <div class="mt-8">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                <span class="truncate">17 - 30 Years old</span>
                <div
                  class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                ></div>
                <span class="font-medium xl:ml-auto">62%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                <span class="truncate">31 - 50 Years old</span>
                <div
                  class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                ></div>
                <span class="font-medium xl:ml-auto">33%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                <span class="truncate">>= 50 Years old</span>
                <div
                  class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                ></div>
                <span class="font-medium xl:ml-auto">10%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Weekly Top Seller -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, provide } from 'vue'
import ReportLineChart from '@/components/report-line-chart/Main.vue'
import ReportPieChart from '@/components/report-pie-chart/Main.vue'
import HorizontalBarChart from '@/components/horizontal-bar-chart/Main.vue'

export default defineComponent({
  components: {
    ReportLineChart,
    ReportPieChart,
    HorizontalBarChart
  },
  setup() {
    const salesReportFilter = ref()
    const importantNotesRef = ref()

    provide('bind[importantNotesRef]', el => {
      importantNotesRef.value = el
    })

    const prevImportantNotes = () => {
      const el = importantNotesRef.value
      el.tns.goTo('prev')
    }
    const nextImportantNotes = () => {
      const el = importantNotesRef.value
      el.tns.goTo('next')
    }

    return {
      salesReportFilter,
      prevImportantNotes,
      nextImportantNotes
    }
  }
})
</script>
