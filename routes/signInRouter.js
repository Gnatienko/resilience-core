const Router = require("express")
const router = new Router()
const signInController = require("../controllers/signInController")

router.post("/", signInController.post)

module.exports = router
