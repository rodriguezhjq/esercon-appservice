const state = () => {
  return {
    menu: [{
      icon: 'LayoutIcon',
      pageName: 'inicio',
      title: 'Inicio'
    },
    {
      icon: 'BriefcaseIcon',
      pageName: 'side-menu-layout',
      title: 'Gestión Administrativa',
      subMenu: [{
        icon: '',
        pageName: 'side-menu-wizards',
        title: 'Proyectos',
        subMenu: [{
          icon: '',
          pageName: 'locations',
          title: 'Administrar Ubicacion'
        },
        {
          icon: '',
          pageName: 'list-projects',
          title: 'Administrar Proyectos'
        },
        {
          icon: '',
          pageName: 'add-new-project',
          title: 'Registrar Proyecto'
        }
        ]
      },
      {
        icon: '',
        pageName: 'side-menu-blog',
        title: 'Proveedores',
        subMenu: [{
          icon: '',
          pageName: 'side-menu-blog-layout-1',
          title: 'Administar Proveedores'
        },
        {
          icon: '',
          pageName: 'side-menu-blog-layout-2',
          title: 'Registrar Proveedor'
        }
        ]
      },
      {
        icon: '',
        pageName: 'side-menu-pricing',
        title: 'Vehículos',
        subMenu: [{
          icon: '',
          pageName: 'side-menu-pricing-layout-1',
          title: 'Administrar Vehículos'
        },
        {
          icon: '',
          pageName: 'side-menu-pricing-layout-2',
          title: 'Registrar Vehículos'
        },
        {
          icon: '',
          pageName: 'side-menu-pricing-layout-2',
          title: 'Alertas de Vencimiento'
        }
        ]
      }
      ]
    },
    {
      icon: 'HomeIcon',
      pageName: 'side-menu-invoice',
      title: 'Gestion Financiera',
      subMenu: [{
        icon: '',
        pageName: 'side-menu-invoice-layout-1',
        title: 'Consulta de Indicadores'
      }]
    },
    {
      icon: 'UsersIcon',
      pageName: 'side-menu-faq',
      title: 'Gestión Humana',
      subMenu: [{
        icon: '',
        pageName: 'side-menu-faq-layout-1',
        title: 'Administar Conductores'
      },
      {
        icon: '',
        pageName: 'side-menu-faq-layout-2',
        title: 'Registrar Conductor'
      },
      {
        icon: '',
        pageName: 'side-menu-faq-layout-3',
        title: 'Alertar de Vencimiento'
      }
      ]
    },
    {
      icon: 'DollarSignIcon',
      pageName: 'side-menu-menu-layout',
      title: 'Gestión de Nómina',
      subMenu: [{
        icon: '',
        pageName: 'inicio',
        title: 'Administración de nómina',
        ignore: true
      },
      {
        icon: '',
        pageName: 'simple-menu-dashboard-overview-1',
        title: 'Liquidación general',
        ignore: true
      },
      {
        icon: '',
        pageName: 'top-menu-dashboard-overview-1',
        title: 'Liquidación individual',
        ignore: true
      },
      {
        icon: '',
        pageName: 'top-menu-dashboard-overview-1',
        title: 'Liquidación temporal',
        ignore: true
      },
      {
        icon: '',
        pageName: 'top-menu-dashboard-overview-1',
        title: 'Cargue de novedades',
        ignore: true
      }
      ]
    },
    {
      icon: 'DiscIcon',
      pageName: 'side-menu-invoice',
      title: 'Gestion de Operaciones',
      subMenu: [{
        icon: '',
        pageName: 'side-menu-invoice-layout-1',
        title: 'Consulta de Indicadores'
      }]
    },
    'devider',
    {
      icon: 'ToolIcon',
      pageName: 'side-menu-crud',
      title: 'Administración de Usuarios',
      subMenu: [{
        icon: '',
        pageName: 'rols',
        title: 'Roles'
      },
      {
        icon: '',
        pageName: 'permissions',
        title: 'Permisos'
      },
      {
        icon: '',
        pageName: 'list-users',
        title: 'Administración de usuarios'
      },
      {
        icon: '',
        pageName: 'add-new-user',
        title: 'Crear usuarios'
      }
      ]
    }
    ]
  }
}

// getters
const getters = {
  menu: state => state.menu
}

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
