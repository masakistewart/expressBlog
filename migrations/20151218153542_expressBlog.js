
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
  	table.increments();
  	table.string('title');
  	table.text('articles');
  	table.string('img');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students');
};
