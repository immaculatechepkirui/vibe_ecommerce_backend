const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const cart = await db('cart').select();
    res.json(cart);
  } catch (e) { next(e); }
});

module.exports = router;