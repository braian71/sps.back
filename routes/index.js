const express = require('express');

const router = express.Router();

router.use('/users', require('./user.router'));
router.use('/auth', require('./auth.router'));

module.exports = router;
