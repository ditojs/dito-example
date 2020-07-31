import { UserModel } from '@ditojs/server'

export class User extends UserModel {
  static properties = {
    roles: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['admin', 'editor']
      },
      minItems: 1,
      uniqueItems: true,
      required: true
    }
  }
}
