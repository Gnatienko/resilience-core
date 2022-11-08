const Router = require('express')
const router = new Router()
const executorController = require('../controllers/executorController')

router.post('/', executorController.create)
router.get('/', executorController.getAll)

module.exports = router