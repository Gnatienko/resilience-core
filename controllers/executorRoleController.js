const { Executor } = require("../models/models")
const { Role } = require("../models/models")
const { ExecutorRole } = require("../models/models")
const { Op, where } = require("sequelize")

//todo add assigned hours per week
class ExecutorRoleController {
  async setSkill(req, res) {
    const { executorId, roleId, qualification, hoursPerWeek } = req.query
    const executor = await Executor.findOne({ where: { id: executorId } })
    const role = await Role.findOne({ where: { id: roleId } })
    await executor.addRole(role, { through: { qualification, hoursPerWeek } })
    const executorRole = await ExecutorRole.findOne({
      where: { executorId, roleId },
    })

    return res.status(200).json(executorRole)
  }

  async setDuty(req, res) {
    const { executorId, roleId, isDuty } = req.query
    const executorRole = await ExecutorRole.findOne({
      where: { executorId, roleId },
    })
    await executorRole.update({ isDuty: isDuty })
    return res.json(executorRole)
  }

  async get(req, res) {
    const { executorId, roleId } = req.query
    let executorRole
    if (executorId && roleId) {
      executorRole = await ExecutorRole.findOne({
        where: { executorId, roleId, qualification: { [Op.gt]: 0 } },
      })
    } else if (executorId) {
      executorRole = await ExecutorRole.findAll({
        where: { executorId, qualification: { [Op.gt]: 0 } },
      })
    } else if (roleId) {
      executorRole = await ExecutorRole.findAll({
        where: { roleId, qualification: { [Op.gt]: 0 } },
      })
    } else {
      executorRole = await ExecutorRole.findAll({
        where: { qualification: { [Op.gt]: 0 } },
      })
    }
    return res.json(executorRole)
  }

  async delete(req, res) {
    const { executorId, roleId } = req.query
    const executorRole = await ExecutorRole.findOne({
      where: { executorId, roleId },
    })
    if (executorRole) {
      await executorRole.destroy()
    }
    return res.json(executorRole)
  }
}
module.exports = new ExecutorRoleController()
