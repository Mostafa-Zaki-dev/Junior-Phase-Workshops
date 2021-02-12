const express = require('express');
const router = express.Router();
const { Album, Artist, Song } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const album = await Album.findAll({ include: Artist });
    res.json(album);
  } catch (error) {
    console.log('Something Wrong with router >>>', error.message);
    next(error);
  }
});

router.get('/:albumId', async (req, res, next) => {
  try {
    const album = await Album.findByPk(req.params.albumId, { include: [Artist, Song] });
    res.json(album);
  } catch (error) {
    console.log('Something Wrong with router >>>', error.message);
    next(error);
  }
});

module.exports = router;
