const { Router } = require('express');
const { Shoes } = require('../models/Shoes');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const shoes = await Shoes.getAll();
    console.log('shoes from getAll', shoes);
    return res.json(shoes);
  } catch (e) {
    next(e);
  }
});
