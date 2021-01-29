const express = require('express');
const router = express.Router();
const { addPage, wikiPage, main } = require('../views');
const { Page, User } = require('../models');

router.get('/', async (req, res, next) => {
  const pages = await Page.findAll();
  res.send(main(pages));
});

router.post('/', async (req, res, next) => {
  try {
    const [user, wasCreated] = await User.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    const page = await Page.create(req.body);
    await page.setAuthor(user);
    res.redirect(`/wiki/${page.slug}`); // res.redirect(`/${page.slug}`) won't work (equals to go to path localhost/page.slug) as the redirect method has to be the full absolute path not the router related home path /wiki/

    /* Page.create(req.body) same as
        Page.create(
        {title: req.body.title,
         content: req.body.content,
         status: req.body.status,
         })
        */
    /* 
        FOR DEVELOPING PURPOSES -in case you forgot what those are-
       console.log('user is >>>>>', user);
       console.log('wasCreated is >>>>>', wasCreated);
       console.log('req.body is >>>>>', req.body);
       console.log(
         'User.findOrCreate is >>>>>',
         await User.findOrCreate({
           where: {
             name: req.body.name,
             email: req.body.email,
           },
         })
       ); */
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    res.send(wikiPage(page));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
