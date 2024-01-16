const Router = require("express")
const router = new Router()
const roleController = require("../controllers/roleController")
const authMiddleware = require("../middleware/authMiddleware")

router.post("/", roleController.create)
router.get("/", authMiddleware, roleController.get)
router.put("/", roleController.update)
router.delete("/", roleController.delete)

module.exports = router
