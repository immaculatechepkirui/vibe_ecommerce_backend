const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const products = await db('products').select();
    res.json(products);
  } catch (e) { next(e); }
});

module.exports = router;