const express = require('express')
const router = express.Router()
const db = require('../models')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
    _signUp: function(req, res) {
        var hash = bcrypt.hashSync(req.body.password, salt);
        db.User
        .create({ 
            email: req.body.email, 
            password: hash,
            phone_number : req.body.phone_number,
            full_name : req.body.full_name,
            id_role : req.body.id_role, 
        })
        .then((respone) => {
            res.send(respone)
        })
        .catch((err) => {
            res.send(err)
        })
    },
    _signIn: function(req, res) {
        var email = req.body.email
        var checkPassword = req.body.password
        db.User
        .findOne({
            where: {
                email: email
            },
            attributes: [
                'id', 'password', 'phone_number', 'full_name', 'id_role'
            ]
        })
        .then((respone) => {
            bcrypt.compare(req.body.password, respone.password, (err,resp) => {
                if (resp === true) {
                    const token = jwt.sign({id: respone.id, full_name: respone.full_name}, '_secretKey')
                    res.send({token})
                } else {
                    res.send({msg: 'No Such User!'})
                }
            })
        })
        .catch((err) => {
            res.send(err)
        })
    }
}