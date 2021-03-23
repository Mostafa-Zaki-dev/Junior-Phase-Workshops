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

router.delete('/logout', (req, res, next) => {
  /* use on of the following approaches to destroy the session */

  // 1) Destroying a session: (use destroy() session method to destroys the session and will unset the req.session property)
  req.session.destroy();

  // 2)  Deleting a key on the session: (remove userId key from session)
  // delete req.session.userId;

  // 3) Setting a key on the session to null or undefined: (set userId key on session to null or undefined)
  // req.session.userId = null;

  const err = new Error('User Logged Out');
  err.status = 204;
  next(err);

  /* use the custom error above or the below with no message */
  // res.status(204).end();
});
