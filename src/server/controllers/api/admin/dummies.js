import { ModelController } from '@ditojs/server'
import { Dummy } from '@/models'

export class Dummies extends ModelController {
  modelClass = Dummy
  scope = '^admin'
  graph = true
  authorize = ['admin', 'editor']

  collection = {
    allow: ['find', 'insert']
  }

  member = {
    allow: ['find', 'patch', 'delete']
  }
}
