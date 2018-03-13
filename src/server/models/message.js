import { TimeStampedModel } from '@ditojs/server'

export class Message extends TimeStampedModel {
  static properties = {
    text: {
      type: 'string',
      required: true
    }
  }

  static relations = {
    dummy: {
      relation: 'hasOne',
      from: 'Message.dummyId',
      to: 'Dummy.id'
    }
  }
}
