const { Role } = require("../models/models")
const { ExecutorRole } = require("../models/models")

class RoleController {
  async create(req, res) {
    const { name, weight, requiredSkillHour } = req.query
    const role = await Role.create({ name, weight, requiredSkillHour })
    return res.json(role)
  }

  async get(req, res) {
    let { id } = req.query
    let role
    if (id) {
      role = await Role.findOne({ where: { id } })
      const roleExecutors = await ExecutorRole.findAll({
        where: { roleId: id, isDuty: "true" },
      })
      const roleExecutionInSkillHours = roleExecutors.reduce(
        //todo add h
        (accumulator, object) => {
          return accumulator + object.qualification
        },
        0
      )
      const relativeRoleExecution =
        roleExecutionInSkillHours / role.requiredSkillHours

      role.dataValues.roleExecutionInSkillHours = roleExecutionInSkillHours
      role.dataValues.relativeRoleExecution = relativeRoleExecution
    } else {
      role = await Role.findAll()
    }
    return res.json(role)
  }

  async update(req, res) {
    const { name, id, weight, requiredSkillHours } = req.query
    const role = await Role.update(
      { name, weight, requiredSkillHours: requiredSkillHours },
      { where: { id } }
    )
    return res.json(role)
  }
}

module.exports = new RoleController()
