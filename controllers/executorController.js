const {Executor} = require('../models/models')

class ExecutorController {
    async create(req, res) {
        const {name} = req.body
        const executor = await Executor.create({name})
        return res.json(executor)
    }

    async getAll(req, res) {
        const executors = await Executor.findAll()
        return res.json(executors)
    }
}

module.exports = new ExecutorController()