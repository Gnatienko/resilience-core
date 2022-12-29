const Router = require("express")
const router = new Router()
const executorRoleController = require("../controllers/executorRoleController")

router.put("/skill", executorRoleController.setSkill)

module.exports = router
