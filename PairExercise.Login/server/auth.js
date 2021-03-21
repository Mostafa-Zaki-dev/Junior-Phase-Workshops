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
