const jwt = require('jsonwebtoken')
const db = require('../../models')
require('dotenv').config()

module.exports = {
    _authSA: (req, res, next) => {
        let token = req.headers.authorization
        if (token) {
            if (token.split(' ')[0] === 'Bearer') {
                jwt.verify(token.split(' ')[1], process.env.secretKey, { algorithm: ['RS256'] }, (err, decoded) => {
                    if (!!err) {
                        res.status(500).send(err)
                    } else {
                        db.user.findOne({
                            where: {
                                id: decoded.id
                            }
                        })
                        .then((response) => {
                            if (response.id_role === decoded.id_role && response.id === decoded.id) {
                                if (response.id_role === 1) {
                                    next()
                                } else {
                                    res.status(401).send({message: 'not_authed'})
                                }
                            }
                        })
                        .catch((err) => {
                            res.status(500).send({message: 'you are not authorized!'})
                        })
                    }
                })
            } else {
                res.status(500).send({error: "not_authed"})
            }
        } else {
            res.status(500).send({error: 'not_authed'})
        }
    },
    _authAF: (req, res, next) => {
        let token = req.headers.authorization
        if (token) {
            if (token.split(' ')[0] === 'Bearer') {
                jwt.verify(token.split(' ')[1], process.env.secretKey, { algorithm: ['RS256'] }, (err, decoded) => {
                    if (!!err) {
                        res.status(500).send(err)
                    } else {
                        db.user.findOne({
                            where: {
                                id: decoded.id
                            }
                        })
                        .then((response) => {
                            if (response.id_role === decoded.id_role && response.id === decoded.id) {
                                if (response.id_role === 2) {
                                    next()
                                } else {
                                    res.status(401).send({message: 'not_authed'})
                                }
                            }
                        })
                        .catch((err) => {
                            res.status(500).send({message: 'you are not authorized!'})
                        })
                    }
                })
            } else {
                res.status(500).send({error: "not_authed"})
            }
        } else {
            res.status(500).send({error: 'not_authed'})
        }
    },
    _authOT: (req, res, next) => {
        let token = req.headers.authorization
        if (token) {
            if (token.split(' ')[0] === 'Bearer') {
                jwt.verify(token.split(' ')[1], process.env.secretKey, { algorithm: ['RS256'] }, (err, decoded) => {
                    if (!!err) {
                        res.status(500).send(err)
                    } else {
                        db.user.findOne({
                            where: {
                                id: decoded.id
                            }
                        })
                        .then((response) => {
                            if (response.id_role === decoded.id_role && response.id === decoded.id) {
                                if (response.id_role === 3) {
                                    next()
                                } else {
                                    res.status(401).send({message: 'not_authed'})
                                }
                            }
                        })
                        .catch((err) => {
                            res.status(500).send({message: 'you are not authorized!'})
                        })
                    }
                })
            } else {
                res.status(500).send({error: "not_authed"})
            }
        } else {
            res.status(500).send({error: 'not_authed'})
        }
    },
    _authAT: (req, res, next) => {
        let token = req.headers.authorization
        if (token) {
            if (token.split(' ')[0] === 'Bearer') {
                jwt.verify(token.split(' ')[1], process.env.secretKey, { algorithm: ['RS256'] }, (err, decoded) => {
                    if (!!err) {
                        res.status(500).send(err)
                    } else {
                        db.user.findOne({
                            where: {
                                id: decoded.id
                            }
                        })
                        .then((response) => {
                            if (response.id_role === decoded.id_role && response.id === decoded.id) {
                                if (response.id_role === 4) {
                                    next()
                                } else {
                                    res.status(401).send({message: 'not_authed'})
                                }
                            }
                        })
                        .catch((err) => {
                            res.status(500).send({message: 'you are not authorized!'})
                        })
                    }
                })
            } else {
                res.status(500).send({error: "not_authed"})
            }
        } else {
            res.status(500).send({error: 'not_authed'})
        }
    },
    _authPengguna: (req, res, next) => {
        let token = req.headers.authorization
        if (token) {
            if (token.split(' ')[0] === 'Bearer') {
                jwt.verify(token.split(' ')[1], process.env.secretKey, { algorithm: ['RS256'] }, (err, decoded) => {
                    if (!!err) {
                        res.status(500).send(err)
                    } else {
                        db.user.findOne({
                            where: {
                                id: decoded.id
                            }
                        })
                        .then((response) => {
                            if (response.id_role === decoded.id_role && response.id === decoded.id) {
                                if (response.id_role === 5) {
                                    next()
                                } else {
                                    res.status(401).send({message: 'not_authed'})
                                }
                            }
                        })
                        .catch((err) => {
                            res.status(500).send({message: 'you are not authorized!'})
                        })
                    }
                })
            } else {
                res.status(500).send({error: "not_authed"})
            }
        } else {
            res.status(500).send({error: 'not_authed'})
        }
    },
}