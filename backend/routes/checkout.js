const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const checkout = await db('checkout').select();
    res.json(checkout);
  } catch (e) { next(e); }
});

module.exports = router;