const db = require('../../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
require('dotenv').config()

module.exports = {
    _signUp: (req, res) => {
        var hash = bcrypt.hashSync(req.body.password, salt);
        db.user
        .create({ 
            email: req.body.email, 
            username: req.body.username, 
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
        const Op = db.sequelize.Op
        db.user
        .findOne({
            where: {
                [Op.or]: [{email: req.body.email}, {username: req.body.username}]  // (a = 5 OR a = 6)                
            }
        })
        .then((response) => {
            bcrypt.compare(req.body.password, response.password, (err,resp) => {
                if (resp === true) {
                    const authorization = jwt.sign({id: response.id, full_name: response.full_name, id_role: response.id_role}, process.env.secretKey, {header: {algortihm: 'RS512'}})
                    res.status(200).send({authorization})
                } else {
                    res.status(500).send({msg: 'Wrong Password!'})
                }
            })
        })
        .catch((err) => {
            res.status(500).send({msg: 'User Not Found!'})
        })
    },
    _getAllUser: (req, res) => {
        db.user.sequelize.query(`SELECT users.id, 
                                        users.email, 
                                        users.username, 
                                        users.phone_number, 
                                        users.full_name, 
                                        users.point, 
                                        users.id_role, 
                                        roles.id, 
                                        roles.name as role
            FROM users 
            JOIN roles ON users.id_role = roles.id
        `, { type: db.user.sequelize.QueryTypes.SELECT })
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _getUserById: (req, res) => {
        db.user.sequelize.query(`SELECT users.id, 
                                        users.email, 
                                        users.username, 
                                        users.phone_number, 
                                        users.full_name, 
                                        users.point, 
                                        users.id_role, 
                                        roles.id, 
                                        roles.name as role
            FROM users 
            JOIN roles ON users.id_role = roles.id
            WHERE users.id = ${req.params.id}
        `, { type: db.user.sequelize.QueryTypes.SELECT })
        .then((response) => {
            res.status(200).send(response)
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
                username: req.body.username === null ? response.username : req.body.username,
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
        db.user.sequelize.query(`SELECT users.id, 
                users.email, 
                users.username, 
                users.phone_number, 
                users.full_name, 
                users.point, 
                users.id_role, 
                roles.id, 
                roles.name as role
        FROM users 
        JOIN roles ON users.id_role = roles.id
        WHERE users.id_role = ${req.params.id_role}
        `, { type: db.user.sequelize.QueryTypes.SELECT })
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