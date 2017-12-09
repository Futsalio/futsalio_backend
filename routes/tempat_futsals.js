var express = require('express');
var router = express.Router();
const api = require('../controllers/tempat_futsal/controller_tempat_futsal')
const auth = require('../controllers/auth/auth')

/* middleware */
const sa = (req, res, next) => { auth._authSA, next() }
const af = (req, res, next) => { auth._authAF, next() }
const ot = (req, res, next) => { auth._authOT, next() }
const at = (req, res, next) => { auth._authAT, next() }
const p = (req, res, next) => { auth._authPengguna, next() }

router.post('/', [sa, af], api._createTempatFutsal);

router.get('/detail/:id', [sa, af], api._lihatAllDetailTempatFutsal)
router.get('/:id', [sa, af], api._lihatAllListTempatFutsal)

router.delete('/:id', [sa], api._hapusTempatFutsal)

router.put('/:id', [sa, af], api._updateTempatFutsal)
router.put('/admin/:id', [ot, at], api._updateOwnTempatFutsal)
router.get('/admin/:id', api._lihatOwnDetailTempatFutsal)

module.exports = router;
