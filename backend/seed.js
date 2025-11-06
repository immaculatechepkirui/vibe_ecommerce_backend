const db = require('./db');

async function seed() {
  await db('products').del();
  await db('products').insert([
    { name: 'T-Shirt', price: 19.99, image: 'https://placeimg.com/200/200/fashion', category: 'Clothing' },
    { name: 'Mug', price: 12.99, image: 'https://placeimg.com/200/200/tech', category: 'Accessory' },
    {name: 'Wireless Headphones', price: 79.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', category: 'Electronics'},
    {name: 'Running Shoes', price: 119.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', category: 'Fashion' },
    {name:'Yoga Mat', price: 39.99, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500', category: 'Fitness'},
    {name: 'Desk Lamp', price: 34.99, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500', category: 'Home' },
    {name: 'Sunglasses', price: 149.99, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500', category: 'Fashion'},
    {name: 'Laptop Backpack', price: 49.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500', category: 'Accessory'},
    {name: 'Coffee Maker', price: 89.99, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500', category: 'Home'},
    {name: 'Smart Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', category: 'Electronics'}
  ]);
  console.log('Seeded products.');
  process.exit();
}
seed();