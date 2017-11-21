var express = require('express');
var router = express.Router();
const api = require('../controllers/users/controller_user')
const checker = require('../controllers/auth/auth')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', api._signUp)
router.post('/signin', api._signIn)

router.get('/:id_role', api._getAllUserByRole)
router.get('/:id', checker.authUser, api._deleteUser)
router.put('/:id', checker.authUser, api._updateUser)

module.exports = router;
