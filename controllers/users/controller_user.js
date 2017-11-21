const db = require('../../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
    _signUp: (req, res) => {
        var hash = bcrypt.hashSync(req.body.password, salt);
        db.user
        .create({ 
            email: req.body.email, 
            password: hash,
            phone_number: req.body.phone_number,
            full_name: req.body.full_name,
            point: req.body.point,
            id_role: req.body.id_role,
        })
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _signIn: (req, res) => {
        db.user
        .findOne({
            where: {
                email: req.body.email
            }
        })
        .then((response) => {
            bcrypt.compare(req.body.password, response.password, (err,resp) => {
                if (resp === true) {
                    const token = jwt.sign({id: response.id, full_name: response.full_name}, '_secretKey')
                    res.status(200).send({token})
                } else {
                    res.status(500).send({msg: 'No Such User'})
                }
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _updateUser: (req, res) => {
        db.user.findOne({
            id: req.params.id
        })
        .then((response) => {
            db.user.update({
                email: req.body.email === null ? response.email : req.body.email,
                password: req.body.password === null ? response.password : req.body.password,
                phone_number: req.body.phone_number === null ? response.phone_number : req.body.phone_number,
                point: req.body.point === null ? response.point : req.body.point,
                full_name: req.body.full_name === null ? response.full_name : req.body.full_name,
                id_role: req.body.id_role === null ? response.id_role : req.body.id_role,
            }, {
                where: {
                    id: response.id
                }
            })
            .then((updateResponse) => {
                res.status(200).send(updateResponse)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _getAllUserByRole: (req, res) => {
        db.user.findOne({
            id_role: req.params.id_role
        })
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _deleteUser: (req, res) => {
        db.user.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.status(200).send('success')
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    }
}