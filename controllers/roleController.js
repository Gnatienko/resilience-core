const {Role} = require('../models/models')

class RoleController {
    async create(req, res) {
        const {name,weight} = req.query
        const role = await Role.create({name, weight})
        return res.json(role)
    }

    async get(req, res) {
        let {id} = req.query
        let role
        if(id) { role = await await Role.findOne({where: {id} })}
        else {role = await await Role.findAll()}
        return res.json(role)
        
    }

    async update(req, res) {
        const {name,id,weight} = req.query
        const role = await Role.update({name, weight},{where: {id} })
        return res.json(role)
    }

}

module.exports = new RoleController()