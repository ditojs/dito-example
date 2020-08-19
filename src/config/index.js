import { merge } from '@ditojs/utils'

const { env } = process

const mode = env.NODE_ENV || 'development'
const host = env.NODE_HOST || env.HOST || '0.0.0.0'
const port = env.NODE_PORT || env.PORT || 8080

const config = {
  env: mode,

  server: {
    host,
    port
  },

  log: {
    request: false,
    routes: false,
    schema: false,
    relations: false,
    sql: false
  },

  app: {
    normalizePaths: true,
    keys: ['secret sauce'],
    proxy: true,
    session: true,
    passport: true,
    etag: true,
    csrf: true
  },

  knex: {
    normalizeDbNames: true
    // Details to be defined in `config.local.js` / `config.ENV.js`
  },

  admin: { // Used by AdminController
    mode: mode === 'development' ? 'development' : 'production',
    build: {
      path: './src/admin',
      eslint: false
    },
    dist: {
      path: 'dist/src/admin'
    },
    api: {
      url: '/api/admin/',
      users: {
        path: 'users'
      },
      notifications: {
        // The amount of milliseconds multiplied with the amount of characters
        // displayed in the notification, plus 40 (40 + title + message):
        durationFactor: 30
      }
    },
    // Additional settings can be exposed to the browser side through the
    // `settings` object, accessible as `global.dito.settings` in the browser.
    settings: {
      env: mode
    }
  },

  storages: {},

  services: {}
}

function loadConfig(type) {
  try {
    const config = require(`./index.${type}.js`)
    return config && config.default || config || null
  } catch (e) {
    return null
  }
}

export default merge(
  config,
  loadConfig('local'),
  loadConfig(config.env)
)
