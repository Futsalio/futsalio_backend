const db = require('../../models')

module.exports = {
    _createLapangan: (req, res) => {
        db.lapangans.create({
            id_tempat_futsal: req.body.id_tempat_futsal,
            photo: req.body.photo,
            name: req.body.name,
            type: req.body.type,
            material: req.body.material,
        })
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _ubahAllLapangan: (req, res) => {
        db.lapangans.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            db.lapangans.update({
                photo: req.body.photo === null ? response.photo : req.body.photo,
                name: req.body.name === null ? response.name : req.body.name,
                type: req.body.type === null ? response.type : req.body.type,
                material: req.body.material === null ? response.material : req.body.material,
            }, {
                where: {
                    id: response.id
                }
            })
            .then((response) => {
                res.status(200).send({message: 'updated'})
            })
            .catch((err) => {
                res.status(500).send(err)
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _ubahOwnLapangan: (req, res) => {
        db.lapangans.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            db.lapangans.update({
                photo: req.body.photo === null ? response.photo : req.body.photo,
                name: req.body.name === null ? response.name : req.body.name,
                type: req.body.type === null ? response.type : req.body.type,
                material: req.body.material === null ? response.material : req.body.material,
            }, {
                where: {
                    id: response.id
                }
            })
            .then((response) => {
                res.status(200).send({message: 'updated'})
            })
            .catch((err) => {
                res.status(500).send(err)
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _lihatAllListLapangan: (req, res) => {
        db.lapangans.findAll({})
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _lihatOwnListLapangan: (req, res) => {
        db.lapangans.findOne({
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
    _lihatAllDetailLapangan: (req, res) => {
        db.lapangans.findAll({})
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _lihatOwnDetailLapangan: (req, res) => {
        db.lapangans.findOne({
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
    _hapusAllLapangan: (req, res) => {
        db.lapangans.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            db.destroy({
                where: {
                    id: response.id
                }
            })
            .then((response) => {
                res.status(200).send({message: 'deleted'})
            })
            .catch((err) => {
                res.status(500).send(err)
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _hapusOwnLapangan: (req, res) => {
        db.lapangans.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            db.destroy({
                where: {
                    id: response.id
                }
            })
            .then((response) => {
                res.status(200).send({message: 'deleted'})
            })
            .catch((err) => {
                res.status(500).send(err)
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    }
}