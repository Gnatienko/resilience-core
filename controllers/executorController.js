const {Executor} = require('../models/models')
const {Role} = require('../models/models')

class ExecutorController {

      
    async create(req, res) {
        const {name} = req.query
        const executor = await Executor.create({name})
        return res.json(executor)
    }

    async get(req, res) {
        let {id} = req.query
        let executor
        if(id) { executor = await Executor.findOne({where: {id} })}
        else {executor = await Executor.findAll()}
        return res.json(executor)
        
    }

    async update(req, res) {
        const {name,id} = req.query
        const executor = await Executor.update({name},{where: {id} })
        return res.json(executor)
    }

    async executorRole(req, res) {
        const {executorId,roleId, execution, qualification} = req.query
        const executor = await Executor.findOne({where: {id:executorId} })
        const role = await Role.findOne({where: {id:roleId} })
        await executor.addRole(role,{through: {execution, qualification}})
        return res.json(1)
    }


}

module.exports = new ExecutorController()