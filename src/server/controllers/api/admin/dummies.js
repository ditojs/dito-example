import { ModelController } from '@ditojs/server'
import { Dummy } from '@/models'

export class Dummies extends ModelController {
  modelClass = Dummy
  eagerScope = 'admin'
  graph = true
  authorize = ctx => ctx.isAuthenticated()

  collection = {
    allow: ['find', 'insert']
  }

  member = {
    allow: ['find', 'patch', 'delete']
  }
}
