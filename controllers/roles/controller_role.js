const db = requre('../../models')

module.exports = {
    _create: (req, res) => {
        db.role.create({
            name: req.body.name
        })
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _getAllRole: (req, res) => {
        db.role.findAll({}
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        }))
    },
    _getAllBySingleRole: (req, res) => {
        db.role.findAll({
            where: {
                name: req.params.name
            }
        })
        .then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    _updateRole: (req, res) => {
        db.role.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((response) => {
            db.role.update({
                name: req.body.name === null ? response.name : req.body.name
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
    _deleteRole: (req, res) => {
        db.role.destroy({
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