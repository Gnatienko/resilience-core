const Router = require("express")
const router = new Router()
const executorRouter = require("./executorRouter")
const roleRouter = require("./roleRouter")
const organizationRouter = require("./organizationRouter")

router.use("/executor", executorRouter)
router.use("/role", roleRouter)
router.use("/organization", organizationRouter)

module.exports = router
