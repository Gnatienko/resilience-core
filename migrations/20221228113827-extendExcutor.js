"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("executors", "salary", {
      type: Sequelize.REAL,
    })
  },
}
// sequelize migration:generate --name extendExcutor
