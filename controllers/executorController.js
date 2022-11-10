const {Executor} = require('../models/models')
const {Role} = require('../models/models')
const { Op } = require('sequelize')

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

    async executorSkillSet(req, res) {
        const {executorId,roleId, qualification} = req.query
        const executor = await Executor.findOne({where: {id:executorId} })
        const role = await Role.findOne({where: {id:roleId} })
        await executor.addRole(role,{through: {execution:0, qualification}})
        return res.json(executor)
    }

    async executorDutySet(req, res) {
        const {executorId,roleId, execution} = req.query
        const executor = await Executor.findOne({where: {id:executorId} })
        const role = await Role.findOne({where: {id:roleId} })
        await executor.addRole(role,{through: {execution}})
        return res.json(executor)
    }

    async executorSkillGet(req, res) {
        const {id} = req.query
        const executorSkills = await Role.findAll({
            include: [{
              model: Executor,
              where: {id},
              through: {where: {qualification: {[Op.gt]:0}}},
            }],
          })
          return res.json(executorSkills)
    }


}

module.exports = new ExecutorController()