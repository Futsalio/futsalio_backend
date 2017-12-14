var express = require('express');
var router = express.Router();
const auth = require('../controllers/auth/auth')
/* GET users listing. */

router.post('/verify', auth.doDecode)

module.exports = router;
