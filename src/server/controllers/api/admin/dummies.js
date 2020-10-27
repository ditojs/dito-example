import { ModelController } from '@ditojs/server'
import { Dummy } from '@/models'

export class Dummies extends ModelController {
  modelClass = Dummy
  scope = '^admin'
  graph = true

  collection = {
    allow: ['find', 'insert'],
    find: {
      verb: 'get',
      handler(ctx) {
        return super.find(ctx)
      }
    }
  }

  member = {
    allow: ['find', 'patch', 'delete']
  }
}
