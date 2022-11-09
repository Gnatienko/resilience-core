const Router = require('express')
const router = new Router()
const roleController = require('../controllers/roleController')

router.post('/', roleController.create)
router.get('/', roleController.getAll)
router.put('/', roleController.update)

router.post('/create', roleController.createQuery) //temp


module.exports = router