const { Role } = require("../models/models")

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
      role = await await Role.findOne({ where: { id } })
    } else {
      role = await await Role.findAll()
    }
    return res.json(role)
  }

  async update(req, res) {
    const { name, id, weight, required_skill_hours } = req.query
    const role = await Role.update(
      { name, weight, requiredSkillHours: required_skill_hours },
      { where: { id } }
    )
    return res.json(role)
  }
}

module.exports = new RoleController()
