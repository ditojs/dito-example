export async function up(knex) {
  await knex.schema
    .createTable('user', table => {
      table.increments('id').primary()
      table.string('username').notNullable()
      table.string('hash')
      table.timestamp('last_login').nullable()
      table.json('roles')
    })
}

export async function down(knex) {
  await knex.schema
    .dropTableIfExists('user')
}
