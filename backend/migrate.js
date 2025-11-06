const db = require('./db');

async function migrate() {
  await db.schema.createTableIfNotExists('users', (t) => {
    t.increments('id').primary();
    t.string('username').unique().notNullable();
    t.string('password').notNullable();
  });

  await db.schema.createTableIfNotExists('products', (t) => {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.float('price').notNullable();
    t.string('image');
    t.string('category');
  });

  await db.schema.createTableIfNotExists('cart_items', (t) => {
    t.increments('id').primary();
    t.integer('user_id').references('users.id');
    t.integer('product_id').references('products.id');
    t.integer('qty').notNullable();
  });

  await db.schema.createTableIfNotExists('orders', (t) => {
    t.increments('id').primary();
    t.integer('user_id').references('users.id');
    t.text('items_json'); // store as JSON string
    t.float('total');
    t.timestamp('created_at').defaultTo(db.fn.now());
    t.string('customer_name');
    t.string('customer_email');
  });

  console.log('Database migrated!');
  process.exit();
}

migrate();