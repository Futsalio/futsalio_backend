var express = require('express');
var router = express.Router();
const _controllerUser = require('../controllers/users/controller_user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', _controllerUser._signUp)
router.post('/signin', _controllerUser._signIn)

router.get('/:id_role', _controllerUser._getAllUserByRole)
router.get('/:id', _controllerUser._deleteUser)
router.put('/:id', _controllerUser._updateUser)

module.exports = router;
