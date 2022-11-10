const Router = require('express')
const router = new Router()
const executorController = require('../controllers/executorController')

router.post('/', executorController.create)
router.get('/', executorController.get)
router.put('/', executorController.update)
router.put('/role', executorController.executorRole)


module.exports = router