const Router = require("express")
const router = new Router()
const signInController = require("../controllers/signInController")

router.get("/", signInController.get)

module.exports = router
