const Router = require("express")
const router = new Router()
const roleController = require("../controllers/roleController")
const authMiddleware = require("../middleware/authMiddleware")

router.post("/", authMiddleware, roleController.create)
router.get("/", authMiddleware, roleController.get)
router.put("/", authMiddleware, roleController.update)
router.delete("/", authMiddleware, roleController.delete)

module.exports = router
