const {Executor} = require('../models/models')
const {Role} = require('../models/models')
const {ExecutorRole} = require('../models/models')

const { Op, where } = require('sequelize')

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

    async setSkill(req, res) {
        const {executorId,roleId,qualification} = req.query
        const executor = await Executor.findOne({where: {id:executorId} })
        const role = await Role.findOne({where: {id:roleId} })
        await executor.addRole(role,{through: {execution:0, qualification}})
        return res.json(executor)
    }

    async getSkills(req, res) { //todo change via ExecutorRole
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

    async setDuty(req, res) { 
        const {executorId,roleId} = req.query
        
        const executorRole = await ExecutorRole.findOne({where:{executorId,roleId}})
        const qualification = executorRole.qualification
        await executorRole.update({execution:qualification})
        return res.json(executorRole)
    }

    async getDuties(req, res) {
        const {executorId, roleId} = req.query
        let executorDuties
        if(roleId) { executorDuties = await ExecutorRole.findOne({where: {executorId, roleId, execution:{[Op.gt]:0}} })}
        else {executorDuties = await ExecutorRole.findAll({ where:{executorId, execution:{[Op.gt]:0}}})}
        return res.json(executorDuties)
    }

}

module.exports = new ExecutorController()