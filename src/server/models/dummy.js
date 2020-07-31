import { TimeStampedModel } from '@ditojs/server'

export class Dummy extends TimeStampedModel {
  static scopes = {
    verified: query => query
      .where('verified', true),

    unverified: query => query
      .where('verified', false),

    all: query => query,

    admin: query => query
      .withGraph('messages')
  }

  static properties = {
    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    fullName: {
      type: 'string',
      computed: true
    },

    prefix: 'string',

    country: {
      type: 'string',
      required: true
    },

    dateOfBirth: {
      type: 'date',
      nullable: true
    },

    email: {
      type: 'string',
      format: 'email',
      nullable: true
    },

    age: 'integer',

    factor: {
      type: 'number',
      range: [0, 50],
      required: true
    },

    tags: {
      type: 'array',
      items: {
        type: 'string'
      },
      default: []
    },

    colors: {
      type: 'array',
      items: {
        type: 'string'
      },
      default: []
    },

    // short-hands to `{ type: * }` are possible also:
    verified: 'boolean',
    comments: 'string'
  }

  static relations = {
    messages: {
      relation: 'hasMany',
      from: 'Dummy.id',
      to: 'Message.dummyId',
      // This is required so that nested content can be altered in the graph.
      // Without it, only relates are allowed:
      owner: true
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
