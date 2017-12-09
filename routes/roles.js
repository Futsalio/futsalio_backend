var express = require('express');
var router = express.Router();
const api = require('../controllers/roles/controller_role')
const auth = require('../controllers/auth/auth')
/* GET home page. */

router.post('/', auth._authSA, api._create);
router.get('/', auth._authSA, api._getAllRole)
router.get('/:id_role', auth._authSA, api._getAllBySingleRole)
router.delete('/:id', auth._authSA, api._deleteRole)
router.put('/:id', auth._authSA, api._updateRole)

module.exports = router;
