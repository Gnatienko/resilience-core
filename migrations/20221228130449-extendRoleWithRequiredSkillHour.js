"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("roles", "requiredSkillHours", {
      type: Sequelize.REAL,
    })
  },
}
// sequelize migration:generate --name extendExcutor
//sequelize db:migrate
