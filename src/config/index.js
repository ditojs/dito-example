import { deepMerge } from '@ditojs/utils'

const { env } = process

const defaultConfig = {
  env: env.NODE_ENV || 'development',
  server: {
    host: env.NODE_HOST || env.HOST || '0.0.0.0',
    port: env.NODE_PORT || env.PORT || 8080
  },
  log: {
    server: false,
    schema: false,
    routes: false,
    sql: false
  },
  app: {
    normalizePaths: true,
    keys: ['secret sauce'],
    proxy: true,
    session: true,
    passport: true,
    csrf: true
  },
  knex: {
    normalizeDbNames: true
    // Details to be defined in `config.local.js` / `config.ENV.js`
  },
  admin: { // Used by LinetoAdminController
    dev: true,
    path: './src/admin',
    template: './src/admin/index.html',
    include: [
      './src/admin/style.sass'
    ]
  }
}

function loadConfig(type) {
  try {
    const config = require(`./index.${type}.js`)
    return config && config.default || config || null
  } catch (e) {
    return null
  }
}

const config = deepMerge(
  defaultConfig,
  loadConfig('local'),
  loadConfig(defaultConfig.env)
)

export default config
