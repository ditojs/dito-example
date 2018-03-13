import { Controller, action, returns } from '@ditojs/server'

export class Test extends Controller {
  path = 'test'

  @action('get', '.')
  @returns({
    type: 'string'
  })
  whatever() {
    return 'hello'
  }
}
