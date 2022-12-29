const Router = require("express")
const router = new Router()
const executorRouter = require("./executorRouter")
const executorRoleRouter = require("./executorRoleRouter")
const roleRouter = require("./roleRouter")
const organizationRouter = require("./organizationRouter")

router.use("/executor", executorRouter)
router.use("/executor-role", executorRoleRouter)
router.use("/role", roleRouter)
router.use("/organization", organizationRouter)

module.exports = router
