const Router = require('express')
const router = new Router()
const executorRouter = require('./executorRouter')
const roleRouter = require('./roleRouter')


router.use('/executor', executorRouter)
router.use('/role', roleRouter)

module.exports = router