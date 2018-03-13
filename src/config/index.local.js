export default {
  log: {
    server: true,
    schema: false,
    routes: false,
    sql: false
  },
  app: {
    etag: false
  },
  knex: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './example.db'
    }
  }
}
