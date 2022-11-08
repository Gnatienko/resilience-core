const {Role} = require('../models/models')

class RoleController {
    async create(req, res) {
        const {name,weight} = req.body
        const role = await Role.create({name, weight})
        return res.json(role)
    }

    async getAll(req, res) {
        const role = await Role.findAll()
        return res.json(role)
    }

    async update(req, res) {
        const {name,id,weight} = req.body
        const role = await Role.update({name, weight},{where: {id} })
        return res.json(role)
    }
}

module.exports = new RoleController()