const Router = require("express")
const router = new Router()
const organizationController = require("../controllers/organizationController")

router.get("/", organizationController.get)

module.exports = router
