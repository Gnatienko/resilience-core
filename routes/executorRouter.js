const Router = require("express")
const router = new Router()
const executorController = require("../controllers/executorController")
const authMiddleware = require("../middleware/authMiddleware")

router.post("/", authMiddleware, executorController.create)
router.get("/", authMiddleware, executorController.get)
router.put("/", authMiddleware, executorController.update)
router.delete("/", authMiddleware, executorController.delete)

router.get("/skill", authMiddleware, executorController.getSkill)

router.get("/duty", authMiddleware, executorController.getDuty)

module.exports = router
