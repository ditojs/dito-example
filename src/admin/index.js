import DitoAdmin from '@ditojs/admin'

new DitoAdmin('#dito-admin', {
  views: import('./views'),
  dito: {
    api: {
      url: 'http://localhost:8080/api/admin/',
      normalizePaths: true,
      users: 'users'
    }
  },

  base: '/admin'
})
