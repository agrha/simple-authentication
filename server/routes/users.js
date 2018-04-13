var express = require('express');
var router = express.Router();
const User = require('../controllers/user.controller')

/* GET users listing. */
router.post('/',User.signup)
router.post('/signin',User.signin)
module.exports = router;
