const router = require('express').Router();
const { User } = require('./db');
module.exports = router;

router.get('/me', async (req, res, next) => {
  try {
    if (!req.session.userId) {
      if (req.user) {
        res.json(req.user);
      } else {
        res.sendStatus(401);
      }
    } else {
      const user = await User.findByPk(req.session.userId);
      if (!user) {
        res.sendStatus(401);
      } else {
        res.json(user);
      }
    }
  } catch (error) {
    next(error);
  }
});

router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (!user) {
      res.sendStatus(401);
    } else {
      // attach user id to the session
      req.session.userId = user.id;
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/logout', (req, res) => {
  // remove user id from session
  delete req.session.userId;
  res.sendStatus(204);
});

router.use('/google', require('./oauth'));
