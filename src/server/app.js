import { Application, Validator } from '@ditojs/server'
import serve from 'koa-static'
import config from '../config'
import * as models from './models'
import * as controllers from './controllers'
import * as schema from './schema'

const validator = new Validator(schema)
const app = new Application(config, {
  validator,
  models,
  controllers
})

app.use(serve('static'))

export default app
