const { Executor } = require("../models/models")
const { Role } = require("../models/models")

class ExecutorRoleController {
  async setSkill(req, res) {
    const { executorId, roleId, qualification } = req.query
    const executor = await Executor.findOne({ where: { id: executorId } })
    const role = await Role.findOne({ where: { id: roleId } })
    await executor.addRole(role, { through: { qualification } })

    return res.status(200).send("Ok")
  }
}
module.exports = new ExecutorRoleController()
