var express = require('express');
var router = express.Router();
const api = require('../controllers/users/controller_user')
const checker = require('../controllers/auth/auth')
/* GET users listing. */

router.post('/signup', api._signUp)
router.post('/signin', api._signIn)
router.get('/', api._getAllUser)
router.get('/:id', api._getUserById)
router.get('/role/:id_role', api._getAllUserByRole)
router.delete('/:id', checker.authUser, api._deleteUser)
router.put('/:id', checker.authUser, api._updateUser)

module.exports = router;
