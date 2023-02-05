const Router = require("express")
const router = new Router()
const executorController = require("../controllers/executorController")

router.post("/", executorController.create)
router.get("/", executorController.get)
router.put("/", executorController.update)
router.delete("/", executorController.delete)

router.get("/skill", executorController.getSkill)

router.get("/duty", executorController.getDuty)

module.exports = router
