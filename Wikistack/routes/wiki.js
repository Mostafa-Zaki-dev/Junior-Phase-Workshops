const express = require('express');
const { blue, red, green } = require('chalk');
const router = express.Router();
const { addPage, wikiPage, main } = require('../views');
const { Page } = require('../models');

router.get('/', async (req, res, next) => {
  const pages = await Page.findAll();
  console.log(pages);
  res.send(main(pages));
});

router.post('/', async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status,
    });

    res.redirect(`/wiki/${page.slug}`); // res.redirect(`/${page.slug}`) won't work (equals to go to path localhost/page.slug) as the redirect method has to be the full path not the router related home path /wiki/
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
