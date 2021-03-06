const db = require('../../models/tempat_futsal')

module.exports = {
    _createTempatFutsal: (req, res) => {
        db.tempat_futsals.create({
            id_user: req.body.id_user,
            id_user_admin: req.body.id_user_admin,
            name: req.body.name,
            description: req.body.description,
            photo: req.body.photo,
            postal_code: req.body.postal_code,
            phone_number: req.body.phone_number,
            email: req.body.email,
            web: req.body.web,
            is_active: req.body.is_active,
            address: req.body.address,
            kecamatan: req.body.kecamatan,
            keluarahan: req.body.keluarahan,
            province: req.body.province,
            city: req.body.city,
        })
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _updateTempatFutsal: (req, res) => {
        db.tempat_futsal.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            db.tempat_futsal.update({
                id_user: req.body.id_user === null ? response.id_user : req.body.id_user,
                id_user_admin: req.body.id_user_admin === null ? response.id_user_admin : req.body.id_user_admin,
                name: req.body.name === null ? response.name : req.body.name,
                description: req.body.description === null ? response.description : req.body.description,
                photo: req.body.photo === null ? response.photo : req.body.photo,
                postal_code: req.body.postal_code === null ? response.postal_code : req.body.postal_code,
                phone_number: req.body.phone_number === null ? response.phone_number : req.body.phone_number,
                email: req.body.email === null ? response.email : req.body.email,
                web: req.body.web === null ? response.web : req.body.web,
                is_active: req.body.is_active === null ? response.is_active : req.body.is_active,
                address: req.body.address === null ? response.address : req.body.address,
                kecamatan: req.body.kecamatan === null ? response.kecamatan : req.body.kecamatan,
                keluarahan: req.body.keluarahan === null ? response.keluarahan : req.body.keluarahan,
                province: req.body.province === null ? response.province : req.body.province,
                city: req.body.city === null ? response.city : req.body.city,
            }, {
                where: {
                    id: response.id
                }
            })
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _updateOwnTempatFutsal: (req, res) => {
        db.tempat_futsal.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            db.tempat_futsal.update({
                id_user: req.body.id_user === null ? response.id_user : req.body.id_user,
                id_user_admin: req.body.id_user_admin === null ? response.id_user_admin : req.body.id_user_admin,
                name: req.body.name === null ? response.name : req.body.name,
                description: req.body.description === null ? response.description : req.body.description,
                photo: req.body.photo === null ? response.photo : req.body.photo,
                postal_code: req.body.postal_code === null ? response.postal_code : req.body.postal_code,
                phone_number: req.body.phone_number === null ? response.phone_number : req.body.phone_number,
                email: req.body.email === null ? response.email : req.body.email,
                web: req.body.web === null ? response.web : req.body.web,
                is_active: req.body.is_active === null ? response.is_active : req.body.is_active,
                address: req.body.address === null ? response.address : req.body.address,
                kecamatan: req.body.kecamatan === null ? response.kecamatan : req.body.kecamatan,
                keluarahan: req.body.keluarahan === null ? response.keluarahan : req.body.keluarahan,
                province: req.body.province === null ? response.province : req.body.province,
                city: req.body.city === null ? response.city : req.body.city,
            }, {
                where: {
                    id: response.id
                }
            })
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _lihatAllListTempatFutsal: (req, res) => {
        db.tempat_futsals.findAll({})
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _lihatAllDetailTempatFutsal: (req, res) => {
        db.tempat_futsals.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _lihatOwnDetailTempatFutsal: (req, res) => {
        db.tempat_futsals.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _hapusTempatFutsal: (req, res) => {
        db.tempat_futsals.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            db.tempat_futsals.destroy({
                where: {
                    id: response.id
                }
            })
            .then((resp) => {
                res.status(200).send({message: 'deleted!'})
            })
        })
    },
}