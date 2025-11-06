const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const users = await db('users').select();
    res.json(users);
  } catch (e) { next(e); }
});

module.exports = router;