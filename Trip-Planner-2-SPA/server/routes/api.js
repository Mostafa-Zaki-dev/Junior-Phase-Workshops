const router = require('express').Router();
const { Hotel, Restaurant, Activity, Place } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const [hotels, restaurants, activities] = await Promise.all([
      Hotel.findAll({ include: [Place] }),
      Restaurant.findAll({ include: [Place] }),
      Activity.findAll({ include: [Place] }),
    ]);
    res.json({ hotels, restaurants, activities });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
