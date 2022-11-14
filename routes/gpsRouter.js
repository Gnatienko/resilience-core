const Router = require('express')
const router = new Router()
const gpsController = require('../controllers/gpsController')

router.post('/', gpsController.create)
router.get('/', gpsController.upDelGet)

module.exports = router