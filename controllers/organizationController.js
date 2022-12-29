const { Role } = require("../models/models")

class OrganizationController {
  async get(req, res) {
    let roles
    const organizationStatistic = {}
    roles = await Role.findAll()
    const rolesQuantity = Object.keys(roles).length
    organizationStatistic.rolesQuantity = rolesQuantity

    return res.json(organizationStatistic)
  }
}

module.exports = new OrganizationController()
