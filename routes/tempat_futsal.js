var express = require('express');
var router = express.Router();
const api = require('../controllers/tempat_futsal/controller_tempat_futsal')
const auth = require('../controllers/auth/auth')
/* GET home page. */

router.post('/', auth._authSA, api._create);
router.get('/', api._getAll)
router.get('/:id', auth._authSA, api._getById)
router.delete('/:id', auth._authSA, api._deleteOne)
router.put('/:id', auth._authSA, api._updateTempatFutsal)

module.exports = router;
