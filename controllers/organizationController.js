const { Role } = require("../models/models")
const { ExecutorRole } = require("../models/models")

class OrganizationController {
  async get(req, res) {
    let roles
    let allDuties
    const organizationStatistic = {}
    roles = await Role.findAll()
    const rolesQuantity = Object.keys(roles).length
    organizationStatistic.rolesQuantity = rolesQuantity

    allDuties = await ExecutorRole.findAll({
      where: { isDuty: "true" },
    })
    const totalSkillHoursOfAllDuties = allDuties.reduce(
      //todo add h
      (accumulator, object) => {
        return accumulator + object.qualification
      },
      0
    )
    organizationStatistic.totalSkillHoursOfAllDuties =
      totalSkillHoursOfAllDuties

    return res.json(organizationStatistic)
  }
}

module.exports = new OrganizationController()
