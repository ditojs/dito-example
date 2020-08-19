// Vue configuration used by "build:admin" script to build the content of
// './src/admin/'

const app = require('./dist/server/app').default
module.exports = app.getAdminVueConfig()
