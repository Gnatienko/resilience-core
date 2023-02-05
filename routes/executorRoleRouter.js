const Router = require("express")
const router = new Router()
const executorRoleController = require("../controllers/executorRoleController")

router.put("/skill", executorRoleController.setSkill)
router.put("/duty", executorRoleController.setDuty)
//router.put("/", executorRoleController.put)
router.get("/", executorRoleController.get)

module.exports = router
