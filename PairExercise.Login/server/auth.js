const router = require('express').Router();
const { User } = require('./db');
module.exports = router;

// auth routes go below!

router.put('/login', async (req, res, next) => {
  try {
    const submittedUser = req.body;
    const user = await User.findOne({
      where: {
        email: submittedUser.email,
        password: submittedUser.password,
      },
    });
    if (user) {
      req.session.userId = user.id;
      res.json(user);
    } else {
      const err = new Error('Incorrect email or password!');
      err.status = 401;
      next(err);
      // res.sendStatus(401);
    }
  } catch (error) {
    next(error);
  }
});

const userNotFound = (next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
};

router.get('/me', async (req, res, next) => {
  try {
    if (!req.session.userId) {
      userNotFound(next);
    } else {
      const user = await User.findByPk(req.session.userId);
      user ? res.json(user) : userNotFound(next);
    }
  } catch (err) {
    next(err);
  }
});
