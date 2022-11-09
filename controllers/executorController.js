const {Executor} = require('../models/models')

class ExecutorController {

      
    async create(req, res) {
        const {name} = req.query
        const executor = await Executor.create({name})
        return res.json(executor)
    }

    async get(req, res) {
        let {id} = req.query
        let executor
        if(id) { executor = await await Executor.findOne({where: {id} })}
        else {executor = await await Executor.findAll()}
        return res.json(executor)
        
    }

    async update(req, res) {
        const {name,id} = req.query
        const executor = await Executor.update({name},{where: {id} })
        return res.json(executor)
    }

}

module.exports = new ExecutorController()