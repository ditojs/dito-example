export function up(knex) {
  return knex.schema
    .createTable('dummy', table => {
      table.increments('id').primary()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('prefix')
      table.string('country').notNullable()
      table.date('date_of_birth')
      table.string('email')
      table.integer('age')
      table.double('factor').notNullable()
      table.json('tags')
      table.json('colors')
      table.boolean('verified')
      table.string('comments')
      table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    })
}

export function down(knex) {
  return knex.schema
    .dropTableIfExists('dummy')
}
