const Router = require("express")
const router = new Router()
const executorRouter = require("./executorRouter")
const executorRoleRouter = require("./executorRoleRouter")
const roleRouter = require("./roleRouter")
const organizationRouter = require("./organizationRouter")
const signInRouter = require("./signInRouter")

router.use("/executor", executorRouter)
router.use("/executor-role", executorRoleRouter)
router.use("/role", roleRouter)
router.use("/organization", organizationRouter)
router.use("/sign-in", signInRouter)

module.exports = router
