const Router = require("express")
const router = new Router()
const executorRoleController = require("../controllers/executorRoleController")

router.put("/skill", executorRoleController.setSkill)
router.put("/duty", executorRoleController.setDuty)
router.get("/", executorRoleController.get)
router.delete("/", executorRoleController.delete)

module.exports = router
