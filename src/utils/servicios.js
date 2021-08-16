import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}

const servicios = {
  dominio: 'https://esercon.herokuapp.com',
  version: '/api/v1',
  login: '/auth/login',
  proyecto: '/proyecto',
  roles: '/roles',
  rol: '/rol',
  permisos: '/permissions',
  usuarios: '/usuarios',
  departamentos: '/departamentos',
  municipios: '/municipios',
  municipio: '/municipio',
  proveedor: '/proveedor',
  documento: '/documento',
  servicios: '/servicios',
  detallecosto: '/detalleCosto',
  ubicaciones: '/recorrido/ubicacion',
  acciones: '/recorrido/accion',
  condicionesEconomicas: '/condicionesEconomicas',
  validador: '/validador',
  clasificaciones: '/clacificacionUbicacion', /* Para regitrar ubicaciones */
  ubicacion: '/ubicacion',

  getFullUrl(url) {
    return this.dominio + this.version + url
  },

  setAutorization() {
    const auth = localStorage.getItem('auth')
    const authObj = JSON.parse(auth)
    headers.Authorization = authObj.token_type + ' ' + authObj.access_token
  },

  procesarRespuesta(data, success, error) {
    if (data.success) {
      if (success) {
        success(data.data)
      }
    } else {
      if (data.errors) {
        if (error) {
          error(data)
        }
      }
    }
  },

  loginUser(body, successEvent, errorEvent) {
    const url = this.getFullUrl(this.login)
    axios({ method: 'POST', url, headers, data: body }).then(
      (result) => {
        localStorage.setItem('auth', JSON.stringify(result.data))
        this.getDepartamentos()
        if (successEvent) {
          successEvent(result.data)
        }
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  getUsuarios(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.usuarios),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },

  addUsuario(data, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'post',
      url: this.getFullUrl(this.usuarios),
      headers: headers,
      data: data
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  removeUsuario(idUsuario, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'delete',
      url: this.getFullUrl(this.usuarios) + '/' + idUsuario,
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  getRolUsuario(idUsuario, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.usuarios) + '/' + idUsuario + this.rol,
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  addRolUsuario(idUsuario, data, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'post',
      url: this.getFullUrl(this.usuarios) + '/' + idUsuario + this.rol,
      headers: headers,
      data: data
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  getPermisosUsuario(idUsuario, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.usuarios) + '/' + idUsuario + this.permisos,
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  getProyectos(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.proyecto),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },

  getProyectoById(idProyecto, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.proyecto) + '/' + idProyecto,
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },

  addProyecto(data, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'post',
      url: this.getFullUrl(this.proyecto),
      headers: headers,
      data: data
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },

  updateProyecto(idProyecto, data, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'patch',
      url: this.getFullUrl(this.proyecto) + '/' + idProyecto,
      headers: headers,
      data: data
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },

  removeProyecto(idProyecto, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'delete',
      url: this.getFullUrl(this.proyecto) + '/' + idProyecto,
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },

  removeDocumentoProyecto(idProyecto, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'delete',
      url: this.getFullUrl(this.proyecto) + '/' + idProyecto + this.documento,
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },

  agregarDocumentoProyecto(idProyecto, nombre, file, successEvent, errorEvent) {
    this.setAutorization()
    headers['Content-Type'] = 'multipart/form-data'
    const newFile = new File([file[0]], nombre + '.pdf')
    const formData = new FormData()
    formData.append('file', newFile)
    const config = {
      method: 'post',
      url: this.getFullUrl(this.proyecto) + '/' + idProyecto + this.documento,
      headers: headers,
      data: formData
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },

  getRoles(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.roles),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },

  addRoles(data, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'post',
      url: this.getFullUrl(this.roles),
      headers: headers,
      data: data
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  removeRoles(idRole, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'delete',
      url: this.getFullUrl(this.roles) + '/' + idRole,
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  getPermisos(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.permisos),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },

  addPermisos(data, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'post',
      url: this.getFullUrl(this.permisos),
      headers: headers,
      data: data
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  removePermisos(idPermiso, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'delete',
      url: this.getFullUrl(this.roles) + '/' + idPermiso,
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  addPermisosRol(idRole, data, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'post',
      url: this.getFullUrl(this.roles) + '/' + idRole + this.permisos,
      headers: headers,
      data: data
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  getDepartamentos(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.departamentos),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },

  getDepartamentoById(idDepartamento, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.departamentos) + '/' + idDepartamento,
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  getMunicipio(idMunicipio, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.municipio) + '/' + idMunicipio,
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  getMunicipiosByDepartamento(idDepartamento, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.departamentos) + '/' + idDepartamento + this.municipios,
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },

  getServicios(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.servicios),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },
  getDetalleCosto(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.detallecosto),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },
  getProveedor(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.proveedor),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },
  getUbicaciones(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.ubicaciones),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },
  getAcciones(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.acciones),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },
  getCondicionesEconomicas(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.condicionesEconomicas),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },
  validarDatosProyecto(data, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'post',
      url: this.getFullUrl(this.proyecto) + this.validador,
      headers: headers,
      data: data
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },
  getClasificaciones(successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'get',
      url: this.getFullUrl(this.clasificaciones),
      headers: headers
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
    return false
  },
  addUbicacion(data, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'post',
      url: this.getFullUrl(this.ubicacion),
      headers: headers,
      data: data
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },
  updateUbicacion(idUbicacion, data, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'put',
      url: this.getFullUrl(this.ubicacion) + '/' + idUbicacion,
      headers: headers,
      data: data
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  },
  deleteUbicacion(idUbicacion, data, successEvent, errorEvent) {
    this.setAutorization()
    const config = {
      method: 'delete',
      url: this.getFullUrl(this.ubicacion) + '/' + idUbicacion,
      headers: headers,
      data: data
    }
    axios(config).then(
      (result) => {
        this.procesarRespuesta(result.data, successEvent, errorEvent)
      },
      (error) => {
        if (errorEvent) {
          errorEvent(error)
        }
      }
    )
  }
}

const install = app => {
  app.config.globalProperties.$f = () => {
    return servicios
  }
}

export { install as default, servicios as servicio }
