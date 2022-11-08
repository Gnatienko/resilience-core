const Router = require('express')
const router = new Router()
const executorRouter = require('./executorRouter')


router.use('/executor', executorRouter)

module.exports = router