const Router = require("express")
const router = new Router()
const executorRoleController = require("../controllers/executorRoleController")
const authMiddleware = require("../middleware/authMiddleware")

router.put("/skill", authMiddleware, executorRoleController.setSkill)
router.put("/duty", authMiddleware, executorRoleController.setDuty)
router.get("/", authMiddleware, executorRoleController.get)
router.delete("/", authMiddleware, executorRoleController.delete)

module.exports = router
