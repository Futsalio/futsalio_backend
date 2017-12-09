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
    _updateAllLapangan: (req, res) => {
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
        })
    },
    _updateOwnLapangan: (req, res) => {
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
        })
    },
    _getAll: (req, res) => {
        db.lapangans.sequelize.query(`SELECT lapangans.*, 
                                             tempat_futsals.name, 
                                      FROM lapangans
                                      JOIN tempat_futsals 
                                      ON lapangans.id_tempat_futsal = tempat_futsals.id

        `, { type: db.user.sequelize.QueryTypes.SELECT })
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _getById: (req, res) => {
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
    }
}