<template>
  <div>
    <!-- TODO Hacer envio del documento cuando se cree el proyecto -->
    <div class="flex items-center mt-8">
      <h2 class="intro-y text-lg font-medium mr-auto">Nuevo Proyecto</h2>
    </div>
    <div
      v-if="loading"
      class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center"
    >
      <LoadingIcon icon="oval" class="w-8 h-8" />
      <div class="text-center  text-xs mt-2">Cargando...</div>
    </div>
    <!-- BEGIN: Wizard Layout -->
    <div class="intro-y box py-10 sm:py-20 mt-5">
      <div
        class="wizard flex flex-col lg:flex-row justify-center px-5 sm:px-20"
      >
        <div
          class="wizard__line hidden lg:block w-3/4 bg-gray-200 dark:bg-dark-1 absolute mt-5"
        ></div>
        <div
          class="intro-x lg:text-center flex items-center lg:block flex-1 z-10"
        >
          <button
            class="w-10 h-10 rounded-full btn dark:bg-dark-1"
            :class="{
              'btn-primary': section == 1,
              'bg-gray-200': section != 1
            }"
            @click="setSection(1)"
          >
            1
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto"
            :class="{
              'font-medium': section == 1,
              'text-gray-700 dark:text-gray-600': section != 1
            }"
          >
            Datos Generales del Proyecto
          </div>
        </div>
        <div
          class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10"
        >
          <button
            class="w-10 h-10 rounded-full btn dark:bg-dark-1"
            :class="{
              'btn-primary': section == 2,
              'bg-gray-200': section != 2
            }"
            @click="setSection(2)"
          >
            2
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto"
            :class="{
              'font-medium': section == 2,
              'text-gray-700 dark:text-gray-600': section != 2
            }"
          >
            Condiciones Operativas del Proyecto
          </div>
        </div>
        <div
          class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10"
        >
          <button
            class="w-10 h-10 rounded-full btn dark:bg-dark-1"
            :class="{
              'btn-primary': section == 3,
              'bg-gray-200': section != 3
            }"
            @click="setSection(3)"
          >
            3
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto"
            :class="{
              'font-medium': section == 3,
              'text-gray-700 dark:text-gray-600': section != 3
            }"
          >
            Condiciones de Ingresos
          </div>
        </div>
        <div
          class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10"
        >
          <button
            class="w-10 h-10 rounded-full btn dark:bg-dark-1"
            :class="{
              'btn-primary': section == 4,
              'bg-gray-200': section != 4
            }"
            @click="setSection(4)"
          >
            4
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto"
            :class="{
              'font-medium': section == 4,
              'text-gray-700 dark:text-gray-600': section != 4
            }"
          >
            Costos
          </div>
        </div>
        <div
          class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10"
        >
          <button
            class="w-10 h-10 rounded-full btn dark:bg-dark-1"
            :class="{
              'btn-primary': section == 5,
              'bg-gray-200': section != 5
            }"
            @click="setSection(5)"
          >
            5
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto"
            :class="{
              'font-medium': section == 5,
              'text-gray-700 dark:text-gray-600': section != 5
            }"
          >
            Condiciones Económicas
          </div>
        </div>
        <div
          class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10"
        >
          <button
            class="w-10 h-10 rounded-full btn dark:bg-dark-1"
            :class="{
              'btn-primary': section == 6,
              'bg-gray-200': section != 6
            }"
            @click="setSection(6)"
          >
            6
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto"
            :class="{
              'font-medium': section == 6,
              'text-gray-700 dark:text-gray-600': section != 6
            }"
          >
            Consumos y Pagos Estimados
          </div>
        </div>
        <div
          class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10"
        >
          <button
            class="w-10 h-10 rounded-full btn dark:bg-dark-1"
            :class="{
              'btn-primary': section == 7,
              'bg-gray-200': section != 7
            }"
            @click="setSection(7)"
          >
            7
          </button>
          <div
            class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto"
            :class="{
              'font-medium': section == 7,
              'text-gray-700 dark:text-gray-600': section != 7
            }"
          >
            Documentos
          </div>
        </div>
      </div>
      <div
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
        v-show="section == 1"
      >
        <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="cod" class="form-label">Código del proyecto *</label>
            <input
              id="cod"
              type="text"
              class="form-control"
              placeholder="Código del proyecto"
              v-model="codigo"
              :class="{ 'border-theme-6': v$.codigo.$error }"
              @blur="bluerCodigo"
              maxLength="10"
            />
            <div class="text-theme-6 mt-2" v-if="v$.codigo.$error">
              Este campo es necesario.
            </div>
            <div class="text-theme-6 mt-2" v-if="errorCodigo">
              Este código ya se encuentra registrado.
            </div>
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="nombre" class="form-label">Nombre del proyecto *</label>
            <input
              id="nombre"
              type="text"
              class="form-control"
              placeholder="Nombre del proyecto"
              v-model="nombre"
              :class="{ 'border-theme-6': v$.nombre.$error }"
              @blur="v$.nombre.$touch"
            />
            <div class="text-theme-6 mt-2" v-if="v$.nombre.$error">
              Este campo es necesario.
            </div>
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="input-wizard-3" class="form-label"
              >Fecha de inicio *</label
            >
            <div class="preview">
              <Litepicker
                v-model="fechaInicio"
                :options="{
                  format: 'YYYY/MM/DD',
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: 2100,
                    months: true,
                    years: true
                  }
                }"
                class="form-control block mx-auto"
              />
            </div>
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="input-wizard-4" class="form-label"
              >Fecha de terminación *</label
            >
            <div class="preview">
              <Litepicker
                v-model="fechaFin"
                :options="{
                  format: 'YYYY/MM/DD',
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: 2100,
                    months: true,
                    years: true
                  }
                }"
                class="form-control block mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
        v-show="section == 2"
      >
        <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
          <div class="intro-y col-span-4 sm:col-span-4">
            <label for="input-wizard-1" class="form-label"
              >Departamento inicial *</label
            >
            <select
              class="form-select sm:mr-2"
              aria-label="Default select example"
              v-model="departamentoInicial"
            >
              <option
                v-for="item in Departamentos"
                :key="item.id"
                v-bind:value="item.id"
              >
                {{ item.nombre }}
              </option>
            </select>
          </div>
          <div class="intro-y col-span-4 sm:col-span-4">
            <label for="input-wizard-1" class="form-label"
              >Municipio inicial *</label
            >
            <select
              class="form-select sm:mr-2"
              aria-label="Default select example"
              v-model="municipioInicio"
            >
              <option
                v-for="item in municipiosInicial"
                :key="item.id"
                v-bind:value="item.id"
              >
                {{ item.nombre }}
              </option>
            </select>
          </div>
          <div class="intro-y col-span-4 sm:col-span-4">
            <label class="form-label" for="ubicacion1"
              >Coordenada inicial *</label
            >
            <input
              id="ubicacion1"
              type="text"
              class="form-control"
              placeholder="Coordenada inicial"
              v-model="ubicacionInicial"
              :class="{ 'border-theme-6': v$.ubicacionInicial.$error }"
              @blur="v$.ubicacionInicial.$touch"
              maxLength="50"
            />
            <div class="text-theme-6 mt-2" v-if="v$.ubicacionInicial.$error">
              Este campo es necesario.
            </div>
          </div>
          <div class="intro-y col-span-4 sm:col-span-4">
            <label for="input-wizard-1" class="form-label"
              >Departamento final *</label
            >
            <select
              class="form-select sm:mr-2"
              aria-label="Default select example"
              v-model="departamentoFinal"
            >
              <option
                v-for="item in Departamentos"
                :key="item.id"
                v-bind:value="item.id"
              >
                {{ item.nombre }}
              </option>
            </select>
          </div>
          <div class="intro-y col-span-4 sm:col-span-4">
            <label for="input-wizard-1" class="form-label"
              >Municipio final *</label
            >
            <select
              class="form-select sm:mr-2"
              aria-label="Default select example"
              v-model="municipioFinal"
            >
              <option
                v-for="item in municipiosFinal"
                :key="item.id"
                v-bind:value="item.id"
              >
                {{ item.nombre }}
              </option>
            </select>
          </div>
          <div class="intro-y col-span-4 sm:col-span-4">
            <label for="ubicacion2" class="form-label"
              >Coordenada final *</label
            >
            <input
              id="ubicacion2"
              type="text"
              class="form-control"
              placeholder="Coordenada final"
              v-model="ubicacionFinal"
              :class="{ 'border-theme-6': v$.ubicacionFinal.$error }"
              @blur="v$.ubicacionFinal.$touch"
              maxLength="50"
            />
            <div class="text-theme-6 mt-2" v-if="v$.ubicacionFinal.$error">
              Este campo es necesario.
            </div>
          </div>
          <div class="intro-y col-span-4 sm:col-span-4">
            <label for="input-wizard-5" class="form-label"
              >Duración del proyecto</label
            >
            <div class="input-group">
              <div class="input-group-text">Días</div>
              <input
                id="input-wizard-5"
                type="number"
                class="form-control"
                placeholder="Duración del proyecto"
                v-model="duracionproyecto"
                :disabled="true"
              />
            </div>
          </div>
          <div class="intro-y col-span-4 sm:col-span-4">
            <label for="input-wizard-3" class="form-label"
              >Horas laborales por día *
            </label>
            <input
              type="number"
              class="form-control"
              placeholder="Horas"
              v-model="horasLaboral"
              :class="{ 'border-theme-6': v$.horasLaboral.$error }"
              @blur="v$.horasLaboral.$touch"
              maxLength="2"
            />
            <div class="text-theme-6 mt-2" v-if="v$.horasLaboral.$error">
              Este campo es necesario.
            </div>
          </div>
          <div class="intro-y col-span-4 sm:col-span-4">
            <label for="input-wizard-5" class="form-label"
              >Temperatura promedio *</label
            >
            <div class="input-group">
              <div class="input-group-text">Cº</div>
              <input
                id="input-wizard-5"
                type="number"
                class="form-control"
                placeholder="Temperatura"
                v-model="temperatura"
                :class="{ 'border-theme-6': v$.temperatura.$error }"
                @blur="v$.temperatura.$touch"
                maxLength="3"
              />
            </div>
            <div class="text-theme-6 mt-2" v-if="v$.temperatura.$error">
              Este campo es necesario.
            </div>
          </div>
          <div class="intro-y col-span-12 sm:col-span-12">
            <div class="intro-y col-span-12 font-medium text-base">
              Tipo de operación *
            </div>
            <div class="flex sm:flex-row mt-2">
              <div class="form-check ml-2">
                <input
                  id="relleno"
                  class="form-check-input"
                  type="checkbox"
                  name="relleno"
                  value="1"
                  v-model="tipooperacionrelleno"
                />
                <label class="form-check-label" for="relleno">Relleno</label>
              </div>
              <div class="form-check ml-2">
                <input
                  id="excavacion"
                  class="form-check-input"
                  type="checkbox"
                  name="excavacion"
                  value="2"
                  v-model="tipooperacionexcavacion"
                />
                <label class="form-check-label" for="excavacion"
                  >Excavación</label
                >
              </div>
              <div class="form-check ml-2">
                <input
                  id="interno"
                  class="form-check-input"
                  type="checkbox"
                  name="interno"
                  value="3"
                  v-model="tipooperacioninterno"
                />
                <label class="form-check-label" for="interno">Interno</label>
              </div>
              <div class="form-check ml-2">
                <input
                  id="operacion-otro"
                  class="form-check-input"
                  type="checkbox"
                  name="operacion-otro"
                  value="otro"
                  v-model="tipooperacionotro"
                />
                <label class="form-check-label" for="operacion-otro"
                  >Otro</label
                >
                <input
                  type="text"
                  class="form-control ml-2"
                  placeholder="Cual?"
                  :disabled="disabledTipooperacion"
                  v-model="otrotipooperacion"
                />
              </div>
            </div>
            <div class="text-theme-6 mt-2" v-if="errorOperacion">
              Seleccione almenos uno
            </div>
          </div>
          <div class="intro-y col-span-12 sm:col-span-12">
            <div class="intro-y col-span-12 font-medium text-base">
              Tipo de vía *
            </div>
            <div class="flex flex-col sm:flex-row mt-2">
              <div class="form-check ml-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="1"
                  name="pavimentada"
                  id="pavimentada"
                  v-model="tipoviapavimentada"
                />
                <label class="form-check-label" for="pavimentada"
                  >Pavimentada</label
                >
              </div>
              <div class="form-check ml-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="destapada"
                  value="2"
                  id="destapada"
                  v-model="tipoviadestapada"
                />
                <label class="form-check-label" for="destapada"
                  >Destapada</label
                >
              </div>
              <div class="form-check ml-2">
                <input
                  id="trocha"
                  class="form-check-input"
                  type="checkbox"
                  name="trocha"
                  value="3"
                  v-model="tipoviatrocha"
                />
                <label class="form-check-label" for="trocha">Trocha</label>
              </div>
              <div class="form-check ml-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="tipovia-otro"
                  value="otro"
                  id="tipoviaotro"
                  v-model="tipoviaotro"
                />
                <label class="form-check-label" for="tipoviaotro">Otro</label>
                <input
                  type="text"
                  class="form-control ml-2"
                  placeholder="Cual?"
                  :disabled="disabledtipovia"
                  v-model="otrotipodevia"
                />
              </div>
            </div>
            <div class="text-theme-6 mt-2" v-if="errorTipoVias">
              Seleccione almenos uno
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
        v-show="section == 3"
      >
        <div class="grid grid-cols-12 gap-4 gap-y-5">
          <div class="intro-y col-span-12 font-medium text-base">
            Dobletroques *
          </div>
          <div class="flex flex-col sm:flex-row">
            <div class="intro-y form-check mr-2">
              <input
                id="propio"
                class="form-check-input"
                type="radio"
                name="propio"
                value="propio"
                v-model="dobletroque"
              />
              <label class="form-check-label" for="propio">Propio</label>
            </div>
            <div class="intro-y form-check mr-2">
              <input
                id="alquilado"
                class="form-check-input"
                type="radio"
                name="alquilado"
                value="alquilado"
                v-model="dobletroque"
              />
              <label class="form-check-label" for="alquilado">Alquilado</label>
            </div>
            <div class="intro-y form-check">
              <input
                id="mixto"
                class="form-check-input"
                type="radio"
                name="mixto"
                value="mixto"
                v-model="dobletroque"
              />
              <label class="form-check-label" for="mixto">Mixto</label>
            </div>
          </div>
          <span class="intro-y col-span-12 text-xs text-gray-600"
            >Cantidad dobletroques</span
          >
          <div class="intro-y col-span-12 sm:col-span-4">
            <label for="input-wizard-1" class="form-label"
              >Cantidad asignado propio *</label
            >
            <input
              type="number"
              class="form-control"
              placeholder="Cantidad asignado propio"
              v-model="cantidadasignadopropio"
              :disabled="disabledPropio"
              min="1"
              pattern="^[0-9]+"
              maxLength="3"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <label class="form-label">Participación propio *</label>
           <div class="input-group">
              <div class="input-group-text">%</div>
              <input
                type="number"
                class="form-control"
                placeholder="Participación propio"
                v-model="participacionpropio"
                :disabled="true"
              />
            </div>
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <label class="form-label"
              >Valor M<sup>3</sup>.KM equipo propio *</label
            >
            <div class="input-group">
              <div class="input-group-text">$</div>
              <input
                type="number"
                class="form-control"
                placeholder="Cobro"
                v-model="valorm3propio"
                maxLength="12"
              />
            </div>
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <label for="input-wizard-3" class="form-label"
              >Cantidad asignado alquilado *</label
            >
            <input
              type="number"
              class="form-control"
              placeholder="Cantidad asignado alquilado"
              v-model="cantidadasignadoalquilado"
              :disabled="disabledAlquilado"
              min="1"
              pattern="^[0-9]+"
              maxLength="3"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <label for="input-wizard-5" class="form-label"
              >Participación alquilado *</label
            >
            <div class="input-group">
              <div class="input-group-text">%</div>
              <input
                id="input-wizard-5"
                type="number"
                class="form-control"
                placeholder="Participación alquilado"
                v-model="participacionalquilado"
                :disabled="true"
              />
            </div>
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <label class="form-label"
              >Valor M<sup>3</sup>.KM equipo alquilado *</label
            >
            <div class="input-group">
              <div class="input-group-text">$</div>
              <input
                type="number"
                class="form-control"
                placeholder="Costo"
                v-model="valorm3alquilado"
                :disabled="disabledAlquilado"
                maxLength="12"
              />
            </div>
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <label for="input-wizard-5" class="form-label">Total *</label>
            <input
              id="input-wizard-5"
              type="number"
              class="form-control"
              placeholder="Total"
              v-model="totalcantidades"
              :disabled="true"
            />
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <label for="input-wizard-5" class="form-label"
              >Participación total *</label
            >
            <div class="input-group">
              <div class="input-group-text">%</div>
              <input
                id="input-wizard-5"
                type="number"
                class="form-control"
                placeholder="Participación total"
                v-model="participaciontotal"
                :disabled="true"
              />
            </div>
          </div>
          <div class="intro-y col-span-12 sm:col-span-4">
            <label class="form-label">Total M<sup>3</sup>.KM *</label>
            <div class="input-group">
              <div class="input-group-text">$</div>
              <input
                type="number"
                class="form-control"
                placeholder="Total"
                v-model="totalm3"
                :disabled="true"
              />
            </div>
          </div>
          <br />
          <div class="intro-y col-span-12 font-medium text-base">
            Contrato
          </div>
          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="input-wizard-5" class="form-label"
              >Valor del contrato *</label
            >
            <div class="input-group">
              <div class="input-group-text">$</div>
              <input
                id="input-wizard-5"
                type="number"
                class="form-control"
                placeholder="Valor del contrato"
                v-model="valorcontrato"
                :class="{ 'border-theme-6': v$.valorcontrato.$error }"
                @blur="v$.valorcontrato.$touch"
                maxLength="12"
              />
            </div>
            <div class="text-theme-6 mt-2" v-if="v$.valorcontrato.$error">
              Este campo es necesario.
            </div>
          </div>

          <div class="intro-y col-span-12 sm:col-span-6">
            <label for="input-wizard-5" class="form-label"
              >Anticipo del contrato *</label
            >
            <div class="input-group">
              <div class="input-group-text">$</div>
              <input
                id="input-wizard-anticipo"
                type="number"
                class="form-control"
                placeholder="Anticipo del contrato"
                v-model="anticipodelcontrato"
                :class="{
                  'border-theme-6':
                    v$.anticipodelcontrato.$error || errorAnticipo
                }"
                @blur="v$.anticipodelcontrato.$touch"
                maxLength="12"
              />
            </div>
            <div class="text-theme-6 mt-2" v-if="v$.anticipodelcontrato.$error">
              Este campo es necesario.
            </div>
            <div class="text-theme-6 mt-2" v-if="errorAnticipo">
              Valor del anticipo incorrecto
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-5 sm:px-20 mt-10 pt-5 border-t border-gray-200 dark:border-dark-5"
        v-show="section == 4"
      >
        <div class="intro-y block sm:flex items-center h-10 float-right">
          <div class="dropdown">
            <button
              class="dropdown-toggle w-40 btn btn-primary"
              aria-expanded="false"
              ref="newServicesDrop"
            >
              Nuevo Servicio
              <ChevronDownIcon class="w-4 h-4 ml-2" />
            </button>
            <div class="dropdown-menu w-60">
              <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                <a
                  data-dismiss="dropdown"
                  class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1
                    hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md cursor-pointer"
                  v-for="item in serviceList"
                  :key="item.id"
                  @click="newService(item)"
                  >{{ item.nombre }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-theme-6 mt-2" v-if="errorCostosList">
          Ingrese al menos uno
        </div>
        <div id="faq-accordion-2" class="accordion accordion-boxed mt-20">
          <ServiceComponent
            class="mb-2"
            v-for="item in servicesListProject"
            :key="item.id"
            :ServiceId="item.id"
            :TitleService="item.name"
            :Service="item"
            @deleteService="deleteService"
            @getData="getDataService"
          />
        </div>
      </div>
      <div
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
        v-show="section == 5"
      >
        <div class="intro-y block sm:flex items-center h-10 float-right">
          <div class="dropdown">
            <button
              class="dropdown-toggle w-40 btn btn-primary"
              aria-expanded="false"
            >
              Nuevo Pago
              <ChevronDownIcon class="w-4 h-4 ml-2" />
            </button>
            <div class="dropdown-menu w-60">
              <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                <a
                  data-dismiss="dropdown"
                  class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1
                    hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md cursor-pointer"
                  v-for="item in condicioneseconomicasList"
                  :key="item.id"
                  @click="newCondition(item)"
                  >{{ item.nombre }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div id="faq-accordion-2" class="accordion accordion-boxed mt-20">
          <div class="intro-y accordion-item box shadow">
            <div id="faq-accordion-content-4" class="accordion-header flex">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-accordion-collapse-8"
                aria-expanded="false"
                aria-controls="faq-accordion-collapse-8"
              >
                Características requeridas de los vehículos del proyecto
              </button>
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
                <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
                  <div class="intro-y col-span-12 sm:col-span-4">
                    <label for="input-wizard-1" class="form-label"
                      >Cantidad de dobletroques</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Cantidad"
                      v-model="totalcantidades"
                      :readonly="true"
                    />
                  </div>
                  <div class="intro-y col-span-12 sm:col-span-4">
                    <div class="col-span-12 flex flex-col sm:flex-row">
                      <div>
                        <label>Antigüedad de los vehículos *</label>
                        <div class="intro-y form-check mt-2">
                          <input
                            id="radio-switch-1"
                            class="form-check-input"
                            type="radio"
                            name="vertical_radio_button"
                            value="8"
                            v-model="antiguedadvehiculos"
                          />
                          <label class="form-check-label" for="radio-switch-1"
                            >8 años</label
                          >
                        </div>
                        <div class="intro-y form-check mt-2">
                          <input
                            id="radio-switch-2"
                            class="form-check-input"
                            type="radio"
                            name="vertical_radio_button"
                            value="12"
                            v-model="antiguedadvehiculos"
                          />
                          <label class="form-check-label" for="radio-switch-2"
                            >12 años</label
                          >
                        </div>
                        <div
                          class="text-theme-6 mt-2"
                          v-if="errorAntiguedadAnios"
                        >
                          Seleccione uno
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="intro-y col-span-12 sm:col-span-4">
                    <label for="input-wizard-1" class="form-label">Otro</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Otra característica requerida"
                      v-model="otracaracteristicavehiculo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="intro-y accordion-item box shadow mb-3">
            <div id="faq-accordion-content-4" class="accordion-header flex">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-accordion-collapse-8"
                aria-expanded="false"
                aria-controls="faq-accordion-collapse-8"
              >
                Recorridos *
              </button>
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
                <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
                  <div class="intro-y col-span-12 sm:col-span-3">
                    <label for="input-wizard-1" class="form-label"
                      >Origen</label
                    >
                    <select v-model="recorridoorigen" class="form-select">
                      <option value="0">Seleccione</option>
                      <option
                        v-for="item in ubicacionesList"
                        :key="item.id"
                        :value="item.id"
                        >{{ item.nombre }}</option
                      >
                    </select>
                  </div>
                  <div class="intro-y col-span-12 sm:col-span-3">
                    <label for="input-wizard-1" class="form-label"
                      >Destino</label
                    >
                    <select v-model="recorridodestino" class="form-select">
                      <option value="0">Seleccione</option>
                      <option
                        v-for="item in ubicacionesList"
                        :key="item.id"
                        :value="item.id"
                        >{{ item.nombre }}</option
                      >
                    </select>
                  </div>
                  <div class="intro-y col-span-12 sm:col-span-3">
                    <label for="input-wizard-1" class="form-label"
                      >Acción</label
                    >
                    <select v-model="recorridoaccion" class="form-select">
                      <option value="0">Seleccione</option>
                      <option
                        v-for="item in accionesList"
                        :key="item.id"
                        :value="item.id"
                        >{{ item.nombre }}</option
                      >
                    </select>
                  </div>
                  <div
                    class="intro-y col-span-12 sm:col-span-3 self-center pt-2"
                  >
                    <label class="form-label"></label>
                    <div class="input-group">
                      <button
                        class="btn btn-primary btn-sm mr-2"
                        @click="
                          editFlagRecorrido
                            ? editarLogicoRecorrido()
                            : agregarRecorrido()
                        "
                      >
                        <PlusIcon class="w-4 h-4 mr-2" />
                        {{ editFlagRecorrido ? 'Editar' : 'Añadir' }}
                      </button>
                      <button
                        class="btn btn-danger btn-sm "
                        v-show="editFlagRecorrido"
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
                              Recorrido
                            </th>
                            <th class="border whitespace-nowrap">
                              Origen
                            </th>
                            <th class="border whitespace-nowrap">
                              Destino
                            </th>
                            <th class="border whitespace-nowrap">
                              Acción
                            </th>
                            <th class="border whitespace-nowrap">
                              Acciones
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            class="hover:bg-gray-200"
                            v-for="(item, i) in recorridos"
                            :key="i"
                          >
                            <td class="border">Recorrido {{ i + 1 }}</td>
                            <td class="border">
                              {{ item.nombre_incio }}
                            </td>
                            <td class="border">
                              {{ item.nombre_final }}
                            </td>
                            <td class="border">
                              {{ item.nombre_accion }}
                            </td>
                            <td class="border">
                              <button
                                @click="editarRecorrido(item)"
                                class="btn btn-warning btn-sm text-white mr-2"
                              >
                                Editar
                              </button>
                              <button
                                class="btn btn-danger btn-sm text-white"
                                @click="borrarRecorrido(item)"
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
                <div class="text-theme-6 mt-2" v-if="errorRecorridos">
                  Ingrese al menos uno
                </div>
              </div>
            </div>
          </div>
          <EconomicCodition
            class="mb-3 intro-y"
            v-for="item in condicioneseconomicas"
            :key="item.id"
            :name="item.name"
            :conditionid="item.id"
            :objeto="item"
            @getData="getDataConditions"
            @borrarPago="eliminarPago"
          />
          <div class="text-theme-6 mt-2" v-if="errorCondicionesList">
            Ingrese almenos un pago
          </div>
        </div>
      </div>
      <div
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
        v-show="section == 6"
      >
        <div class=" col-span-12 font-medium text-base">
          Gastos estimados
        </div>
        <div
          id="faq-accordion-2"
          class="accordion accordion-boxed mt-3 intro-y"
        >
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
                Datos de operación
              </button>
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
                <div class="grid grid-cols-12 gap-4 gap-y-5">
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Consumo de combustible por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Combustible por día"
                        v-model="consumocombustibledia"
                        :class="{
                          'border-theme-6': v$.consumocombustibledia.$error
                        }"
                        @blur="v$.consumocombustibledia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.consumocombustibledia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Consumo de lubricante por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Consumo de lubricante por día"
                        v-model="consumolubricantedia"
                        :class="{
                          'border-theme-6': v$.consumolubricantedia.$error
                        }"
                        @blur="v$.consumolubricantedia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.consumolubricantedia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label">Consumo de refrigerante *</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Consumo de refrigerante por día"
                        v-model="consumorefrigerantedia"
                        :class="{
                          'border-theme-6': v$.consumorefrigerantedia.$error
                        }"
                        @blur="v$.consumorefrigerantedia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.consumorefrigerantedia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label">Consumo de grasa *</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Consumo de grasa"
                        v-model="consumograsa"
                        :class="{
                          'border-theme-6': v$.consumograsa.$error
                        }"
                        @blur="v$.consumograsa.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.consumograsa.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Consumo de llantas por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Consumo de llantas por día"
                        v-model="consumollantasdia"
                        :class="{
                          'border-theme-6': v$.consumollantasdia.$error
                        }"
                        @blur="v$.consumollantasdia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.consumollantasdia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label">Pago de peajes *</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago de peajes"
                        v-model="pagopeajes"
                        :class="{
                          'border-theme-6': v$.pagopeajes.$error
                        }"
                        @blur="v$.pagopeajes.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div class="text-theme-6 mt-2" v-if="v$.pagopeajes.$error">
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label">Pago conductor por día *</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago conductor por día"
                        v-model="pagoconductordia"
                        :class="{
                          'border-theme-6': v$.pagoconductordia.$error
                        }"
                        @blur="v$.pagoconductordia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagoconductordia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago de hidratación por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago hidratación por día"
                        v-model="pagohidrataciondia"
                        :class="{
                          'border-theme-6': v$.pagohidrataciondia.$error
                        }"
                        @blur="v$.pagohidrataciondia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagohidrataciondia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label">Pago parqueadero por día *</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Consumo de llantas por día"
                        v-model="pagoparqueaderodia"
                        :class="{
                          'border-theme-6': v$.pagoparqueaderodia.$error
                        }"
                        @blur="v$.pagoparqueaderodia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagoparqueaderodia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label">Pago SOAT por día *</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago de peajes"
                        v-model="pagosoatdia"
                        :class="{
                          'border-theme-6': v$.pagosoatdia.$error
                        }"
                        @blur="v$.pagosoatdia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div class="text-theme-6 mt-2" v-if="v$.pagosoatdia.$error">
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago Tecnomecánica por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago conductor por día"
                        v-model="pagotecnomecanicadia"
                        :class="{
                          'border-theme-6': v$.pagotecnomecanicadia.$error
                        }"
                        @blur="v$.pagotecnomecanicadia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagotecnomecanicadia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago de seguro todo riesgo por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago de seguro todo riesgo por día"
                        v-model="pagosegurodia"
                        :class="{
                          'border-theme-6': v$.pagosegurodia.$error
                        }"
                        @blur="v$.pagosegurodia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagosegurodia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago cuota leasing por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago cuota leasing por día"
                        v-model="pagoleasingdia"
                        :class="{
                          'border-theme-6': v$.pagoleasingdia.$error
                        }"
                        @blur="v$.pagoleasingdia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagoleasingdia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label">Pago lavado por día *</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago lavado por día"
                        v-model="pagolavadodia"
                        :class="{
                          'border-theme-6': v$.pagolavadodia.$error
                        }"
                        @blur="v$.pagolavadodia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagolavadodia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago mantenimiento por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago mantenimiento por día"
                        v-model="pagomantenimientodia"
                        :class="{
                          'border-theme-6': v$.pagomantenimientodia.$error
                        }"
                        @blur="v$.pagomantenimientodia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagomantenimientodia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago Administración por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago Administración por día"
                        v-model="pagoadmindia"
                        :class="{
                          'border-theme-6': v$.pagoadmindia.$error
                        }"
                        @blur="v$.pagoadmindia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagoadmindia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label">Total diario</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Total"
                        v-model="totaldatosoperacion"
                        :readonly="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                Datos administrativos y de personal con prestaciones
              </button>
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
                <div class="grid grid-cols-12 gap-4 gap-y-5 mt-4">
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Salario conductor por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Salario conductor por día"
                        v-model="salarioconductordia"
                        :class="{
                          'border-theme-6': v$.salarioconductordia.$error
                        }"
                        @blur="v$.salarioconductordia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.salarioconductordia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >S. gerencia Nal. operaciones por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Salario gerencia Nal. operaciones por día"
                        v-model="salariogerencianalopedia"
                        :class="{
                          'border-theme-6': v$.salariogerencianalopedia.$error
                        }"
                        @blur="v$.salariogerencianalopedia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.salariogerencianalopedia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >S. ger. regional operaciones por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Salario gerencia regional operaciones por día"
                        v-model="salariogerenciaregopedia"
                        :class="{
                          'border-theme-6': v$.salariogerenciaregopedia.$error
                        }"
                        @blur="v$.salariogerenciaregopedia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.salariogerenciaregopedia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >S. ger. recursos humanos por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Salario gerencia recursos humanos por día"
                        v-model="salariogerenciarrhhdia"
                        :class="{
                          'border-theme-6': v$.salariogerenciarrhhdia.$error
                        }"
                        @blur="v$.salariogerenciarrhhdia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.salariogerenciarrhhdia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>

                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >S. asistente rec humanos por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="S. asistente rec humanos por día"
                        v-model="salarioasisrrhhdia"
                        :class="{
                          'border-theme-6': v$.salarioasisrrhhdia.$error
                        }"
                        @blur="v$.salarioasisrrhhdia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.salarioasisrrhhdia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Salario gerencia administrativa por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Salario gerencia administrativa por día"
                        v-model="salariogerencaadmindia"
                        :class="{
                          'border-theme-6': v$.salariogerencaadmindia.$error
                        }"
                        @blur="v$.salariogerencaadmindia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.salariogerencaadmindia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Salario supervidor asignado por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Salario supervidor asignado por día"
                        v-model="salariosupervidorasigdia"
                        :class="{
                          'border-theme-6': v$.salariosupervidorasigdia.$error
                        }"
                        @blur="v$.salariosupervidorasigdia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.salariosupervidorasigdia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago arriendo oficina por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago arriendo oficina por día"
                        v-model="pagoarriendoofidia"
                        :class="{
                          'border-theme-6': v$.pagoarriendoofidia.$error
                        }"
                        @blur="v$.pagoarriendoofidia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagoarriendoofidia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>

                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago servicios oficina por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago servicios oficina por día"
                        v-model="pagoserviciosofidia"
                        :class="{
                          'border-theme-6': v$.pagoserviciosofidia.$error
                        }"
                        @blur="v$.pagoserviciosofidia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagoserviciosofidia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-6 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label">Pago alojamiento por día *</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago alojamiento por día"
                        v-model="pagoalojamientodia"
                        :class="{
                          'border-theme-6': v$.pagoalojamientodia.$error
                        }"
                        @blur="v$.pagoalojamientodia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagoalojamientodia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago alimentación por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago alimentación por día"
                        v-model="pagoalimentaciondia"
                        :class="{
                          'border-theme-6': v$.pagoalimentaciondia.$error
                        }"
                        @blur="v$.pagoalimentaciondia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagoalimentaciondia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago alquiler de camionetas por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago alquiler de camionetas por día"
                        v-model="pagoalquilercamionetasdia"
                        :class="{
                          'border-theme-6': v$.pagoalquilercamionetasdia.$error
                        }"
                        @blur="v$.pagoalquilercamionetasdia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagoalquilercamionetasdia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>

                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago tiquetes aéreos por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago tiquetes aéreos por día"
                        v-model="pagotiquetesaereosdia"
                        :class="{
                          'border-theme-6': v$.pagotiquetesaereosdia.$error
                        }"
                        @blur="v$.pagotiquetesaereosdia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagotiquetesaereosdia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago transporte terrestre por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago transporte terrestre por día"
                        v-model="pagotransporteterrestredia"
                        :class="{
                          'border-theme-6': v$.pagotransporteterrestredia.$error
                        }"
                        @blur="v$.pagotransporteterrestredia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagotransporteterrestredia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago gasolina camionetas por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago gasolina camionetas por día"
                        v-model="pagogasolinacamionetasdia"
                        :class="{
                          'border-theme-6': v$.pagogasolinacamionetasdia.$error
                        }"
                        @blur="v$.pagogasolinacamionetasdia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagogasolinacamionetasdia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label">Pago papelería por día *</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago papelería por día"
                        v-model="pagopapeleriadia"
                        :class="{
                          'border-theme-6': v$.pagopapeleriadia.$error
                        }"
                        @blur="v$.pagopapeleriadia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagopapeleriadia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago insumos oficina por día *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago insumos oficina por día"
                        v-model="pagoinsumosofidia"
                        :class="{
                          'border-theme-6': v$.pagoinsumosofidia.$error
                        }"
                        @blur="v$.pagoinsumosofidia.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagoinsumosofidia.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label"
                      >Pago otros gastos oficina *</label
                    >
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Pago otros gastos oficina"
                        v-model="pagogatosofi"
                        :class="{
                          'border-theme-6': v$.pagogatosofi.$error
                        }"
                        @blur="v$.pagogatosofi.$touch"
                        maxLength="12"
                      />
                    </div>
                    <div
                      class="text-theme-6 mt-2"
                      v-if="v$.pagogatosofi.$error"
                    >
                      Este campo es necesario.
                    </div>
                  </div>
                  <div class="intro-y col-span-12 lg:col-span-6 2xl:col-span-3">
                    <label class="form-label">Total diario</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Total"
                        v-model="totaldatosadminypersonal"
                        :disabled="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
        v-show="section == 7"
      >
        <div class=" col-span-12 font-medium text-base">
          Contrato del proyecto
        </div>
        <div id="single-file-upload" class="p-5">
          <div class="preview">
            <Dropzone
              ref-key="dropzoneSingleRef"
              :options="{
                url: 'null',
                autoQueue: false,
                autoProcessQueue: false,
                thumbnailWidth: 200,
                maxFilesize: 20,
                maxFiles: 1,
                init: function() {
                  this.on(`maxfilesexceeded`, function(file) {
                    this.removeAllFiles()
                    this.addFile(file)
                  })
                  this.on(`addedfile`, function(file) {
                    self.changedropzone(file)
                  })
                },
                addRemoveLinks: true,
                dictRemoveFile: 'Eliminar archivo',
                acceptedFiles: 'application/pdf'
              }"
              class="dropzone"
            >
              <div class="text-lg font-medium">
                <UploadCloudIcon class="ml-2 w-8 h-8" /> Arrastre el archivo
                aquí o haga click para seleccionar el contrato
              </div>
              <!-- <div class="text-gray-600">
                  This is just a demo dropzone. Selected files are
                  <span class="font-medium">not</span> actually uploaded.
                </div> -->
            </Dropzone>
          </div>
        </div>
      </div>
      <div
        class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5 px-20 mt-5"
      >
        <button class="btn btn-secondary w-24" @click="setSection(section - 1)">
          Atras
        </button>
        <button
          class="btn btn-primary w-24 ml-2"
          @click="setSection(section + 1)"
          v-if="section != 7"
        >
          Siguiente
        </button>
        <button
          class="btn btn-primary ml-2"
          v-if="section == 7 && !loading"
          @click="saveProject"
        >
          Crear proyecto
        </button>
        <button class="btn btn-primary w-24 ml-2" v-show="loading">
          <LoadingIcon color="white" icon="oval" class="ml-2 w-8 h-8" />
        </button>
      </div>
      <p
        class="ml-5 text-theme-6"
        v-for="error of v$.$errors"
        :key="error.$uid"
      >
        <strong>{{ nombreValidacion(error.$property) }}</strong>
        <strong> campo necesario</strong>
      </p>
      <p class="ml-5 text-theme-6" v-if="errorTipoVias">
        <strong>Tipo vías seleccione al menos uno</strong>
      </p>
      <p class="ml-5 text-theme-6" v-if="errorOperacion">
        <strong>Tipo operación seleccione al menos uno</strong>
      </p>
      <p class="ml-5 text-theme-6" v-if="errorAntiguedadAnios">
        <strong>Seleccione la antiguedad de los vehículos</strong>
      </p>
      <p class="ml-5 text-theme-6" v-if="errorRecorridos">
        <strong>Ingrese almenos un recorrido</strong>
      </p>
      <p class="ml-5 text-theme-6" v-if="errorCostosList">
        <strong>Ingrese almenos un servicio</strong>
      </p>
      <p class="ml-5 text-theme-6" v-if="errorCondicionesList">
        <strong>Ingrese almenos una condición económica</strong>
      </p>
      <p class="ml-5 text-theme-6" v-if="errorFechas">
        <strong
          >La fecha de terminación no debe ser mayor a la fecha inicial</strong
        >
      </p>
      <p class="ml-5 text-theme-6" v-if="errorAnticipo">
        <strong>El anticipo no debe ser mayor al valor del contrato</strong>
      </p>
      <p class="ml-5 text-theme-6" v-if="errorCodigo">
        <strong>El código ya se encuentra registrado</strong>
      </p>
    </div>
    <!-- END: Wizard Layout -->
    <div id="failed-notification-content" class="toastify-content hidden flex">
      <XCircleIcon class="text-theme-6" />
      <div class="ml-4 mr-4">
        <div class="font-medium">Registro del proyecto fallido!</div>
        <div class="text-gray-600 mt-1">
          Por favor revise el formulario
        </div>
        <small>{{ msjError }}</small>
      </div>
    </div>
    <div id="failed-notification-date" class="toastify-content hidden flex">
      <XCircleIcon class="text-theme-6" />
      <div class="ml-4 mr-4">
        <div class="font-medium">Fechas incorrectas!</div>
        <div class="text-gray-600 mt-1">
          La fecha de terminación debe ser mayor a la fecha inicial del proyecto
        </div>
      </div>
    </div>
    <div class="modal" aria-hidden="true" id="modalEmptyDocument">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <AlertTriangleIcon class="w-16 h-16 text-theme-12 mx-auto mt-3" />
              <div class="text-3xl mt-5">Documento no seleccionado</div>
              <div class="text-gray-600 mt-2">
                ¿Desea crear el proyecto sin subir el contrato?
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                data-dismiss="modal"
                class="btn w-24 btn-secondary mr-2"
              >
                Cancelar
              </button>
              <button
                type="button"
                data-dismiss="modal"
                class="btn btn-primary"
                @click="crateProject"
              >
                Si, subir más tarde
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" aria-hidden="true" id="modalCondicionEconomica">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <AlertTriangleIcon class="w-16 h-16 text-theme-12 mx-auto mt-3" />
              <div class="text-3xl mt-5">Condicion económica</div>
              <div class="text-gray-600 mt-2">
                El nombre de la condición económica ya se encuentra registrado.
                por lo tanto esta información no será registrada
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                data-dismiss="modal"
                class="btn btn-primary"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { servicio as $s } from '@/utils/servicios.js'
import Toastify from 'toastify-js'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import ServiceComponent from '@/components/service-component.vue'
import EconomicCodition from '@/components/EconomicConditionsComponents.vue'

export default {
  components: {
    ServiceComponent,
    EconomicCodition
  },
  data() {
    return {
      self: this,
      loading: false,
      section: 1,
      Departamentos: [],
      departamentoInicial: 8,
      departamentoFinal: 8,
      municipiosInicial: [],
      municipiosFinal: [],
      codigo: '',
      nombre: '',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      municipioInicio: '',
      municipioFinal: '',
      ubicacionInicial: '',
      ubicacionFinal: '',
      horasLaboral: '',
      temperatura: '',
      project: {},
      tipooperacionrelleno: false,
      tipooperacionexcavacion: false,
      tipooperacioninterno: false,
      tipooperacionotro: false,
      disabledTipooperacion: true,
      otrotipooperacion: '',
      tipoviapavimentada: false,
      tipoviadestapada: false,
      tipoviatrocha: false,
      tipoviaotro: false,
      disabledtipovia: true,
      otrotipodevia: '',
      dobletroque: 'propio',
      cantidadasignadopropio: '0',
      valorm3propio: '0',
      cantidadasignadoalquilado: '0',
      valorm3alquilado: '0',
      valorcontrato: '',
      anticipodelcontrato: '',
      servicesListProject: [],
      keyservicesListProject: 0,
      consumocombustibledia: 0,
      consumolubricantedia: 0,
      consumorefrigerantedia: 0,
      consumograsa: 0,
      consumollantasdia: 0,
      pagopeajes: 0,
      pagoconductordia: 0,
      pagohidrataciondia: 0,
      pagoparqueaderodia: 0,
      pagosoatdia: 0,
      pagotecnomecanicadia: 0,
      pagosegurodia: 0,
      pagoleasingdia: 0,
      pagolavadodia: 0,
      pagomantenimientodia: 0,
      pagoadmindia: 0,
      salarioconductordia: 0,
      salariogerencianalopedia: 0,
      salariogerenciaregopedia: 0,
      salariogerenciarrhhdia: 0,
      salarioasisrrhhdia: 0,
      salariogerencaadmindia: 0,
      salariosupervidorasigdia: 0,
      pagoarriendoofidia: 0,
      pagoserviciosofidia: 0,
      pagoalojamientodia: 0,
      pagoalimentaciondia: 0,
      pagoalquilercamionetasdia: 0,
      pagotiquetesaereosdia: 0,
      pagotransporteterrestredia: 0,
      pagogasolinacamionetasdia: 0,
      pagopapeleriadia: 0,
      pagoinsumosofidia: 0,
      pagogatosofi: 0,
      serviceList: [],
      dropzone: '',
      condicioneseconomicas: [],
      conditionstosend: [],
      otroscondicioneseconomicas: [],
      cantidaddobletroques: '',
      antiguedadvehiculos: '',
      otracaracteristicavehiculo: '',
      recorridos: [],
      recorridoorigen: '0',
      recorridodestino: '0',
      recorridoaccion: '0',
      editFlagRecorrido: false,
      recorridoid: '',
      msjError: '',
      disabledAlquilado: true,
      disabledPropio: false,
      ubicacionesList: [],
      accionesList: [],
      condicioneseconomicasList: [],
      condicionesKey: 0,
      errorTipoVias: false,
      errorOperacion: false,
      errorAntiguedadAnios: false,
      errorRecorridos: false,
      errorCostosList: false,
      errorCondicionesList: false,
      errorFechas: false,
      errorAnticipo: false,
      errorCodigo: false
    }
  },
  setup() {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      codigo: { required },
      nombre: { required },
      municipioInicio: { required },
      municipioFinal: { required },
      ubicacionInicial: { required },
      ubicacionFinal: { required },
      horasLaboral: { required },
      temperatura: { required },
      valorcontrato: { required },
      anticipodelcontrato: { required },
      consumocombustibledia: { required },
      consumolubricantedia: { required },
      consumograsa: { required },
      consumollantasdia: { required },
      pagopeajes: { required },
      pagoconductordia: { required },
      pagohidrataciondia: { required },
      pagoparqueaderodia: { required },
      pagosoatdia: { required },
      pagotecnomecanicadia: { required },
      pagosegurodia: { required },
      pagoleasingdia: { required },
      pagolavadodia: { required },
      pagomantenimientodia: { required },
      pagoadmindia: { required },
      salarioconductordia: { required },
      salariogerencianalopedia: { required },
      salariogerenciaregopedia: { required },
      salariogerenciarrhhdia: { required },
      salarioasisrrhhdia: { required },
      salariogerencaadmindia: { required },
      salariosupervidorasigdia: { required },
      pagoarriendoofidia: { required },
      pagoserviciosofidia: { required },
      pagoalojamientodia: { required },
      pagoalimentaciondia: { required },
      pagoalquilercamionetasdia: { required },
      pagotiquetesaereosdia: { required },
      pagotransporteterrestredia: { required },
      pagogasolinacamionetasdia: { required },
      pagopapeleriadia: { required },
      pagoinsumosofidia: { required },
      pagogatosofi: { required },
      consumorefrigerantedia: { required }
    }
  },
  methods: {
    bluerCodigo() {
      this.validarCodigo()
      this.v$.codigo.$touch
    },
    async validarCodigo() {
      await $s.validarDatosProyecto(
        { codigo: this.codigo },
        result => {
          this.errorCodigo = false
          console.info(result)
        },
        error => {
          this.errorCodigo = true
          console.info(error)
          return []
        }
      )
    },
    nombreValidacion(valor) {
      switch (valor) {
        case 'codigo':
          return 'Código'
        case 'nombre':
          return 'Nombre'
        case 'ubicacionInicial':
          return 'Ubicación inicial'
        case 'ubicacionFinal':
          return 'Ubicación final'
        case 'horasLaboral':
          return 'Horas laborales'
        case 'temperatura':
          return 'Temperatura'
        case 'valorcontrato':
          return 'Valor del contrato'
        case 'anticipodelcontrato':
          return 'Anticipo del contrato'
        default:
          return valor
      }
    },
    async changedropzone(value) {
      this.dropzone = value
    },
    newService(service) {
      if (!this.servicesListProject.find(item => item.name == service.nombre)) {
        this.keyservicesListProject += 1
        const newServie = {
          name: service.nombre,
          id: this.keyservicesListProject,
          serviceid: service.id
        }
        this.servicesListProject.push(newServie)
      }
    },
    newCondition(condition) {
      const newCondition = {
        name: condition.nombre,
        id: condition.id,
        idinterna: this.condicionesKey++
      }
      if (this.condicioneseconomicas.length > 0) {
        const condicion = this.condicioneseconomicas.find(
          item => item.id == condition.id
        )
        debugger
        if (!condicion) {
          this.condicioneseconomicas.push(newCondition)
        } else if (condicion.id == '4') {
          this.condicioneseconomicas.push(newCondition)
        }
      } else {
        this.condicioneseconomicas.push(newCondition)
      }
    },
    deleteService(service) {
      this.servicesListProject = this.servicesListProject.filter(function(
        item
      ) {
        return item.id !== service.id
      })
    },
    agregarRecorrido() {
      if (
        this.recorridoorigen != 0 &&
        this.recorridodetino != 0 &&
        this.recorridoaccion != 0
      ) {
        const origen = this.ubicacionesList.find(
          item => item.id == this.recorridoorigen
        )
        const destino = this.ubicacionesList.find(
          item => item.id == this.recorridodestino
        )
        const accion = this.accionesList.find(
          item => item.id == this.recorridoaccion
        )
        this.recorridos.push({
          id: this.recorridos.length,
          recorrido_inicio_id: origen.id,
          nombre_incio: origen.nombre,
          recorrido_final_id: destino.id,
          nombre_final: destino.nombre,
          accion_id: accion.id,
          nombre_accion: accion.nombre
        })
        this.recorridoorigen = '0'
        this.recorridodestino = '0'
        this.recorridoaccion = '0'
      }
    },
    editarLogicoRecorrido() {
      if (
        this.recorridoorigen != 0 &&
        this.recorridodetino != 0 &&
        this.recorridoaccion != 0
      ) {
        const origen = this.ubicacionesList.find(
          item => item.id == this.recorridoorigen
        )
        const destino = this.ubicacionesList.find(
          item => item.id == this.recorridodestino
        )
        const accion = this.accionesList.find(
          item => item.id == this.recorridoaccion
        )
        var objIndex = this.recorridos.findIndex(
          obj => obj.id == this.recorridoid
        )
        this.recorridos[objIndex].recorrido_inicio_id = origen.id
        this.recorridos[objIndex].nombre_incio = origen.nombre
        this.recorridos[objIndex].recorrido_final_id = destino.id
        this.recorridos[objIndex].nombre_final = destino.nombre
        this.recorridos[objIndex].accion_id = accion.id
        this.recorridos[objIndex].nombre_accion = accion.nombre
        this.editFlagRecorrido = false

        this.recorridoorigen = '0'
        this.recorridodestino = '0'
        this.recorridoaccion = '0'
      }
    },
    canceledit() {
      this.editFlagRecorrido = false
      this.recorridoorigen = '0'
      this.recorridodestino = '0'
      this.recorridoaccion = '0'
      this.recorridoid = ''
    },
    editarRecorrido(recorrido) {
      this.recorridoid = recorrido.id
      this.editFlagRecorrido = true
      this.recorridoorigen = recorrido.recorrido_inicio_id
      this.recorridodestino = recorrido.recorrido_final_id
      this.recorridoaccion = recorrido.accion_id
    },
    borrarRecorrido(recorrido) {
      this.recorridos = this.recorridos.filter(function(item) {
        return item.id !== recorrido.id
      })
    },
    eliminarPago(pago) {
      this.condicioneseconomicas = this.condicioneseconomicas.filter(function(
        item
      ) {
        return item.idinterna !== pago.idinterna
      })
      this.conditionstosend = this.conditionstosend.filter(function(
        item
      ) {
        return item.idinterna !== pago.idinterna
      })
    },
    setSection(section) {
      if (section >= 1 && section <= 7) {
        this.section = section
        if (this.section == 2) {
          const f1Date = new Date(this.fechaInicio)
          const f2Date = new Date(this.fechaFin)
          if (f1Date.getTime() < f2Date.getTime()) {
            this.errorFechas = false
          } else {
            this.errorFechas = true
            Toastify({
              node: cash('#failed-notification-date')
                .clone()
                .removeClass('hidden')[0],
              duration: 8000,
              newWindow: true,
              close: true,
              gravity: 'top',
              position: 'right',
              stopOnFocus: true
            }).showToast()
          }
        }
      }
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
    async getMunicipiosInicial(id) {
      await $s.getMunicipiosByDepartamento(
        id,
        result => {
          this.municipiosInicial = result.despartamento.municipios
          this.municipioInicio = !this.municipioInicio && 8001
        },
        error => {
          console.log(error)
          return []
        }
      )
    },
    async getMunicipiosFinal(id) {
      await $s.getMunicipiosByDepartamento(
        id,
        result => {
          this.municipiosFinal = result.despartamento.municipios
          this.municipioFinal = !this.municipioFinal && 8001
        },
        error => {
          console.log(error)
          return []
        }
      )
    },
    saveProject() {
      if (!this.dropzone) {
        cash('#modalEmptyDocument').modal('show')
      } else {
        this.crateProject()
      }
    },
    async crateProject() {
      this.loading = true
      const tempTipoVias = []
      if (this.tipoviapavimentada) {
        tempTipoVias.push({ tipovia_id: 1 })
      }
      if (this.tipoviadestapada) {
        tempTipoVias.push({ tipovia_id: 2 })
      }
      if (this.tipoviatrocha) {
        tempTipoVias.push({ tipovia_id: 3 })
      }
      if (this.tipoviaotro) {
        tempTipoVias.push({ tipovia_id: 4, otros: this.otrotipodevia })
      }
      const tempTipoOperacion = []
      if (this.tipooperacionrelleno) {
        tempTipoOperacion.push({ tipo_material_id: 1 })
      }
      if (this.tipooperacionexcavacion) {
        tempTipoOperacion.push({ tipo_material_id: 2 })
      }
      if (this.tipooperacioninterno) {
        tempTipoOperacion.push({ tipo_material_id: 3 })
      }
      if (this.tipooperacionotro) {
        tempTipoOperacion.push({
          tipo_material_id: 4,
          otros: this.otrotipooperacion
        })
      }
      const servicios = []
      for (const key in this.servicesListProject) {
        const element = this.servicesListProject[key]
        const detalle = []
        for (const jey in element.listacostos) {
          const elementj = element.listacostos[jey]
          detalle.push({
            tipo_costo_servicio_id: elementj.id,
            otro_costo_servicio: elementj.otro,
            valor: elementj.valor
          })
        }
        servicios.push({
          proveedor_id: element.proveedor_id,
          servicio_id: element.serviceid,
          otro_servicio: element.otroservicio,
          forma_pago: element.payment.formapago,
          medio_pago: element.payment.paymentmethod,
          otro_medio_pago: element.payment.otromediopago,
          pago_a_realizar: element.payment.responsablepago,
          detalle: detalle
        })
      }
      this.v$.$touch()
      const f1Date = new Date(this.fechaInicio)
      const f2Date = new Date(this.fechaFin)
      const data = {
        codigo: this.codigo,
        nombre: this.nombre,
        fecha_inicio: this.fechaInicio,
        fecha_fin: this.fechaFin,
        municipio_inicio: this.municipioInicio,
        ubicacion_inicial: this.ubicacionInicial,
        municipio_final: this.municipioFinal,
        ubicacion_final: this.ubicacionFinal,
        horas_laboral: this.horasLaboral,
        temperatura: this.temperatura,
        duracion_proyecto: this.duracionproyecto,
        tiposVias: tempTipoVias,
        propietario_dobletroque: this.dobletroque,
        cantidad_vehiculo_propio: this.cantidadasignadopropio,
        cantidad_vehiculo_alquilado: this.cantidadasignadoalquilado,
        valor_metrocubico_propio: this.valorm3propio,
        valor_metrocubico_alquilado: this.valorm3alquilado,
        valor_contrato: this.valorcontrato,
        valor_anticipo_contrato: this.anticipodelcontrato,
        rellenos: tempTipoOperacion,
        costoServicio: servicios,
        condiciones_economicas: this.conditionstosend.concat(
          this.otroscondicioneseconomicas
        ),
        antiguedad_vehiculo: this.antiguedadvehiculos,
        otros_requerimientos: this.otracaracteristicavehiculo,
        recorridos: this.recorridos,
        datos_operacion: {
          consumo_combustible_dia: this.consumocombustibledia,
          consumo_lubricante_dia: this.consumolubricantedia,
          consumo_refrigerante_dia: this.consumorefrigerantedia,
          consumo_grasa: this.consumograsa,
          consumo_llantas_dia: this.consumollantasdia,
          pago_peajes: this.pagopeajes,
          pago_conductor_dia: this.pagoconductordia,
          pago_hidratacion_dia: this.pagohidrataciondia,
          pago_parqueadero_dia: this.pagoparqueaderodia,
          pago_soat_dia: this.pagosoatdia,
          pago_tecnomecanica_dia: this.pagotecnomecanicadia,
          pago_seguro_dia: this.pagosegurodia,
          pago_leasing_dia: this.pagoleasingdia,
          pago_lavado_dia: this.pagolavadodia,
          pago_mantenimiento_dia: this.pagomantenimientodia,
          pago_admin_dia: this.pagoadmindia
        },
        datos_administracion: {
          salario_conductor_dia: this.salarioconductordia,
          salario_gerencia_nacional_operaciones_dia: this
            .salariogerencianalopedia,
          salario_gerencia_regional_operaciones_dia: this
            .salariogerenciaregopedia,
          salario_gerencia_recursos_humanos_dia: this.salariogerenciarrhhdia,
          salario_asistente_recursos_humanos_dia: this.salarioasisrrhhdia,
          salario_gerencia_administracion_dia: this.salariogerencaadmindia,
          salarios_upervisor_asignado_dia: this.salariosupervidorasigdia,
          pago_arriendo_oficina_dia: this.pagoarriendoofidia,
          pagos_servicios_oficina_dia: this.pagoserviciosofidia,
          pago_alojamiento_dia: this.pagoalojamientodia,
          pago_alimentacion_dia: this.pagoalimentaciondia,
          pago_alquiler_camionetas_dia: this.pagoalquilercamionetasdia,
          pago_tiquetes_aereos_dia: this.pagotiquetesaereosdia,
          pago_transporte_terrestre_dia: this.pagotransporteterrestredia,
          pago_gasolina_camionetas_dia: this.pagogasolinacamionetasdia,
          pago_papeleria_dia: this.pagopapeleriadia,
          pago_insumos_oficina_dia: this.pagoinsumosofidia,
          pago_gastos_oficina: this.pagogatosofi
        }
      }
      console.log(data)
      if (f1Date.getTime() < f2Date.getTime()) {
        this.errorFechas = false
      } else {
        this.errorFechas = true
      }
      if (
        tempTipoVias.length > 0 &&
        tempTipoOperacion.length > 0 &&
        this.antiguedadvehiculos != '' &&
        this.recorridos.length > 0 &&
        this.servicesListProject.length > 0 &&
        this.condicioneseconomicas.length > 0 &&
        !this.errorFechas &&
        !this.errorAnticipo &&
        !this.errorCodigo
      ) {
        this.errorTipoVias = false
        this.errorOperacion = false
        this.errorAntiguedadAnios = false
        this.errorRecorridos = false
        this.errorCondicionesList = false
        if (this.v$.$invalid) {
          Toastify({
            node: cash('#failed-notification-content')
              .clone()
              .removeClass('hidden')[0],
            duration: 5000,
            newWindow: true,
            close: true,
            gravity: 'top',
            position: 'right',
            stopOnFocus: true
          }).showToast()
          this.loading = false
        } else {
          $s.addProyecto(
            data,
            result => {
              /* this.removeDataLocalStorage() */
              const proyectoid = result.proyecto_id
              if (proyectoid && this.dropzone) {
                console.log('Documento si esta adjunto')
                this.sendFile(proyectoid)
              } else {
                console.log('Documento no adjunto')
                this.loading = false
                this.$router.push('/admin-project/projects')
              }
            },
            error => {
              this.loading = false
              this.msjError = error
              Toastify({
                node: cash('#failed-notification-content')
                  .clone()
                  .removeClass('hidden')[0],
                duration: 5000,
                newWindow: true,
                close: true,
                gravity: 'top',
                position: 'right',
                stopOnFocus: true
              }).showToast()
            }
          )
        }
      } else {
        this.errorTipoVias = tempTipoVias.length == 0 && true
        this.errorOperacion = tempTipoOperacion.length == 0 && true
        this.errorAntiguedadAnios = this.antiguedadvehiculos == '' && true
        this.errorRecorridos = this.recorridos.length == 0 && true
        this.errorCostosList = this.servicesListProject.length == 0 && true
        this.errorCondicionesList =
          this.condicioneseconomicas.length == 0 && true
        if (this.errorFechas) {
          Toastify({
            node: cash('#failed-notification-date')
              .clone()
              .removeClass('hidden')[0],
            duration: 8000,
            newWindow: true,
            close: true,
            gravity: 'top',
            position: 'right',
            stopOnFocus: true
          }).showToast()
        }
      }
      this.loading = false
    },
    async sendFile(proyectoid) {
      await $s.agregarDocumentoProyecto(
        proyectoid,
        'Contrato',
        this.dropzone,
        result => {
          console.log(result)
        },
        error => {
          console.log('ENVIO DOCUMENTO ', error)
        }
      )
      this.loading = false
      this.$router.push('/admin-project/projects')
    },
    removeDataLocalStorage() {
      localStorage.removeItem('project')
      localStorage.removeItem('depatini')
      localStorage.removeItem('depatfin')
      localStorage.removeItem('section')
    },
    getDataService(values) {
      console.log(values)
      this.servicesListProject.map(item => {
        if (item.id == values.serviceid) {
          item.otroservicio = values.otroservicio && values.otroservicio
          item.proveedor = values.proveedor && values.proveedor
          item.proveedor_id = values.proveedor_id
          item.nit = values.nit && values.nit
          item.ciudad = values.ciudad && values.ciudad
          item.telefono = values.telefono && values.telefono
          item.direccion = values.direccion && values.direccion
          item.listacostos = values.listacostos && values.listacostos
          item.payment = values.paymentdata && {
            responsablepago:
              values.paymentdata.responsablepago &&
              values.paymentdata.responsablepago,
            formapago:
              values.paymentdata.formapago && values.paymentdata.formapago,
            paymentmethod:
              values.paymentdata.paymentmethod &&
              values.paymentdata.paymentmethod
          }
        }
        return item
      })
    },
    getDataConditions(values) {
      console.log(values)
      if (values.formapago && values.paymentmethod && values.responsablepago) {
        if (values.id == '4') {
          if (this.otroscondicioneseconomicas.length > 0) {
            const condicion = this.otroscondicioneseconomicas.find(
              item => item.otro_condicion_economica == values.otros
            )
            if (!condicion) {
              this.otroscondicioneseconomicas.push({
                nombre_condicion_economica_id: values.id,
                forma_pago: values.formapago,
                medio_pago: values.paymentmethod,
                pago_a_realizar: values.responsablepago,
                otro_medio_pago: values.otromediopago,
                otro_condicion_economica: values.otros,
                idinterna: values.idinterna
              })
            } else {
              if (condicion.idinterna != values.idinterna) {
                cash('#modalCondicionEconomica').modal('show')
              }
            }
          } else {
            this.otroscondicioneseconomicas.push({
              nombre_condicion_economica_id: values.id,
              forma_pago: values.formapago,
              medio_pago: values.paymentmethod,
              pago_a_realizar: values.responsablepago,
              otro_medio_pago: values.otromediopago,
              otro_condicion_economica: values.otros,
              idinterna: values.idinterna
            })
          }
        } else if (this.conditionstosend.length == 0) {
          this.conditionstosend.push({
            nombre_condicion_economica_id: values.id,
            forma_pago: values.formapago,
            medio_pago: values.paymentmethod,
            pago_a_realizar: values.responsablepago,
            otro_medio_pago: values.otromediopago,
            otro_condicion_economica: values.otros,
            idinterna: values.idinterna
          })
        } else if (
          !this.conditionstosend.find(
            item => item.nombre_condicion_economica_id == values.id
          )
        ) {
          this.conditionstosend.push({
            nombre_condicion_economica_id: values.id,
            forma_pago: values.formapago,
            medio_pago: values.paymentmethod,
            pago_a_realizar: values.responsablepago,
            otro_medio_pago: values.otromediopago,
            otro_condicion_economica: values.otros,
            idinterna: values.idinterna
          })
        }
      }
    },
    mapRecorrido(value) {
      switch (value) {
        case '1':
          return 'Esercon'
        case '2':
          return 'Cen'
        case '3':
          return 'Cantera'
        case '4':
          return 'Botadero'
      }
    },
    async getServicios() {
      await $s.getServicios(
        result => {
          this.serviceList = result.servicios
        },
        error => {
          console.log(error)
          return []
        }
      )
    },
    async getUbicaciones() {
      await $s.getUbicaciones(
        result => {
          this.ubicacionesList = result.ubicacion_recorrido
        },
        error => {
          console.log(error)
          return []
        }
      )
    },
    async getAcciones() {
      await $s.getAcciones(
        result => {
          this.accionesList = result.accion_recorrido
        },
        error => {
          console.log(error)
          return []
        }
      )
    },
    async GetCondicionesEconomicas() {
      await $s.getCondicionesEconomicas(
        result => {
          this.condicioneseconomicasList = result.proyecto_id
        },
        error => {
          console.log(error)
          return []
        }
      )
    }
  },
  watch: {
    dropzone(newVal) {
      this.project.contract = newVal
    },
    async departamentoInicial(newVal, oldVal) {
      this.getMunicipiosInicial(newVal)
      localStorage.depatini = JSON.stringify(newVal)
    },
    async departamentoFinal(newVal, oldVal) {
      this.getMunicipiosFinal(newVal)
      localStorage.depatfin = JSON.stringify(newVal)
    },
    codigo: {
      handler(newVal) {
        this.project.codigo = newVal
      },
      deep: true
    },
    nombre: {
      handler(newVal) {
        this.project.nombre = newVal
      }
    },
    fechaInicio: {
      handler(newVal) {
        this.project.fechaInicio = newVal
      }
    },
    fechaFin: {
      handler(newVal) {
        this.project.fechaFin = newVal
      }
    },
    municipioInicio: {
      handler(newVal) {
        this.project.municipioInicio = newVal
      }
    },
    municipioFinal: {
      handler(newVal) {
        this.project.municipioFinal = newVal
      }
    },
    ubicacionInicial: {
      handler(newVal) {
        this.project.ubicacionInicial = newVal
      }
    },
    ubicacionFinal: {
      handler(newVal) {
        this.project.ubicacionFinal = newVal
      }
    },
    horasLaboral: {
      handler(newVal) {
        this.project.horasLaboral = newVal
      }
    },
    temperatura: {
      handler(newVal) {
        this.project.temperatura = newVal
      }
    },
    tipoviaotro: {
      handler(newVal) {
        this.disabledtipovia = !newVal
        if (newVal == false) this.otrotipodevia = ''
      }
    },
    tipooperacionotro: {
      handler(newVal) {
        this.disabledTipooperacion = !newVal
        if (newVal == false) this.otrotipooperacion = ''
      }
    },
    otrotipooperacion: {
      handler(newVal) {
        this.project.otrotipooperacion = newVal
      }
    },
    /*     tipovia: {
      handler(newVal) {
        console.log(newVal)
        this.project.tipovia = newVal
        try {
          if (this.tipovia.indexOf('otro') == -1) {
            this.disabledtipovia = true((this.otrotipodevia = ''))
          } else {
            this.disabledtipovia = false
          }
        } catch (error) {
          this.disabledtipovia = false
        }
      }
    }, */
    dobletroque: {
      handler(newVal) {
        switch (newVal) {
          case 'propio':
            this.disabledAlquilado = true
            this.disabledPropio = false
            this.cantidadasignadoalquilado = '0'
            this.participacionalquilado = '0'
            this.valorm3alquilado = '0'
            break
          case 'alquilado':
            this.disabledAlquilado = false
            this.disabledPropio = true
            this.cantidadasignadopropio = '0'
            this.participacionpropio = '0'
            this.valorm3propio = '0'
            break
          default:
            this.disabledAlquilado = false
            this.disabledPropio = false
            this.cantidadasignadopropio = '0'
            this.participacionpropio = '0'
            this.valorm3propio = '0'
            this.cantidadasignadoalquilado = '0'
            this.participacionalquilado = '0'
            this.valorm3alquilado = '0'
            break
        }
        this.project.dobletroque = newVal
      }
    },
    participacionpropio: {
      handler(newVal) {
        this.project.participacionpropio = newVal
      }
    },
    valorm3propio: {
      handler(newVal) {
        this.project.valorm3propio = newVal
      }
    },
    cantidadasignadoalquilado: {
      handler(newVal) {
        this.project.cantidadasignadoalquilado = newVal
      }
    },
    participacionalquilado: {
      handler(newVal) {
        this.project.participacionalquilado = newVal
      }
    },
    valorm3alquilado: {
      handler(newVal) {
        this.project.valorm3alquilado = newVal
      }
    },
    participaciontotal: {
      handler(newVal) {
        this.project.participaciontotal = newVal
      }
    },
    totalm3: {
      handler(newVal) {
        this.project.totalm3 = newVal
      }
    },
    valorcontrato: {
      handler(newVal) {
        this.project.valorcontrato = newVal
      }
    },
    anticipodelcontrato: {
      handler(newVal) {
        if (parseInt(newVal) <= parseInt(this.valorcontrato)) {
          this.errorAnticipo = false
        } else {
          this.errorAnticipo = true
        }
      },
      deep: true
    },
    servicesListProject: {
      handler(newVal) {
        this.project.servicesListProject = newVal
      },
      deep: true
    },
    consumocombustibledia: {
      handler(newVal) {
        this.totaldatosoperacion = this.project.consumocombustibledia = newVal
      },
      deep: true
    },
    consumolubricantedia: {
      handler(newVal) {
        this.project.consumolubricantedia = newVal
      },
      deep: true
    },
    consumorefrigerantedia: {
      handler(newVal) {
        this.project.consumorefrigerantedia = newVal
      },
      deep: true
    },
    consumograsa: {
      handler(newVal) {
        this.project.consumograsa = newVal
      },
      deep: true
    },
    consumollantasdia: {
      handler(newVal) {
        this.project.consumollantasdia = newVal
      },
      deep: true
    },
    pagopeajes: {
      handler(newVal) {
        this.project.pagopeajes = newVal
      },
      deep: true
    },
    pagoconductordia: {
      handler(newVal) {
        this.project.pagoconductordia = newVal
      },
      deep: true
    },
    pagohidrataciondia: {
      handler(newVal) {
        this.project.pagohidrataciondia = newVal
      },
      deep: true
    },
    pagoparqueaderodia: {
      handler(newVal) {
        this.project.pagoparqueaderodia = newVal
      },
      deep: true
    },
    pagosoatdia: {
      handler(newVal) {
        this.project.pagosoatdia = newVal
      },
      deep: true
    },
    pagotecnomecanicadia: {
      handler(newVal) {
        this.project.pagotecnomecanicadia = newVal
      },
      deep: true
    },
    pagosegurodia: {
      handler(newVal) {
        this.project.pagosegurodia = newVal
      },
      deep: true
    },
    pagoleasingdia: {
      handler(newVal) {
        this.project.pagoleasingdia = newVal
      },
      deep: true
    },
    pagolavadodia: {
      handler(newVal) {
        this.project.pagolavadodia = newVal
      },
      deep: true
    },
    pagomantenimientodia: {
      handler(newVal) {
        this.project.pagomantenimientodia = newVal
      },
      deep: true
    },
    pagoadmindia: {
      handler(newVal) {
        this.project.pagoadmindia = newVal
      },
      deep: true
    },
    totaldatosoperacion: {
      handler(newVal) {
        this.project.totaldatosoperacion = newVal
      },
      deep: true
    },
    totaldatosadminypersonal: {
      handler(newVal) {
        this.project.totaldatosadminypersonal = newVal
      },
      deep: true
    },
    salarioconductordia: {
      handler(newVal) {
        this.project.salarioconductordia = newVal
      },
      deep: true
    },
    salariogerencianalopedia: {
      handler(newVal) {
        this.project.salariogerencianalopedia = newVal
      },
      deep: true
    },
    salariogerenciaregopedia: {
      handler(newVal) {
        this.project.salariogerenciaregopedia = newVal
      },
      deep: true
    },
    salariogerenciarrhhdia: {
      handler(newVal) {
        this.project.salariogerenciarrhhdia = newVal
      },
      deep: true
    },
    salarioasisrrhhdia: {
      handler(newVal) {
        this.project.salarioasisrrhhdia = newVal
      },
      deep: true
    },
    salariogerencaadmindia: {
      handler(newVal) {
        this.project.salariogerencaadmindia = newVal
      },
      deep: true
    },
    salariosupervidorasigdia: {
      handler(newVal) {
        this.project.salariosupervidorasigdia = newVal
      },
      deep: true
    },
    pagoarriendoofidia: {
      handler(newVal) {
        this.project.pagoarriendoofidia = newVal
      },
      deep: true
    },
    pagoserviciosofidia: {
      handler(newVal) {
        this.project.pagoserviciosofidia = newVal
      },
      deep: true
    },
    pagoalojamientodia: {
      handler(newVal) {
        this.project.pagoalojamientodia = newVal
      },
      deep: true
    },
    pagoalimentaciondia: {
      handler(newVal) {
        this.project.pagoalimentaciondia = newVal
      },
      deep: true
    },
    pagoalquilercamionetasdia: {
      handler(newVal) {
        this.project.pagoalquilercamionetasdia = newVal
      },
      deep: true
    },
    pagotiquetesaereosdia: {
      handler(newVal) {
        this.project.pagotiquetesaereosdia = newVal
      },
      deep: true
    },
    pagotransporteterrestredia: {
      handler(newVal) {
        this.project.pagotransporteterrestredia = newVal
      },
      deep: true
    },
    pagogasolinacamionetasdia: {
      handler(newVal) {
        this.project.pagogasolinacamionetasdia = newVal
      },
      deep: true
    },
    pagopapeleriadia: {
      handler(newVal) {
        this.project.pagopapeleriadia = newVal
      },
      deep: true
    },
    pagoinsumosofidia: {
      handler(newVal) {
        this.project.pagoinsumosofidia = newVal
      },
      deep: true
    },
    pagogatosofi: {
      handler(newVal) {
        this.project.pagogatosofi = newVal
      },
      deep: true
    },
    project: {
      handler(newVal) {
        localStorage.project = JSON.stringify(newVal)
      },
      deep: true
    },
    section(newVal) {
      localStorage.section = JSON.stringify(newVal)
    }
  },
  computed: {
    duracionproyecto() {
      const resta =
        new Date(this.fechaFin).getTime() - new Date(this.fechaInicio).getTime()
      return Math.round(resta / (1000 * 60 * 60 * 24))
    },
    totalm3() {
      return parseInt(this.valorm3propio) - parseInt(this.valorm3alquilado)
    },
    participacionpropio() {
      return Math.round(
        (this.cantidadasignadopropio * 100) / this.totalcantidades
      )
    },
    participacionalquilado() {
      return Math.round(
        (this.cantidadasignadoalquilado * 100) / this.totalcantidades
      )
    },
    participaciontotal() {
      return Math.round(
        parseInt(this.participacionpropio) +
          parseInt(this.participacionalquilado)
      )
    },
    totalcantidades() {
      return (
        parseInt(this.cantidadasignadoalquilado) +
        parseInt(this.cantidadasignadopropio)
      )
    },
    totaldatosoperacion() {
      const total =
        parseInt(this.consumocombustibledia) +
        parseInt(this.consumolubricantedia) +
        parseInt(this.consumorefrigerantedia) +
        parseInt(this.consumograsa) +
        parseInt(this.consumollantasdia) +
        parseInt(this.pagopeajes) +
        parseInt(this.pagoconductordia) +
        parseInt(this.pagohidrataciondia) +
        parseInt(this.pagoparqueaderodia) +
        parseInt(this.pagosoatdia) +
        parseInt(this.pagotecnomecanicadia) +
        parseInt(this.pagosegurodia) +
        parseInt(this.pagoleasingdia) +
        parseInt(this.pagolavadodia) +
        parseInt(this.pagomantenimientodia) +
        parseInt(this.pagoadmindia)
      return total
    },
    totaldatosadminypersonal() {
      const total =
        parseInt(this.salarioconductordia) +
        parseInt(this.salariogerencianalopedia) +
        parseInt(this.salariogerenciaregopedia) +
        parseInt(this.salariogerenciarrhhdia) +
        parseInt(this.salarioasisrrhhdia) +
        parseInt(this.salariogerencaadmindia) +
        parseInt(this.salariosupervidorasigdia) +
        parseInt(this.pagoarriendoofidia) +
        parseInt(this.pagoserviciosofidia) +
        parseInt(this.pagoalojamientodia) +
        parseInt(this.pagoalimentaciondia) +
        parseInt(this.pagoalquilercamionetasdia) +
        parseInt(this.pagotiquetesaereosdia) +
        parseInt(this.pagotransporteterrestredia) +
        parseInt(this.pagogasolinacamionetasdia) +
        parseInt(this.pagopapeleriadia) +
        parseInt(this.pagoinsumosofidia) +
        parseInt(this.pagogatosofi)
      return total
    }
  },
  async mounted() {
    await this.getDepartamentos()
    await this.getMunicipiosInicial(8)
    await this.getMunicipiosFinal(8)
    await this.getServicios()
    await this.getUbicaciones()
    await this.getAcciones()
    await this.GetCondicionesEconomicas()
    /*     if (localStorage.project) {
      try {
        this.project = JSON.parse(localStorage.project)
        this.codigo = this.project.codigo
        this.nombre = this.project.nombre
        this.fechaInicio = this.project.fechaInicio
        this.fechaFin = this.project.fechaFin
        this.municipioInicio = this.project.municipioInicio
        this.municipioFinal = this.project.municipioFinal
        this.ubicacionInicial = this.project.ubicacionInicial
        this.ubicacionFinal = this.project.ubicacionFinal
        this.horasLaboral = this.project.horasLaboral
        this.temperatura = this.project.temperatura
        this.duracionproyecto = this.project.duracionproyecto
        this.tipooperacion = this.project.tipooperacion
        this.otrotipooperacion = this.project.otrotipooperacion
        this.tipovia = this.project.tipovia
        this.otrotipodevia = this.project.otrotipodevia
        this.dobletroque = this.project.dobletroque
        this.cantidadasignadopropio = this.project.cantidadasignadopropio
        this.participacionpropio = this.project.participacionpropio
        this.valorm3propio = this.project.valorm3propio
        this.cantidadasignadoalquilado = this.project.cantidadasignadoalquilado
        this.participacionalquilado = this.project.participacionalquilado
        this.valorm3alquilado = this.project.valorm3alquilado
        this.totalcantidades = this.project.totalcantidades
        this.participaciontotal = this.project.participaciontotal
        this.totalm3 = this.project.totalm3
        this.valorcontrato = this.project.valorcontrato
        this.anticipodelcontrato = this.project.anticipodelcontrato
        this.servicesListProject = this.project.servicesListProject
        this.consumocombustibledia = this.project.consumocombustibledia
        this.consumolubricantedia = this.project.consumolubricantedia
        this.consumorefrigerantedia = this.project.consumorefrigerantedia
        this.consumograsa = this.project.consumograsa
        this.consumollantasdia = this.project.consumollantasdia
        this.pagopeajes = this.project.pagopeajes
        this.pagoconductordia = this.project.pagoconductordia
        this.pagohidrataciondia = this.project.pagohidrataciondia
        this.pagollantasdia = this.project.pagollantasdia
        this.pagosoatdia = this.project.pagosoatdia
        this.pagotecnomecanicadia = this.project.pagotecnomecanicadia
        this.pagosegurodia = this.project.pagosegurodia
        this.pagoleasingdia = this.project.pagoleasingdia
        this.pagolavadodia = this.project.pagolavadodia
        this.pagomantenimientodia = this.project.pagomantenimientodia
        this.pagoadmindia = this.project.pagoadmindia
        this.salarioconductordia = this.project.salarioconductordia
        this.salariogerencianalopedia = this.project.salariogerencianalopedia
        this.salariogerenciaregopedia = this.project.salariogerenciaregopedia
        this.salariogerenciarrhhdia = this.project.salariogerenciarrhhdia
        this.salarioasisrrhhdia = this.project.salarioasisrrhhdia
        this.salariogerencaadmindia = this.project.salariogerencaadmindia
        this.salariosupervidorasigdia = this.project.salariosupervidorasigdia
        this.pagoarriendoofidia = this.project.pagoarriendoofidia
        this.pagoserviciosofidia = this.project.pagoserviciosofidia
        this.pagoalojamientodia = this.project.pagoalojamientodia
        this.pagoalimentaciondia = this.project.pagoalimentaciondia
        this.pagoseguroriesgodia = this.project.pagoseguroriesgodia
        this.pagoalquilercamionetasdia = this.project.pagoalquilercamionetasdia
        this.pagotiquetesaereosdia = this.project.pagotiquetesaereosdia
        this.pagotransporteterrestredia = this.project.pagotransporteterrestredia
        this.pagogasolinacamionetasdia = this.project.pagogasolinacamionetasdia
        this.pagopapeleriadia = this.project.pagopapeleriadia
        this.pagoinsumosofidia = this.project.pagoinsumosofidia
        this.pagogatosofi = this.project.pagogatosofi
        this.keyservicesListProject = this.project.keyservicesListProject
        this.dropzone = this.project.contract
      } catch (error) {
        console.log(error)
      }
    }
    if (localStorage.depatini) {
      this.departamentoInicial = JSON.parse(localStorage.depatini)
    }
    if (localStorage.depatfin) {
      this.departamentoFinal = JSON.parse(localStorage.depatfin)
    }
    if (localStorage.section) {
      this.section = JSON.parse(localStorage.section)
    } */
  }
}
</script>
<style>
.dz-progress {
  display: none;
}
</style>
