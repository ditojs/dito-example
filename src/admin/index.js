import DitoAdmin from '@ditojs/admin'
import * as views from './views'

DitoAdmin.setup('#dito-admin', {
  views,

  api: {
    url: 'http://localhost:8080/api/admin/',
    normalizePaths: true
  },

  base: '/admin'
})
