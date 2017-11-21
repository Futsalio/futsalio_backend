const jwt = require('jsonwebtoken')
const db = require('../../models')

module.exports = {
    authUser: function(req, res, next) {
        let token = req.headers.token
        if (!!token) {
            jwt.verify(token, '_secretKey', (err, decoded) => {
                if (!!err) {
                    res.status(500).send(err)
                } else {
                    db.users.findOne({
                        where: {
                            id: decoded.id
                        }
                    })
                    .then((response) => {
                        next()
                    })
                    .catch((err) => {
                        res.status(500).send(err)
                    })
                }
            })
        } else {
            res.status(500).send('login please!')
        }
    }
}