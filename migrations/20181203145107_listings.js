exports.up = function(knex, Promise) {
  return knex.schema.createTable('listings', (listing) => {
    listing.increments('id')
    listing.string('title')
    listing.string('description', [500])
    listing.string('pay')
    listing.string('interested')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('listings')
};
