<<<<<<< HEAD
exports.up = function(knex, Promise) {
    return knex.schema.createTable('order_items', function(table) {
        table.increment('id')
        table.number('order_id').references('orders.id')
        table.string('type')
        table.numnber('quantity')
        table.string('size')
    })
}
exports.down = function(knex, Promise) {
    return nex.schema.dropTable('order_items')
};
=======

exports.up = function(knex, Promise) {
  
};

exports.down = function(knex, Promise) {
  
};
>>>>>>> 063941a... added 2nd migration
