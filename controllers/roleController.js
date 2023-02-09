const { Role } = require("../models/models")
const { ExecutorRole } = require("../models/models")

class RoleController {
  async create(req, res) {
    const { name, weight, requiredSkillHours } = req.query
    const role = await Role.create({ name, weight, requiredSkillHours })
    return res.json(role)
  }

  async get(req, res) {
    let { id } = req.query
    let role
    if (id) {
      role = await Role.findOne({ where: { id } })
    } else {
      role = await Role.findAll()
    }
    return res.json(role)
  }

  async update(req, res) {
    const { name, id, weight, requiredSkillHours } = req.query
    const role = await Role.update(
      { name, weight, requiredSkillHours },
      { where: { id } }
    )
    return res.json(role)
  }

  async delete(req, res) {
    const { id } = req.query
    const role = await Role.findOne({ where: { id } })
    if (role) {
      await role.destroy()
    }
    return res.json(role)
  }
}

module.exports = new RoleController()
