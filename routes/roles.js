var express = require('express');
var router = express.Router();
const api = require('../controllers/roles/controller_role')
const checker = require('../controllers/auth/auth')
/* GET home page. */

router.post('/', checker.authUser, api._create);
router.get('/', api._getAllRole)
router.get('/:id_role', checker.authUser, api._getAllBySingleRole)
router.delete('/:id', checker.authUser, api._deleteRole)
router.put('/:id', checker.authUser, api._updateRole)

module.exports = router;
