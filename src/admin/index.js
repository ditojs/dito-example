import DitoAdmin from '@ditojs/admin'
import './style.sass'

new DitoAdmin('#dito-admin', {
  // The `dito` object is provided by AdminController, and passes on settings
  // from `config.admin.api` and other bits.
  dito,
  // NOTE: `api` gets merged with `config.admin.api`, so here we provide the
  // settings that are more related to code than config, mostly functions:
  api: {
    formats: {
      date: {
        // When using short format (options.month === '2-digit'),
        // replace the UK date separators '/' with '.'.
        format: (value, type, options) =>
          type === 'literal' && value === '/' && options.month === '2-digit'
            ? '.'
            : value
      }
    }
  },
  views: import('./views')
})
