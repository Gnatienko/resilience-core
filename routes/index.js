const Router = require('express')
const router = new Router()
const executorRouter = require('./executorRouter')
const roleRouter = require('./roleRouter')
const gpsRouter = require('./gpsRouter')

router.use('/executor', executorRouter)
router.use('/role', roleRouter)
router.use('/gps', gpsRouter)

module.exports = router