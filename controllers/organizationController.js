const { Role } = require("../models/models")
const { handleSomeLogicInHelper } = require("./fileWithHelper")

class OrganizationController {
  async get(req, res) {
    let roles
    const organizationStatistic = {}
    roles = await Role.findAll()
    const rolesQuantity = Object.keys(roles).length
    organizationStatistic.rolesQuantity = rolesQuantity
    handleSomeLogicInHelper(1)
    return res.json(organizationStatistic)
  }
}

module.exports = new OrganizationController()
