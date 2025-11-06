require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/checkout', require('./routes/checkout'));
app.use('/api/users', require('./routes/users')); 

app.get('/', (_, res) => res.send('Mock E-Com API running!'));

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message || 'Internal error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});