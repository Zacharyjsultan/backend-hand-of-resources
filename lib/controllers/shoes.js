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
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await Shoes.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedShoes = await Shoes.updateById(req.params.id, req.body);
      res.json(updatedShoes);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Shoes.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
