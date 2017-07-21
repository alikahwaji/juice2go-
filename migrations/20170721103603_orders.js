exports.up = function(knex, Promise) {
    return knex.schema.createTable('orders', function(table) {
        table.increments('id').primary()
        table.string('name')
        table.string('address')
        table.string('email')
<<<<<<< HEAD
        table.timestamp('created at')
=======
        table.timestamps('created at')
>>>>>>> database-part2
        table.boolean('delivery')
        table.string('status')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders')
}