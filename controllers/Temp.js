// /controllers/index.js
const router = require('express').Router();

const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

module.exports = router;

// /controllers.homeRoutes.js
const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log("In homeRoutes router.get('/')");

});


module.exports = router;

