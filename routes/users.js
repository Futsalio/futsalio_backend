var express = require('express');
var router = express.Router();
const _controllerUser = require('../controllers/controller_user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/registration', _controllerUser._signUp)
router.post('/signin', _controllerUser._signIn)

module.exports = router;
