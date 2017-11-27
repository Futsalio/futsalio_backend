var express = require('express');
var router = express.Router();
const api = require('../controllers/tempat_futsal/controller_tempat_futsal')
const checker = require('../controllers/auth/auth')
/* GET home page. */

router.post('/', checker.authUser, api._create);
router.get('/', api._getAll)
router.get('/:id', checker.authUser, api._getById)
router.delete('/:id', checker.authUser, api._deleteOne)
router.put('/:id', checker.authUser, api._updateTempatFutsal)

module.exports = router;
