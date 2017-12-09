var express = require('express');
var router = express.Router();
const api = require('../controllers/lapangan/controller_lapangan')
const auth = require('../controllers/auth/auth')

/* middleware */
const sa = (req, res, next) => { auth._authSA, next() }
const af = (req, res, next) => { auth._authAF, next() }
const ot = (req, res, next) => { auth._authOT, next() }
const at = (req, res, next) => { auth._authAT, next() }
const p = (req, res, next) => { auth._authPengguna, next() }

router.post('/', [sa, af], api._createLapangan);

router.put('/:id', [sa, af], api._ubahAllLapangan)
router.put('/admin/:id', [ot, at], api._ubahOwnLapangan)

router.get('/detail/:id', [sa, af], api._lihatAllDetailLapangan)
router.get('/', [sa, af], api._lihatAllListLapangan)
router.get('/admin/:id', [ot, at], api._lihatOwnListLapangan)

router.delete('/:id', [sa, af], api._hapusAllLapangan)
router.delete('/admin/:id', [ot, at], api._ubahOwnLapangan)


module.exports = router;
