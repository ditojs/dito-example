import { ModelController } from '@ditojs/server'
import { Dummy } from '@/models'

export class Dummies extends ModelController {
  modelClass = Dummy
  eagerScope = 'admin'
  graph = true

  collection = {
    allow: ['find', 'post']
  }

  member = {
    allow: ['find', 'patch', 'delete']
  }
}
