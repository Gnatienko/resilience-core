const Router = require("express")
const router = new Router()
const roleController = require("../controllers/roleController")

router.post("/", roleController.create)
router.get("/", roleController.get)
router.put("/", roleController.update)
router.delete("/", roleController.delete)

module.exports = router
