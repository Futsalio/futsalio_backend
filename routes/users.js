var express = require('express');
var router = express.Router();
const api = require('../controllers/users/controller_user')
const auth = require('../controllers/auth/auth')
/* GET users listing. */

const sa = (req, res, next) => { auth._authSA, next() }
const af = (req, res, next) => { auth._authAF, next() }
const ot = (req, res, next) => { auth._authOT, next() }
const at = (req, res, next) => { auth._authAT, next() }
const p = (req, res, next) => { auth._authPengguna, next() }


router.post('/signup', api._signUp)
router.post('/signin', api._signIn)
router.get('/', [sa, af], api._getAllUser)
router.get('/:id', api._getUserById)
router.get('/role/:id_role', api._getAllUserByRole)
router.delete('/:id', auth._authSA, api._deleteUser)
router.put('/:id', auth._authSA, api._updateUser)

module.exports = router;
