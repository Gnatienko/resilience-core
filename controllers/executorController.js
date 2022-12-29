const { Executor } = require("../models/models")
const { ExecutorRole } = require("../models/models")

const { Op, where } = require("sequelize")

class ExecutorController {
  async create(req, res) {
    const { name, salary } = req.query
    const executor = await Executor.create({ name, salary })
    return res.json(executor)
  }

  async get(req, res) {
    let { id } = req.query
    let executor
    if (id) {
      executor = await Executor.findOne({ where: { id } })
    } else {
      executor = await Executor.findAll()
    }
    return res.json(executor)
  }

  async update(req, res) {
    const { name, id, salary } = req.query
    const executor = await Executor.update({ name, salary }, { where: { id } })
    return res.json(executor)
  }

  async getSkill(req, res) {
    const { executorId, roleId } = req.query
    let executorSkills
    if (roleId) {
      executorSkills = await ExecutorRole.findOne({
        where: { executorId, roleId, qualification: { [Op.gt]: 0 } },
      })
    } else {
      executorSkills = await ExecutorRole.findAll({
        where: { executorId, qualification: { [Op.gt]: 0 } },
      })
    }
    return res.json(executorSkills)
  }

  async setDuty(req, res) {
    const { executorId, roleId, isDuty } = req.query
    const executorRole = await ExecutorRole.findOne({
      where: { executorId, roleId },
    })
    await executorRole.update({ isDuty: isDuty })
    return res.json(executorRole)
  }

  async getDuty(req, res) {
    const { executorId, roleId } = req.query
    let executorDuties
    if (roleId) {
      executorDuties = await ExecutorRole.findOne({
        where: { executorId, roleId, isDuty: "true" },
      })
    } else {
      executorDuties = await ExecutorRole.findAll({
        where: { executorId, isDuty: "true" },
      })
    }
    return res.json(executorDuties)
  }
}

module.exports = new ExecutorController()
