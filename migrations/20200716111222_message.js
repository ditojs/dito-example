export async function up(knex) {
  await knex.schema
    .createTable('message', table => {
      table.increments('id').primary()
      table.integer('dummy_id').unsigned()
        .references('id').inTable('dummy')
      table.string('text').notNullable()
      table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    })
}

export async function down(knex) {
  await knex.schema
    .dropTableIfExists('message')
}
