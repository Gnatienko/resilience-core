"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("executor_roles", "hoursPerWeek", {
      type: Sequelize.REAL,
    })
  },
}
