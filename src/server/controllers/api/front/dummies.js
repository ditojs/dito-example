import { ModelController, action, parameters, returns } from '@ditojs/server'
import { Dummy } from '@/models'

export class Dummies extends ModelController {
  modelClass = Dummy

  member = {
    allow: ['find', 'hello'],

    @action('get')
    @parameters(
      { member: true },
      {
        name: 'msg',
        type: 'string',
        required: true
      }
    )
    @returns({
      name: 'greeting',
      type: 'string'
    })
    hello(ctx, dummy, param) {
      return `Hello ${dummy.fullName}: ${param.msg}`
    }
  }

  collection = {
    allow: ['find', 'wait'],

    @action('get')
    @returns({
      type: 'string'
    })
    async wait() {
      await Promise.delay(1000)
      return 'One second has passed.'
    }
  }
}
