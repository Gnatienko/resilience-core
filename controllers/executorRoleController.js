const { Executor } = require("../models/models")
const { Role } = require("../models/models")
const { ExecutorRole } = require("../models/models")

class ExecutorRoleController {
  async setSkill(req, res) {
    const { executorId, roleId, qualification } = req.query
    const executor = await Executor.findOne({ where: { id: executorId } })
    const role = await Role.findOne({ where: { id: roleId } })
    await executor.addRole(role, { through: { qualification } })

    return res.status(200).send("Ok")
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
        where: { executorId, roleId },
      })
    } else {
      executorRole = await ExecutorRole.findAll()
    }
    return res.json(executorRole)
  }
}
module.exports = new ExecutorRoleController()
