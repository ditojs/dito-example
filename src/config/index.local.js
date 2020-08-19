export default {
  log: {
    request: true,
    routes: true,
    schema: false,
    relations: false,
    sql: false
  },

  app: {
    // Only required for Dito.js Admin development to work on different port:
    cors: {
      credentials: true
    }
  },

  admin: {
    api: {
      // Only required for Dito.js Admin development to work on different port:
      cors: {
        credentials: true
      }
    }
  },

  knex: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './example.db'
    }
  }
}
