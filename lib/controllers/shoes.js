const { Router } = require('express');
const { Shoes } = require('../models/Shoes');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const singleShoe = await Shoes.getById(req.params.id);
      if (!singleShoe) {
        next();
      }
      res.json(singleShoe);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const shoes = await Shoes.getAll();
      res.json(shoes);
    } catch (e) {
      next(e);
    }
  });
